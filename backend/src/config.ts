import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT),
});

pool
  .connect()
  .then(() => console.log("✅ PostgreSQL Connected..."))
  .catch((err) => console.error("❌ Database connection failed", err));

export default pool;
