import React from 'react'

export class Footer extends React.Component {
  render () {
    const currentYear = new Date().getFullYear()

    return (
      <div className='Footer'>
        © {currentYear}{' '}
        <a href='http://reecelangerock.com' rel='noopener noreferrer' target='_blank'>
          Reece Langerock
        </a>
      </div>
    )
  }
}
export default Footer
