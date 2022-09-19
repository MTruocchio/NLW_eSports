import express from 'express';
const app = express();
app.get('/adds', (request, response) => {
    return response.json([
        { id: 1, name: 'anuncio 1' },
        { id: 2, name: 'anuncio 2' },
        { id: 3, name: 'anuncio 3' },
    ]);
});
app.listen(3333);
