import productOperations from "../services/product-operations.js";

async function showProducts(){
    const products= await productOperations.readAllProducts();
    for (let product of products){
        showCard(product);
    }
}showProducts();

/*
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
*/

// function showCard(){
//     const col = document.createElement('div');
//     col.className='col-4';
//     const cardDiv=document.createElement('div');
//     cardDiv.style="width: 18rem;";
//     cardDiv.className='card';
//     const img=document.createElement('img');
//     img.src=product.url;
//     img.className='card-img-top';
//     cardDiv.appendChild(img);
//     const cardBody = document.createElement('div');
//     cardBody.className='card-body';
//     cardDiv.appendChild(cardBody);
//     const h5tag = document.createElement('h5');
//     h5tag.className='card-title';
//     h5tag.innerText=product.name;
//     const ptag = document.createElement('p');
//     ptag.className='card-text';
//     ptag.innerText=product.dsc;
//     cardBody.appendChild(h5tag);
//     cardBody.appendChild(ptag);
//     const button = document.createElement('button');
//     button.innerText = 'Add to Cart';
//     button.className = 'btn btn-primary';
//     cardBody.appendChild(button);
//     col.appendChild(cardDiv);
//     document.querySelector('#output').appendChild(col);

// }

function showCard(product){
    const col = document.createElement('div'); //<div class="col-4">
    col.className = 'col-4';
    const cardDiv = document.createElement('div'); //<div>
    cardDiv.className = 'card';
    cardDiv.style = "width: 18rem;";
    const img = document.createElement('img');
    img.src = product.url;
    img.className = 'card-img-top';
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = product.name + " "+" Rs"+product.price;
    const pTag = document.createElement('p');
    pTag.innerText  = product.desc;
    pTag.className = 'card-text';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardDiv.appendChild(cardBody);
    const button = document.createElement('button');
    button.innerText = 'Add to Cart';
    button.className = 'btn btn-primary';
    cardBody.appendChild(button);
    col.appendChild(cardDiv);
    document.querySelector('#output').appendChild(col);
  }