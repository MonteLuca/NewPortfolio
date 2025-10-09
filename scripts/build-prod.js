const fs = require('fs');
const path = require('path');

// Leer el archivo environment.prod.ts
const envPath = path.join(__dirname, '../src/environments/environment.prod.ts');
let envContent = fs.readFileSync(envPath, 'utf8');

// Reemplazar el valor vacío con la variable de entorno
const apiBaseUrl = process.env.PORTFOLIO_API_URL || process.env.API_BASE_URL || '';
envContent = envContent.replace("apiBase: ''", `apiBase: '${apiBaseUrl}'`);

// Escribir el archivo modificado
fs.writeFileSync(envPath, envContent);

console.log('Environment file updated with API_BASE_URL:', apiBaseUrl ? 'SET' : 'EMPTY');
