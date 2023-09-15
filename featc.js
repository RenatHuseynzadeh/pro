const bodyy = document.querySelector('.bodyy')
const namee = document.querySelector('.name')
const email = document.querySelector('.email')
let yyy = 0

// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(response => response.json())
// .then(data => console.log(data))

 fetch('https://jsonplaceholder.typicode.com/comments')
 .then(response => response.json())
 .then(data => {  
    function doo() {
       namee.innerHTML=data[yyy].name
       bodyy.innerHTML=data[yyy].id
       email.innerHTML=data[yyy].email
       yyy = yyy+1
    }
       

      
    setInterval(doo,1000)
    
 
 })
 

//  for (let i = 0; i < 10; i++) {
    // email.innerHTML=data[yyy].name
    // yyy = yyy+1
// 
    // setTimeout(function() {
    //  console.log(1);
    // }, 1000)
//  }
 

// просто выведет 10 шт
//  fetch('https://jsonplaceholder.typicode.com/comments')
//  .then(response => response.json())
//  .then(data => {  
    // for (let i = 0; i < 10; i++) {
    //    console.log(data[i]);
    // }
    // 
//  
//  }) 