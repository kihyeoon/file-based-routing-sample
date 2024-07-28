const layout = require('../../layout');

module.exports = (req, res) => {
  const { id } = req.params;
  const content = `
    <h1>Product Page</h1>
    <p>This is the page for product with ID: ${id}</p>
    <a href="/">Home</a>
  `;
  res.send(layout(content));
};
