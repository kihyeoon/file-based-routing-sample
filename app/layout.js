const layout = (content) => `
  <html>
    <head>
      <title>My App</title>
    </head>
    <body>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </header>
      <main>
        ${content}
      </main>
    </body>
  </html>
`;

module.exports = layout;
