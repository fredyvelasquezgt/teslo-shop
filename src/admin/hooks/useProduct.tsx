


import React from 'react'
import { useParams } from 'react-router';
import { useQuery, useMutation } from '@tanstack/react-query';
import { getProductByIdAction } from '../actions/get-product-by-id';
import { Product } from '../../interfaces/product.interface';

export const useProduct = (id: string) => {

    const query = useQuery({
        queryKey: ['products', { id, }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5,
        //enabled: !!id
    })

    //Mutacion

    const { } = useMutation()


    const handleSubmitForm = async (productLike: Partial<Product>) => {
        console.log({ productLike })
    }

    return {
        ...query,
        handleSubmitForm
    }
}
