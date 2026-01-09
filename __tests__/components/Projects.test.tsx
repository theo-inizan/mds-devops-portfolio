import { render, screen } from '@testing-library/react'
import Projects from '@/components/sections/Projects'

describe('Projects', () => {
  it('renders project titles', () => {
    render(<Projects />)
    expect(screen.getByText('Système de Scraping E-commerce')).toBeInTheDocument()
    expect(screen.getByText('Application Mobile Étudiante')).toBeInTheDocument()
  })
})
