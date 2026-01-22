"use client";

import { useEffect, useRef } from 'react';
import { initializeFaro, getWebInstrumentations } from '@grafana/faro-web-sdk';
import { TracingInstrumentation } from '@grafana/faro-web-tracing';

export function FaroInitializer() {
  const isInitialized = useRef(false);

  useEffect(() => {
    // Only run on client side and prevent double initialization
    if (typeof window !== 'undefined' && !isInitialized.current && process.env.NEXT_PUBLIC_FARO_COLLECTOR_URL) {
      initializeFaro({
        url: process.env.NEXT_PUBLIC_FARO_COLLECTOR_URL,
        app: {
          name: process.env.NEXT_PUBLIC_APP_NAME || 'portfolio',
          version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
          environment: process.env.NEXT_PUBLIC_APP_ENV || 'production',
        },
        instrumentations: [
          ...getWebInstrumentations(),
          new TracingInstrumentation(),
        ],
      });
      
      isInitialized.current = true;
    }
  }, []);

  return null;
}
