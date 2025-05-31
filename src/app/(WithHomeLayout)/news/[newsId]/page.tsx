import NewsDetailScreen from "../../_components/module/news/newsDetail/NewsDetail";

interface TNewsDetailsPageProps {
  params: Promise<{
    newsId: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function NewsDetailsPage({
  params,
  searchParams,
}: TNewsDetailsPageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  console.log("resolvedSearchParams=>", resolvedSearchParams);
  return <NewsDetailScreen newsId={resolvedParams.newsId} />;
}
