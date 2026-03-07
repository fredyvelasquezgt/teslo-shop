import { Button } from '@/components/ui/button'
import React from 'react'
import { useCounterStore } from '../../../auth/store/auth.store';

export const ProductPage = () => {

    const { inc, count, dec } = useCounterStore()

    return (
        <>
            <h1>Product Page</h1>
        </>
    )
}
