import React from 'react';
import { Volume, Volumes } from '@/app/types';
import { Text } from '@boses/source';

interface Params {
  volume: Volume;
  id: string;
}

interface Props {
  params: Params;
  searchParams: Record<string, string>;
}

export async function generateStaticParams() {
  return Object.entries(Volumes)
    .map(([key, item]) => {
      return Object.values(item).map((value): Params => {
        return {
          volume: key as Volume,
          id: `${value.additional.lesson}`,
        };
      });
    })
    .flat(2);
}

export default async function Page(props: Props) {
  const {
    params: { volume, id },
  } = props;

  if (volume === '1') {
    const data = Volumes['1'];
    const lesson = data[id];
    console.log(lesson.text);

    if (!lesson.text || !lesson.text.interface) {
      return <p>当前课程的内容正在开发等待上传...</p>;
    }

    const text: Text = await (await fetch(lesson.text.interface.url)).json();

    return (
      <article>
        <header>
          <h1 className="text-size-24px">{lesson.additional.title}</h1>
          <p>
            {text.introduction[0]}
            <br></br>
            {text.introduction[1]}
          </p>
        </header>

        <section className="mt-24px">
          {text.text_and_translation.map((item, index) => {
            return <p key={item.text + index}>{item.text}</p>;
          })}
        </section>

        <section>
          <h2 className="text-size-18px">
            New words and expressions 生词和短语
          </h2>
          <ul className="flex flex-wrap pl-0 list-none">
            {text.vocabulary.map((item) => {
              return (
                <li key={item.word} className="min-w-50%">
                  <p>
                    <span className="mr-6px">{item.word}</span>
                    <span className="mr-6px">{item.pronunciation}</span>
                    <span>
                      {item.type}
                      {item.definition}
                    </span>
                  </p>
                </li>
              );
            })}
          </ul>
        </section>

        <section>
          <h2 className="text-size-18px">Notes on the text 课文注释</h2>
          <ol className="pl-24px">
            {text.notes.map((item) => {
              return (
                <li key={item.title}>
                  <p>
                    <span> {item.title}</span>
                    <br />
                    <span> {item.describe}</span>
                  </p>
                </li>
              );
            })}
          </ol>
        </section>

        <footer>
          <h3 className="text-size-18px font-normal">参考译文</h3>
          {text.text_and_translation.map((item, index) => {
            return <p key={item.translation + index}>{item.translation}</p>;
          })}
        </footer>
      </article>
    );
  }

  return <p>其他课程的内容正在开发中...</p>;

  // return <Lesson></Lesson>;
}
