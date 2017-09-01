import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount, find, render, simulate } from 'enzyme'

import Header from './../components/Header'

describe('Header', () => {
  let component
  beforeEach(() => {
    const props = {

    }
    component = mount(<Header {...props} />)
  })

  it('has the correct class', () => {
    expect(component.hasClass('Header')).toEqual(true)
  })
})
