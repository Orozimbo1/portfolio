import React from 'react'
import { whatsaapp } from '../utils'

const Bot = () => {
  return (
    <div className='fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-green-500 w-16 h-16 flex items-center justify-center rounded-full animate-bounce'>
      <a href={whatsaapp} className='flex items-center justify-center'><ion-icon name="chatbubble-ellipses"></ion-icon></a>
    </div>
  )
}

export default Bot