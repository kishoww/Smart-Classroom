import React from 'react'
import { useNavigate } from 'react-router-dom'


const Classroom = () => {

    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault(); // Prevent page reload
        navigate("/dashboard/fans")
    }

    return (
        <div>
            <section className="bg-black/95 h-screen w-full flex justify-center items-center">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white border-1 border-gray-900 shadow-2xl rounded-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black/90 flex justify-center">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-10">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Choose your Classroom
                            </h1>
                            <form className="space-y-4 md:space-y-6">
                                <button
                                    type="submit"
                                    className="cursor-pointer w-full text-white bg-blue-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    onClick={handleClick}
                                >
                                    Classroom 1
                                </button>
                                <button
                                    type="submit"
                                    className="cursor-pointer w-full text-white bg-blue-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    onClick={handleClick}
                                >
                                    Classroom 2
                                </button>
                                <button
                                    type="submit"
                                    className="cursor-pointer w-full text-white bg-blue-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    onClick={handleClick}
                                >
                                    Classroom 3
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Classroom
