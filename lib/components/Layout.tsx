import React, { PropsWithChildren, ReactElement } from 'react'

const Layout = ({ children }: PropsWithChildren<unknown>): ReactElement  => {
  return (
    <div className='layout'>
        {children}
    </div>
  )
}

export default Layout