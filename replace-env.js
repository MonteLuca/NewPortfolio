const fs = require('fs');

const apiUrl = process.env.API_BASE_URL || '';
const file = 'src/environments/environment.prod.ts';

let content = fs.readFileSync(file, 'utf8');
content = content.replace("apiBase: ''", `apiBase: '${apiUrl}'`);
fs.writeFileSync(file, content);

console.log('API URL configured:', apiUrl ? 'YES' : 'NO');
