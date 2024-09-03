// import { H2 } from '@/components/DocLayout/docComponents/title';
import { FC } from 'react';
import React from 'react';
import { LrcStructure, Structure } from './types';
import { Mark } from './Mark';
import Paragraph from 'antd/es/typography/Paragraph';
import { Icon } from './Icon';
import { Space } from 'antd';

/**
 * 课文
 * @param props
 * @returns
 */
export const Text: FC<Structure & { record: LrcStructure[] }> = (props) => {
  const { text, vocabulary } = props;

  return (
    <>
      {/* <H2>Text 课文</H2> */}
      {text.map((f, index) => (
        <Paragraph key={`${f}${index}`} className="flex">
          <Space>
            <Icon type="icon-bofang"></Icon>
            <div>
              <Mark text={f} vocabulary={vocabulary}></Mark>
            </div>
          </Space>
        </Paragraph>
      ))}
    </>
  );
};
