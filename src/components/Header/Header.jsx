import React from 'react'

import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%', top: 0 }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
          <Link to="/">Search Movie</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/favorite">My Favorit</Link>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default HeaderComponent