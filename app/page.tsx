'use client'

import { useScroll, useTransform, motion, LayoutGroup } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'


export default function Home() {
  const ref = useRef<HTMLSelectElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'end start']
  })

  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 12])

  return (
    <main className='max-w-[1200px] mx-auto transition-colors overflow-clip'>
      <motion.section ref={ref} className="flex gap-6 h-screen items-center origin-[90%_40%] transition-transform justify-center" style={{ scale }}>
        <div className='flex-1 text-center text-gray-400/90'>
          <motion.h1 className='text-3xl font-bold tracking-wide' style={{ opacity: textOpacity }}>Bored of traditional webpage layouts</motion.h1>
        </div>
        <motion.div style={{ opacity: textOpacity }} className="relative flex flex-col w-[600px] overflow-y-auto rounded-xl origin-center h-[400px] shadow border border-gray-300/20">
          <span className='bg-gradient-to-r -z-[1] from-zinc-950 to-zinc-900 absolute inset-0' />
          <div className='h-10 w-full border-b border-gray-100/20' />
          <div className='h-full flex'>
            <div className=' flex flex-col gap-4 p-4 border-r border-gray-100/20 w-20 overflow-clip'>
              <span className='w-full h-2 rounded-full bg-gray-100/20'></span>
              <span className='w-full h-2 rounded-full bg-gray-100/20'></span>
              <span className='w-full h-2 rounded-full bg-gray-100/20'></span>
              <span className='w-full h-2 rounded-full bg-gray-100/20'></span>
              <span className='w-full h-2 rounded-full bg-gray-100/20'></span>
            </div>
            <div className='flex flex-col gap-4 p-4 border-r border-gray-100/20 w-full overflow-clip'>
              <span className='w-full h-40 rounded bg-gray-100/20'></span>
              <span className='w-full h-10 rounded bg-gray-100/20'></span>
              <span className='space-y-2 w-full h-auto'>
                <span className='w-full h-2 block rounded bg-gray-100/20'></span>
                <span className='w-full h-2 block rounded bg-gray-100/20'></span>
                <span className='w-full h-2 block rounded bg-gray-100/20'></span>
                <span className='w-full h-2 block rounded bg-gray-100/20'></span>
                <span className='w-1/2 h-2 block rounded bg-gray-100/20'></span>
              </span>
            </div>
          </div>
        </motion.div>
      </motion.section>
      <section className='flex flex-col gap-4 items-center pb-40'>
        <div className='flex flex-col gap-4'>
          <div className='w-[450px] flex py-2 px-4 rounded-l-xl rounded-tr-xl bg-gradient-to-r from-zinc-950 to-zinc-900 shadow shadow-zinc-800 backdrop-blur-xl border-[0.5px] border-gray-100/20'>
            <h1 className='text-sm tracking-wider'>Introducing Txtly</h1>
          </div>
          <div className='w-[450px] flex py-2 px-4 rounded-l-xl rounded-tr-xl bg-gradient-to-r from-zinc-950 to-zinc-900 shadow shadow-zinc-800 backdrop-blur-xl border-[0.5px] border-gray-100/20'>
            <h1 className='text-sm tracking-wider'>A messenger style personal webpage.</h1>
          </div>
          <div className='flex items-end gap-2'>
            <div className='w-[450px] flex py-2 px-4 rounded-l-xl rounded-tr-xl bg-gradient-to-r from-zinc-950 to-zinc-900 shadow shadow-zinc-800 backdrop-blur-xl border-[0.5px] border-gray-100/20'>
              <h1 className='text-sm tracking-wider'>Supports all markdown syntax and also supports audio, video, spotify and more.</h1>
            </div>
            <img src="https://images.pexels.com/photos/5774802/pexels-photo-5774802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-8 h-8 rounded-full object-cover' />
          </div>
        </div>
        <div className='flex items-end gap-2'>
          <img src="https://images.pexels.com/photos/5774802/pexels-photo-5774802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-8 h-8 rounded-full object-cover' />
          <div className='w-[450px] flex flex-col gap-4 py-2 px-2 rounded-r-xl rounded-tl-xl bg-gradient-to-r from-zinc-950 to-zinc-900 shadow shadow-zinc-800 backdrop-blur-xl border-[0.5px] border-gray-100/20'>
            <img src="https://images.pexels.com/photos/16883535/pexels-photo-16883535/free-photo-of-woman-in-white-dress-posing-in-building-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='w-full object-cover h-[200px] rounded-lg' />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='w-[450px] flex py-2 px-4 rounded-l-xl rounded-tr-xl bg-gradient-to-r from-zinc-950 to-zinc-900 shadow shadow-zinc-800 backdrop-blur-xl border-[0.5px] border-gray-100/20'>
            <h1 className='text-sm tracking-wider'>Introducing Txtly</h1>
          </div>
          <div className='w-[450px] flex py-2 px-4 rounded-l-xl rounded-tr-xl bg-gradient-to-r from-zinc-950 to-zinc-900 shadow shadow-zinc-800 backdrop-blur-xl border-[0.5px] border-gray-100/20'>
            <h1 className='text-sm tracking-wider'>A messenger style personal webpage.</h1>
          </div>
          <div className='flex items-end gap-2'>
            <div className='w-[450px] flex py-2 px-4 rounded-l-xl rounded-tr-xl bg-gradient-to-r from-zinc-950 to-zinc-900 shadow shadow-zinc-800 backdrop-blur-xl border-[0.5px] border-gray-100/20'>
              <h1 className='text-sm tracking-wider'>Supports all markdown syntax and also supports audio, video, spotify and more.</h1>
            </div>
            <img src="https://images.pexels.com/photos/5774802/pexels-photo-5774802.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-8 h-8 rounded-full object-cover' />
          </div>
        </div>
      </section>
    </main>
  )
}
