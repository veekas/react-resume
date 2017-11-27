/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const morgan = require('morgan');
const compression = require('compression');

const PORT = process.env.PORT || 3213;
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

app.use(morgan('dev'));

// app.use(require('webpack-dev-middleware')(compiler, {
//   noInfo: true,
//   publicPath: config.output.publicPath,
//   stats: { colors: true },
// }));

// app.use(require('webpack-hot-middleware')(compiler));

app.get('/favicon.ico', (req, res) => {
  res.send(path.join(__dirname + 'favicon.ico'));
});

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.use((err, req, res) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
