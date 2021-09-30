import { apiRequest } from "./request";

export function search(category, name, query, setResult) {
  apiRequest(`${category}?${name}=${query}`, setResult);
}
