import React from 'react';
import { volume1, volume2, volume3, volume4 } from '@boses/source';

import { Volume } from '@/app/types';

interface Params {
  volume: string;
  id: string;
}

interface Props {
  params: Params;
  searchParams: Record<string, string>;
}

export async function generateStaticParams() {
  const arr: {
    volume: Volume;
    Lesson: typeof volume1 | typeof volume2 | typeof volume3 | typeof volume4;
  }[] = [
    {
      volume: '1',
      Lesson: volume1,
    },
    {
      volume: '2',
      Lesson: volume2,
    },
    {
      volume: '3',
      Lesson: volume3,
    },
    {
      volume: '4',
      Lesson: volume4,
    },
  ];
  return arr
    .map((item) => {
      return Object.entries(item.Lesson).map(([key]): Params => {
        return {
          volume: item.volume,
          id: key,
        };
      });
    })
    .flat(2);
}

export default function Page(props: Props) {
  const {
    params: { volume, id },
  } = props;
  return <p>hello</p>;

  // return <Lesson></Lesson>;
}
