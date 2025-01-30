import React from 'react';

const DynamicProductPage = async ({params, searchParams}) => {
    const productId = await params.productId;
    console.log(await searchParams);
    return (
        <div>
            this is a dynamic product page of {productId}
        </div>
    );
};

export default DynamicProductPage;