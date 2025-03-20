import React from 'react'
import RevenueGrid from '../components/Revenue/RevenueGrid'
import Filter from '../components/Revenue/Filter'

const Revenue = () => {
  return (
    <div className='flex flex-col gap-8'>
      <Filter/>
      <RevenueGrid/>
    </div>
  )
}

export default Revenue
