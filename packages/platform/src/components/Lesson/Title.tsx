import React, { FC } from 'react';
import { Structure } from './types';
import { Mark } from './Mark';
import T from 'antd/es/typography/Title';

/**
 * 文章内容
 * @param props
 * @returns
 */
export const Title: FC<Structure> = (props) => {
  const { title, vocabulary } = props;
  return (
    <T level={1}>
      <Mark text={title} vocabulary={vocabulary}></Mark>
    </T>
  );
};
