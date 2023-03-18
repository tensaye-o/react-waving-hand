import * as renderer from 'react-test-renderer'

import { WavingHand } from './waving-hand'

it('turn on motion', () => {
  const tree = renderer
    .create(<WavingHand loop={2} motion={true} size='2.5rem' type={2} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('turn off motion', () => {
  const tree = renderer.create(<WavingHand />).toJSON()
  expect(tree).toMatchSnapshot()
})
