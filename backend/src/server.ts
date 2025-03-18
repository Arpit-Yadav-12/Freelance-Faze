import dotenv from "dotenv";
dotenv.config();

console.log(
  "Clerk Secret Key:",
  process.env.CLERK_SECRET_KEY ? "Loaded ✅" : "Not Loaded ❌"
);
