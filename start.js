const app = require('./app');
var dash = require('appmetrics-dash');

const server = app.listen(process.env.PORT, () => {
  console.log(`Express is running on port ${server.address().port}`);
});

// Start monitoring dashboard
dash.monitor({server: server}); 