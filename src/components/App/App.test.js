import React from 'react'
import App from './App'
import {shallow} from 'enzyme'

describe('<App /> component', () => {
  it('Render App component without blowing up!', () => {
    shallow(<App />)
  })

  it('Should render props when passed ok', () => {
    const name = 'ray'
    const wrapper = shallow(<App name={name} />)
    expect(wrapper.contains(<h1>{name}</h1>)).toEqual(true)
  })

  it('Should have a property of loading in state equal to false initially', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.state('loading')).toEqual(false)
  })

  it('changeLoading function on execution should update a property in the state', () => {
    const wrapper = shallow(<App />)
    wrapper.instance().changeLoading(true)
    expect(wrapper.state('loading')).toEqual(true)
  })
})
