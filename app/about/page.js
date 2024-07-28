const layout = require('../layout');

module.exports = (req, res) => {
  const content = `
    <h1>About Page</h1>
    <p>This is the about page.</p>
    <a href="/">Home</a>
  `;
  res.send(layout(content));
};
