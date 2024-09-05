import React from 'react';
import Lesson1 from '@boses/source/1';
import Lesson2 from '@boses/source/2';
import Lesson3 from '@boses/source/3';
import Lesson4 from '@boses/source/4';
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
    Lesson: typeof Lesson1 | typeof Lesson2 | typeof Lesson3 | typeof Lesson4;
  }[] = [
    {
      volume: '1',
      Lesson: Lesson1,
    },
    {
      volume: '2',
      Lesson: Lesson2,
    },
    {
      volume: '3',
      Lesson: Lesson3,
    },
    {
      volume: '4',
      Lesson: Lesson4,
    },
  ];
  return arr
    .map((item) => {
      return Object.entries(item.Lesson).map(([key]): Params => {
        return {
          volume: item.volume,
          id: `${Number.parseFloat(key)}`,
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
