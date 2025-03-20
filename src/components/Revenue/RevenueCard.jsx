import React from 'react'
import { ProfileImage } from '../../assets/export'

const RevenueCard = () => {
  return (
    <div className='border flex flex-col items-center gap-y-3 p-6 rounded-2xl'>
      <div>
        <img src={ProfileImage} alt="" className='w-20 h-20 rounded-full' style={{backgroundPosition:"center", backgroundSize:"cover"}}/>
      </div>
      <h2 className="font-medium">John Doe</h2>
      <p className="text-sm text-slate-400">johndoe@gmail.com</p>
      <div className='w-full flex justify-between items-center'>
        <p className='text-slate-400 font-normal text-sm'>Revenue</p>
        <p className='text-sm text-slate-400'>$45</p>
      </div>
      <div className='w-full flex justify-between items-center'>
        <p className='text-slate-400 font-normal text-sm'>Subscription taken</p>
        <p className='text-sm text-slate-400'>3 Times</p>
      </div>
      <div className='w-full flex justify-between items-center'>
        <p className='text-slate-400 font-normal text-sm'>Recent Transaction</p>
        <p className='text-sm text-slate-400'>$10</p>
      </div>
      <div className="w-full">
        <button className='w-full text-sm rounded-lg py-2 bg-[#028EE6] text-white transition-all duration-300'>Basic</button>
      </div>
    </div>
  )
}

export default RevenueCard
