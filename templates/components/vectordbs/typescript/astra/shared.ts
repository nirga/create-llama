export const CHUNK_SIZE = 512;
export const CHUNK_OVERLAP = 20;

const REQUIRED_ENV_VARS = [
  "ASTRA_DB_APPLICATION_TOKEN",
  "ASTRA_DB_ENDPOINT",
  "ASTRA_DB_COLLECTION",
];

export function checkRequiredEnvVars() {
  const missingEnvVars = REQUIRED_ENV_VARS.filter((envVar) => {
    return !process.env[envVar];
  });

  if (missingEnvVars.length > 0) {
    console.log(
      `The following environment variables are required but missing: ${missingEnvVars.join(
        ", ",
      )}`,
    );
    throw new Error(
      `Missing environment variables: ${missingEnvVars.join(", ")}`,
    );
  }
}
