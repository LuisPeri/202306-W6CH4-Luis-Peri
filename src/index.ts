import http from 'http';
import { program } from 'commander';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8000;
program.parse();

if (PORT !== 8000) {
  console.log('wrong neightborhood nig');
  process.exit(-1);
}

const server = http.createServer((req, res) => {
  if (!req.url) {
    server.emit('error', new Error('404 bro'));
    return;
  }

  const a = 0;
  const b = 0;

  if (isNaN(a) || isNaN(b)) {
    server.emit(
      'error',
      new Error('bro i need numbers... bro thats a 400 error bro')
    );
  }

  const sum = a + b;
  const dif = a - b;
  const div = a / b;
  const mult = a * b;

  const htmlResponse = `
  <h1> calculator </h1>
  <p>${a} + ${b} = ${sum}</p>
  <p>${a} - ${b} = ${dif}</p>
  <p>${a} / ${b} = ${div}</p>
  <p>${a} * ${b} = ${mult}</p>
  `;

  res.write(htmlResponse);
  res.write(req.url);
});

server.listen(PORT);

server.on('listening', () => {
  console.log('Listening on port ' + PORT);
});

server.on('error', (error) => {
  console.log(error.message);
});
