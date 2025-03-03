export async function wait(duration: number = 2000) {
  return new Promise((r) => setTimeout(r, duration));
}
