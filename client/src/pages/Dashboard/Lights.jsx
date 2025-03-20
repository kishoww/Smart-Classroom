import React from 'react'

const Lights = () => {
  return (
    <div class="">

      <div class="">

        <div class="grid grid-rows-5 gap-4 mb-4">

          <div class="grid grid-cols-2 h-32 rounded-sm bg-gray-50 dark:bg-gray-800 text-white">
            <div className='flex justify-center gap-2 items-center'>
              <h1 className='text-yellow-300 font-style'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
              </h1>
              <h1 className="font-style">
                Light 1 : ON
              </h1>
            </div>

            <div className='flex justify-center items-center font-style'>
              <h1>
                LUX Value :
              </h1>
            </div>
          </div>

          <div class="grid grid-cols-2 h-32 rounded-sm bg-gray-50 dark:bg-gray-800 text-white">
            <div className='flex justify-center gap-2 items-center'>
              <h1 className='text-gray-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-off"><path d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" /><path d="m2 2 20 20" /><path d="M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>              </h1>
              <h1 className="font-style">
                Light 2 : OFF
              </h1>
            </div>

            <div className='flex justify-center items-center font-style'>
              <h1>
                LUX Value :
              </h1>
            </div>
          </div>

          <div class="grid grid-cols-2 h-32 rounded-sm bg-gray-50 dark:bg-gray-800 text-white">
            <div className='flex justify-center gap-2 items-center'>
              <h1 className='text-yellow-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
              </h1>
              <h1 className="font-style">
                Light 3 : ON
              </h1>
            </div>

            <div className='flex justify-center items-center font-style'>
              <h1>
                LUX Value :
              </h1>
            </div>
          </div>

          <div class="grid grid-cols-2 h-32 rounded-sm bg-gray-50 dark:bg-gray-800 text-white">
            <div className='flex justify-center gap-2 items-center'>
              <h1 className='text-yellow-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
              </h1>
              <h1 className="font-style">
                Light 4 : ON
              </h1>
            </div>

            <div className='flex justify-center items-center font-style'>
              <h1>
                LUX Value :
              </h1>
            </div>
          </div>

          <div class="grid grid-cols-2 h-32 rounded-sm bg-gray-50 dark:bg-gray-800 text-white">
            <div className='flex justify-center gap-2 items-center'>
              <h1 className='text-gray-300'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-off"><path d="M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5" /><path d="m2 2 20 20" /><path d="M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>              </h1>
              <h1 className="font-style">
                Light 5 : OFF
              </h1>
            </div>

            <div className='flex justify-center items-center font-style'>
              <h1>
                LUX Value :
              </h1>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Lights
