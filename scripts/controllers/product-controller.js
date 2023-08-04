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

// {/* <div class="card mb-3" style="max-width: 540px;">
//   <div class="row g-0">
//     <div class="col-md-4">
//       <img src="..." class="img-fluid rounded-start" alt="...">
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//         <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
//       </div>
//     </div>
//   </div>
// </div> */}

function showCard(product){
    const col = document.createElement('div'); //<div class="col-4">
    col.className = 'col-4';
    const cardDiv = document.createElement('div'); //<div>
    cardDiv.className = 'card';
    cardDiv.style = "width: 18rem;";
    const img = document.createElement('img');                      
    img.src = product.urlToImage;
    img.className = 'card-img-top';
    cardDiv.appendChild(img);
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = product.title;
    const pTag = document.createElement('p');
    pTag.innerText  = product.publishedTime;
    pTag.className = 'card-text';
    cardBody.appendChild(h5);
    cardBody.appendChild(pTag);
    cardDiv.appendChild(cardBody);
    const button = document.createElement('button');
    button.innerText = 'Read now';
    button.className = 'btn btn-primary';
    cardBody.appendChild(button);
    col.appendChild(cardDiv);
    document.querySelector('#output').appendChild(col);
    const source = document.createElement('a');
    button.appendChild(source);
    source.className='srcurl';
    source.href = product.url;

  }

  // function showcards(){
  //   const card = document.createElement('div');
  //   card.style="max-width: 540px;";
  //   card.className='card mb-3';

  //   const row1 = document.createElement('div');
  //   row1.className='row g-0';
    
  //   const col1 = document.createElement('div');
  //   col1.className='col-md-4'

  //   const img = document.createElement('img');
  //   img.className='img-fluid rounded-start';
  //   img.src=product.urlToImage;

  //   const col2  = document.createElement('div');
  //   col2.className='col-md-8';

  //   const cardBody = document.createElement('div');
  //   cardBody.className='card-body';

  //   const h5 = document.createElement('h5');
  //   h5.className='card-title';
  //   h5.innerText='Play it';

  //   const p = document.createElement('p');
  //   p.className='card-text';

  //   card.appendChild(row);


  // }