const layout = require('./layout');

module.exports = (req, res) => {
  const content = `
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
    <a href="/about">About</a>
    <a href="/product/1">Product 1</a>
    <a href="/product/2">Product 2</a>
  `;
  res.send(layout(content));
};
