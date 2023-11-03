import React from 'react'

import { Checkbox } from "@/components/ui/checkbox"
import { UseFormRegister } from 'react-hook-form'

interface CheckboxWithLabelProps {
    label: string
    register: UseFormRegister<any>
    name: string
}

const CheckboxWithLabel = ({ label, register, name }: CheckboxWithLabelProps) => {
    const [value, setValue] = React.useState(true)

    function handle(e: string | boolean) {
        console.log(e)
        // const result = typeof e === 'string' ? e : e ? true : false
        // const result: boolean = true

        if (typeof e === 'string') {
            if (e === 'on') {
                setValue(true)
            } else {
                setValue(false)
            }
        } else {
            setValue(e)
        }
        
        // console.log(result)
        // setValue(result)
    }

    return (
        <div className='flex flex-row justify-start items-center'>
            {/* <Checkbox {...register(name)} checked={value === 'on'} id={name} onCheckedChange={(e) => handle(e)} value={value} /> */}
            <input {...register(name)} type='checkbox' checked={value} id={name} onChange={(e) => handle(e.target.checked)} className='form-checkbox h-5 w-5 text-black bg-black data-[state=checked]:bg-black'/>
            <p className='pl-2 text-base'>{label}</p>
        </div>
    )
}

export default CheckboxWithLabel