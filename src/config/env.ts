import { z } from "zod";

const nodeEnv = z.enum(["development", "production", "test"]);

function requiredOnEnv(env: z.infer<typeof nodeEnv>) {
  return (value: any) => {
    if (env === process.env.NODE_ENV) {
      return value;
    }
    return true;
  };
}

const envSchema = z.object({
  NODE_ENV: nodeEnv.default("development"),
});

export const env = envSchema.parse(process.env);
