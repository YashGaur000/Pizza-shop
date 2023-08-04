// import Product from "../Models/product.js";
// import doNetworkCall from "./api-client.js";

// const productOperations={
//     sort(){

//     },
//     search(){

//     },
//     async readAllProducts(){
//         const object = await doNetworkCall();
//         const pizzas = await object['Vegetarian'];
//         const products=[];
//         for(let pizza of pizzas){
//             const product = new Product(
//                 pizza.id, pizza.name, pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url)
//                 products.push(product);
//         }return products;
//     }
// }
// export default productOperations;

import Product from '../Models/product.js';
import doNetworkCall from './api-client.js';
const productOperations = {
    sort(){

    },
    search(){

    },
    async readAllProducts(){
        const object = await doNetworkCall();
        const allNews = object['articles'];
        const products =[];
        console.log('allnews')
        for(let news of allNews){
            console.log('allnews')
            const info = new Product(news.title, 
                news.publishedAt,news.urlToImage
                ,news.url)
                products.push(info);
            }
            return products;
    }
}
export default productOperations;