import { useQuery } from '@tanstack/react-query';
import { getAllContent } from '../api/contentApi';
import type { Content } from '../../../types/type';

export const useContents = () => {
  return useQuery<Content[], Error>({
    queryKey: ['contents'],
    queryFn: getAllContent,
    staleTime: 1000 * 60 * 1, // 1 minute
  });
};

export default useContents;
