"use client"
import { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { Tabs, TabList, TabPanels, Tab, TabPanel, useColorModeValue, Image, Box } from '@chakra-ui/react'
const { Header, Content, Footer, Sider } = Layout;


const Scheduler = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const colors = useColorModeValue(
    ['red.50', 'teal.50', 'blue.50'],
    ['red.900', 'teal.900', 'blue.900'],
  )
  const [tabIndex, setTabIndex] = useState(0)
  const bg = colors[tabIndex]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Content>
          <Tabs isManual variant='enclosed'>
            <TabList>
              <Tab>One</Tab>
              <Tab>Two</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Scheduler