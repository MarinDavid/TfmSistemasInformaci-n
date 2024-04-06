const axios = require("axios");
const fs = require("fs");

const download = function (uri, filename, callback) {
  axios.head(uri)
    .then(response => {
      axios.get(uri, { responseType: 'stream' })
        .then(response => {
          response.data.pipe(fs.createWriteStream(filename))
            .on("close", callback);
        })
        .catch(error => {
          console.error('Error al descargar el archivo:', error);
          callback(error);
        });
    })
    .catch(error => {
      console.error('Error al obtener los encabezados:', error);
      callback(error);
    });
};

module.exports = { download };