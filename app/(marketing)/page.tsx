'use client'

import { Typography, Button, Space, Row, Col, Card } from 'antd'
import Link from 'next/link'
import { 
  CalendarOutlined, 
  TeamOutlined, 
  CheckCircleOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons'
import { primary, secondary, neutral, layout, borderRadius } from '@/theme'

const { Title, Text, Paragraph } = Typography

/**
 * Landing Page
 * ============
 * Marketing page that introduces Huri Noa and sells the vision.
 * 
 * Structure:
 * - Hero section with value proposition
 * - Problem/solution framing
 * - Key features
 * - Call to action
 */
export default function LandingPage() {
  return (
    <div style={{ background: neutral[50] }}>
      {/* ================================================================== */}
      {/* HERO SECTION                                                       */}
      {/* ================================================================== */}
      <section
        style={{
          background: `linear-gradient(135deg, ${primary[50]} 0%, #fff 50%, ${secondary[50]} 100%)`,
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-block',
              background: primary[100],
              color: primary[700],
              padding: '6px 16px',
              borderRadius: borderRadius.full,
              fontSize: 13,
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            Kaupapa Coordination Platform
          </div>

          {/* Headline */}
          <Title
            level={1}
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: neutral[900],
              marginBottom: 16,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
            }}
          >
            Coordinate with clarity.{' '}
            <span style={{ color: primary[500] }}>Reduce the clash.</span>
          </Title>

          {/* Subheadline */}
          <Paragraph
            style={{
              fontSize: 18,
              color: neutral[600],
              marginBottom: 32,
              maxWidth: 600,
              margin: '0 auto 32px',
              lineHeight: 1.6,
            }}
          >
            Huri Noa helps kaupapa groups see when events overlap — so contributors 
            can plan with confidence and uri stay connected to what matters.
          </Paragraph>

          {/* CTA Buttons */}
          <Space size={16}>
            <Link href="/dashboard">
              <Button 
                type="primary" 
                size="large"
                icon={<ArrowRightOutlined />}
                style={{ 
                  height: 48, 
                  paddingInline: 32, 
                  fontWeight: 600,
                  fontSize: 15,
                }}
              >
                Get Started
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                size="large"
                style={{ 
                  height: 48, 
                  paddingInline: 32, 
                  fontWeight: 500,
                  fontSize: 15,
                }}
              >
                Learn More
              </Button>
            </Link>
          </Space>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PROBLEM / SOLUTION                                                 */}
      {/* ================================================================== */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <Text 
                strong 
                style={{ 
                  color: secondary[600], 
                  fontSize: 13, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  display: 'block',
                  marginBottom: 12,
                }}
              >
                The Challenge
              </Text>
              <Title level={2} style={{ color: neutral[800], marginBottom: 16 }}>
                Too many events, not enough visibility
              </Title>
              <Paragraph style={{ color: neutral[600], fontSize: 16, lineHeight: 1.7 }}>
                When multiple kaupapa groups plan events independently, overlaps happen. 
                Contributors spend time coordinating through messages and calls. 
                Uri miss out when events clash.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <Text 
                strong 
                style={{ 
                  color: primary[600], 
                  fontSize: 13, 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  display: 'block',
                  marginBottom: 12,
                }}
              >
                The Solution
              </Text>
              <Title level={2} style={{ color: neutral[800], marginBottom: 16 }}>
                See overlaps before they happen
              </Title>
              <Paragraph style={{ color: neutral[600], fontSize: 16, lineHeight: 1.7 }}>
                Huri Noa gives contributors a soft warning when their event might clash 
                with another kaupapa. No hard rules — just awareness and the mana to 
                decide what's right.
              </Paragraph>
            </Col>
          </Row>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FEATURES                                                           */}
      {/* ================================================================== */}
      <section style={{ padding: '80px 24px', background: neutral[50] }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <Title level={2} style={{ color: neutral[800], marginBottom: 8 }}>
              Built for how you work
            </Title>
            <Paragraph style={{ color: neutral[600], fontSize: 16 }}>
              Simple tools that respect your process
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {/* Feature 1 */}
            <Col xs={24} md={8}>
              <Card
                style={{
                  height: '100%',
                  borderRadius: borderRadius.lg,
                  border: `1px solid ${neutral[200]}`,
                }}
                styles={{ body: { padding: 28 } }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: primary[100],
                    borderRadius: borderRadius.md,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  <CalendarOutlined style={{ fontSize: 24, color: primary[600] }} />
                </div>
                <Title level={4} style={{ color: neutral[800], marginBottom: 8 }}>
                  Event Creation
                </Title>
                <Text style={{ color: neutral[600], lineHeight: 1.6 }}>
                  Create events in under 2 minutes. Title, date, location, description — 
                  everything you need, nothing you don't.
                </Text>
              </Card>
            </Col>

            {/* Feature 2 */}
            <Col xs={24} md={8}>
              <Card
                style={{
                  height: '100%',
                  borderRadius: borderRadius.lg,
                  border: `1px solid ${neutral[200]}`,
                }}
                styles={{ body: { padding: 28 } }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: secondary[100],
                    borderRadius: borderRadius.md,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  <CheckCircleOutlined style={{ fontSize: 24, color: secondary[600] }} />
                </div>
                <Title level={4} style={{ color: neutral[800], marginBottom: 8 }}>
                  Clash Detection
                </Title>
                <Text style={{ color: neutral[600], lineHeight: 1.6 }}>
                  See potential overlaps before you save. A gentle heads-up, not a 
                  hard stop — you keep the mana to decide.
                </Text>
              </Card>
            </Col>

            {/* Feature 3 */}
            <Col xs={24} md={8}>
              <Card
                style={{
                  height: '100%',
                  borderRadius: borderRadius.lg,
                  border: `1px solid ${neutral[200]}`,
                }}
                styles={{ body: { padding: 28 } }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: primary[100],
                    borderRadius: borderRadius.md,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  <TeamOutlined style={{ fontSize: 24, color: primary[600] }} />
                </div>
                <Title level={4} style={{ color: neutral[800], marginBottom: 8 }}>
                  Uri Dashboard
                </Title>
                <Text style={{ color: neutral[600], lineHeight: 1.6 }}>
                  Uri see upcoming events from all their linked kaupapa in one 
                  simple view. No calendar sync needed.
                </Text>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      {/* ================================================================== */}
      {/* CTA SECTION                                                        */}
      {/* ================================================================== */}
      <section
        style={{
          padding: '80px 24px',
          background: `linear-gradient(135deg, ${primary[500]} 0%, ${primary[600]} 100%)`,
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <Title level={2} style={{ color: '#fff', marginBottom: 16 }}>
            Ready to coordinate better?
          </Title>
          <Paragraph style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 32 }}>
            Join the kaupapa groups already using Huri Noa to reduce scheduling friction.
          </Paragraph>
          <Link href="/dashboard">
            <Button 
              size="large"
              style={{ 
                height: 48, 
                paddingInline: 32, 
                fontWeight: 600,
                fontSize: 15,
                background: '#fff',
                color: primary[600],
                border: 'none',
              }}
            >
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
