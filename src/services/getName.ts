export async function fetchName(): Promise<{ name: string }> {
  const response = await fetch(`http://localhost:3000/api/hello`);
  const result = await response.json();
  console.log(result.name);
  return result
}

export async function fetchNameLength(name: string): Promise<number> {
  const response = await fetch(`http://localhost:3000/api/${name}`);
  const result = await response.json();
  console.log(result);
  return result
}
