import { render, screen } from '@testing-library/react'
import Experience from '@/components/sections/Experience'

describe('Experience', () => {
  it('renders experience details', () => {
    render(<Experience />)
    expect(screen.getByText('Développeur Full Stack')).toBeInTheDocument()
    expect(screen.getByText('Déco & Compagnie')).toBeInTheDocument()
  })
})
