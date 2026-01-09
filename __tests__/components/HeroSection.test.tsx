import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/sections/HeroSection'

describe('HeroSection', () => {
  it('renders the availability badge', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Disponible pour de nouvelles opportunités/i)).toBeInTheDocument()
  })
})
