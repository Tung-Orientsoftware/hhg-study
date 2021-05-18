import { DEFAULT_LIMIT, DEFAULT_PAGE } from "constant";
import { IFetchQuery } from "interface";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

const HOST = process.env.REACT_APP_API_HOST;

export function useFetchWithPagination<T>(config: IFetchQuery) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T[]>([]);
  const [total, setTotal] = useState<number>(0);

  const { endpoint = "", page } = config;

  const params = useMemo(function () {
    return {
      limit: DEFAULT_LIMIT,
      page: page || DEFAULT_PAGE,
      sortBy: "createdAt",
      order: "desc"
    }
  }, [page])

  const fetchData = useCallback(async function () {
    const url = `${HOST}/${endpoint}`;
    setIsLoading(true);
    const { data } = await axios.get(url, { params });
    setData(data.items);
    setTotal(data.count);
    setIsLoading(false);
  }, [params, endpoint])

  useEffect(function () {
    fetchData()
  }, [fetchData]);

  return { data, isLoading, total, fetchData };
}
