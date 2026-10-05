const form=document.getElementById("registerForm");
const fields={
  fullName:document.getElementById("fullName"),
  email:document.getElementById("email"),
  password:document.getElementById("password"),
  confirmPassword:document.getElementById("confirmPassword"),
  terms:document.getElementById("terms")
};

document.querySelectorAll(".toggle").forEach(button=>{
  button.addEventListener("click",()=>{
    const input=document.getElementById(button.dataset.target);
    const showing=input.type==="text";
    input.type=showing?"password":"text";
    button.textContent=showing?"Hiện":"Ẩn";
    button.setAttribute("aria-label",showing?"Hiện mật khẩu":"Ẩn mật khẩu");
  });
});

function setError(input,message){
  const error=document.getElementById(input.id+"Error");
  if(error) error.textContent=message;
  if(input.type!=="checkbox") input.setAttribute("aria-invalid",message?"true":"false");
}

function validate(){
  let valid=true;
  const name=fields.fullName.value.trim();
  const email=fields.email.value.trim();
  const password=fields.password.value;
  const confirm=fields.confirmPassword.value;

  if(name.length<2){setError(fields.fullName,"Vui lòng nhập họ và tên.");valid=false}
  else setError(fields.fullName,"");

  if(!fields.email.validity.valid){setError(fields.email,"Vui lòng nhập đúng định dạng email.");valid=false}
  else setError(fields.email,"");

  if(password.length<8){setError(fields.password,"Mật khẩu cần có ít nhất 8 ký tự.");valid=false}
  else setError(fields.password,"");

  if(!confirm){setError(fields.confirmPassword,"Vui lòng nhập lại mật khẩu.");valid=false}
  else if(confirm!==password){setError(fields.confirmPassword,"Mật khẩu xác nhận chưa khớp.");valid=false}
  else setError(fields.confirmPassword,"");

  document.getElementById("termsError").textContent=fields.terms.checked?"":"Vui lòng xác nhận trước khi đăng ký.";
  if(!fields.terms.checked) valid=false;
  return valid;
}

["fullName","email","password","confirmPassword"].forEach(id=>{
  fields[id].addEventListener("input",()=>{ if(fields[id].getAttribute("aria-invalid")==="true") validate(); });
});

form.addEventListener("submit",event=>{
  event.preventDefault();
  if(!validate()){
    const firstInvalid=form.querySelector('[aria-invalid="true"]');
    if(firstInvalid) firstInvalid.focus();
    return;
  }
  const name=encodeURIComponent(fields.fullName.value.trim());
  location.href="success.html?name="+name;
});