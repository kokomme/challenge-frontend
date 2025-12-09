import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateContent } from '../api/contentApi';
import type { UpdateContentDTO, Content } from '../../../types/type';

export const useUpdateContent = () => {
  const qc = useQueryClient();
  return useMutation<Content, Error, { id: number; payload: UpdateContentDTO }>({
    mutationFn: ({ id, payload }: { id: number; payload: UpdateContentDTO }) => updateContent(id, payload),
    onSuccess: (_data, variables) => {
      void qc.invalidateQueries({ queryKey: ['contents'] });
      void qc.invalidateQueries({ queryKey: ['content', variables.id] });
    },
  });
};

export default useUpdateContent;
