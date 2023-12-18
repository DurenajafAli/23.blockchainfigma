import React from 'react'

function Navbar() {
    return (
        <>
            <div className='px-[34.5px] pt-[23px] py-[20px] '>
                <nav className='w-full h-[100px]  flex justify-between items-center px-[34.5px]'>
                    <img src="/images/image 1.png" alt="" />
                    <div className='flex gap-[30px]'>
                        <button className='profilebtn w-[145px] h-[54px] rounded-[10px]'>Create Profile</button>
                        <button className='employerbtn w-[117px] h-[54px] rounded-[10px]  text-white'>Employer</button>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar
