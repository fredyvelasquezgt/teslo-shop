


import React from 'react'
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getProductByIdAction } from '../actions/get-product-by-id';

export const useProduct = (id: string) => {



    //todo: manejar mutacion

    const query = useQuery({
        queryKey: ['products', { id, }],
        queryFn: () => getProductByIdAction(id),
        retry: false,
        staleTime: 1000 * 60 * 5,
        //enabled: !!id
    })

    return {
        ...query
    }
}
