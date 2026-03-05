import React from 'react'
import { CustomJumbotron } from '../../components/CustomJumbotron';
import { ProductsGrid } from '../../components/ProductsGrid';
import { CustomPagination } from '../../../components/custom/CustomPagination';
import { useParams } from 'react-router';
import { useProducts } from '../../hooks/useProducts';

export const GenderPage = () => {

    const { gender } = useParams()
    const { data } = useProducts()
    const genderLabel = gender === 'men'
        ? 'Hombre'
        : gender === 'women'
            ? 'Mujeres'
            : 'Niños'

    return (
        <>
            <CustomJumbotron title={`Productos para ${genderLabel}`} />

            <ProductsGrid products={data?.products || []} />
            <CustomPagination totalPages={data?.pages || 1} />
        </>
    )
}
