import React from 'react'

function Contactus() {
  return (
    <div class="mx-4 pt-6  border-red-600 bg-white">
            <div class="grid sm:grid-cols-2 items-start gap-14 p-8 mx-auto max-w-4xl bg-white font-[sans-serif]">
            <div>
                <h1 class="text-gray-800 text-3xl font-extrabold">Let's Talk</h1>
                <p class="text-md text-gray-500 font-medium mt-4">
                    REQUEST A CALLBACK. 
                </p>
                <h1 className='text-md   font-medium text-gray-500'>We will contact in the shortest time.</h1>
                <img src="/png/abcsksd.png" alt="" class="mx-auto mt-4" />
            </div>


                <form class="ml-auo space-y-4 align-middle">
                    <input type='text' placeholder='Name'
                        class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                    <input type='email' placeholder='Email'
                        class="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-blue-500" />
                    <textarea placeholder='Message' rows="6"
                        class="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"></textarea>
                    <button type='button'
                        class="text-white bg-[#0A173B] hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6">Send Message</button>
                </form>
            </div>
        </div>
  )
}

export default Contactus