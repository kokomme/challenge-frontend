import client from '../../../lib/api/client';
import type { Content, CreateContentDTO, UpdateContentDTO } from '../../../types/type';

export const getAllContent = async (): Promise<Content[]> => {
  const { data } = await client.get<Content[]>('/content');
  return data;
};

export const getContentById = async (id: number): Promise<Content> => {
  const { data } = await client.get<Content>(`/content/${id}`);
  return data;
};

export const createContent = async (payload: CreateContentDTO): Promise<Content> => {
  const { data } = await client.post<Content>('/content', payload);
  return data;
};

export const updateContent = async (id: number, payload: UpdateContentDTO): Promise<Content> => {
  const { data } = await client.put<Content>(`/content/${id}`, payload);
  return data;
};

export const deleteContent = async (id: number): Promise<void> => {
  await client.delete(`/content/${id}`);
};
