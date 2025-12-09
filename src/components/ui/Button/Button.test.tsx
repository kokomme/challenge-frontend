import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('クリックイベントとdisabled状態が正しく動作する', async () => {
    const user = userEvent.setup();
    let count = 0;
    const { rerender } = render(<Button onClick={() => count++}>クリック</Button>);
    
    await user.click(screen.getByText('クリック'));
    expect(count).toBe(1);

    rerender(<Button onClick={() => count++} disabled>クリック</Button>);
    await user.click(screen.getByText('クリック'));
    expect(count).toBe(1); // disabledなので増えない
  });

  it('icon variantとアイコン+テキストのレイアウトが正しく適用される', () => {
    const { rerender } = render(
      <Button variant="icon" icon={<span data-testid="icon">🔍</span>} />
    );
    expect(screen.getByRole('button')).toHaveClass('btn-icon');

    rerender(<Button icon={<span data-testid="icon2">🔍</span>}>検索</Button>);
    expect(screen.getByRole('button')).toHaveClass('btn-vertical');
  });
});
