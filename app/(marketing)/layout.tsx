'use client'

import { Layout, Typography, Space, Button } from 'antd'
import Link from 'next/link'
import { primary, secondary, neutral, layout, borderRadius } from '@/theme'

const { Header, Content, Footer } = Layout
const { Text } = Typography

/**
 * Marketing Layout
 * ================
 * Clean layout for public-facing pages (landing, about, etc.)
 * No sidebar — just header, content, footer.
 */
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout style={{ minHeight: '100vh', background: neutral[50] }}>
      {/* ================================================================== */}
      {/* MARKETING HEADER                                                   */}
      {/* ================================================================== */}
      <Header
        style={{
          background: '#fff',
          height: layout.headerHeight,
          padding: '0 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: `1px solid ${neutral[200]}`,
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <div
            style={{
              width: 36,
              height: 36,
              background: `linear-gradient(135deg, ${primary[400]} 0%, ${primary[600]} 100%)`,
              borderRadius: borderRadius.lg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: 16,
              boxShadow: `0 2px 8px ${primary[500]}30`,
            }}
          >
            H
          </div>
          <Text strong style={{ marginLeft: 12, fontSize: 18, color: neutral[800], letterSpacing: '-0.02em' }}>
            Huri Noa POC
          </Text>
        </Link>

        {/* Navigation */}
        <Space size={16}>
          <Link href="/about">
            <Button type="text" style={{ color: neutral[600], fontWeight: 500 }}>
              About
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button type="primary" style={{ fontWeight: 500 }}>
              Sign In
            </Button>
          </Link>
        </Space>
      </Header>

      {/* ================================================================== */}
      {/* CONTENT                                                            */}
      {/* ================================================================== */}
      <Content>
        {children}
      </Content>

      {/* ================================================================== */}
      {/* FOOTER                                                             */}
      {/* ================================================================== */}
      <Footer
        style={{
          background: neutral[800],
          padding: '48px 24px',
          textAlign: 'center',
        }}
      >
        <Text style={{ color: neutral[400], fontSize: 14 }}>
          Huri Noa — Kaupapa Coordination Platform
        </Text>
        <br />
        <Text style={{ color: neutral[500], fontSize: 13, marginTop: 8, display: 'inline-block' }}>
          Built with care for our communities
        </Text>
      </Footer>
    </Layout>
  )
}
