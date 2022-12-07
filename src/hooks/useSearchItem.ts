const useSearchItem = (query: string, coversList: []): never[] => {
  if (query === "") return coversList;
  const result = coversList.filter((coverItem: any) => coverItem.email.indexOf(query) !== -1);
  if (query && result.length === 0) return [];
  return result;
};

export default useSearchItem;
