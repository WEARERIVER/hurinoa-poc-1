'use client'

import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Layout, Menu, Input, Avatar, Space, Typography, Dropdown, Drawer, Grid, App, Tag } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
  SearchOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  CloseOutlined,
  SwapOutlined,
} from '@ant-design/icons'
import { getNavigationForUserType, getUserTypeFromPath, getHomePathForUserType } from '@/lib/navigation'
import { useUser, UserType } from '@/lib/userContext'
import { primary, secondary, tertiary, neutral, layout, borderRadius } from '@/theme'

const { Header, Sider, Content } = Layout
const { Text } = Typography
const { useBreakpoint } = Grid

interface AppShellProps {
  children: React.ReactNode
}

/**
 * AppShell Component
 * ==================
 * Main layout wrapper for all app pages (contributor, uri, and developer).
 * 
 * Responsive behavior:
 * - Desktop (lg+): Fixed sidebar with collapse toggle
 * - Mobile (<lg): Hidden sidebar with hamburger menu + drawer
 * 
 * Structure:
 * - Sidebar: Logo + role-based navigation
 * - Header: Toggle, search, user menu with role switching
 * - Content: Page content area
 * 
 * Auto-detects user type from URL and syncs context.
 * Uses layout tokens from theme/tokens.ts for consistent sizing.
 */
export function AppShell({ children }: AppShellProps) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const screens = useBreakpoint()
  const { message } = App.useApp()
  const { user, switchUser } = useUser()
  
  // Determine if we're on mobile
  const isMobile = !screens.lg

  // Auto-detect user type from URL and sync context
  useEffect(() => {
    const detectedType = getUserTypeFromPath(pathname)
    if (detectedType && detectedType !== user.type) {
      switchUser(detectedType)
    }
  }, [pathname, user.type, switchUser])

  // Get navigation based on user type
  const navigation = getNavigationForUserType(user.type)
  
  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Determine active menu key from pathname (find most specific match)
  const activeKey = navigation
    .filter((item) => pathname === item.path || pathname.startsWith(item.path + '/'))
    .sort((a, b) => b.path.length - a.path.length)[0]?.key 
    || navigation[0]?.key

  // Use Link components for navigation to enable prefetching
  const menuItems = navigation.map((item) => ({
    key: item.key,
    icon: <item.icon />,
    label: <Link href={item.path} style={{ color: 'inherit' }}>{item.label}</Link>,
  }))

  // Handle profile switch — navigates to the selected role's dashboard
  const handleSwitchProfile = (newType: UserType) => {
    switchUser(newType)
    router.push(getHomePathForUserType(newType))
    const label = newType === 'contributor' ? 'Contributor' : newType === 'uri' ? 'Uri' : 'Developer'
    message.success(`Switched to ${label} view`)
  }

  // User type display label and color
  const getUserTypeLabel = (type: UserType) => {
    switch (type) {
      case 'contributor': return 'Contributor'
      case 'uri': return 'Uri'
      case 'developer': return 'Developer'
    }
  }
  const getUserTypeColor = (type: UserType) => {
    switch (type) {
      case 'contributor': return primary[500]
      case 'uri': return tertiary[500]
      case 'developer': return secondary[500]
    }
  }
  
  const userTypeLabel = getUserTypeLabel(user.type)
  const userTypeColor = getUserTypeColor(user.type)

  // Build switch menu items (exclude current type)
  const switchOptions: UserType[] = ['contributor', 'uri', 'developer']
  const switchMenuItems = switchOptions
    .filter(type => type !== user.type)
    .map(type => ({
      key: `switch-${type}`,
      icon: <SwapOutlined />,
      label: `Switch to ${getUserTypeLabel(type)}`,
    }))

  const userMenuItems = [
    { key: 'profile', icon: <UserOutlined />, label: 'Profile' },
    { key: 'settings', icon: <SettingOutlined />, label: 'Settings' },
    { type: 'divider' as const },
    ...switchMenuItems,
    { type: 'divider' as const },
    { key: 'logout', icon: <LogoutOutlined style={{ color: primary[500] }} />, label: <span style={{ color: primary[500] }}>Sign out</span> },
  ]

  const currentSidebarWidth = collapsed ? layout.sidebarCollapsedWidth : layout.sidebarWidth

  // Shared menu component for sidebar and drawer
  const NavigationMenu = (
    <Menu
      mode="inline"
      selectedKeys={[activeKey]}
      items={menuItems}
      style={{ 
        border: 'none', 
        padding: '16px 8px',
        fontWeight: 500,
      }}
      onClick={() => isMobile && setMobileMenuOpen(false)}
    />
  )

  // Logo component
  const Logo = ({ showText = true }: { showText?: boolean }) => (
    <div
      style={{
        height: layout.headerHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: showText ? 'flex-start' : 'center',
        padding: showText ? '0 20px' : 0,
        borderBottom: `1px solid ${neutral[200]}`,
      }}
    >
      <div
        style={{
          width: 32,
          height: 32,
          background: `linear-gradient(135deg, ${primary[400]} 0%, ${primary[600]} 100%)`,
          borderRadius: borderRadius.lg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 700,
          fontSize: 15,
          flexShrink: 0,
          boxShadow: `0 2px 8px ${primary[500]}30`,
        }}
      >
        H
      </div>
      {showText && (
        <Text strong style={{ marginLeft: 12, fontSize: 16, color: neutral[800], letterSpacing: '-0.02em' }}>
          Huri Noa POC
        </Text>
      )}
    </div>
  )

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* ================================================================== */}
      {/* DESKTOP SIDEBAR (hidden on mobile)                                */}
      {/* ================================================================== */}
      {!isMobile && (
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          width={layout.sidebarWidth}
          collapsedWidth={layout.sidebarCollapsedWidth}
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            top: 0,
            bottom: 0,
            background: '#fff',
            borderRight: `1px solid ${neutral[200]}`,
          }}
        >
          <Logo showText={!collapsed} />
          {NavigationMenu}
        </Sider>
      )}

      {/* ================================================================== */}
      {/* MOBILE DRAWER                                                     */}
      {/* ================================================================== */}
      <Drawer
        placement="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        width={layout.sidebarWidth}
        styles={{ 
          body: { padding: 0 },
          header: { display: 'none' },
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: 12 }}>
          <Logo showText />
          <CloseOutlined 
            onClick={() => setMobileMenuOpen(false)}
            style={{ 
              fontSize: 16, 
              color: neutral[500], 
              cursor: 'pointer',
              padding: 8,
            }}
          />
        </div>
        {NavigationMenu}
      </Drawer>

      <Layout style={{ 
        marginLeft: isMobile ? 0 : currentSidebarWidth, 
        transition: 'margin-left 0.2s',
      }}>
        {/* ================================================================== */}
        {/* GLOBAL HEADER                                                     */}
        {/* ================================================================== */}
        <Header
          style={{
            padding: isMobile ? '0 16px' : `0 ${layout.pagePadding}px`,
            background: '#fff',
            height: layout.headerHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: `1px solid ${neutral[200]}`,
            position: 'sticky',
            top: 0,
            zIndex: 10,
            gap: 12,
          }}
        >
          {/* Left side: Toggle + Search */}
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 16, flex: 1, minWidth: 0 }}>
            <div
              onClick={() => isMobile ? setMobileMenuOpen(true) : setCollapsed(!collapsed)}
              style={{ 
                cursor: 'pointer', 
                fontSize: 18, 
                padding: 8,
                borderRadius: borderRadius.md,
                color: neutral[600],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = neutral[100]}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {isMobile ? <MenuOutlined /> : (collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />)}
            </div>
            
            {/* Search - hidden on very small screens, compact on mobile */}
            {!screens.xs && (
              <Input
                placeholder="Search..."
                prefix={<SearchOutlined style={{ color: neutral[400] }} />}
                style={{ 
                  width: isMobile ? 180 : 280,
                  flexShrink: 1,
                  borderRadius: borderRadius.md,
                }}
                variant="filled"
              />
            )}
          </div>

          {/* Right side: User Avatar with Dropdown */}
          <Dropdown 
            menu={{ 
              items: userMenuItems,
              onClick: ({ key }) => {
                if (key === 'logout') {
                  message.success('Successfully logged out')
                } else if (key.startsWith('switch-')) {
                  const newType = key.replace('switch-', '') as UserType
                  handleSwitchProfile(newType)
                }
              }
            }} 
            trigger={['click']} 
            placement="bottomRight"
          >
            <Space 
              style={{ 
                cursor: 'pointer',
                padding: '6px 12px',
                borderRadius: borderRadius.lg,
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = neutral[100]}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <Avatar 
                size={32} 
                icon={<UserOutlined />} 
                style={{ backgroundColor: userTypeColor }} 
              />
              {/* User name and type - hide on mobile */}
              {!isMobile && (
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3 }}>
                  <Text style={{ color: neutral[700], fontWeight: 500 }}>{user.name}</Text>
                  <Text style={{ color: userTypeColor, fontSize: 12 }}>{userTypeLabel}</Text>
                </div>
              )}
            </Space>
          </Dropdown>
        </Header>

        {/* ================================================================== */}
        {/* CONTENT AREA                                                      */}
        {/* ================================================================== */}
        <Content
          style={{
            padding: isMobile ? 16 : layout.pagePadding,
            minHeight: `calc(100vh - ${layout.headerHeight}px)`,
            background: neutral[50],
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}
