import React from 'react'

export default function Home({ fixed }) {
    return (
        <div className="bg-sky-100 w-screen h-screen " id="header">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="flex flex-col md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-950">
                    “Growing Hearts and Minds<br/>
                    One Step at a Time”
                    </h1>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
                    <img className="object-cover p-10" alt="hero" src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" />
                </div>
            </div>
        </div>
    )
}