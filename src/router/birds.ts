import express from 'express';
const router = express.Router();

router.use(function timeLog(_req, _res, next) {
    console.log('Time: ', Date.now());
    next();
});

// define the home page route
router.get('/', (_req, res) => {
    res.send('Birds home page');
});

// define the about route
router.get('/about', (_req, res) => {
    res.send('About birds');
});

export default router;
