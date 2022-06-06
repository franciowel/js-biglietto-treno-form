const generateButton = document.getElementById('formula-ticket');
generateButton.addEventListener('click',
    function() {
        const userName = document.getElementById('username').value;
        const userDistance = parseInt(document.getElementById('usertrip').value )
        const userAge = document.getElementById('userage').value;
        
        // formula generale del ticket no discount
        const price = userDistance * 0.21;
        let discount = 0;
        
        // calcolo dello sconto
        if(userAge === 'minorenne') {
            discount = price * 20 / 100;
        } else if (userAge === 'over') {
            discount = price * 40 / 100;
        }

        // formula del prezzo finale matematico
        const finalPrice = price - discount;

        // converto il risultato in un numero leggibile
        let TrainTicket = finalPrice.toFixed(2);

        // formula per generare codice carrozza
        const numberWagon = Math.floor(Math.random() * 10);
        console.log(numberWagon);

        // formula per generare codice univoco
        const CPCodeNum = Math.floor(Math.random() * 10000);
        console.log(CPCodeNum);


        // STAMPO IN PAGINA
        document.getElementById('customer-name').innerHTML = userName;
        document.getElementById('your-ticket').innerHTML = TrainTicket;

        document.getElementById('your-wagon').innerHTML = numberWagon;
        document.getElementById('your-code-cp').innerHTML = CPCodeNum;
        document.getElementById('ticket').classList.add('active');
    }


);

// cancellare le vecchie instanceof, non si sa mai devo calcorare più ticket
const cancelTicket = document.getElementById('annulla-ticket');
cancelTicket.addEventListener('click',
    function() {
        document.getElementById('username').value = '';
        document.getElementById('usertrip').value = '';
        document.getElementById('userage').value = 'maggiorenne';
        
        // funzione che ci toglie dalla view il ticket
        document.getElementById('ticket').classList.remove('active');
    }
)
