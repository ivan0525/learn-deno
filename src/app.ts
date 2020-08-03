import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { getDogs } from './DogController.ts'
const env = Deno.env.toObject();
const PORT = env.PORT || 4000;
const HOST = env.HOST || "127.0.0.1";
const router = new Router();

const app = new Application();

router
  .get('/dogs', getDogs)

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Listening on port ${PORT}...`);

await app.listen(`${HOST}:${PORT}`);
