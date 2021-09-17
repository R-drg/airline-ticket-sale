import express from 'express';
import { getRequiredVariable } from './object-utils.js';
import { UserController, USER_CONTROLLER_BASE_URL } from './controllers/UserController.js';
import { ApiError, NotFoundError } from './error/Error.js';

const PORT = getRequiredVariable('SERVER_PORT');
const app = express();

const router = express.Router();

app.use(express.json());

router.use(USER_CONTROLLER_BASE_URL, UserController);

app.use("/api/v1", router);

app.use(function (req, res, next) {
  const response = new NotFoundError();
  res.status(response.statusCode).send(response.getBody());
});

app.use(async (err, req, res, next) => {
  console.error(err.stack);
  const response = err instanceof ApiError ? err : new ApiError();
  return res.status(response.statusCode).send(response.getBody());
});

app.listen(PORT, () => {
  console.log(`🚀 deploy realizado no endereço http://localhost:${PORT}`);
});