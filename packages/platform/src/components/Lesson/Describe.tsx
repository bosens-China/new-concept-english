import React, { FC } from 'react';
import { Structure } from './types';
import { Mark } from './Mark';
import Paragraph from 'antd/es/typography/Paragraph';

/**
 * 课文的描述
 * @param props
 * @returns
 */
export const Describe: FC<Structure> = (props) => {
  const { introduction, vocabulary } = props;

  // 删除\n\n的情况
  const arr = introduction
    .replace(/\n\n/g, '\n')
    .split('\n')
    .map((f) => {
      return (
        <Paragraph key={f}>
          <Mark text={f} vocabulary={vocabulary}></Mark>
        </Paragraph>
      );
    });
  return arr;
};
