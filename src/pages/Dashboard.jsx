import React from 'react'
import Summary from '../components/Dashboard/Summary'
import BestSelling from '../components/Dashboard/BestSelling'
import RecentTransactions from '../components/Dashboard/RecentTransactions'

const Dashboard = () => {
  return (
    <div className='flex flex-col gap-6'>
      <Summary/>
      <div className='w-full py-2 grid grid-cols-1 lg:grid-cols-6 gap-y-4 lg:gap-6'>
        <div className='col-span-2'>
          <BestSelling/>
        </div>
        <div className='col-span-4'>
          <RecentTransactions/>
        </div>
      </div>
      
    </div>
  )
}

export default Dashboard
