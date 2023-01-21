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
