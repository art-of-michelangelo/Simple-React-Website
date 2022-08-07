import React from 'react'
import Info from './system/siteinfo';
import Cablecar from './cablecar';
import Link from 'next/link';
import Head from 'next/head';
import Scroll from './Scroll';
import { signIn,signOut} from "next-auth/react"
import { useSession } from "next-auth/react";

function Header() {
const session = useSession();

const UserLogin = () => {
    if (session.status === "authenticated") {
      return (
        <>  
      
        <button className='bg-transparent hover:bg-purple-700 text-purple-700 hover:text-white py-1 px-3 rounded border border-solid border-white mr-2' onClick={() => signOut()}>Sign out</button>
      
        </>
      )
    }    
    return (
      <>
        <div className="flex my-3 lg:my-0">
        <button onClick={()=>signIn()} className="bg-transparent hover:bg-purple-700 text-purple-700 hover:text-white py-1 px-3 rounded border border-solid border-white mr-2">
          Sign In
        </button>
        <Link href="/signup">
        <button className="bg-purple-700 hover:bg-purple-800 text-white py-1 px-3 rounded border border-solid border-purple-700 hover:border-purple-800">
          Sign Up
        </button>
        </Link>
      </div>
      </>
    )
  }

  return (
   <>    
   <Scroll></Scroll>
    <Head>
   <title className=''>Create Next App</title>
   <meta name="description" content="Generated by create next app" />
   <link rel="icon" href="/favicon.ico" />
 
 </Head>

    <header  id="topnav" className="container mx-auto text-gray-600 body-font   defaultscroll bg-white is-sticky items-center justify-center">
      <div className='flex flex-col items-center justify-center bg-white'>
       <nav className="bg-white xl:w-2/3 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0  pb-px-0 mb-0 justify-center items-center">
    <div className="flex justify-between items-center lg:mr-16">
      <span className="text-black flex text-xl justify-center text-center align-middle">Micro <img src="./images/logomini1.svg" width={'10px'}/> Engineer</span>
      <button className="border border-white px-2 py-1 rounded text-white opacity-50 hover:opacity-75 lg:hidden" id="navbar-toggle">
        <i className="fas fa-bars"></i>
      </button> 
    </div>
    <div className="hidden lg:flex flex-grow" id="navbar-collapse">
      <ul className="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0">

        <li>
            <Link href="/
            ">
                <a href="#" className="block text-gray-500 font-bold hover:text-gray-300 py-2 md:mx-2">Home</a>
            </Link>
        </li>

        <li>
        <Link href="/about">
        <a href="#" className="block text-gray-500 font-bold hover:text-gray-300 py-2 md:mx-2">Portfolio</a>
        </Link>
        </li> 

        <li>
        <Link href="/Contact">
        <a href="#" className="block text-gray-500 font-bold hover:text-gray-300 py-2 md:mx-2">Contact</a>
        </Link>
        </li> 

  

      </ul> 
    <UserLogin/>
    
    </div>


  </nav>
  </div>
  <div className="svgdiv relative rotate-180 mx-0 px-0 ">
    <div className="shape  overflow-hidden   text-white dark:text-slate-900">
  
    
      <svg className='shadow-test' viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor">
          </path>
          </svg>
          </div>
          </div>
         
  </header>
  </>

  )
}


export default Header