import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usersData } from '../Action'
import { useDispatch } from 'react-redux'

function Sec1() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleRegister = () => {
        dispatch(usersData(inputs))
        // console.log(inputs,'test my inputs');
    }
    const handleLogin = () => {
        navigate('/Login')
    }
    const initialState = {
        Name: '',
        Email: '',
        Phoneno: '',
        Password:''
    }
    const [inputs, setInputs] = useState(initialState)
    const handleSignupChange = (e) => {
        setInputs({...inputs,[e.target.name]:e.target.value})
    }
    return (
        <>
            
            <div className='w-full  flex'>
                <div className=''>
                <img className='' src="/images/Main Background 3.png" alt="" />
                <h1 className='w-[650px] ml-[170px] font-extrabold text-[55px] leading-[76px] mt-[-100px]'>Find Your <span className='text-[#635EA3]'>Blockchain Dev</span> Job Today</h1>
                <p className='w-[519px] font-normal text-[22px] leading-[30.01px] ml-[177px] mt-[27px]'>
                    Discover the leading companies in the blockchain industry and find job opportunities.
                </p>
                <button onClick={handleLogin} className='gradient  w-[360px] h-[54px] ml-[174px] mt-[30px] rounded-[10px] font-bold text-[14px] leading-[24px] text-white'>
                    Login Now
                    </button>
                </div>
                <div className='relative'>
                    <div className='absolute mt-[28px] w-[400px] ml-[10px] bg-[#FFFFFF] py-[28px] border'>
                        <div className='flex'>
                        <h1 className='font-extrabold text-[24px] leading-[16px] mt-[39px] ml-[45px]'>SIGN UP</h1>
                        <button className='w-[91px] h-[30px] text-white rounded-[5.05px] bg-[#635EA3] font-bold text-[14px] leading-[19.1px] mt-[32px] ml-8'>Job seeker</button>
                            <button className='employeebtn w-[91px] h-[30px] rounded-[5.05px] border-[0.51px] mt-[32px] font-normal text-[14px] leading-[19.1px]'>Employer</button>
                        </div>
                        <label className='font-normal text-[14px] leading-[19.1px] mt-[79px] ml-[47px]' htmlFor="">Name*</label>
                        <input onChange={handleSignupChange} className='w-[323px] h-[42px] rounded-[8px] border ml-[45px] font-normal text-[14px] leading-[19.1px] px-[16px] mt-2 ' type="text" name='Name' placeholder='Enter name' />
                        <label className='font-normal text-[14px] leading-[19.1px] mt-[79px] ml-[47px]' htmlFor="">Email*</label>
                        <input onChange={handleSignupChange} className='w-[323px] h-[42px] rounded-[8px] border ml-[45px] font-normal text-[14px] leading-[19.1px] px-[16px] mt-2 ' type="email" name='Email' placeholder='Enter email' />
                        <label className='font-normal text-[14px] leading-[19.1px] mt-[79px] ml-[47px]' htmlFor="">Phone no*</label>
                        <input onChange={handleSignupChange} className='w-[323px] h-[42px] rounded-[8px] border ml-[45px] font-normal text-[14px] leading-[19.1px] px-[16px] mt-2 ' type="text" name='Phoneno' placeholder='Enter phone no' />
                        <label className='font-normal text-[14px] leading-[19.1px] mt-[79px] ml-[47px]' htmlFor="">Password*</label>
                        <input onChange={handleSignupChange} className='w-[323px] h-[42px] rounded-[8px] border ml-[45px] font-normal text-[14px] leading-[19.1px] px-[16px] mt-2 ' type="password" name='Password' placeholder='Enter password' />
                        <button onClick={handleRegister} className='gradient w-[323px] h-[42px] rounded-[10px] border ml-[45px] mt-[32px] font-bold text-white'>Register Now</button>
                        <div className='flex gap-5'>
                        <hr className='w-[107px] ml-[45px] border-[0.5px] mt-[24px]' />
                        <p className='font-normal text-[12px] leading-[16.37px] mt-[16px]'>
                            or sign up with
                        </p>
                            <hr className='w-[107px]  border-[0.5px] mt-[24px]' />
                        </div>
                        <div className='flex gap-3'>
                            <div className='w-[59.1px] h-[30.31px] mt-[16px] border-[0.51px] rounded-[10px] ml-[148px]'>
                                <img className='mt-[9.09px] ml-[20px]' src="/images/search 1.png" alt="" />
                            </div>
                            <div className='w-[59.1px] h-[30.31px] mt-[16px] border-[0.51px] rounded-[10px]'>
                                <img className='mt-[9.09px] ml-[20px]' src="/images/facebook 3.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <img className='mt-[365px] ' src="/images/Group 6294.png" alt="" />

                </div>
                
                </div>
        </>
    )
}

export default Sec1
