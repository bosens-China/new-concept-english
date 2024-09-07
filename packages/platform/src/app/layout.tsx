import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import React from 'react';
import { ConfigProvider } from 'antd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '新概念学习平台',
  description:
    '将新概念1-4册书籍电子化，适配pc和移动端，同时支持单句朗读语音调节以及课程游戏练习。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                fontSize: 16,
                fontSizeHeading1: 28,
                fontSizeHeading2: 24,
              },
            }}
          >
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}

// 禁止使用非静态导出的功能
export const dynamic = 'error';
