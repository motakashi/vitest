import React, { ChangeEvent, useState } from 'react';

export const TextInput = () => {
  const [text, setText] = useState<string>('');
  return (
    <div>
      <input
        type="text"
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
        value={text}
        placeholder="ここに文字を入れてください"
      />
      <p data-testid="display-paragraph">{text}</p> {/* テスト用のdata-testidを追加 */}
    </div>
  );
};
