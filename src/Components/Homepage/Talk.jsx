import React from 'react'

function Talk() {
    return (
        <>
            <div className='flex justify-evenly'>
                <div>
                    <img className='mt-[160px]' src="/images/Group 15.png" alt="" />
                    <img className='mt-16 ml-28' src="/images/Group.png" alt="" />
                </div>
                <div className='relative'>
                    <div className='absolute w-[400px] mt-[98px] ml-[30px] bg-[#FFFFFF] py-[28px] border'>
                        <h1 className='font-extrabold text-[24px] leading-[16px] mt-[39px] text-center'>Contact us</h1>
                        <div className='mt-[35px]'>
                        <label className='font-normal text-[14px] leading-[19.1px] mt-[100px]  ml-[47px]' htmlFor="">Email*</label>
                        <input className='w-[323px] h-[42px] rounded-[8px] border ml-[45px] font-normal text-[14px] leading-[19.1px] px-[16px] mt-2 ' type="text" placeholder='Enter email' />
                        <label className='font-normal text-[14px] leading-[19.1px] mt-[79px] ml-[47px]' htmlFor="">Phone no*</label>
                        <input className='w-[323px] h-[42px] rounded-[8px] border ml-[45px] font-normal text-[14px] leading-[19.1px] px-[16px] mt-2 ' type="text" placeholder='Enter phone no' />
                        <label className='font-normal text-[14px] leading-[19.1px] mt-[79px] ml-[47px]' htmlFor="">Address*</label>
                        <input className='w-[323px] h-[42px] rounded-[8px] border ml-[45px] font-normal text-[14px] leading-[19.1px] px-[16px] mt-2 ' type="text" placeholder='Enter password' />
                        <label className='font-normal text-[14px] leading-[19.1px] mt-[79px] ml-[47px]' htmlFor="">Zip Code*</label>
                        <input className='w-[323px] h-[42px] rounded-[8px] border ml-[45px] font-normal text-[14px] leading-[19.1px] px-[16px] mt-2 ' type="text" placeholder='Enter password' />
                        <div className='flex flex-col'>
                        <label className='font-normal text-[14px] leading-[19.1px] mt-[27px] ml-[47px]' htmlFor="">Country*</label>
                        <select className='w-[127px] h-[31px] rounded-[6px] border ml-[45px] mt-[16px]' name="" id="">
                            <option value="">Pakistan</option>
                            <option value="">China</option>
                            <option value="">India</option>
                            </select>
                            </div>
                        </div>
                        <button className='gradient w-[323px] h-[42px] rounded-[10px] border ml-[45px] mt-[32px] font-bold text-white'>Register Now</button>
                    </div>
                    <img className='mt-[365px] w-[430px] ' src="/images/Mask Group.png" alt="" />

                </div>
            </div>
        </>
    )
}

export default Talk
