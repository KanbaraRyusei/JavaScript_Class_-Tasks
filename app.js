const para = document.querySelector('.button');
console.log(para);
para.addEventListener('click', updateName);

function updateName() 
{
  let name = prompt('名前を入力して下さい');
  para.textContent = 'Player 1: ' + name;
}