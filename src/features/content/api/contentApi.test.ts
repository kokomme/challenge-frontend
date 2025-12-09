import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getAllContent, createContent, updateContent, deleteContent } from './contentApi';
import type { Content, CreateContentDTO } from '../../../types/type';
import client from '../../../lib/api/client';

vi.mock('../../../lib/api/client', () => ({
  default: {
    get: vi.fn(),
    post: vi.fn(),
    put: vi.fn(),
    delete: vi.fn(),
  },
}));

describe('contentApi', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('全てのコンテンツを取得できる', async () => {
    const mockContents: Content[] = [{ id: 1, title: 'test', body: 'body', createdAt: '', updatedAt: '' }];
    // eslint-disable-next-line @typescript-eslint/unbound-method
    vi.mocked(client.get).mockResolvedValue({ data: mockContents });

    const result = await getAllContent();

    expect(result).toEqual(mockContents);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(client.get).toHaveBeenCalledWith('/content');
  });

  it('新規作成・更新・削除が正しいエンドポイントを呼ぶ', async () => {
    const payload: CreateContentDTO = { title: 'test', body: 'body' };
    const mockContent: Content = { id: 1, ...payload, createdAt: '', updatedAt: '' };

    // eslint-disable-next-line @typescript-eslint/unbound-method
    vi.mocked(client.post).mockResolvedValue({ data: mockContent });
    // eslint-disable-next-line @typescript-eslint/unbound-method
    vi.mocked(client.put).mockResolvedValue({ data: mockContent });
    // eslint-disable-next-line @typescript-eslint/unbound-method
    vi.mocked(client.delete).mockResolvedValue({ data: undefined });

    await createContent(payload);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(client.post).toHaveBeenCalledWith('/content', payload);

    await updateContent(1, payload);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(client.put).toHaveBeenCalledWith('/content/1', payload);

    await deleteContent(1);
    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(client.delete).toHaveBeenCalledWith('/content/1');
  });
});
