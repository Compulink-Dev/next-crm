'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextInput from '../../_components/TextInput'
import TextareaInput from '../../_components/TextArea'
import SubmitButton from '../../_components/SubmitButton'
import { makeApiRequest } from '@/lib/apiRequest'


function Form() {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const [loading, setLoading] = useState(false)
    async function onSubmit(data: any) {
        setLoading(true)
        makeApiRequest(
            setLoading,
            "suppliers",
            data,
            'Supplier',
            reset
        )
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Supplier</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <TextInput
                            errors={errors}
                            label={'Supplier name'}
                            name={'name'}
                            register={register}
                        />
                        <TextInput
                            errors={errors}
                            label={'Supplier phone'}
                            name={'phone'}
                            type='phone'
                            register={register}
                            className='w-full'
                        />
                        <TextInput
                            errors={errors}
                            label={'Supplier email'}
                            name={'email'}
                            type='email'
                            register={register}
                            className='w-full'
                        />
                        <TextInput
                            errors={errors}
                            label={'Supplier address'}
                            name={'address'}
                            register={register}
                            className='w-full'
                        />
                        <TextInput
                            errors={errors}
                            label={'Contact Person'}
                            name={'contactPerson'}
                            register={register}
                            className='w-full'
                        />
                        <TextInput
                            errors={errors}
                            label={'Supplier code'}
                            name={'supplierCode'}
                            register={register}
                            className='w-full'
                        />
                        <TextInput
                            errors={errors}
                            label={'Payment Terms'}
                            name={'paymentTerms'}
                            register={register}
                            className='w-full'
                        />
                        <TextInput
                            errors={errors}
                            label={'Tax ID'}
                            name={'taxID'}
                            register={register}
                        />
                        <TextareaInput
                            errors={errors}
                            label={'Supplier notes'}
                            name={'notes'}
                            register={register}
                        />
                    </div>
                    <SubmitButton
                        isLoading={loading}
                        title='Supplier'
                    />
                </form>
            </div>
        </section>
    )
}

export default Form