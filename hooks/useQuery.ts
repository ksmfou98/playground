import { getTestList } from "api";
import { useQuery } from "react-query";

export default function useTestQuery() {
  const query = useQuery("testQuery", () => getTestList(), {
    cacheTime: 24 * 60 * 60 * 1000,
    staleTime: 24 * 60 * 60 * 1000,
  });

  return query;
}
