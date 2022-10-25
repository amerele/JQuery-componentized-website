const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))
let Transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : []
let user = JSON.parse(localStorage.getItem('userLogado')).user;

const remove = ID => {
    Transactions = Transactions.filter(transaction => transaction.id !== ID);
    var thisTransaction = Transactions.filter(transaction => transaction.id === ID);
    updateLocalStorage();
    window.location.href = 'gastos.html';
}
const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+';
    const operatorclass = transaction.amount < 0 ? 'minus' : 'plus';
    const li = document.createElement('li');

    if (transaction.user == user){
        li.classList.add(operatorclass)
        li.innerHTML = `
            ${transaction.name} <span> ${operator} R$ ${Math.abs(transaction.amount)}</span><button class="delete-btn" onClick="remove(${transaction.id})">x</button>
        `
    
        $('#transactions').append(li);
    }
    
}


const generateID = () => Math.round(Math.random() * 1000)

$('#form').submit( event => {
    event.preventDefault();
    var novonome = $('#text').val();
    var novoamount = $('#amount').val();
    
    const novatransacao = {

        id : generateID(),
        name : novonome,
        amount : Number(novoamount),
        user : userlogado.user, 
        
    }
    Transactions.push(novatransacao);
    init();
    updateLocalStorage();
    
})

const updateBalanceValues = () => {
    const transactionsAmount = Transactions.map(transaction => transaction.amount);
    const usuario = Transactions.map(transaction => transaction.user);
    const soma = transactionsAmount.reduce((accumulator, transaction) => accumulator + transaction, 0 ).toFixed(2);
    const ganhos = transactionsAmount.filter(value => value > 0).reduce((accumulator, value) => accumulator + value, 0 ).toFixed(2);
    const gastos = Math.abs(transactionsAmount.filter(value => value < 0).reduce((accumulator, value) => accumulator + value, 0 )).toFixed(2);
        
    document.querySelector('#balance').textContent = `R$ ${soma}` ;
    document.querySelector('#money-plus').textContent = `R$ +${ganhos}`;
    document.querySelector('#money-minus').textContent = `R$ ${gastos}`;
        
}



const init = () => {
    transactions.innerHTML = '';
    Transactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
    if (Transactions.length){
        $('.transacoes').show()
    } else {
        $('.transacoes').hide()
    }

}

const updateLocalStorage = () => {
    localStorage.setItem('transactions', JSON.stringify(Transactions))
}
init()