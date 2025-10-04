import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <nav className='navbar container pt-3 pb-3 justify-content-between align-items-center'>
            <Link className="navbar-brand" to="/">Stock Prediction Portal</Link>

            <div>
                <Button class="btn-outline-info" text="Login"  url='/login'/>
                &nbsp;
                <Button class="btn-info" text="Register" url='/register' />
            </div>
        </nav>
    </>
  )
}

export default Header