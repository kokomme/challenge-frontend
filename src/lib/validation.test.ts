import { describe, it, expect } from 'vitest';
import { validateTitle, validateBody, validateContent } from './validation';

describe('validateTitle', () => {
  it('境界値テスト: 0文字はエラー、1文字と50文字は成功、51文字はエラー', () => {
    expect(validateTitle('')).not.toBeNull();
    expect(validateTitle('a')).toBeNull();
    expect(validateTitle('a'.repeat(50))).toBeNull();
    expect(validateTitle('a'.repeat(51))).not.toBeNull();
  });
});

describe('validateBody', () => {
  it('境界値テスト: 9文字はエラー、10文字と2000文字は成功、2001文字はエラー', () => {
    expect(validateBody('a'.repeat(9))).not.toBeNull();
    expect(validateBody('a'.repeat(10))).toBeNull();
    expect(validateBody('a'.repeat(2000))).toBeNull();
    expect(validateBody('a'.repeat(2001))).not.toBeNull();
  });
});

describe('validateContent', () => {
  it('両方のバリデーションを実行し、エラーを配列で返す', () => {
    expect(validateContent('', '')).toHaveLength(2);
    expect(validateContent('a', 'a'.repeat(10))).toHaveLength(0);
  });
});
