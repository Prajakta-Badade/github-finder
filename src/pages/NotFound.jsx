import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="hero flex flex-col start ">
        <div className="text-center hero-content ">
            <div className="flex w-full">
                <div className="grid h-20 flex-grow card text-6xl font-bold text-primary">404</div>
                <div className="divider divider-horizontal"></div>
                <div className="grid h-20 flex-grow card text-6xl font-bold text-primary-content">Page Not Found</div>
            </div>
        </div>
        <p className='text-neutral-content'>Sorry, we could'nt find the page you are looking for.</p>
        <div className='py-3'>
            <Link className='btn btn-primary mr-3' to="/">Go Back Home</Link>
            <Link className='btn btn-primary-content' to='/'>Contact Support</Link>
        </div>
    </div>
  )
}

export default NotFound
