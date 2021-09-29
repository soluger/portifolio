import React from 'react'

export default function Navbar({setTabs}) {
    return (        
        <nav id="header" className="fixed w-full z-10 top-0 bg-gray-100">
            <div className=" container lg:w-7/12 m-auto">
                <div className="sm:flex sm:items-center px-6 py-4 pt-5 sm:pt-4">
                    <img className="block h-24 w-24 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="/assets/img/pessoa.jpg" alt=""/>
                    <div className="text-center sm:text-left sm:flex-grow">
                        <div className="mb-4">
                            <p className="text-3xl sm:text-2x1 leading-tight font-semibold">Francisco das chagas Cardoso</p>
                            <p className="text-gray-600 text-xs md:text-base">Frontend developer | 
                            <span className="text-green-500"> Web</span > and <span className="text-green-500">mobile</span></p>
                            <div className="text-gray-400 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 ml-16" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <p>location : Brasília DF</p>
                            </div>
                        </div>
                        <div className="p-2 flex justify-end ...">
                        <button onClick={()=>setTabs("home")} className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-1 px-4 rounded-full">About</button>
                            <button onClick={()=>setTabs("hardSkils")} className="bg-transparent border border-gray-500 ml-2 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-1 px-4 rounded-full">Hard skills</button>
                            <button onClick={()=>setTabs("projetos")} className="bg-transparent border border-gray-500 ml-2 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-1 px-4 rounded-full">Projects</button>
                            <button onClick={()=>setTabs("cursos")} className="bg-transparent border border-gray-500 ml-2 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-1 px-4 rounded-full">Courses</button>
                        </div>                    
                    </div>
                </div>
                <hr className="border-b-1 border-gray-400 mb-1 mx-4"/>         
            </div>     
        </nav>   
    )
}
