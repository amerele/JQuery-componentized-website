let btn = $('.ver')

let nome = $('#nome')
let labelNome = $('#labelNome')
let validNome = false

let usuario = $('#usuario')
let labelUsuario = $('#labelUsuario')
let validUsuario = false

let senha = $('#senha')
let labelSenha = $('#labelSenha')
let validSenha = false

let confirmSenha = $('#confirmSenha')
let labelConfirmSenha = $('#labelConfirmSenha')
let validConfirmSenha = false

let msgError = $('#msgError')
let msgSuccess = $('#msgSuccess')

let botaotrocar = $('.trocar-login')
let cont = false;

nome.keyup(function() {
  if(nome.val().length <= 2){
    labelNome.css('color', 'red')
    labelNome.html('Nome *Insira no minimo 3 caracteres')
    nome.css('border-color', 'red')
    validNome = false
  } else {
    labelNome.css('color', 'green')
    labelNome.html('Nome')
    nome.css('border-color', 'green')
    validNome = true
  }
})

usuario.keyup(function() {
  if(usuario.val().length <= 4){
    labelUsuario.css('color', 'red')
    labelUsuario.html('Usuário *Insira no minimo 5 caracteres')
    usuario.css('border-color', 'red')
    validUsuario = false
  } else {
    labelUsuario.css('color', 'green')
    labelUsuario.html('Usuário')
    usuario.css('border-color', 'green')
    validUsuario = true
  }
})

senha.keyup(function() {
  if(senha.val().length <= 5){
    labelSenha.css('color', 'red')
    labelSenha.html('Senha *Insira no minimo 6 caracteres') 
    senha.css('border-color', 'red')
    validSenha = false
  } else {
    labelSenha.css('color', 'green')
    labelSenha.html('Senha')
    senha.css('border-color', 'green')
    validSenha = true
  }
})

confirmSenha.keyup(function() {
  if(senha.val() != confirmSenha.val()){
    labelConfirmSenha.css('color', 'red')
    labelConfirmSenha.html('Confirmar Senha *As senhas não conferem')
    confirmSenha.css('border-color', 'red')
    validConfirmSenha = false
  } else {
    labelConfirmSenha.css('color', 'green')
    labelConfirmSenha.html('Confirmar Senha')
    confirmSenha.css('border-color', 'green')
    validConfirmSenha = true
  }
})

function cadastrar(){
  if(validNome && validUsuario && validSenha && validConfirmSenha){
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
    
    listaUser.push(
    {
      nomeCad: nome.val(),
      userCad: usuario.val(),
      senhaCad: senha.val()
    }
    )
    
    localStorage.setItem('listaUser', JSON.stringify(listaUser))
    
   
    msgSuccess.show()
    msgSuccess.html('<strong>Cadastrando usuário...</strong>')
    msgError.hide()
    msgError.html('')
    
    setTimeout(()=>{
        window.location.href = 'login.html'
    }, 1000)
  
    
  } else {
    msgError.show()
    msgError.html('<strong>Preencha todos os campos corretamente antes de cadastrar</strong>')
    msgSuccess.html('')
    msgSuccess.hide()
  }
}
function entrar(){
  let usuario = document.querySelector('#usuariolog')
  let userLabel = document.querySelector('#userLabel')
  document.querySelector
  let senha = document.querySelector('#senhalog')
  let senhaLabel = document.querySelector('#senhaLabel')
  
  let msgError = document.querySelector('#msgError')
  let listaUser = []
  
  let userValid = {
    nome: '',
    user: '',
    senha: ''
  }
  
  listaUser = JSON.parse(localStorage.getItem('listaUser'))
  
  listaUser.forEach((item) => {
    if(usuario.value == item.userCad && senha.value == item.senhaCad){
       
      userValid = {
         nome: item.nomeCad,
         user: item.userCad,
         senha: item.senhaCad
       }
      
    }
  })
   
  if(usuario.value == userValid.user && senha.value == userValid.senha){
    window.location.href = 'index.html'
    
    
    let mathRandom = Math.random().toString(16).substr(2)
    let token = mathRandom + mathRandom
    
    localStorage.setItem('token', token)
    localStorage.setItem('userLogado', JSON.stringify(userValid))
  } else {
    userLabel.css('color', 'red')
    usuario.css('border-color', 'red')
    senhaLabel.css('color', 'red')
    senha.css('border-color', 'red')
    msgError.css('display', 'block')
    msgError.innerHTML = 'Usuário ou senha incorretos'
    usuario.focus()
  }
  
}

btn.click(function() {
  let inputSenha = $($(this).parent().children(':first-child'))
  
  if(inputSenha.attr('type') == 'password'){
    inputSenha.attr('type', 'text')
  } else {
    inputSenha.attr('type', 'password')
  }
})


botaotrocar.click(function() {
  if (cont == false){
    $('.card').hide();
    $('.card-b').show();
    cont = true;
  } else {
    $('.card').show();
    $('.card-b').hide();
    cont = false
  }

})
  
  
