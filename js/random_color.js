// function randomColor() {
//     let color = [];
//     for (let i = 0; i < 3; i++) {
//       color.push(Math.floor(Math.random() * 256));
//     }
//     return 'rgb(' + color.join(', ') + ')';
//   } 
  
//   document.getElementById('color-1').addEventListener("mouseover", function(e){
//    e.target.style.backgroundColor = randomColor();
//   });
//   document.getElementById('color-2').addEventListener("mouseover", function(e){
//    e.target.style.backgroundColor = randomColor();
//   });
//   document.getElementById('color-3').addEventListener("mouseover", function(e){
//    e.target.style.backgroundColor = randomColor();
//   });
//   document.getElementById('color-4').addEventListener("mouseover", function(e){
//    e.target.style.backgroundColor = randomColor();
//   });
//   document.getElementById('color-5').addEventListener("mouseover", function(e){
//    e.target.style.backgroundColor = randomColor();
//   });
//   document.getElementById('color-6').addEventListener("mouseover", function(e){
//    e.target.style.backgroundColor = randomColor();
//   });


//   document.getElementById('color-2').addEventListener("mouseover", function(){
//     document.body.style.backgroundColor = randomColor();
//   });
//   document.getElementById('color-3').addEventListener("mouseover", function(){
//     document.body.style.backgroundColor = randomColor();
//   });
  

//   document.querySelector('color-1').addEventListener('mouseover', event => {
//         event.target.style.fill = randomColor();
//   });

// ================
// $(function(){
//     var $container = $('#container');

//     $container.mousemove(function(){
//       var rgb = [
//         parseInt(Math.random() * 255),
//         parseInt(Math.random() * 255),
//         parseInt(Math.random() * 255)
//       ]; // generating array of Red Green Blue numbers (will be used to change background color)
//       $container
//         .css('background-color', 'rgb(' + rgb.join(',') + ')')
//         .css('color', 'rgb(' + [255-rgb[0], 255-rgb[1], 255-rgb[2]].join(',') + ')');
//     });
//   });

//   =========================
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }
  return 'rgb(' + color.join(', ') + ')';
} 

document.addEventListener("mouseover", function(){
  document.body.style.backgroundColor = randomColor();
});


document.addEventListener("mouseout", function(){
    document.body.style.backgroundColor = 'none';
  });
// ====================
// const cards=document.getElementById('container');
// for(const card of cards){
//     card.addEventListener('mouseover',function(){
//         let color = [];
//   for (let i = 0; i < 3; i++) {
//     color.push(Math.floor(Math.random() * 256));
//   }
 
// } 
//     })
//     return 'rgb(' + color.join(', ') + ')';
// }

 