let btn = document.querySelector(".fa-eye");

btn.addEventListener("click", () => {
  let inputSenha = document.querySelector("#password");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

function entrar(){
  let username = document.querySelector('#username')
  let validationusername = document.querySelector('#validationusername')

  let password = document.querySelector('#password')
  let validationpassword = document.querySelector('#validationpassword')

  let msgError = document.querySelector('msgError')
  let listaUser = []

  let userValid = {
    fullname: " ",
    maternalname: " ",
    cpf: " ",
    birthday: " ",
    phone: " ",
    address: " ",
    email: " ",
    username: " ",
    password: " "
  }

  listaUser = JSON.parse(localStorage.getItem('listaUser'))

  listaUser?.forEach((item) =>{
    if(username.value == item.usernameCadastrado && password.value == item.passwordCadastrado){
        userValid = {
          fullname: item.fullnameCadastrado,
          maternalname: item.maternalnameCadastrado,
          cpf: item.cpfCadastrado,
          birthday: item.birthdayCadastrado,
          phone: item.phoneCadastrado,
          address: item.addressCadastrado,
          email: item.emailCadastrado,
          username: item.usernameCadastrado,
          password: item.passwordCadastrado
        }
    }
  })

  if(username.value == userValid.username == true && password.value == userValid.password == true){
    window.location.href = "index.html"
  } else{
    validationusername.setAttribute("style", "color: red");
    username.setAttribute("style", "border-color: red");
    validationpassword.setAttribute("style", "color: red");
    password.setAttribute("style", "border-color: red");
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = "Usuário ou senha incorretos"
    username.focus();
  }
}