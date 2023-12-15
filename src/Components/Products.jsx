const Products = ({products}) => {
    // Instructions:
    //     1. Import the products state as props
    //     2. Loop over using #map 
    //     3. Show the product name in an h1, and the product price in a p tag

    return products.map( (product) => (
        <>
        <h1>{product.productData.name}</h1>
        <p>${product.productData.pricing}</p>
        </>
    ));
}

export default Products