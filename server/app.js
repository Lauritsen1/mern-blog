const express = require('express');
const path = require('path');
const logger = require('morgan');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./configs/db');
const port = process.env.PORT || 5000;
const cors = require('cors');

connectDB();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html')));
} else {
    app.get('/', (req, res) => res.send('Server is in Dev mode'));
}

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`))

module.exports = app;
