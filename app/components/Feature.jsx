import Image from 'next/image'
import React from 'react'

const Feature = ({icon,title,description}) => {
  return (
    <div className='max-w-[300px] w-full p-4 flex flex-col gap-[20px]  rounded-md   text-center border-4 shadow-md'>
      <div className='flex justify-center w-full h-full '>
      <Image width={64} src={icon} alt={title} className='rounded-md mx-auto ' loading='lazy'/>
      </div>
      <span className='font-bold text-lg '>{title}</span>
      <p className='font-semibold '>{description}</p>
    </div>
  )
}

export default Feature
