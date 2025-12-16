'use client'

import { Card, Typography, Space } from 'antd'
import { InfoCircleOutlined } from '@ant-design/icons'
import { primary, neutral, layout, borderRadius } from '@/theme'
import { usePocMode } from '@/lib/pocModeContext'

const { Text } = Typography

interface PocContextCardProps {
  /** The context/purpose description for this page */
  children: React.ReactNode
  /** Optional title - defaults to "About this page" */
  title?: string
}

/**
 * PocContextCard
 * ==============
 * A styled card that provides context about each page's purpose,
 * tying back to the POC brief. Helps the client understand why
 * each feature exists and what it demonstrates.
 * 
 * Usage:
 * <PocContextCard>
 *   This page demonstrates the contributor dashboard...
 * </PocContextCard>
 * 
 * The component has a specific class name `poc-context-card` for 
 * targeting with CSS or for removal in production.
 */
export function PocContextCard({ children, title = 'About this page' }: PocContextCardProps) {
  const { showPocHelpers } = usePocMode()

  if (!showPocHelpers) return null

  return (
    <Card
      className="poc-context-card"
      bordered
      style={{
        marginBottom: layout.cardGap,
        background: '#fff',
        borderColor: neutral[200],
        borderRadius: borderRadius.md,
      }}
      styles={{
        body: {
          padding: '16px 20px',
        }
      }}
    >
      <Space align="start" size={12}>
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: primary[100],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <InfoCircleOutlined 
            style={{ 
              color: primary[500], 
              fontSize: 16,
            }} 
          />
        </div>
        <div>
          <Text 
            strong 
            style={{ 
              color: neutral[500], 
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              display: 'block',
              marginBottom: 4,
            }}
          >
            {title}
          </Text>
          <Text style={{ color: neutral[600], fontSize: 14, lineHeight: 1.6 }}>
            {children}
          </Text>
        </div>
      </Space>
    </Card>
  )
}
