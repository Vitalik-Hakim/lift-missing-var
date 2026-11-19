const http = require("node:http");

// The seeded mistake: GREETING is required, and nothing sets it.
const greeting = process.env.GREETING;
if (!greeting) {
  console.error("Missing required environment variable GREETING (see .env.example)");
  process.exit(1);
}

const port = Number(process.env.PORT ?? 3000);
http
  .createServer((_request, response) => {
    response.writeHead(200, { "content-type": "text/plain" });
    response.end(`${greeting}\n`);
  })
  .listen(port, () => console.log(`Listening on port ${port}`));
