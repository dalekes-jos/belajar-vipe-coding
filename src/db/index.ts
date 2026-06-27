import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema from "./schema";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is missing");
}

// Create the connection pool for MySQL
const connection = mysql.createPool(connectionString);

// Initialize Drizzle ORM
export const db = drizzle(connection, { schema, mode: "default" });
