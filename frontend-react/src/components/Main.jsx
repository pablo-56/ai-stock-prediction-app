import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Button from './Button'

const Main = () => {
  return (
    <>
        <div className='container mt-5'>
            <div className='p-5 text-center bg-light-dark rounded'>
                <h1>Stock Prediction App</h1>
                <p className='lead'>Welcome to the Stock Prediction App. This application provides insights and predictions on stock market trends using advanced machine learning algorithms.</p>
                <p className='lead'>Explore various features including real-time stock data, historical analysis, and predictive modeling to make informed investment decisions.</p>
                <p className='lead'>Stay ahead in the market with our user-friendly interface and comprehensive tools designed for both novice and experienced investors.</p>
                <p className='lead'>Join us in navigating the complexities of the stock market with confidence and precision.</p>
                <Button class="btn-info" text="Login"  url='/login'/>
            </div>
        </div>
    </>
  )
}

export default Main