import 'dotenv/config';
import express from 'express';

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`Server running on the port ${process.env.PORT}`);
});
