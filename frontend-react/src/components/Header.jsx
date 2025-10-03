import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 justify-content-between align-items-center'>
            <a href="#" className="navbar-brand" >Stock Prediction Portal</a>

            <div>
                <Button class="btn-outline-info" text="Login" />
                &nbsp;
                <Button class="btn-info" text="Register" />
            </div>
        </nav>
    </>
  )
}

export default Header