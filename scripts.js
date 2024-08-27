
        const to = document.getElementById("to");
        const from = document.getElementById("From");
        const convert = document.getElementById("convert");
        const result = document.getElementById("result");
        const amount = document.getElementById("amount");

        document.getElementById("currency-form").addEventListener("submit", function(event) {
            event.preventDefault();
            let fromCurrency = from.value;
            let toCurrency = to.value;
            let amt = amount.value;

            fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                let rate = data.rates[toCurrency];
                console.log(`rate - ${rate}`)
                let total = rate * amt;
                result.innerHTML = "Total: " + total.toFixed(2);
                console.log(total);
            })
            .catch(error => console.error('Error:', error));
        });
