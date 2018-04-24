const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=5ac9b2136e167af4b58143c29bc6654d`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}