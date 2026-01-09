import { render, screen } from '@testing-library/react'
import TechStack from '@/components/sections/TechStack'

describe('TechStack', () => {
  it('renders technology names', () => {
    render(<TechStack />)
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Next.js')).toBeInTheDocument()
  })
})
