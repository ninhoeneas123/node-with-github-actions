import "module-alias/register";
import express from "express";
import usersRouter from "./users/users.routes";

const app = express();

app.use(
  express.json(),
  usersRouter,
);
const port = 3001;


app.listen(port, async () => {
  console.log(`Server running on port ${port}`);
});
 export default  app;