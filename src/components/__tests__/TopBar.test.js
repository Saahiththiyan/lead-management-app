import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import TopBar from '../TopBar'

afterEach(() => {
  cleanup()
})

test('should render topbar component ', () => {
  render(<TopBar />)
  const topBarElement = screen.getByTestId('topbar')
  expect(topBarElement).toBeInTheDocument()
})


test('Matches snapshot', () => {
  const tree = renderer.create(<TopBar />).toJSON()
  expect(tree).toMatchSnapshot()
})
