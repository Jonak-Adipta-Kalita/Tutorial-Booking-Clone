import { fetchResults } from "@/lib/fetchResults";
import { SearchParams } from "@/typings";
import { notFound } from "next/navigation";

const SearchPage = async ({ searchParams }: { searchParams: SearchParams }) => {
  if (!searchParams.url) return notFound();

  const results = await fetchResults(searchParams);

  if (!results)
    return (
      <div className="flex items-center justify-center mt-10">
        <p className="font-bold text-lg">No Results...</p>
      </div>
    );

  return <div></div>;
};

export default SearchPage;
