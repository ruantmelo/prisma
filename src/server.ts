import { app } from "./app";

const PORT = process.env.PORT || 3333;
const server = app.listen(3333, () => {
  console.log("Server is listening on port " + PORT);
});
