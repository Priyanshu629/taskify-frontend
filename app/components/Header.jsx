"use client"
import Link from 'next/link'
import React from 'react'
import { useGlobal } from '../context/global'
import { useRouter } from 'next/navigation'
import { logOut } from '../utils/utility functions/logout'
import toast from 'react-hot-toast'

function Header() {
  const { setIsLogin, setUserEmail, setLoginUserId, isLogin } = useGlobal()
  const router = useRouter()

  const handleLogout = async () => {
    let response = await logOut()

    if (response.ok) {
  

      toast.success("logout successfully", { duration: 3000 })
      setIsLogin(false)
      setUserEmail(null)
      setLoginUserId(null)
      router.replace("/")
    }
  }
  return (
    <header className='w-full p-2 flex justify-around items-center fixed top-0 left-0 shadow-md backdrop-blur-[10px] z-50 min-h-[70px] '>
      <Link href={'/'} className='text-lg font-bold text-purple-800 border-2 p-2 rounded-bl-md rounded-tr-md'>Taskify</Link>


      {!isLogin ? <Link href={"/login"} className='p-2 border-black font-semibold cursor-pointer border-[4px] rounded-md bg-white text-md hover:text-green-600'>Login</Link> :
        <button className='p-2 border-black font-semibold cursor-pointer border-[4px] rounded-md bg-white text-md hover:text-green-600' onClick={handleLogout}>Logout</button>
      }
    </header>
  )
}

export default Header
