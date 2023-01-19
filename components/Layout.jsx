import React from 'react'
import { Navbar } from './';
import MainNav from './nav/MainNav';

const Layout = ({children}) => {
    return (
        <div>
            {/* <Navbar /> */}
            {children}
            {/* Footer */}
        </div>
    )
}

export default Layout
