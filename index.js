const cors = require('cors');
const express = require('express');
const app = express();
const developersRouter = require('./router/developer');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', developersRouter);
app.listen(3000);
app.use((req, res) => {
    res.status(404).send({ url: `${req.originalUrl} not found` });
});

console.log(`server running on 3000`)