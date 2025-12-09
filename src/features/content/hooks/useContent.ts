import { useQuery } from '@tanstack/react-query';
import { getContentById } from '../api/contentApi';
import type { Content } from '../../../types/type';

export const useContent = (id?: number) => {
  return useQuery<Content, Error>({
    queryKey: ['content', id],
    queryFn: async () => getContentById(id as number),
    enabled: typeof id === 'number' && !isNaN(id),
  });
};

export default useContent;
