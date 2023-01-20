import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";

export default async function HomePage() {
  const news: NewsResponse = await fetchNews(categories.join(","));

  console.log(news);

  return <div>{/* {NewsList news} */}</div>;
}
