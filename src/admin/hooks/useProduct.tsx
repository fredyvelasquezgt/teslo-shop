import React from 'react'
import { useParams } from 'react-router';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getProductByIdAction } from '../actions/get-product-by-id';
import { Product } from '../../interfaces/product.interface';
import { createUpdateProductAction } from '../actions/create-update-product.action';

export const useProduct = (id: string) => {

    const queryClient = useQueryClient()

    const query = useQuery({
        queryKey: ['products', { id, }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5,
        //enabled: !!id
    })

    //Mutacion

    const mutation = useMutation({
        mutationFn: createUpdateProductAction,
        onSuccess: (product: Product) => {
            queryClient.invalidateQueries({ queryKey: ['products'] })
            queryClient.invalidateQueries({ queryKey: ['products', { id: product.id }] })

            queryClient.setQueryData(['products', { id: product.id }], product)
        }
    })



    // const handleSubmitForm = async (productLike: Partial<Product>) => {
    //     console.log({ productLike })
    // }

    return {
        ...query,
        mutation
    }
}
