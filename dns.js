const dns = require('dns');  
dns.lookup('www.rvngo.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
});  