type HttpMethod = 'get' | 'post' | 'put' | 'delete';

interface IFetchQuery {
  endpoint: string;
  method?: HttpMethod;
  page?: number;
}

export type { IFetchQuery };