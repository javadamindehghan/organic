import React from 'react'
import { Outlet  } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

interface Props {}

function Layout(props: Props) {
    const {} = props

    return (
        <>
       <Header/>
       <h1>hello</h1>
       <Outlet/>
       <Footer/>
       </>
    )
}

export default Layout
