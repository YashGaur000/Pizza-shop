import productOperations from "../services/product-operations";

async function showProduct(){
    const products= await productOperations.readAllProducts();
    console.log('i get products ', products);
}