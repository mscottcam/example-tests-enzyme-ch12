import React from 'react'
import Dashboard from './Dashboard'
import { shallow } from 'enzyme'

describe('<Dashboard /> component', () => {
  it('Smoke test', () => {
    shallow(<Dashboard />)
  })

  it('Render props', () => {
    const age = 50
    const wrapper = shallow(<Dashboard age={age} />)
    expect(wrapper.contains(<p>{age}</p>)).toEqual(true)
  })
})
