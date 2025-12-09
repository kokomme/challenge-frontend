/**
 * コンテンツのバリデーションルール
 */
export const VALIDATION_RULES = {
  title: {
    min: 1,
    max: 50,
  },
  body: {
    min: 10,
    max: 2000,
  },
} as const;

export type ValidationError = {
  field: 'title' | 'body';
  message: string;
};

/**
 * タイトルのバリデーション
 */
export function validateTitle(title: string): ValidationError | null {
  if (title.length < VALIDATION_RULES.title.min) {
    return {
      field: 'title',
      message: `タイトルは${VALIDATION_RULES.title.min}文字以上で入力してください`,
    };
  }
  if (title.length > VALIDATION_RULES.title.max) {
    return {
      field: 'title',
      message: `タイトルは${VALIDATION_RULES.title.max}文字以下で入力してください`,
    };
  }
  return null;
}

/**
 * 詳細のバリデーション
 */
export function validateBody(body: string): ValidationError | null {
  if (body.length < VALIDATION_RULES.body.min) {
    return {
      field: 'body',
      message: `詳細は${VALIDATION_RULES.body.min}文字以上で入力してください`,
    };
  }
  if (body.length > VALIDATION_RULES.body.max) {
    return {
      field: 'body',
      message: `詳細は${VALIDATION_RULES.body.max}文字以下で入力してください`,
    };
  }
  return null;
}

/**
 * タイトルと詳細の両方をバリデーション
 */
export function validateContent(title: string, body: string): ValidationError[] {
  const errors: ValidationError[] = [];
  
  const titleError = validateTitle(title);
  if (titleError) errors.push(titleError);
  
  const bodyError = validateBody(body);
  if (bodyError) errors.push(bodyError);
  
  return errors;
}
