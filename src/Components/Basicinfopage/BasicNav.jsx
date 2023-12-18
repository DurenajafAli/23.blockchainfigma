import React from 'react'

function BasicNav() {
    return (
        <>
            <div className='px-[34.5px] pt-[23px] py-[20px]'>
                <nav className='w-full h-[100px]  flex justify-between items-center px-[34.5px]'>
                    <img src="/images/image 1.png" alt="" />
                    <div className='flex items-center gap-5'>
                    <div className='bg-2 w-[56px] h-[56px] rounded-full'></div>
                        <h1 className='font-bold text-[14px] leading-[24px]'>Wade Warren</h1>
                    </div>
                </nav>

            </div>
        </>
    )
}

export default BasicNav
