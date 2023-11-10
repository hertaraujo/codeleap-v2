export type PaginatedResponseData<Type> = {
  count: number;
  next: number | null;
  previous: number | null;
  results: Type[];
};
