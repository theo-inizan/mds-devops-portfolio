import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders main element', () => {
    const { container } = render(<Home />)
    expect(container.querySelector('main')).toBeInTheDocument()
  })

  it('renders all sections', () => {
     render(<Home />)
     // Check for elements that appear in sections
     expect(screen.getByText(/Disponible pour de nouvelles opportunités/i)).toBeInTheDocument() // Hero
     // Python appears multiple times (TechStack, Experience, Projects), so we check length
     expect(screen.getAllByText('Python').length).toBeGreaterThan(0)
  })
})
