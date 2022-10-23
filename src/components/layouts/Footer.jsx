import React from 'react'

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer p-10 text-primary-content bg-gray-700 footer-center'>
      <p>
        Copyright &copy; { footerYear} All rigts reserved
      </p>
    </footer>
  )
}

export default Footer
