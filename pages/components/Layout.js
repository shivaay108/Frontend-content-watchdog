import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0  -mt-64 ${className}`}>
      {children}
    </div>
  )
}

export default Layout
