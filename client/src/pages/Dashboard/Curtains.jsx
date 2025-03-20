import React from 'react'

const Curtains = () => {
  return (
    <div>
      <div class="">
        <div class="">
          <div class="grid grid-rows-5 gap-4 mb-4">
            <div class="grid grid-cols-1 h-32 rounded-sm bg-gray-50 dark:bg-gray-800 text-white">
              <div className='flex justify-center gap-2 items-center'>
                <h1 className='text-blue-300 font-style'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-blinds"><path d="M3 3h18" /><path d="M20 7H8" /><path d="M20 11H8" /><path d="M10 19h10" /><path d="M8 15h12" /><path d="M4 3v14" /><circle cx="4" cy="19" r="2" /></svg>                </h1>
                <h1 className="font-style">
                  Curtain : Open
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Curtains
