function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  
  function passId(id){
    const get=document.getElementById(id);
    get.style.backgroundColor=randomColor();
    get.style.border='1px solid blue';
  
  }
  
  
  //1
  document.getElementById('color-1').addEventListener('mouseover',function(){
    const first=passId('color-1');
  })
  
  document.getElementById('color-1').addEventListener('mouseout',function(){
    const getId=document.getElementById('color-1');
    getId.style.backgroundColor='white';
    getId.style.border='none';
  })
  
  
  //2
  document.getElementById('color-2').addEventListener('mouseover',function(){
    const first=passId('color-2');
  })
  
  document.getElementById('color-2').addEventListener('mouseout',function(){
    const getId=document.getElementById('color-2');
    getId.style.backgroundColor='white';
    getId.style.border='none';
  })
  
  //3
  document.getElementById('color-3').addEventListener('mouseover',function(){
    const first=passId('color-3');
  })
  
  document.getElementById('color-3').addEventListener('mouseout',function(){
    const getId=document.getElementById('color-3');
    getId.style.backgroundColor='white';
    getId.style.border='none';
  })
  
  
  //4
  document.getElementById('color-4').addEventListener('mouseover',function(){
    const first=passId('color-4');
  })
  
  document.getElementById('color-4').addEventListener('mouseout',function(){
    const getId=document.getElementById('color-4');
    getId.style.backgroundColor='white';
    getId.style.border='none';
  })
  
  //5
  document.getElementById('color-5').addEventListener('mouseover',function(){
    const first=passId('color-5');
  })
  
  document.getElementById('color-5').addEventListener('mouseout',function(){
    const getId=document.getElementById('color-5');
    getId.style.backgroundColor='white';
    getId.style.border='none';
  })
  
  
  //6
  document.getElementById('color-6').addEventListener('mouseover',function(){
    const first=passId('color-6');
  })
  
  document.getElementById('color-6').addEventListener('mouseout',function(){
    const getId=document.getElementById('color-6');
    getId.style.backgroundColor='white';
    getId.style.border='none';
  })