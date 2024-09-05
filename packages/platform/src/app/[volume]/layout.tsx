import React, { useMemo } from 'react';
import { Layout, Menu } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import type { MenuProps } from 'antd';
import { Params } from '../types';
import volume1 from '@boses/source/1';
import volume2 from '@boses/source/2';
import volume3 from '@boses/source/3';
import volume4 from '@boses/source/4';

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

  const items: Array<{ key: Params['volume']; label: string }> = [
    {
      key: '1',
      label: `第一册`,
    },
    {
      key: '2',
      label: `第二册`,
    },
    {
      key: `3`,
      label: `第三册`,
    },
    {
      key: `4`,
      label: `第四册`,
    },
  ];

  type MenuItem = Required<MenuProps>['items'][number];

  const menuItems: MenuItem[] = useMemo(() => {
    switch (params.volume) {
      case '1':
        return Object.entries(volume1).map(([key]): MenuItem => {
          return {
            key,
            label: key,
          };
        });
      case '2':
        return Object.entries(volume2).map(([key]): MenuItem => {
          return {
            key,
            label: key,
          };
        });
      case '3':
        return Object.entries(volume3).map(([key]): MenuItem => {
          return {
            key,
            label: key,
          };
        });
      case '4':
        return Object.entries(volume4).map(([key]): MenuItem => {
          return {
            key,
            label: key,
          };
        });
    }
  }, [params]);

  const sortMenuItems = useMemo(() => {
    return menuItems;
  }, [menuItems]);

  return (
    <>
      <Layout style={layoutStyle} className="h-100vh">
        <Header style={headerStyle} className="flex">
          <div className="flex-1"></div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[items.at(0)?.key as string]}
            items={items}
          />
        </Header>

        <Layout className="mt-64px" hasSider>
          <Sider width={256} style={siderStyle} className="">
            <Menu
              defaultSelectedKeys={[sortMenuItems.at(0)?.key as string]}
              mode="inline"
              items={sortMenuItems}
            />
          </Sider>
          <Content style={contentStyle} className="ml-256px">
            <div className="p-24px">{children}</div>
            <Footer style={footerStyle} className="">
              Footer
            </Footer>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
