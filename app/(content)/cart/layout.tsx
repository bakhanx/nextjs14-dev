import React from 'react'

const Layout = ({
    children,
    modal,
  }: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode
  }>) => {
  return (
    <div>
      {children} {modal}
    </div>
  )
}

export default Layout
