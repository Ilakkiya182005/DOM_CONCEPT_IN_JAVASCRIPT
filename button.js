function handleRed(){
    document.getElementById('first-button').classList.add('red');
    document.body.style.background='red';
  
}
function handleBlue(){
    document.getElementById('second-button').classList.add('blue');
    document.body.style.background='blue';
   
}
function handleGreen(){
    document.getElementById('third-button').classList.add('green');
    document.body.style.background='green';
}
function handleClick(){
    document.body.style.background='white';
    // document.querySelectorAll(button).style.background='white';
    document.getElementById('first-button').classList.remove('red');
    document.getElementById('second-button').classList.remove('blue');
    document.getElementById('third-button').classList.remove('green');
}