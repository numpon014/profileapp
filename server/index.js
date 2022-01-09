const path = require('path');
const express = require('express');
const morgan = require('morgan')
const compression = require('compression');
const fs = require("fs");

const logger = require('./logger');
const argv = require('./argv');
const port = require('./port');

const app = express();
const appBuild = path.resolve(process.cwd(), './build')
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

app.use(compression());
app.use(express.static(appBuild, { maxAge: '7d' }));
app.use(morgan('combined', { stream: accessLogStream }))

const versionFile = path.resolve(appBuild, 'version.json');
app.get(['/version'], (req, res) => {
  res.set({
    'Content-Type': 'application/json'
  });
  res.sendFile(versionFile);
});

// AWS ELB pings this URL to make sure the instance is running
app.get(['/health'], (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': 2,
  });
  res.write('OK');
  res.end();
});

app.get('*', (req,res)=> {
  if (req.headers['x-forwarded-proto'] === 'http' && req.headers.host !== 'localhost') {
    res.redirect(`https://${  req.headers.host  }${req.url}`);
  }

  res.sendFile(path.resolve(appBuild, 'index.html'));
});

const customHost = argv.host || process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';

// eslint-disable-next-line consistent-return
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  logger.appStarted(port, prettyHost);
});

