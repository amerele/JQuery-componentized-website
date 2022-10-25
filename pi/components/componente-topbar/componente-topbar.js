let userlogado = JSON.parse(localStorage.getItem('userLogado'));
if ((userlogado)!== null){
    $('.login-site').hide();
    $('.user-logado').show();
    $('.gastos').css('display','block')
    $('.user-logado').html('Olá, '+ userlogado.nome.split(" ")[0])
}else{
    $('.login-site').show();
}


$('.user-logado').click(function(){
    $('.menu-user').toggleClass('ativo')
})

$('#sair').click(function(){
    
    localStorage.setItem('userLogado', ' ');
    window.location.href = 'login.html'
})
