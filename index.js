const activeArr = [document.querySelector('.charlie-btn')];
const activeCard = [document.querySelector('.tab1')]; 

document.querySelector('.charlie-btn').classList.add('active');
document.querySelector('.tab1').classList.add('active-card');

const toggleClass = e => {
  activeArr.shift().classList.remove('active');
  activeArr.push(e.target);
  activeArr.forEach(button => button.classList.toggle('active'));
  showCard(e);
}

const showCard = e => {
  activeCard.shift().classList.remove('active-card');
  activeCard.push(document.querySelector(`.tab${e.target.id}`));
  activeCard.forEach(card => card.classList.toggle('active-card'));
}

document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', toggleClass)
});




//Mobile Nav

toggleMobileNav = e => {
  console.log(e.target)
  document.querySelector('input').classList.toggle('active-nav')
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active-nav');
  });
}

document.querySelector('.nav-bar').addEventListener('click', (e) => {
  toggleMobileNav(e);
})



