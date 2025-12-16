'use client'

import { Typography, Card, Row, Col, Space, Empty } from 'antd'
import { 
  CalendarOutlined, 
  EyeOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined
} from '@ant-design/icons'
import Link from 'next/link'
import { PageHeader } from '@/components'
import { getNavItem } from '@/lib/navigation'
import { primary, secondary, tertiary, neutral, layout, borderRadius } from '@/theme'

const { Title, Paragraph, Text } = Typography

const navItem = getNavItem('app-dashboard')!

/**
 * Uri Dashboard
 * =============
 * Landing page for uri. Shows overview of their linked kaupapa events.
 * This is a placeholder that will be enhanced when event data is available.
 */
export default function AppDashboardPage() {
  return (
    <>
      <PageHeader
        title={`Kia ora, Tane`}
        description="View upcoming events from your kaupapa"
        breadcrumbs={[{ label: 'Dashboard' }]}
      />

      {/* What's in this POC panel */}
      <Card 
        bordered={false}
        style={{ marginBottom: layout.sectionGap }}
      >
        <Title level={4} style={{ marginBottom: 16 }}>What you can do here</Title>
        <Paragraph style={{ color: neutral[600], marginBottom: 16 }}>
          As a uri, you can view upcoming events from the kaupapa you're connected to:
        </Paragraph>
        <Space direction="vertical" size="small">
          <Text><CheckCircleOutlined style={{ color: secondary[500], marginRight: 8 }} />See all upcoming events from your linked kaupapa</Text>
          <Text><CheckCircleOutlined style={{ color: secondary[500], marginRight: 8 }} />View event details (date, time, location, description)</Text>
          <Text style={{ color: neutral[400] }}><ClockCircleOutlined style={{ marginRight: 8 }} />RSVP to events (coming later)</Text>
          <Text style={{ color: neutral[400] }}><ClockCircleOutlined style={{ marginRight: 8 }} />Calendar sync (coming later)</Text>
        </Space>
      </Card>

      {/* Quick Actions */}
      <Row gutter={[layout.cardGap, layout.cardGap]} style={{ marginBottom: layout.sectionGap }}>
        <Col xs={24}>
          <Link href="/app/events" style={{ display: 'block' }}>
            <Card 
              hoverable 
              bordered={false}
            >
              <Space>
                <div style={{ 
                  width: 48, 
                  height: 48, 
                  background: tertiary[50], 
                  borderRadius: borderRadius.lg, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <EyeOutlined style={{ fontSize: 24, color: tertiary[500] }} />
                </div>
                <div>
                  <Title level={5} style={{ marginBottom: 4 }}>View Upcoming Events</Title>
                  <Text style={{ color: neutral[500] }}>See what's happening across your kaupapa</Text>
                </div>
              </Space>
            </Card>
          </Link>
        </Col>
      </Row>

      {/* Upcoming Events Preview */}
      <Card bordered={false}>
        <Title level={4} style={{ marginBottom: 16 }}>Upcoming Events</Title>
        <Empty 
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description="No upcoming events yet"
        />
      </Card>
    </>
  )
}
