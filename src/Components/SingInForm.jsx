import React from 'react'

const SingInForm = () => {
    return (
        <div>
            <h4 className='font-inter text-brandDark text-3xl md:text-[40px] font-bold text-center'>Sign Up</h4>
            <form className='mt-5 mx-5'>
                <label htmlFor="name" className="text-[#444] font-inter text-base sm:text-xl font-semibold flex flex-col ">Name*
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Type here"
                        className="input_feild mt-2 sm:mt-4"
                    />
                </label>
                <label htmlFor="email" className="text-[#444] font-inter text-base sm:text-xl font-semibold flex flex-col mt-6">Email*
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Type here"
                        className="input_feild mt-2 sm:mt-4"
                    />
                </label>
                <label htmlFor="password" className="text-[#444] font-inter text-base sm:text-xl font-semibold flex flex-col mt-6">Password*
                    <input
                        type="email"
                        name="password"
                        required
                        placeholder="Enter your password"
                        className="input_feild mt-2 sm:mt-4"
                    />
                </label>


                <button
                    type='submit'
                    className='w-full py-4 sm:py-6 rounded-lg bg-brandPrimary/70 mt-5 text-white text-base sm:text-xl font-bold font-inter'
                >
                    Create an account
                </button>

            </form>
        </div>
    )
}

export default SingInForm