import { Button } from '@/components/ui/button'
import { CustomJumbotron } from '@/shop/components/CustomJumbotron'
import { ProductsGrid } from '@/shop/components/ProductsGrid';
import React from 'react'
import { CustomPagination } from '../../../components/custom/CustomPagination';
import { products } from '../../../mocks/products.mock';

export const HomePage = () => {
    return (
        <>
            <CustomJumbotron title="Todos los productos" />

            <ProductsGrid products={products} />
            <CustomPagination totalPages={7} />
        </>

    )
}
