
const nav = document.querySelector('.navbar');
const topBtn = document.querySelector('.back-to-top');

function updateScrollUI(){
  const y = window.scrollY;
  nav?.classList.toggle('scrolled', y > 20);
  topBtn?.classList.toggle('show', y > 500);
}
window.addEventListener('scroll', updateScrollUI);
updateScrollUI();

topBtn?.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

document.querySelectorAll('a.nav-link[href^="#"]').forEach(link=>{
  link.addEventListener('click',()=>{
    const collapse=document.querySelector('.navbar-collapse.show');
    if(collapse && window.jQuery){ window.jQuery(collapse).collapse('hide'); }
  });
});

const form=document.getElementById('consultForm');
form?.addEventListener('submit',e=>{
  e.preventDefault();
  const name=document.getElementById('name');
  const email=document.getElementById('email');
  const phone=document.getElementById('phone');
  const msg=document.getElementById('formMessage');

  if(!name.value.trim() || !email.validity.valid || phone.value.trim().length<9){
    msg.className='alert alert-warning mt-3';
    msg.textContent='Vui lòng nhập đầy đủ họ tên, email hợp lệ và số điện thoại.';
    return;
  }
  msg.className='alert alert-success mt-3';
  msg.textContent='Đăng ký tư vấn mẫu đã được ghi nhận trên giao diện thực hành.';
  form.reset();
});
