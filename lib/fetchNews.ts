const fetchNews = async (
  category?: Category | string,
  keywords?: string,
  isDynamic?: boolean
) => {
  // GraphQL query
  // Fetch function with Next.js 13 chaching
  // Sort function by images vs not images present
  // return
};

export default fetchNews;


// Example import for StepZen
// stepzen import curl http://api.mediastack.com/v1/news?access_key={api_key}&countries=us%2Cgb&limit=100&offset=0&sort=published_desc