import { getShoppingCart } from "../assets/utilities/fakedb";

const cartProductLoader = async () => {
    const response = await fetch('/fakeData/products.json');
    const products = await response.json();

            const storedCart = getShoppingCart();
        let finalCart = [];


        // object er upor for in loop
        for (const id in storedCart) {
            const addedProductInLocalStorage = products.find(product => product.id === id)  //finding added product from local storage using id (product{eita hoilo upor e sob product theke find koira ekta product er id} er id === addedProductInLocalStorage er id)

            if (addedProductInLocalStorage) {
                const quantity = storedCart[id];
                addedProductInLocalStorage.quantity = quantity;
                finalCart.push(addedProductInLocalStorage);
            }
        }

    return finalCart;
}

export default cartProductLoader;