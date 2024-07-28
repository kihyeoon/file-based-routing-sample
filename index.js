const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// 동적으로 라우트 설정
const routeDir = path.join(__dirname, "app");

function registerRoutes(dir, baseRoute = "") {
  fs.readdirSync(dir).forEach((file) => {
    const fullPath = path.join(dir, file);
    const routePath = path
      .join(baseRoute, file === "page.js" ? "" : file)
      // .replace(/\\/g, "/");

    console.log("fullPath ->", fullPath);
    console.log("routePath ->", routePath);

    if (fs.lstatSync(fullPath).isDirectory()) {
      registerRoutes(fullPath, routePath);
    } else if (file === "page.js") {
      const routeHandler = require(fullPath);
      const finalRoute =
        routePath === "" || routePath === "." ? "/" : `/${routePath}`;

      if (finalRoute.includes("[id]")) {
        const dynamicRoute = finalRoute.replace("[id]", ":id");
        app.get(dynamicRoute, routeHandler);
      } else {
        app.get(finalRoute, routeHandler);
      }
    }
  });
}

registerRoutes(routeDir);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
