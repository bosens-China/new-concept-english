import Paragraph from 'antd/es/typography/Paragraph';
import { FC } from 'react';
import React from 'react';
import { LrcStructure, Structure } from './types';
import { Mark } from './Mark';

/**
 * 中汉对比
 * @param props
 * @returns
 */
export const Contrast: FC<Structure & { record: LrcStructure[] }> = (props) => {
  const { text, translation, vocabulary } = props;
  return (
    <>
      {/* <H2>Text 课文</H2> */}
      {text.map((f, index) => (
        <Paragraph key={`${f}${index}`}>
          <span className="block">
            <Mark text={f} vocabulary={vocabulary}></Mark>
          </span>
          <span className="block">{translation[index]}</span>
        </Paragraph>
      ))}
    </>
  );
};
