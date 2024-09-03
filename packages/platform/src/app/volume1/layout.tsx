import React from 'react';
import { Layout, Menu } from 'antd';
import { Header, Content, Footer } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';

export default function VolumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layoutStyle = {};
  const headerStyle: React.CSSProperties = {
    background: '#fff',
  };
  const siderStyle: React.CSSProperties = {
    background: '#fff',
  };
  const contentStyle: React.CSSProperties = {
    background: '#fff',
  };
  const footerStyle: React.CSSProperties = {
    background: '#fff',
  };

  const items = [
    {
      key: `volume1`,
      label: `第一册`,
    },
    {
      key: `volume2`,
      label: `第二册`,
    },
    {
      key: `volume3`,
      label: `第三册`,
    },
    {
      key: `volume4`,
      label: `第四册`,
    },
  ];

  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle} className="flex">
        <div className="flex-1"></div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['volume1']}
          items={items}
        />
      </Header>
      <Layout>
        <Sider width="20%" style={siderStyle}>
          Sider
        </Sider>
        <Content style={contentStyle} className="p-12">
          <>{children}</>
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
}
