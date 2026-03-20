const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "for the new testing CI/CD ",
    time: new Date().toISOString(),
  });
});

// Only start listening when this file is executed directly.
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = app;

