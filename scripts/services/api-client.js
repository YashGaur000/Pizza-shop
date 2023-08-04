// function order(){
//     const promise=fetch(orderurl);
//     promise.then(function(response){
//         const promise =fetch(delurl);
//         promise.then(function(notiurl_to_user){

//         })
//     })
// }

                            // Solution

// async function order(){
//     const order = await fetch(orderurl);
//     const del = await fetch(delurl);
//     const noti = await fetch(notification_url);
//     return {order, del, noti};
// }
 
//              networkcalling

// async function doNetworkCall(){
//     const URL = "https://raw.githubusercontent.com/Skill-risers/pizzajson/main/pizza.json";
//     try{
//     const response = await fetch(URL);
//     const obj = await response.json();
//     return obj;
//     }
//     catch(err){ 
//         throw err;
//     }
// }export default doNetworkCall;

async function doNetworkCall(){
    console.log('Fn Starts');
    const URL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=0087737a84394e4f93eafb9bed4d9da5';
    try{
    const response = await fetch(URL); // Header + Body
    const obj = await response.json(); // JSON Convert into Object (DeSerialization)
    return obj;  //  Wrap in Promise   
}
    catch(err){
        throw err;
    }
}
export default doNetworkCall;

















// function callBack(response){
//     console.log('callback is ', response)
// }

// function doNetworkCall(callBack){
//     const url='https://gist.githubusercontent.com/kshirsagarps/36fade16fa39202715656ef487aaf7b0/raw/2b682e589ef283f06be42d2799dfa54f57794a6e/Pizza.json';
//     const promise= fetch(url);
//  Promise
//     console.log('promise is', promise);

//     promise.then(function(response){
//         console.log('responses',response)
//         callBack(response)
//     }).catch(function(err){
//         console.log('error is',err)
//     });
// }doNetworkCall(callBack)