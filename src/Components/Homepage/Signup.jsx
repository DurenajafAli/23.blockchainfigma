import React from 'react'
import Navbar from './Navbar'
import Sec1 from './Sec1'
import Userprofile from './Userprofile'
import Jobseeker from './Jobseeker'
import Employer from './Employer'
import Explore from './Explore'
import Talk from './Talk'
import Footer from './Footer'

function Signup() {
    return (
        <>
            <div>
                <Navbar />
                <Sec1 />
                <Userprofile/>
                <Jobseeker />
                <Employer />
                <Explore />
                <Talk />
                <Footer/>
            </div>
        </>
    )
}

export default Signup
