import axios from "axios";

async function fetchData(url: string): Promise<unknown> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

console.log("=== GENERICS ====================");
console.log("=== Async typed function ========");
console.log(await fetchData("https://jsonplaceholder.typicode.com/posts/1"));
