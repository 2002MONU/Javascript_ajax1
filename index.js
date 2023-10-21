console.log('This is my first code');


let fetchBtn = document.getElementById('fetchBtn');
 fetchBtn.addEventListener('click',buttonclickHandler)

 function buttonclickHandler(){
   console.log('Ypu have click the button');

     const xhr = new XMLHttpRequest();

     //open the object
     xhr.open('GET', 'monu.txt', true);

      //what to do on progress  
// optional ha 
      xhr.onprogress = function(){
        console.log('On progress');
      }

     xhr.onload = function(){
        console.log(this.responseText);
     }

     //send the request

     xhr.send();
 }