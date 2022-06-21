const displayInput = document.querySelector('#display-input'),
      resultOuput = document.querySelector('#output-result'),
      numbers = document.querySelectorAll('.button');
//       numbers = Array.from(document.querySelectorAll('.button'));


// numbers.map(numbers => {
//   numbers.addEventListener('click', (e) => {
//       switch (e.target.innerText){
//         case 'C':
//           displayInput.innerHTML = ''; 
//           resultOuput.innerHTML = '';
//           break;
//         case 'CE':
//             displayInput.innerHTML = displayInput.innerText.slice(0, -1);
//             resultOuput.innerHTML = '';
//           break;
//         // case '=':
//         //   resultOuput.innerHTML = eval(displayInput.innerText);
//         //   break;
//         default:
//            displayInput.innerHTML += e.target.innerText;
//     };
//   })
// }) 
 

numbers.forEach((numbers) => {
  numbers.addEventListener('click', (e) => {
    
    if( e.target.innerText === 'C'
      ){
        displayInput.innerHTML = ''; 
        resultOuput.innerHTML = '';
    } else if (e.target.innerText === 'CE' ){
      displayInput.innerHTML = displayInput.innerText.slice(0, -1); 
      resultOuput.innerHTML = '';
    }  else if(e.target.innerText === '='){
      resultOuput.innerHTML = eval(displayInput.innerText);
      displayInput.innerHTML = eval(displayInput.innerText)    
    }else{
      displayInput.innerHTML += e.target.innerText;
    }
  })
})