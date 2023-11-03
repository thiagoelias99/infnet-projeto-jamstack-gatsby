import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import ErrorMessage from '../error-message/ErrorMessage'

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
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>(
    {
      //Validation resolver
      resolver: zodResolver(formValidationSchema)
    }
  )
  //Form submit handler
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
      <Input {...register("firstName", { required: true })} placeholder="First name" />
      <ErrorMessage message={errors.firstName?.message} />

      <Input {...register("lastName", { required: true })} placeholder="Last name" />
      <ErrorMessage message={errors.lastName?.message} />

      <Input {...register("email", { required: true })} placeholder="Email" />
      <ErrorMessage message={errors.email?.message} />

      <Button variant="default" type="submit">Inscrever-se</Button>
    </form>
  )
}

export default SubscriptionForm