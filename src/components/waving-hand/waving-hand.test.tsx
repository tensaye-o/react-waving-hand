import * as renderer from 'react-test-renderer'

import { WavingHand } from './waving-hand'

describe('props testing', () => {
  it('turn on motion', () => {
    expect.hasAssertions()
    const tree = renderer
      .create(<WavingHand loop={2} motion={true} size='2.5rem' type={2} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('turn off motion', () => {
    expect.hasAssertions()
    const tree = renderer.create(<WavingHand />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
