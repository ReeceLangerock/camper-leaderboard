import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, find, render, simulate } from 'enzyme'

import Footer from './../components/Footer'

describe('Footer', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Footer />, div)
  })

  let component
  beforeEach(() => {
    const props = {

    }
    component = mount(<Footer {...props} />)
  })

  it('has the correct class', () => {
    expect(component.hasClass('Footer')).toEqual(true)
  })
})
