let promiseMoney = new Promise(
    function(resolve, reject) {  
        setTimeout(() => {
            confirm(`Do you want to get money?`) ? resolve() : reject()
        }, 1000);
    }
);

promiseMoney.then(
    function() {
        let amount = prompt(`Enter amount`, `100`) || `100`;
        return amount; 
    },
    function() {
        let language = prompt(`Choose language for info: Ukrainian, German, English`, `Ukrainian`) || `Ukrainian`;
        return Promise.reject(language);
    }
)
.then (
    function(amount) {
        let currency = prompt(`Choose currency: USD, EUR, UAH`, `UAH`) || `UAH`;
        return {amount, currency};
    },
    function(language) {
        let email = prompt(`Enter email`, `anna@gmail.com`) || `anna@gmail.com`;
        return Promise.reject({language, email});
    }
)
.then (
    function(obj) {
        console.log(`Take ${obj.amount} ${obj.currency}, please.`);
    },
    function(obj) {
        console.log(`Information about the account was sent to the ${obj.email} in ${obj.language}.`);
    }
)
.then (
    function () {
        console.log(`Goodbye and have a good day!`);
    }
)
