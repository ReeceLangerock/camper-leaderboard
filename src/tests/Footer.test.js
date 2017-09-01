import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, find, render, simulate } from 'enzyme'

import Footer from './../components/Footer'

describe('Footer', () => {
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
