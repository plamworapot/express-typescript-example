import express from 'express';
import { port } from './configs/common';
import helloController from './router/hello';
import birds from './router/birds';

const server = express();

server.use('/hello', helloController);

server.use('/birds', birds);


server.all('*', (_req, res) => {
    return res.status(404).end('404');
});


server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
});
