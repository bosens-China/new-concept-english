import Paragraph from 'antd/es/typography/Paragraph';
import React, { FC } from 'react';

interface Props {
  text: string[];
}

/**
 * 翻译部分
 * @param props
 * @returns
 */
export const Translate: FC<Props> = (props) => {
  const { text } = props;
  return (
    <>
      {/* <H2>参考译文</H2> */}
      {text.map((f, index) => (
        <Paragraph key={`${f}${index}`}>{f}</Paragraph>
      ))}
    </>
  );
};
