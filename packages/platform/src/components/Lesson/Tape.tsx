import React, { FC } from 'react';

interface Props {
  lrcUrl: string;
  url: string;
}

/**
 * 磁带部分
 * @param props
 * @returns
 */
export const Tape: FC<Props> = (props) => {
  const { url } = props;

  return (
    <div>
      <audio controls>
        <source src={url} type="audio/mp3" />

        <p>当前浏览器不支持播放音频。</p>
      </audio>
    </div>
  );
};
