let btn = document.querySelector("#seepassword");
let btnConfirm = document.querySelector("#seepasswordconfirm");

let fullname = document.querySelector("#fullname");
let validationfullname = document.querySelector("#validationfullname");
let validfullname = false;

let maternalname = document.querySelector("#maternalname");
let validationmaternalname = document.querySelector("#validationmaternalname");
let validmaternalname = false;

let cpf = document.querySelector("#cpf");
let validationcpf = document.querySelector("#validationcpf");
let validcpf = false;

let birthday = document.querySelector("#birthday");
let validationbirthday = document.querySelector("#validationbirthday");
let validbirthday = false;

let phone = document.querySelector("#phone");
let validationphone = document.querySelector("#validationphone");
let validphone = false;

let address = document.querySelector("#address");
let validationaddress = document.querySelector("#validationaddress");
let validaddress = false;

let email = document.querySelector("#email");
let validationemail = document.querySelector("#validationemail");
let validemail = false;

let username = document.querySelector("#username");
let validationusername = document.querySelector("#validationusername");
let validusername = false;

let password = document.querySelector("#password");
let validationpassword = document.querySelector("#validationpassword");
let validpassword = false;

let passwordConfirmation = document.querySelector("#password-confirmation");
let validationconfirmpassword = document.querySelector(
  "#validationconfirmpassword"
);
let validpasswordConfirmation = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

fullname.addEventListener("keyup", () => {
  if (fullname.value.length <= 14) {
    validationfullname.setAttribute("style", "color: red");
    validationfullname.innerHTML = "Insira no mínimo 15 caracteres";
    fullname.setAttribute("style", "border-color: red");
    validfullname = false;
  } else {
    validationfullname.setAttribute("style", "color: green");
    validationfullname.innerHTML = "";
    fullname.setAttribute("style", "border-color: green");
    validfullname = true;
  }
});

maternalname.addEventListener("keyup", () => {
  if (maternalname.value.length <= 14) {
    validationmaternalname.setAttribute("style", "color: red");
    validationmaternalname.innerHTML = "Insira no mínimo 15 caracteres";
    maternalname.setAttribute("style", "border-color: red");
    validmaternalname = false;
  } else {
    validationmaternalname.setAttribute("style", "color: green");
    validationmaternalname.innerHTML = "";
    maternalname.setAttribute("style", "border-color: green");
    validmaternalname = true;
  }
});

cpf.addEventListener("keyup", () => {
  if (cpf.value.length <= 13) {
    validationcpf.setAttribute("style", "color: red");
    validationcpf.innerHTML = "Insira seu CPF corretamente.";
    cpf.setAttribute("style", "border-color: red");
    validcpf = false;
  } else {
    validationcpf.setAttribute("style", "color: green");
    validationcpf.innerHTML = "";
    cpf.setAttribute("style", "border-color: green");
    validcpf = true;
  }
});

birthday.addEventListener("keyup", () => {
  if (birthday.value.length <= 9) {
    validationbirthday.setAttribute("style", "color: red");
    validationbirthday.innerHTML = "Insira sua data de aniversáro.";
    birthday.setAttribute("style", "border-color: red");
    validbirthday = false;
  } else {
    validationbirthday.setAttribute("style", "color: green");
    validationbirthday.innerHTML = "";
    birthday.setAttribute("style", "border-color: green");
    validbirthday = true;
  }
});

phone.addEventListener("keyup", () => {
  if (phone.value.length <= 17) {
    validationphone.setAttribute("style", "color: red");
    validationphone.innerHTML = "Insira um número de telefone válido";
    phone.setAttribute("style", "border-color: red");
    validphone = false;
  } else {
    validationphone.setAttribute("style", "color: green");
    validationphone.innerHTML = "";
    phone.setAttribute("style", "border-color: green");
    validphone = true;
  }
});

address.addEventListener("keyup", () => {
  if (address.value.length <= 15 ) {
    validationaddress.setAttribute("style", "color: red");
    validationaddress.innerHTML = "Insira seu endereço completo";
    address.setAttribute("style", "border-color: red");
    validaddress = false;
  } else {
    validationaddress.setAttribute("style", "color: green");
    validationaddress.innerHTML = "";
    address.setAttribute("style", "border-color: green");
    validaddress = true;
  }
});

email.addEventListener("keyup", () => {
  if (email.value.length <= 14) {
    validationemail.setAttribute("style", "color: red");
    validationemail.innerHTML = "Insira no mínimo 15 caracteres";
    email.setAttribute("style", "border-color: red");
    validemail = false;
  } else {
    validationemail.setAttribute("style", "color: green");
    validationemail.innerHTML = "";
    email.setAttribute("style", "border-color: green");
    validemail = true;
  }
});

username.addEventListener("keyup", () => {
  if (username.value.length <= 5) {
    validationusername.setAttribute("style", "color: red");
    validationusername.innerHTML = "Insira no mínimo 6 caracteres";
    username.setAttribute("style", "border-color: red");
    validusername = false;
  } else {
    validationusername.setAttribute("style", "color: green");
    validationusername.innerHTML = "";
    username.setAttribute("style", "border-color: green");
    validusername = true;
  }
});

password.addEventListener("keyup", () => {
  if (password.value.length <= 7) {
    validationpassword.setAttribute("style", "color: red");
    validationpassword.innerHTML = "Insira no mínimo 8 caracteres";
    password.setAttribute("style", "border-color: red");
    validpassword = false;
  } else {
    validationpassword.setAttribute("style", "color: green");
    validationpassword.innerHTML = "";
    password.setAttribute("style", "border-color: green");
    validpassword = true;
  }
});

passwordConfirmation.addEventListener("keyup", () => {
  if (password.value != passwordConfirmation.value) {
    validationconfirmpassword.setAttribute("style", "color: red");
    validationconfirmpassword.innerHTML = "As senhas não conferem.";
    passwordConfirmation.setAttribute("style", "border-color: red");
    validpasswordConfirmation = false;
  } else {
    validationconfirmpassword.setAttribute("style", "color: green");
    validationconfirmpassword.innerHTML = "";
    passwordConfirmation.setAttribute("style", "border-color: green");
    validpasswordConfirmation = true;
  }
});

function cadastrar() {
  if (
    validfullname &&
    validmaternalname &&
    validcpf &&
    validbirthday &&
    validphone &&
    validaddress &&
    validemail &&
    validusername &&
    validpassword &&
    validpasswordConfirmation
  ) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");

    listaUser.push({
      fullnameCadastrado: fullname.value,
      maternalnameCadastrado: maternalname.value,
      cpfCadastrado : cpf.value,
      birthdayCadastro : birthday.value,
      phoneCadastrado: phone.value,
      addressCadastrado: address.value,
      emailCadastrado: email.value,
      usernameCadastrado: username.value,
      passwordCadastrado: password.value
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "<strong>Cadastrado com sucesso!</strong>";
    msgError.setAttribute("style", "display: none");
    msgError.innerHTML = "";

    setTimeout(() => {
      window.location.href = "login.html"
    });

  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de cadastrar.</strong>";
    msgSuccess.innerHTML = "";
    msgSuccess.setAttribute("style", "display: none");
  }
}

btn.addEventListener("click", () => {
  let inputSenha = document.querySelector("#password");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

btnConfirm.addEventListener("click", () => {
  let inputConfimSenha = document.querySelector("#password-confirmation");

  if (inputConfimSenha.getAttribute("type") == "password") {
    inputConfimSenha.setAttribute("type", "text");
  } else {
    inputConfimSenha.setAttribute("type", "password");
  }
});
