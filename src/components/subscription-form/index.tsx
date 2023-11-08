import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const SubscriptionForm = () => {

  //Type of form input data validation 
  const formValidationSchema = z.object({
    firstName: z.string().min(2, { message: 'Nome muito curto' }),
    lastName: z.string().min(2, { message: 'Sobrenome muito curto' }),
    email: z.string().email({ message: 'Email inválido' })
  })
  
  //Type of form result data
  type FormInputs = z.infer<typeof formValidationSchema>

  //'Create' form
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>(
    {
      //Validation resolver
      resolver: zodResolver(formValidationSchema)
    }
  )
  //Form submit handler
  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data)

  return (
    <div className='w-screen h-screen flex justify-center items-center fixed z-10'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
        {/* Use 'register' to refer form fields */}
        <input {...register("firstName", { required: true })} placeholder="First name" />
        <span>{errors.firstName?.message}</span>
        <input {...register("lastName", { required: true })} placeholder="Last name" />
        <span>{errors.lastName?.message}</span>
        <input {...register("email", { required: true })} placeholder="Email" />
        <span>{errors.email?.message}</span>
        <input type="submit" />
      </form>
    </div>
  )
}

export default SubscriptionForm