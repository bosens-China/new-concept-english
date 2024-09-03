import T from 'antd/es/typography/Title';
import { FC } from 'react';
import { Structure } from './types';
import React from 'react';
import Paragraph from 'antd/es/typography/Paragraph';
import { Space } from 'antd';

interface Props {
  text: Structure['vocabulary'];
}

/**
 * 新词和短语
 * @param props
 * @returns
 */
export const NewWords: FC<Props> = (props) => {
  const { text } = props;
  return (
    <>
      <T level={2}>New words and expressions 生词和短语</T>
      <ul>
        {text.map((f) => (
          <li key={f.word}>
            <Paragraph>
              <Space>
                <span>{f.word}</span>
                <span>{f.phonetic}</span>
                <span>{f.type}</span>
                <span>{f.meaning}</span>
              </Space>
            </Paragraph>
          </li>
        ))}
      </ul>
    </>
  );
};
