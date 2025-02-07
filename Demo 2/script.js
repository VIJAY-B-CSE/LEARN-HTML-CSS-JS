document.querySelector('.menu-toggle').addEventListener('click',()=>{
    document.querySelector('.nav-links').classList.toggle('active')
})

document.getElementById('contact-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    alert('Your Message Has been Sent Successfully')
})