import { categories } from "../../../constants";
import fetchNews from "../../../lib/fetchNews";
import NewsList from "../../NewsList";

type Props = {
  params: { category: Category };
};

export default async function NewsCategoryPage({ params }: Props) {
  const news: NewsResponse = await fetchNews(params.category);

  return (
    <div>
      <h1 className="headerTitle">{params.category}</h1>
      <NewsList news={news} />
    </div>
  );
}

// prebuild category pages 
export async function generateStaticParams() {
    return categories.map(category => ({
       category: category 
    }));
}