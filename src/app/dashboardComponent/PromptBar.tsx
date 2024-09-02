import { Button } from '@/components/ui/button'
import React from 'react'

function PromptBar() {
  return (
    <div className=" absolute bottom-7 flex items-center gap-5">
    <img src="ai.png" className=" w-7 h-7 " />
    <input
      className="rounded-md w-96 p-2 border-2 border-black outline-none"
      type="text"
      placeholder="Enter the prompt ....."
    />
   <Button className='text-black bg-white hover:bg-slate-200'>Generate</Button>
  </div>
  )
}

export default PromptBar