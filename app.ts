import express from 'express';

const app = express();

app.use((_, res) => {
    res.status(200).json({
        message: 'Hello World!'
    });
});

export default app;