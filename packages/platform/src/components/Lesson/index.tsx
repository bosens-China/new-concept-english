import volume1 from '@boses/source/1';
import { Title } from './Title';
import { Describe } from './Describe';
import { Text } from './Text';
import { NewWords } from './NewWords';
import { Translate } from './Translate';

import { Contrast } from './Contrast';
import { Tape } from './Tape';
import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { PlayTags } from './PlayTags';
import { analysis } from './utils/lrc';

export default function Lesson() {
  const record = analysis(lrc);

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: '课文',
      children: <Text record={record} {...data}></Text>,
    },
    {
      key: '2',
      label: '英汉对照',
      children: <Contrast record={record} {...data}></Contrast>,
    },
    {
      key: '3',
      label: '参考译文',
      children: <Translate text={data.translation}></Translate>,
    },
  ];

  return (
    <>
      <Title {...data}></Title>

      <Describe {...data}></Describe>
      <Tape url={mp3} lrcUrl={lrc}></Tape>

      <Tabs defaultActiveKey="1" items={items} />

      <NewWords text={data.vocabulary}></NewWords>
      <PlayTags lrc={lrc}></PlayTags>
    </>
  );
}
