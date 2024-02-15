import React from 'react'
import { Button } from '../ui/button'

function FormElement() {
  return (
    <div className=' mx-10 border bg-amber-100 border-amber-600 shadow-xl rounded-xl flex flex-col gap-14 items-center p-60 mt-10'>
      <label htmlFor='' className='font-bold text-xl text-cyan-900'> Selecciona un Archivo:</label>
      <input type='file' className="px-2 py-1 border rounded-md border-red-600 outline-none shadow-md font-semibold"/>
      <Button className="bg-cyan-900 border border-red-600 shadow-md">Upload File</Button>
    </div>
  )
}

export default FormElement