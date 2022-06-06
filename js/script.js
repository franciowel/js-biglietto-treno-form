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

        // STAMPO IN PAGINA
        document.getElementById('customer-name').innerHTML = userName;
        document.getElementById('your-ticket').innerHTML = TrainTicket;
    }


);