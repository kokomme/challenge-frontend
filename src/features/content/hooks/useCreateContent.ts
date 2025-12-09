import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createContent } from '../api/contentApi';
import type { CreateContentDTO, Content } from '../../../types/type';

export const useCreateContent = () => {
  const qc = useQueryClient();
  return useMutation<Content, Error, CreateContentDTO>({
    mutationFn: (payload: CreateContentDTO) => createContent(payload),
    onSuccess: () => {
      void qc.invalidateQueries({ queryKey: ['contents'] });
    },
  });
};

export default useCreateContent;
