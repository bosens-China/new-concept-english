/**
 * 解析lrc文件为具体的内容
 */

import { FC } from 'react';
import { LrcStructure } from './types';
// import _ from 'lodash-es';

const analysis = (str: string) => {
  let arr: LrcStructure[] = [];
  const reg = /\[(.+?)\]/;
  str.split('\n').forEach((f) => {
    // 删除所有不必要的空白元素
    const s = f.replace(/^[\s\r]|[\s\r]$/g, '');
    const content = s.replace(reg, '');
    if (!content) {
      return;
    }
    const time = f.match(reg)?.at(1);

    if (!time) {
      return;
    }
    const [second = 0, minute = 0, hour = 0] = time
      .split(':')
      .reverse()
      .map((f) => Number.parseFloat(f) || 0);

    const total = second + minute * 60 + hour * 60 * 60;
    arr.push({
      time: total,
      content,
    });
  });

  /*
   * 对异常数据进行剔除，过滤掉一开始数字很大的值
   */

  for (let i = 0, len = arr.length; i < len; i++) {
    arr = arr.filter((current, index) => {
      const next = arr.at(index + 1);
      if (next && current.time > next.time) {
        return false;
      }
      return true;
    });
  }

  return arr;
};

interface Props {
  lrc: string;
}

/*
 * 播放器播放时对课文进行标记
 */
export const PlayTags: FC<Props> = (props) => {
  const list = analysis(props.lrc);
  /*
   * 监听
   */
  console.log(list);

  return null;
};
