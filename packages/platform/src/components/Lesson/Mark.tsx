import React, { FC } from 'react';
import { Structure } from './types';
import { Space, Tooltip } from 'antd';

interface Props {
  text: string;
  vocabulary: Structure['vocabulary'];
}

interface NeologismProps {
  word: string;
  vocabularyChildren: Structure['vocabulary'][number];
}

const Neologism: FC<NeologismProps> = ({ word, vocabularyChildren }) => {
  const Content = (
    <>
      <div>
        <Space>
          {vocabularyChildren.word}
          <span>{vocabularyChildren.phonetic}</span>
        </Space>
      </div>
      <div>
        <Space size="small">
          {vocabularyChildren.type}
          {vocabularyChildren.meaning}
        </Space>
      </div>
    </>
  );

  return (
    <>
      <Tooltip trigger={['click', 'hover']} title={Content}>
        <span className="underline cursor-pointer">{word}</span>
      </Tooltip>
    </>
  );
};

/**
 * 作用就是接受到文本然后进行标记那些是新的词语
 */

export const Mark: FC<Props> = ({ text, vocabulary }) => {
  const words = text.split(/\s/g);
  const arr = words
    .map((word, index, array) => {
      const isEnd = array.length === index + 1;
      const identifier = isEnd ? null : ' ';
      const find = vocabulary.find((f) =>
        new RegExp(`^${f.word}$`, 'i').test(word),
      );
      if (find) {
        return [
          <Neologism
            key={word}
            word={word}
            vocabularyChildren={find}
          ></Neologism>,
          identifier,
        ];
      } else {
        return [word, identifier];
      }
    })
    .flat(2);

  return arr;
};
