import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteContent } from '../api/contentApi';

export const useDeleteContent = () => {
  const qc = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: (id: number) => deleteContent(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['contents'] });
    },
  });
};

export default useDeleteContent;
