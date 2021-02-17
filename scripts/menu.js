const body = document.body;
const btn = document.querySelector('.nav-toggle');

btn.addEventListener('click', function(){
    body.classList.toggle('show');
});