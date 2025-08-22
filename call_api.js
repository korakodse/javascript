const axios = require('axios');

    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
        console.log(response.data.message);
    })
    .catch(error => {
        console.error('Error : ',error);
    })
    .finally(() => {
        console.log('Request completed');
    });