# Guide de Configuration du Monitoring : Grafana Cloud + Next.js

Ce document détaille l'architecture et la procédure pour activer le monitoring Full-Stack (Frontend & Backend) sur l'application Portfolio en utilisant Grafana Cloud.

## 1. Architecture d'Observabilité

Nous utilisons deux technologies complémentaires qui envoient leurs données vers Grafana Cloud :

*   **Frontend (Grafana Faro)** :
    *   S'exécute dans le **navigateur** de l'utilisateur.
    *   Collecte : Web Vitals (LCP, CLS...), Erreurs JS, Logs console, Requêtes réseau (fetch).
    *   Technologie : `@grafana/faro-web-sdk`.
    *   Fichier clé : `components/FaroInitializer.tsx`.

*   **Backend (OpenTelemetry Node.js)** :
    *   S'exécute côté **serveur** (Next.js Server / API).
    *   Collecte : Temps de réponse serveur, requêtes BDD, erreurs 500.
    *   Technologie : `@opentelemetry/sdk-node` (Auto-instrumentation).
    *   Fichiers clés : `instrumentation.ts`, `instrumentation.node.ts`.

## 2. Prérequis Grafana Cloud

Pour que l'application envoie des données, vous devez créer une **Stack** sur Grafana Cloud et récupérer les identifiants pour OTLP et Faro.

### A. Récupérer les identifiants Frontend (Faro)
1.  Connectez-vous à votre portail Grafana Cloud.
2.  Dans le menu de gauche, allez dans **"Frontend"** (ou "Frontend Observability").
3.  Cliquez sur **"Create App"** (ou "Add Web App").
4.  Nommez l'application : `portfolio`.
5.  Vous obtiendrez un code de configuration. Repérez les valeurs suivantes :
    *   `url` (Collector URL)
    *   `app.id` (Application ID)

### B. Récupérer les identifiants Backend (OpenTelemetry)
1.  Dans le portail Grafana Cloud, allez sur la page d'accueil de votre Stack.
2.  Cherchez la brique **"OpenTelemetry"** et cliquez sur **"Configure"**.
3.  Vous aurez besoin de :
    *   **OTLP Endpoint** : (ex: `https://otlp-gateway-prod-us-east-0.grafana.net/otlp`)
    *   **Instance ID** : (ex: `123456`)
    *   **Access Token** : Vous devrez générer un token (Access Policy) avec les droits d'écriture (`metrics:write`, `traces:write`, `logs:write`).

## 3. Configuration des Variables d'Environnement

Un fichier `.env.template` a été créé à la racine. Vous devez créer un fichier `.env.local` (ou mettre à jour votre `.env`) avec vos vraies valeurs.

```bash
# === FRONTEND (Faro) ===
NEXT_PUBLIC_FARO_COLLECTOR_URL="https://faro-collector-xxxx.grafana.net/collect/xxxx"
NEXT_PUBLIC_FARO_APP_ID="votre-app-id-faro"

# Infos de l'app (utiles pour filtrer dans Grafana)
NEXT_PUBLIC_APP_NAME="portfolio"
NEXT_PUBLIC_APP_VERSION="1.0.0"
NEXT_PUBLIC_APP_ENV="dev" # ou "production"

# === BACKEND (OpenTelemetry) ===
OTEL_SERVICE_NAME="portfolio"
OTEL_EXPORTER_OTLP_ENDPOINT="https://otlp-gateway-prod-us-east-0.grafana.net/otlp"
OTEL_EXPORTER_OTLP_PROTOCOL="http/protobuf"

# AUTHENTIFICATION OTLP :
# IMPORTANT : La valeur doit être "Basic " suivi de l'encodage Base64 de "InstanceID:AccessToken".
# Exemple en ligne de commande linux/mac : echo -n "123456:glc_token_..." | base64
# Exemple de résultat : OTEL_EXPORTER_OTLP_HEADERS="Authorization=Basic MTIzNDU2OmdsY190b2tlbl8uLi4="
OTEL_EXPORTER_OTLP_HEADERS="Authorization=Basic <VOTRE_TOKEN_BASE64>"
```

> **Note sur le Base64** : Grafana Cloud utilise l'authentification `Basic`. Vous ne pouvez pas mettre juste le token. Vous devez concaténer `InstanceID` + `:` + `Token`, et ensuite encoder cette chaîne en Base64.

## 4. Fonctionnement de l'Implémentation

### Frontend (`app/layout.tsx` & `FaroInitializer.tsx`)
Nous avons injecté le composant `<FaroInitializer />` dans le `layout.tsx`. Ce composant :
1.  Vérifie que nous sommes côté client (`typeof window !== 'undefined'`).
2.  Vérifie que l'URL du collecteur est présente.
3.  Initialise Faro avec :
    *   `getWebInstrumentations()` : Auto-capture des erreurs, logs, web vitals.
    *   `TracingInstrumentation()` : Ajoute les headers `traceparent` aux requêtes `fetch` sortantes. C'est ce qui permet de lier le clic bouton (Frontend) à la requête API (Backend) dans une seule trace.

### Backend (`instrumentation.ts`)
Next.js supporte nativement, en expérimental ou stable selon la version, le fichier `instrumentation.ts`.
Il est configuré pour charger `instrumentation.node.ts` uniquement dans l'environnement Node.js (serveur).
Celui-ci démarre le SDK OpenTelemetry qui intercepte automatiquement les requêtes HTTP et les exports vers Grafana.

## 5. Validation et Utilisation

1.  Lancez l'application : `npm run dev`.
2.  Naviguez sur plusieurs pages du Portfolio pour générer du trafic.
3.  Ouvrez **Grafana** (Explore).
4.  Pour voir les traces :
    *   Source de données : **Tempo** (ou Traces).
    *   Query type : `Search`.
    *   Service Name : `portfolio`.
5.  Pour voir les métriques Frontend :
    *   Allez dans le dashboard "Frontend" pré-installé par Grafana Faro si disponible, ou cherchez les logs dans **Loki** avec `{app="portfolio"}`.

## 6. Ressources Utiles

*   [Grafana Faro Web SDK Docs](https://grafana.com/docs/grafana-cloud/monitor-applications/faro-web-sdk/)
*   [OpenTelemetry Javascript Docs](https://opentelemetry.io/docs/languages/js/)
*   [Next.js Instrumentation Hook](https://nextjs.org/docs/app/building-your-application/optimizing/instrumentation)
