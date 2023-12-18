import React from 'react'
import Signup from './Components/Homepage/Signup'
import {Routes,Route} from "react-router-dom";
import BasicInfo from './Components/Basicinfopage/BasicInfo';
import Login from './Components/Login';
import ContactInfo from './Components/ContactInfoPage/ContactInfo';
import ExperienceInfo from './Components/ExperiencePage/ExperienceInfo';
import CompleteProfile from './Components/CompleteProfile/CompleteProfile';
import ReviewPage from './Components/ReviewPage/ReviewPage';

function App() {
    return (
        <>
            <div>
                <Routes>
                    <Route path='/' element={<Signup />} />
                    <Route path='/BasicInfo' element={<BasicInfo />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/ContactInfo' element={<ContactInfo />} />
                    <Route path='/ExperienceInfo' element={<ExperienceInfo />} />
                    <Route path='/CompleteProfile' element={<CompleteProfile />} />
                    <Route path='/ReviewPage' element={<ReviewPage/>} />



                </Routes>
                
            </div>
        </>
    )
}

export default App
