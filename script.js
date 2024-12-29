var urls = document.querySelectorAll(".url ul li");
var data=[];
getRec("pizza");
for(var i=0;i<urls.length;i++)
{
    urls[i].addEventListener('click',function(e){
        var meal = e.target.innerHTML;
        getRec(meal);

      console.log(  e.target.innerHTML);
    })
}
function getRec(meal)
{

var https = new XMLHttpRequest();

https.open("get",`https://forkify-api.herokuapp.com/api/search?q=${meal}`); 
https.send();
https.addEventListener("load",function(){

   data = JSON.parse( https.response).recipes;
  
    displayCards()

    
})


}
function displayCards()
{
 var cards ='';

for(var i=0;i<data.length;i++)
{
    cards +=`
         <div class="card">
        <img src="${data[i].image_url}" alt="image Recipe">
        <div class="bottom-img">
            <h3>${data[i].title}</h3>
            <a href="${data[i].source_url}" target="_blank">source</a>
        </div>
         
     </div> 
    
    `
}

console.log(cards)
document.getElementById("mycards").innerHTML =cards;

}