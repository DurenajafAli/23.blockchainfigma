import React, { useState } from 'react'
import Navbar from './Homepage/Navbar'
import { getData } from './Action'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const [signInData, setSignInData] = useState({
        email: "",
        password:""
    })
    const handleChange = (e) => {
        setSignInData({...signInData,[e.target.name]:e.target.value})
    }
    const handleLogin = () => {
        const findUser = data.find((ele) => ele.Email === signInData.email && ele.Password === signInData.password)
        if (findUser) {
            localStorage.setItem('user', JSON.stringify(findUser))
            navigate('/BasicInfo')
            console.log(findUser,'test my find user');
        } else {
            alert("User not matched")
        }
        
    }
    const { data } = useSelector((state) => state.getDataReducer)
    // console.log(data,'check my data');
    React.useEffect(() => {
        dispatch(getData())
        // console.log(getData,'test');
    }, [])
    

    return (
        <>
            <div>
                <Navbar/>
                <div className='flex flex-col'>
                    <h1 className='text-5xl text-[#635EA3] px-[100px] pt-[40px]'>
                        Sign In
                    </h1>
                    <input onChange={handleChange} name='email' value={signInData.email} className='border ml-[100px] px-3 font-semibold text-lg mt-5 w-[80%] rounded-[10px] h-10' type="email" placeholder='Email Address' />
                    <input onChange={handleChange} name='password' value={signInData.password} className='border ml-[100px] px-3 font-semibold text-lg mt-5 w-[80%] rounded-[10px] h-10' type="password" placeholder='Password' />

                    <button onClick={handleLogin} className='bg-[#635EA3] text-white w-24 h-10 ml-[100px] mt-5'>
                        Login
                    </button>
                    </div>

            </div>
        </>
    )
}

export default Login
