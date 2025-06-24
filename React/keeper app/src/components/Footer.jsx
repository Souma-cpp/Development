import React from 'react'

var currentYear = new Date().getFullYear() ;

export default function Footer() {
  return (
    <footer>
        <p>Copyright © {currentYear}</p>
    </footer>
  )
}
