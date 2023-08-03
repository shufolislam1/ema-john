const cartProductLoader = async () => {
    const response = await fetch('/fakeData/products.json');
    const products = await response.json();
    console.log(products);

}

export default cartProductLoader;