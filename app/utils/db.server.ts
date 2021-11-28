import { PSDB } from "planetscale-node";
import type { PSDB as PSDBClient } from "planetscale-node";

let db: PSDBClient;

declare global {
  var __db: PSDBClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  db = new PSDB("main");
} else {
  if (!global.__db) {
    global.__db = new PSDB("main");
  }
  db = global.__db;
}

export { db };
