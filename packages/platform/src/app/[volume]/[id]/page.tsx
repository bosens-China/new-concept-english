import React from 'react';
import { Volume, Volumes } from '@/app/types';
import Image from 'next/image';
import classNames from 'classnames';

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

    if (!lesson.text) {
      return <p>当前课程的内容正在开发等待上传...</p>;
    }

    const text = lesson.text;

    const textAndTranslation = text.vocabulary.reduce(
      (acc, _, i, array) => {
        if (i % 2 === 0) {
          acc.push(array.slice(i, i + 2));
        }
        return acc;
      },
      [] as unknown as
        | [typeof text.vocabulary, typeof text.vocabulary]
        | [typeof text.vocabulary],
    );

    return (
      <article>
        <header>
          <h1 className="text-size-24px">{lesson.additional.title}</h1>
          <p>
            {text.introduction[0]}
            <br></br>
            <span className="mt-0.5em block">{text.introduction[1]}</span>
          </p>
          <p></p>
        </header>
        <audio controls>
          <source
            src={lesson.tapeEnglish.mp3.interface.url}
            type="audio/mpeg"
          />

          <p>当前浏览器不支持播放mp3</p>
        </audio>

        {/*
         * 如果存在插图的话，也要同步展示
         */}

        {Array.isArray(text.text_and_translation) && (
          <section className="mt-24px">
            {text.text_and_translation.map((item, index) => {
              const interfaceUrl =
                lesson.illustration?.[index]?.interface?.realUrl;
              return (
                <p
                  key={item.text + index}
                  className={classNames({
                    flex: !!interfaceUrl,
                    'm-0': !!interfaceUrl,
                  })}
                >
                  <span
                    className={classNames({
                      'flex-1': !!interfaceUrl,
                    })}
                  >
                    {item.text}
                  </span>
                  {!!interfaceUrl && (
                    <Image
                      width={240}
                      height={140}
                      src={interfaceUrl}
                      alt={`课程配图${index + 1}`}
                    ></Image>
                  )}
                </p>
              );
            })}
          </section>
        )}

        <section>
          <h2 className="text-size-18px">
            New words and expressions 生词和短语
          </h2>
          <ul className="pl-0 list-none">
            {/*
             * 为了结构，必须改为两个为一组输出
             */}

            {textAndTranslation.map(([item1, item2]) => {
              return (
                <li key={item1.word} className="flex flex-wrap m-y-1em">
                  {[item1, item2]
                    .filter((f): f is typeof item1 => {
                      return f != null;
                    })
                    .map((item) => {
                      return (
                        <p className="min-w-50% m-0" key={item.word}>
                          <span className="mr-6px">{item.word}</span>
                          <span className="mr-6px">{item.pronunciation}</span>
                          <span>
                            {item.type}
                            {item.definition}
                          </span>
                        </p>
                      );
                    })}
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
                    <span className="block mt-0.5em"> {item.describe}</span>
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
