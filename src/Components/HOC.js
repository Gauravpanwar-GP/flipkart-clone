import React from 'react'
import Footer from './Footer'
import Header from './Header'

const HF = (Comp) => {
    const newcomp = () => {
        return (
        <>
            <Header />
            <Comp />
            <Footer />
        </>
        )
    }
    return newcomp
}

export default HF