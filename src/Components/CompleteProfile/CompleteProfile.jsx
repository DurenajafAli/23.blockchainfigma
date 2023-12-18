import React from 'react'
import BasicNav from '../Basicinfopage/BasicNav'
import ComRecProfile from './ComRecProfile'
import Footer from '../Homepage/Footer'

function CompleteProfile() {
    return (
        <>
            <div>
                <BasicNav />
                <ComRecProfile />
                <Footer/>
            </div>
        </>
    )
}

export default CompleteProfile
