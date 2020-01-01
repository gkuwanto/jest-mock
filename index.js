const app = require('express')();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', async (req, res)=>{
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    res.send({data: response.data})
})

app.listen(3000, () => {
    /* eslint-disable no-console */
    console.log(`Server is running on port ${3000}.`);
    console.log(`Started at ${new Date().toUTCString()}`);
    /* eslint-enable no-console */
  });

module.exports = app;