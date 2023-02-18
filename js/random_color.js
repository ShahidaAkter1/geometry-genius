function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  document.getElementById('color-1').addEventListener("mouseover", function(e){
   e.target.style.backgroundColor = randomColor();
  });
  document.getElementById('color-2').addEventListener("mouseover", function(e){
   e.target.style.backgroundColor = randomColor();
  });
  document.getElementById('color-3').addEventListener("mouseover", function(e){
   e.target.style.backgroundColor = randomColor();
  });
  document.getElementById('color-4').addEventListener("mouseover", function(e){
   e.target.style.backgroundColor = randomColor();
  });
  document.getElementById('color-5').addEventListener("mouseover", function(e){
   e.target.style.backgroundColor = randomColor();
  });
  document.getElementById('color-6').addEventListener("mouseover", function(e){
   e.target.style.backgroundColor = randomColor();
  });
//   document.getElementById('color-2').addEventListener("mouseover", function(){
//     document.body.style.backgroundColor = randomColor();
//   });
//   document.getElementById('color-3').addEventListener("mouseover", function(){
//     document.body.style.backgroundColor = randomColor();
//   });
  
//   document.querySelector('color-1').addEventListener('mouseover', event => {
//         event.target.style.fill = randomColor();
//   });