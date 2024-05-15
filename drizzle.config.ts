import type { Config } from "drizzle-kit";

export default {
  schema: "./schema.ts",
  out: "./drizzle",
  driver: "d1",
  dialect: "sqlite",
  dbCredentials: {
    wranglerConfigPath: "wrangler.toml",
    dbName: "d1-tutorial",
  },
} satisfies Config;
