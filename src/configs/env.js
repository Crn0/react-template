import z from 'zod';

const toCamelCase = (str) =>
  str
    .toLowerCase()
    .split('_')
    .map((v, i) => (i === 0 ? v : v[0].toUpperCase() + v.slice(1)))
    .join('');

let isInit = false;

const envMap = {};

const initEnv = () => {
  if (isInit) return;

  const EnvSchema = z.object({
    SERVER_URL: z.string().optional().default('http://localhost:3000'),
    SERVER_MOCK_API_PORT: z.string().optional().default('8080'),
    API_VERSION: z.coerce.number().default(1),
    TOKEN_SECRET: z.string().default('secret'),
  });

  const env = Object.entries(import.meta.env);

  const envVars = env.reduce((acc, curr) => {
    const [key, value] = curr;
    if (key.startsWith('VITE_')) {
      acc[key.replace('VITE_', '')] = value;
    }
    return acc;
  }, {});

  const parsedEnv = EnvSchema.safeParse(envVars);

  if (!parsedEnv.success) {
    throw new Error(
      `Invalid env provided.
The following variables are missing or invalid:
${Object.entries(parsedEnv.error.flatten().fieldErrors)
  .map(([k, v]) => `- ${k}: ${v}`)
  .join('\n')}
`,
    );
  }

  isInit = true;

  Object.entries(parsedEnv.data).forEach(([key, value]) => {
    const newKey = toCamelCase(key);
    envMap[newKey] = value;
  });
};

const getValue = (key) => {
  if (!isInit) throw new Error('Initialize the env first');
  if (!(key in envMap)) throw new Error(`Missing environment variable: ${key}`);

  return envMap[key];
};

const getEnv = () => {
  if (!isInit) throw new Error('Initialize the env first');

  return { ...envMap };
};

export { initEnv, getValue, getEnv };
