const charlieBtn = document.querySelector('.charlie-btn');
const tabBtn = document.querySelectorAll('.tab-btn');
const activeArr = [charlieBtn];

const toggleClass = (e) => {
  activeArr.shift().classList.remove('active');
  activeArr.push(e.target)
  activeArr.forEach(button => button.classList.toggle('active'))
}

tabBtn.forEach(button => {
  button.addEventListener('click', toggleClass)
});



