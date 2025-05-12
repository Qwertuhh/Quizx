import { PrismaClient } from "../generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

const database = new PrismaClient().$extends(withAccelerate());

async function callDB<T>(
  fn: (db: typeof database) => Promise<T>
): Promise<T | void> {
  try {
    const result = await fn(database);
    console.log("Result from database operation:", result);
    return result;
  } catch (error) {
    console.error("Error during database operation:", error);
  }
}

export { database, callDB };
