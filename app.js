const displayInput = document.querySelector('#display-input'),
      resultOuput = document.querySelector('#output-result'),
      numbers = document.querySelectorAll('.button');
 

numbers.forEach((numbers) => {
  numbers.addEventListener('click', (e) => {

    try{
      if( e.target.innerText === 'C'
      ){
        displayInput.innerHTML = ''; 
        resultOuput.innerHTML = '';
    } else if (e.target.innerText === 'CE' ){
      displayInput.innerHTML = displayInput.innerText.slice(0, -1); 
      resultOuput.innerHTML = '';
    }  else if ( e.target.innerText === '='){
      resultOuput.innerHTML = eval((displayInput.innerText).value);
      displayInput.innerHTML = eval(displayInput.innerText.value)    
    }else{
      displayInput.innerHTML += e.target.innerText;
    }
    }catch(e){
      displayInput.innerHTML =' ERROR';
    }
   
  })
})