import React, { useMemo } from 'react';
import { Layout, Menu } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import type { MenuProps } from 'antd';
import { Params } from '../types';
import { volume1, volume2, volume3, volume4 } from '@boses/source';
import Link from 'next/link';

export default function VolumeLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Params;
}>) {
  const layoutStyle = {};

  const headerStyle: React.CSSProperties = {
    background: '#fff',
    position: `fixed`,
    left: 0,
    width: '100vw',
  };
  const siderStyle: React.CSSProperties = {
    background: '#fff',
    position: `fixed`,
    height: `calc(100vh - 64px)`,
    overflow: `auto`,
  };
  const contentStyle: React.CSSProperties = {
    background: '#fff',
  };
  const footerStyle: React.CSSProperties = {
    background: '#fff',
  };

  const items: Array<{ key: Params['volume']; label: React.ReactNode }> = [
    {
      key: '1',
      label: <Link href={`/1/1`}>第一册</Link>,
    },
    {
      key: '2',
      label: <Link href={`/2/1`}>第二册</Link>,
    },
    {
      key: `3`,
      label: <Link href={`/3/1`}>第三册</Link>,
    },
    {
      key: `4`,
      label: <Link href={`/4/1`}>第四册</Link>,
    },
  ];

  type MenuItem = Required<MenuProps>['items'][number];

  const menuItems: MenuItem[] = useMemo(() => {
    const getHref = (path: string) => {
      return [`/${params.volume}`, path].join(`/`);
    };

    switch (params.volume) {
      case '1':
        return Object.entries(volume1).map(([key, value]): MenuItem => {
          const v = value as (typeof volume1)['1'];
          return {
            key,
            label: (
              <Link href={getHref(key)}>{v?.additional?.title || key}</Link>
            ),
          };
        });
      case '2':
        return Object.entries(volume2).map(([key]): MenuItem => {
          return {
            key,
            label: <Link href={getHref(key)}>{key}</Link>,
          };
        });
      case '3':
        return Object.entries(volume3).map(([key]): MenuItem => {
          return {
            key,
            label: <Link href={getHref(key)}>{key}</Link>,
          };
        });
      case '4':
        return Object.entries(volume4).map(([key]): MenuItem => {
          return {
            key,
            label: <Link href={getHref(key)}>{key}</Link>,
          };
        });
    }
  }, [params]);

  return (
    <>
      <Layout style={layoutStyle} className="h-100vh">
        <Header style={headerStyle} className="flex">
          <div className="flex-1"></div>
          <Menu
            theme="light"
            mode="horizontal"
            selectedKeys={[params.volume]}
            items={items}
          />
        </Header>

        <Layout className="mt-64px" hasSider>
          <Sider width={256} style={siderStyle} className="">
            <Menu
              defaultSelectedKeys={[menuItems.at(0)?.key as string]}
              mode="inline"
              items={menuItems}
            />
          </Sider>
          <Content style={contentStyle} className="ml-256px flex flex-col">
            <div className="p-24px flex-1">{children}</div>
            <Footer style={footerStyle} className="">
              Footer
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
