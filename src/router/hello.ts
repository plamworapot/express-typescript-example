import express from 'express';
const router = express.Router();

router.get('/', function timeLog(_req, res) {
    return res.status(200).json({
        name: 'John Doe',
    });
});

export default router;
