"use strict";

const { app, port } = require("./bin/express");

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
