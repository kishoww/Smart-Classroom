import React, { useState } from 'react'
import Table from '../../components/Table'

const Attendence = () => {

  const [People, setPeople] = useState("0");


  return (
    <div>
      <div class="">

        <div class="">

          <div class="grid grid-rows-2 gap-4 mb-4">

            <div class="grid grid-cols-1 h-28 rounded-sm bg-gray-50 dark:bg-gray-800 text-white">
              <div className='flex justify-center gap-2 items-center'>
                <h1 className='text-blue-500 font-style'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0" /><circle cx="10" cy="8" r="5" /><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" /></svg>              </h1>
                <h1 className="font-style">
                  Total students present : <span className='font-style font-medium text-green-500'>{People}</span>
                </h1>
              </div>
            </div>

            <div class="grid grid-cols-1 h-32 rounded-sm bg-gray-50 dark:bg-gray-800 text-whit gap-6">
              <div>
                <Table />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Attendence
