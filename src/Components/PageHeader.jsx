import React from 'react'

const PageHeader = () => {
    return (
        <header className='page_header bg-cover bg-no-repeat bg-center py-12 pt-20 sm:py-28 sm:pt-[240px]'>
            <div className="container  ">
                <div className='bg-[#15151599] py-36 px-3 '>
                    <h1 className=' text-white text-3xl sm:text-5xl lg:text-[88px] font-cinzel font-bold text-center '>OUR MENU</h1>
                    <p className=' text-white text-[18px] sm:text-2xl font-cinzel font-semibold text-center'>Would you like to try a dish?</p>
                </div>
            </div>
        </header>
    )
}

export default PageHeader