const axios = require('axios');

axios.post('http://localhost:3080/api/user', { name: 'BFMS', email: 'bfms@bfms.com', password: 'bfms@', role: 'ADMIN'});






// (async () =>  {
//     const r = await axios.get('http://localhost:3080/api/sync');
//     console.log(r.data[0].dados)
// })();