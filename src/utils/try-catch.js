export default async function tryCatch(promise) {
  const thing = typeof promise === 'function' ? promise() : promise;

  try {
    const data = await thing;
    return { data, error: null };
  } catch (error) {
    return { error, data: null };
  }
}
