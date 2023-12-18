import React from 'react'

function Footer() {
    return (
        <>
            <div>
                <div className='mt-[66px] flex justify-evenly'>
                    <ul className='flex flex-col gap-3'>
                        <h1 className='font-normal text-[16px] leading-[28px]'>Services</h1>
                        <li className='font-normal text-[16px] leading-[21.82px] mt-[16px]'>List Item 1</li>
                        <li className='font-normal text-[16px] leading-[21.82px]'>List Item 2</li>
                        <li className='font-normal text-[16px] leading-[21.82px]'>List Item 3</li>
                        <li className='font-normal text-[16px] leading-[21.82px]'>List Item 4</li>
                        <li className='font-normal text-[16px] leading-[21.82px]'>List Item 5</li>
                        <li className='font-normal text-[16px] leading-[21.82px]'>List Item 6</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <h1 className='font-normal text-[16px] leading-[28px]'>Company</h1>
                        <li className='font-normal text-[16px] leading-[21.82px] mt-[16px]'>List Item 1</li>
                        <li className='font-normal text-[16px] leading-[21.82px]'>List Item 2</li>
                        <li className='font-normal text-[16px] leading-[21.82px]'>List Item 3</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <h1 className='font-normal text-[16px] leading-[28px]'>About</h1>
                        <li className='font-normal text-[16px] leading-[21.82px] mt-[16px]'>List Item 1</li>
                        <li className='font-normal text-[16px] leading-[21.82px]'>List Item 2</li>
                        <li className='font-normal text-[16px] leading-[21.82px]'>List Item 3</li>
                        <li className='font-normal text-[16px] leading-[21.82px]'>List Item 4</li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <h1 className='font-normal text-[16px] leading-[28px]'>Links</h1>
                        <li className='font-normal text-[16px] leading-[21.82px] mt-[16px]'>List Item 1</li>
                        <li className='font-normal text-[16px] leading-[21.82px]'>List Item 2</li>
                        <li className='font-normal text-[16px] leading-[21.82px]'>List Item 3</li>
                        <li className='font-normal text-[16px] leading-[21.82px]'>List Item 4</li>
                    </ul>
                    <div className='w-[338px] py-[20px]  bg-[#F7F7FA]'>
                        <h1 className='font-normal text-[16px] leading-[28px] pt-[20px] ml-[42px]'>Subscribe</h1>
                        <input className='w-[200px] h-[50px] bg-[#635EA3] px-[20px] mt-[15px] font-normal text-[14px] leading-[19.1px] ml-[42px]' type="text" name="" id="" placeholder='Email address' />
                        <button className='absolute w-[50px] h-[50px]  mt-[15px] bg-[#FFFFFF]'>
                            <img className='ml-4' src="/images/arrows-down-top-move-1.png" alt="" />
                        </button>
                        <p className='w-[254px] font-normal text-[12px] leading-[20.4px] mt-[20px] ml-[42px]'>
                            Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.
                        </p>
                    </div>
                </div>
                <hr className='w-[90%]  mx-auto border mt-12' />
                <div className='w-full h-[100px]  flex justify-around items-center'>
                    <img src="/images/image 1.png" alt="" />
                    <ul className='flex gap-10'>
                        <li className='font-normal text-[14px] leading-[19.1px]'>Terms</li>
                        <li className='font-normal text-[14px] leading-[19.1px]'>Privacy</li>
                        <li className='font-normal text-[14px] leading-[19.1px]'>Cookies</li>
                    </ul>
                    <div className='flex gap-3'>
                        <div className='w-[35px] h-[35px] border rounded-full'>
                            <img className='ml-[10px] mt-[10px]' src="/images/Group 36.png" alt="" />
                        </div>
                        <div className='w-[35px] h-[35px] border rounded-full'>
                            <img className='ml-[10px] mt-[10px]' src="/images/facebook 3.png" alt="" />
                        </div>
                        <div className='w-[35px] h-[35px] border rounded-full'>
                            <img className='ml-[10px] mt-[10px]' src="/images/Shape.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
