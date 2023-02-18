//Blog button
document.getElementById('btn-blog').addEventListener('click',function(){
    window.location.href='blog.html';
    // window.open(
    //     "blog.html", "_blank");//new tab open
});

// card part start
let serial =0;
//first card
document.getElementById('first-card').addEventListener('click',function(){
  
    serial +=1;
    //get the data from html using id
    const areaName=document.getElementById('first-name').innerText;
    const areaBase=getElementInputVlaueByID('first-input-base');
    const areaHeight=getElementInputByID('first-input-height');
   
     //input field empty
     document.getElementById('first-input-base').value="";
     document.getElementById('first-input-height').value="";
 
    //  validation
   
     if(areaBase == '' || areaHeight =='' || areaBase <= 0 || areaHeight <=0){
         return alert ("please enter any valid number");
     }

    const areaTotal=(0.5) * (areaBase) * (areaHeight);
    // console.log(areaTotal,typeof areaTotal);
        //show the data
        displayData(areaName,areaBase,areaHeight,areaTotal);//function call 
     })

//2nd card
document.getElementById('second-card').addEventListener('click',function(){
  
    serial +=1; 
    //get the data from html using id
    const areaName=document.getElementById('second-name').innerText;
    const areaBase=getElementInputVlaueByID('second-input-width');
    const areaHeight=getElementInputByID('second-input-length');

     //input field empty
     document.getElementById('second-input-width').value="";
     document.getElementById('second-input-length').value="";
 
    //  validation
     if(areaBase == '' || areaHeight =='' || areaBase <= 0 || areaHeight <=0 ){
         return alert ("please enter any valid number");
     }

    const areaTotal=  (areaBase) * (areaHeight);
    // console.log(areaTotal,typeof areaTotal);
   
        //show the data
        displayData(areaName,areaBase,areaHeight,areaTotal);//function call
      
       
     })
//3rd card
document.getElementById('third-card').addEventListener('click',function(){
  
    serial +=1; 
    //get the data from html using id
    const areaName=document.getElementById('third-name').innerText;
    const areaBase=getElementInputVlaueByID('third-input-width');
    const areaHeight=getElementInputByID('third-input-length');

     //input field empty
     document.getElementById('third-input-width').value="";
     document.getElementById('third-input-length').value="";
 
    //  validation
     if(areaBase == "" || areaHeight =="" || areaBase <= 0 || areaHeight <=0 ){
         return alert ("please enter any valid number");
     }

    const areaTotal=  (areaBase) * (areaHeight).toFixed(2);
    // console.log(areaTotal,typeof areaTotal);
   
        //show the data
        displayData(areaName,areaBase,areaHeight,areaTotal);//function call
      
       
     })

//for 4th card..using html id
document.getElementById('fourth-card').addEventListener('click',function(){
    // console.log('click');
    serial +=1;
    //get the data from html using id
    const areaName=document.getElementById('fourth-name').innerText;
    const areaDiagonal=document.getElementById('fourth-diagonal').innerText;
    const areaDiagonal2=document.getElementById('fourth-diagonal2').innerText;
  
    const areaTotal= parseFloat(areaDiagonal*areaDiagonal2).toFixed(2);//total  
    //show the data
    displayData(areaName,areaDiagonal,areaDiagonal2,areaTotal);//function call
   
})

//for 5th card..using html id
document.getElementById('fifth-card').addEventListener('click',function(){
    // console.log('click');
    serial +=1;
    //get the data from html using id
    const areaName=document.getElementById('fifth-name').innerText;
    const areaBase=document.getElementById('fifth-base').innerText;
    const areaHeight=document.getElementById('fifth-height').innerText;
  
    const areaTotal= parseFloat(0.5*areaBase*areaHeight).toFixed(2);//total  
    //show the data
    displayData(areaName,areaBase,areaHeight,areaTotal);//function call
   
})

     //for 6th card..using html id
document.getElementById('six-card').addEventListener('click',function(){
    // console.log('click');
    serial +=1;
    //get the data from html using id
    const areaName=document.getElementById('six-name').innerText;
    const areaLength=document.getElementById('six-length').innerText;
    const areaBase=document.getElementById('six-base').innerText;
  
    const areaTotal= parseFloat(3.14*areaLength*areaBase).toFixed(2);//total  
    //show the data
    displayData(areaName,areaLength,areaBase,areaTotal);//function call
   
})


     //common function get Element Input By id
     function getElementInputVlaueByID(id){
        const areaBaseField=document.getElementById(id);
        const areaBaseFieldString=areaBaseField.value;
        const areaBase=parseFloat(areaBaseFieldString);
        return areaBase;
     }

     function getElementInputByID(id){
        const areaHeightField=document.getElementById(id);
        const areaHeightFieldString=areaHeightField.value;
        const areaHeight=parseFloat(areaHeightFieldString);
        return areaHeight;
     }

  //common function to display data
function displayData(areaName,areaBase,areaHeight,areaTotal,button){
    // create table row
    const container=document.getElementById('table-container');//get parent using id
    const tr= document.createElement('tr');//create tr
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${areaName}</td>
      <td>${areaBase}</td>
      <td>${areaHeight}</td>
      <td>${areaTotal}</td>
      
     

    `;
    container.appendChild(tr);//append tr...into parent
}
