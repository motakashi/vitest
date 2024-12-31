import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TextInput } from './TextInput';

// TextInputコンポーネントのテスト
describe('TextInputコンポーネント', () => {
  it('入力フィールドとプレースホルダーが正しく表示される', () => {
    render(<TextInput />);
    const inputElement = screen.getByPlaceholderText('ここに文字を入れてください');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('入力値が変更されると表示されるテキストが更新される', () => {
    render(<TextInput />);
    const inputElement = screen.getByPlaceholderText('ここに文字を入れてください');
    const displayParagraph = screen.getByTestId('display-paragraph'); // data-testidを使って特定

    fireEvent.change(inputElement, { target: { value: 'テスト文字' } });

    expect(displayParagraph.textContent).toBe('テスト文字');
  });

  it('初期状態で表示される値が空である', () => {
    render(<TextInput />);
    const displayParagraph = screen.getByTestId('display-paragraph'); // data-testidを使って特定
    expect(displayParagraph.textContent).toBe('');
  });
});
