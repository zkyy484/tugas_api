const axios = require('axios');
const xml2js = require('xml2js');

const jsonApiUrl = 'http://localhost:3000/api/json/items'; // URL API JSON

// Fungsi untuk mengambil data JSON dan mengonversinya menjadi XML
const fetchJsonAndConvertToXml = async () => {
    try {
        // Mengambil data dari API JSON
        const response = await axios.get(jsonApiUrl);
        const jsonData = response.data;

        // Membangun XML dari data JSON
        const builder = new xml2js.Builder();
        const xml = builder.buildObject({ items: { item: jsonData } });

        // Menampilkan hasil XML
        console.log(xml);
    } catch (error) {
        console.error('Error fetching JSON data:', error);
    }
};

// Memanggil fungsi
fetchJsonAndConvertToXml();
