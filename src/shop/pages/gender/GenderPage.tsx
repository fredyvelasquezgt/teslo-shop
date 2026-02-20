import React from 'react'
import { CustomJumbotron } from '../../components/CustomJumbotron';
import { ProductsGrid } from '../../components/ProductsGrid';
import { CustomPagination } from '../../../components/custom/CustomPagination';
import { products } from '../../../mocks/products.mock';
import { useParams } from 'react-router';

export const GenderPage = () => {

    const { gender } = useParams()
    const genderLabel = gender === 'men'
        ? 'Hombre'
        : gender === 'women'
            ? 'Mujeres'
            : 'Niños'

    return (
        <>
            <CustomJumbotron title={`Productos para ${genderLabel}`} />

            <ProductsGrid products={products} />
            <CustomPagination totalPages={7} />
        </>
    )
}
