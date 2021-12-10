import React from 'react'

export default function Footer() {
 return (
  <div className="footer" style={{position: 'fixed', width: '100%'}}>
   <div className="copyright">
    <p>Copyright © Designed &amp; Developed by <a href="http://bloomhubng.com/" target="_blank">Bloomhub</a> {new Date().getFullYear()}</p>
   </div>
  </div>
 )
}
