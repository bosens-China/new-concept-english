'use client';

import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { FC } from 'react';

export const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4670551_lnvz4i7wf5l.js',
});

interface Props {
  type: 'icon-bofang' | 'icon-jixu' | 'icon-zanting';
}

export const Icon: FC<Props> = ({ type }) => {
  return (
    <a onClick={(e) => e.preventDefault()}>
      <IconFont className="text-2xl" type={type}></IconFont>
    </a>
  );
};
