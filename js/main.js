const subscribe = document.querySelector('.btn-subscribe');
const form = document.querySelector('.form-subscribe');
const info = document.querySelector('.subscribe-info');


subscribe.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('click');
    form.innerHTML = '<h3>Thank You!</h3><p>Soon You will receive our new updates, arrivals, and our latest news</p>';
    form.style.textAlign = 'center';
    info.style.display = 'none';
})
