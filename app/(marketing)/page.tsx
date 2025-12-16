'use client'

import { Typography, Button, Space, Row, Col, Card, Divider, Steps } from 'antd'
import Link from 'next/link'
import { 
  ArrowRightOutlined, 
  BulbOutlined, 
  UserOutlined, 
  TeamOutlined, 
  SafetyCertificateOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  ThunderboltOutlined,
  CheckCircleOutlined,
  RocketOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
  WarningFilled
} from '@ant-design/icons'
import { primary, secondary, tertiary, neutral, borderRadius } from '@/theme'

const { Title, Text, Paragraph } = Typography

export default function ProjectStoryPage() {
  return (
    <div style={{ background: '#fff' }}>
      
      {/* ================================================================== */}
      {/* HERO SECTION                                                       */}
      {/* ================================================================== */}
      <div style={{ 
        background: neutral[900], 
        color: '#fff', 
        padding: '120px 24px 160px', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative background glow */}
        <div style={{
          position: 'absolute',
          top: -100,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 600,
          background: primary[500],
          opacity: 0.15,
          filter: 'blur(100px)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '8px 16px', 
            background: 'rgba(255,255,255,0.1)', 
            borderRadius: borderRadius.full, 
            marginBottom: 24,
            backdropFilter: 'blur(10px)'
          }}>
            <Text style={{ color: primary[300], fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>
              Huri Noa POC
            </Text>
          </div>
          <Title style={{ color: '#fff', fontSize: 72, marginBottom: 24, letterSpacing: '-0.03em', lineHeight: 1.1 }}>
            Project Vision
          </Title>
          <Paragraph style={{ fontSize: 24, color: neutral[300], maxWidth: 600, margin: '0 auto', lineHeight: 1.5 }}>
            An interactive prototype demonstrating the core scheduling and coordination workflows for Huri Noa.
          </Paragraph>
        </div>
      </div>

      {/* ================================================================== */}
      {/* CONTEXT CARD (The "Why")                                           */}
      {/* ================================================================== */}
      <div style={{ marginTop: -80, padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <div style={{ 
          maxWidth: 900, 
          margin: '0 auto', 
          background: '#fff', 
          borderRadius: 24,
          padding: '64px 48px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
          border: `1px solid ${neutral[200]}`
        }}>
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={10}>
              <Title level={3} style={{ fontSize: 32, marginBottom: 16 }}>About this POC</Title>
              <div style={{ width: 60, height: 4, background: primary[500], borderRadius: 2 }} />
            </Col>
            <Col xs={24} md={14}>
              <Paragraph style={{ fontSize: 18, color: neutral[600], lineHeight: 1.8, marginBottom: 24 }}>
                This early release is designed to solve one specific problem: <strong>helping contributors avoid scheduling clashes.</strong>
              </Paragraph>
              <Paragraph style={{ fontSize: 18, color: neutral[600], lineHeight: 1.8, marginBottom: 0 }}>
                We deliberately chose not to build a complex calendar sync for uri yet. Instead, we focused on giving contributors the visibility they need to plan with confidence.
              </Paragraph>
            </Col>
          </Row>
        </div>
      </div>

      {/* ================================================================== */}
      {/* THE SPARK (Insight)                                                */}
      {/* ================================================================== */}
      <div style={{ padding: '120px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <BulbOutlined style={{ fontSize: 48, color: primary[500], marginBottom: 32 }} />
          <Title level={2} style={{ fontSize: 40, fontWeight: 400, fontStyle: 'italic', marginBottom: 32, lineHeight: 1.4 }}>
            “The biggest problem is when two kaupapa pick the same date. We just need to see what’s already happening.”
          </Title>
          <Text style={{ fontSize: 16, fontWeight: 600, color: neutral[500], textTransform: 'uppercase', letterSpacing: 1 }}>
            — Mina Mathieson. Scoping Workshop, 1 Dec 2025
          </Text>
        </div>
      </div>

      {/* ================================================================== */}
      {/* CORE JOURNEYS                                                      */}
      {/* ================================================================== */}
      <div style={{ background: neutral[50], padding: '100px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <Title level={2}>Core User Journeys</Title>
            <Paragraph style={{ fontSize: 18, color: neutral[500] }}>How different roles experience the platform</Paragraph>
          </div>
          
          <Row gutter={[32, 32]}>
            <Col xs={24} md={12}>
              <Card 
                bordered={false} 
                style={{ height: '100%', borderRadius: 24, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
                bodyStyle={{ padding: 40 }}
              >
                <Space align="center" style={{ marginBottom: 32 }}>
                  <div style={{ padding: 12, background: primary[50], borderRadius: 12, color: primary[600] }}>
                    <SafetyCertificateOutlined style={{ fontSize: 24 }} />
                  </div>
                  <Title level={4} style={{ margin: 0 }}>Contributor Journey</Title>
                </Space>
                <Steps
                  direction="vertical"
                  size="small"
                  current={1}
                  items={[
                    { title: 'Login', description: 'Access the contributor dashboard' },
                    { title: 'Create Event', description: 'Enter details for upcoming kaupapa' },
                    { title: 'Clash Detection', description: 'Warned of conflicts instantly' },
                    { title: 'Submit', description: 'Event is live for uri to see' },
                  ]}
                />
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card 
                bordered={false} 
                style={{ height: '100%', borderRadius: 24, boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}
                bodyStyle={{ padding: 40 }}
              >
                <Space align="center" style={{ marginBottom: 32 }}>
                  <div style={{ padding: 12, background: tertiary[50], borderRadius: 12, color: tertiary[600] }}>
                    <TeamOutlined style={{ fontSize: 24 }} />
                  </div>
                  <Title level={4} style={{ margin: 0 }}>Uri Journey</Title>
                </Space>
                <Steps
                  direction="vertical"
                  size="small"
                  current={2}
                  items={[
                    { title: 'Login', description: 'Simple access via magic link' },
                    { title: 'View Events', description: 'See everything linked to their kaupapa' },
                    { title: 'Done', description: 'Clear visibility, no noise' },
                  ]}
                />
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* ================================================================== */}
      {/* FEATURES (Simple Cards)                                            */}
      {/* ================================================================== */}
      <div style={{ padding: '100px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <Title level={2}>Built for Focus</Title>
            <Paragraph style={{ fontSize: 18, color: neutral[500] }}>
              We stripped away the complexity to deliver value immediately.
            </Paragraph>
          </div>

          <Row gutter={[32, 32]}>
            {/* Feature 1 */}
            <Col xs={24} md={8}>
              <div style={{ padding: 32, border: `1px solid ${neutral[200]}`, borderRadius: 16, height: '100%' }}>
                <CalendarOutlined style={{ fontSize: 32, color: primary[500], marginBottom: 24 }} />
                <Title level={4} style={{ marginBottom: 12 }}>Event Creation</Title>
                <Paragraph style={{ color: neutral[600], lineHeight: 1.6 }}>
                  Create events in under 2 minutes. Title, date, location, description — everything you need, nothing you don't.
                </Paragraph>
              </div>
            </Col>

            {/* Feature 2 */}
            <Col xs={24} md={8}>
              <div style={{ padding: 32, border: `1px solid ${neutral[200]}`, borderRadius: 16, height: '100%', background: primary[50] }}>
                <CheckCircleOutlined style={{ fontSize: 32, color: primary[600], marginBottom: 24 }} />
                <Title level={4} style={{ marginBottom: 12 }}>Clash Detection</Title>
                <Paragraph style={{ color: neutral[600], lineHeight: 1.6 }}>
                  See potential overlaps before you save. A gentle heads-up, not a hard stop — you keep the mana to decide.
                </Paragraph>
              </div>
            </Col>

            {/* Feature 3 */}
            <Col xs={24} md={8}>
              <div style={{ padding: 32, border: `1px solid ${neutral[200]}`, borderRadius: 16, height: '100%' }}>
                <TeamOutlined style={{ fontSize: 32, color: tertiary[500], marginBottom: 24 }} />
                <Title level={4} style={{ marginBottom: 12 }}>Uri Dashboard</Title>
                <Paragraph style={{ color: neutral[600], lineHeight: 1.6 }}>
                  Uri see upcoming events from all their linked kaupapa in one simple view. No calendar sync needed yet.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* ================================================================== */}
      {/* ARCHITECTURE                                                       */}
      {/* ================================================================== */}
      <div style={{ background: neutral[900], color: '#fff', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Title level={2} style={{ color: '#fff', textAlign: 'center', marginBottom: 64 }}>Technical Architecture</Title>
          
          <Row gutter={[24, 24]} align="middle">
            {/* Left: Inputs */}
            <Col xs={24} md={8}>
              <Card style={{ background: neutral[800], border: 'none', height: '100%' }} bodyStyle={{ padding: 32 }}>
                <Title level={4} style={{ color: '#fff', marginBottom: 16 }}>Manual Import</Title>
                <Paragraph style={{ color: neutral[400], marginBottom: 0 }}>
                  Users (Contributors + Uri) are imported and linked to specific Kaupapa.
                </Paragraph>
              </Card>
            </Col>
            
            {/* Center: Arrow */}
            <Col xs={24} md={2} style={{ textAlign: 'center' }}>
              <ArrowRightOutlined style={{ fontSize: 24, color: neutral[500], transform: 'rotate(90deg)' }} />
            </Col>

            {/* Right: System */}
            <Col xs={24} md={14}>
              <Card style={{ background: neutral[800], border: 'none', height: '100%' }} bodyStyle={{ padding: 32 }}>
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', gap: 24 }}>
                    <SafetyCertificateOutlined style={{ fontSize: 24, color: primary[500], marginTop: 4 }} />
                    <div>
                      <Text style={{ color: '#fff', fontWeight: 600, fontSize: 18 }}>Contributor Action</Text>
                      <Paragraph style={{ color: neutral[400], margin: 0, marginTop: 4 }}>Creates events. Conflict detection runs immediately.</Paragraph>
                    </div>
                  </div>
                  <Divider style={{ borderColor: neutral[700], margin: '12px 0' }} />
                  <div style={{ display: 'flex', gap: 24 }}>
                    <TeamOutlined style={{ fontSize: 24, color: tertiary[500], marginTop: 4 }} />
                    <div>
                      <Text style={{ color: '#fff', fontWeight: 600, fontSize: 18 }}>Uri View</Text>
                      <Paragraph style={{ color: neutral[400], margin: 0, marginTop: 4 }}>See all events across their linked kaupapa.</Paragraph>
                    </div>
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Text style={{ color: neutral[500] }}>
              * No calendar sync or RSVP in this phase (by design)
            </Text>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* MVP SCOPE                                                          */}
      {/* ================================================================== */}
      <div style={{ padding: '100px 24px', background: neutral[50] }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <Title level={2}>MVP Scope & Focus</Title>
            <Paragraph style={{ fontSize: 18, color: neutral[500], maxWidth: 800, margin: '0 auto' }}>
              Based on feedback in our last workshop, we’ve refined the focus of this Proof of Concept (POC) to prioritise supporting Contributors to easily create events without clashes across entities.
            </Paragraph>
            <Paragraph style={{ fontSize: 18, color: neutral[500], maxWidth: 800, margin: '16px auto 0' }}>
              While earlier thinking centred around personalised calendar views for Uri, the clearest and most pressing need expressed was <strong>"a way for Contributors to create events without double-ups or conflicts"</strong>.
            </Paragraph>
          </div>

          <Row gutter={[48, 48]}>
            <Col xs={24} md={12}>
              <Card 
                title={<Space><CheckCircleFilled style={{ color: tertiary[500] }} /> In Scope (The Focus)</Space>} 
                bordered={false} 
                style={{ height: '100%', borderRadius: 16 }}
              >
                <Paragraph type="secondary" style={{ marginBottom: 24 }}>
                  What we're delivering in the POC:
                </Paragraph>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <CheckCircleOutlined style={{ color: tertiary[500], fontSize: 20 }} />
                    <Text style={{ fontSize: 16 }}>Contributor Event Creation</Text>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <CheckCircleOutlined style={{ color: tertiary[500], fontSize: 20 }} />
                    <Text style={{ fontSize: 16 }}>Soft Clash Detection</Text>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <CheckCircleOutlined style={{ color: tertiary[500], fontSize: 20 }} />
                    <Text style={{ fontSize: 16 }}>Basic Uri Visibility (name only)</Text>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <CheckCircleOutlined style={{ color: tertiary[500], fontSize: 20 }} />
                    <Text style={{ fontSize: 16 }}>Manual User Import</Text>
                  </div>
                </Space>
                <Divider style={{ margin: '24px 0' }} />
                <div style={{ background: tertiary[50], padding: 16, borderRadius: 8, color: tertiary[800] }}>
                  <Paragraph style={{ margin: '8px 0 0', fontSize: 14, color: tertiary[800] }}>
                    These deliverables reflect the critical coordination needs of Contributors, enabling them to plan events across entities with clarity and minimal friction.
                  </Paragraph>
                </div>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card 
                title={<Space><CloseCircleFilled style={{ color: secondary[500] }} /> Out of Scope (Deferred)</Space>} 
                bordered={false} 
                style={{ height: '100%', borderRadius: 16, opacity: 0.9 }}
              >
                <Paragraph type="secondary" style={{ marginBottom: 24 }}>
                  What we are not including — yet:
                </Paragraph>
                <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <ClockCircleOutlined style={{ color: neutral[400], fontSize: 20 }} />
                    <Text style={{ fontSize: 16, color: neutral[500] }}>Calendar Sync (.ics feeds)</Text>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <ClockCircleOutlined style={{ color: neutral[400], fontSize: 20 }} />
                    <Text style={{ fontSize: 16, color: neutral[500] }}>RSVPs & Notifications</Text>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <ClockCircleOutlined style={{ color: neutral[400], fontSize: 20 }} />
                    <Text style={{ fontSize: 16, color: neutral[500] }}>Self-Registration (Uri sign-up)</Text>
                  </div>
                </Space>
                <Divider style={{ margin: '24px 0' }} />
                <div style={{ background: neutral[100], padding: 16, borderRadius: 8, fontStyle: 'italic', color: neutral[600] }}>
                  “It’s really important that events across different rōpū aren’t public to everyone... Uri only need to see what’s relevant to them.”
                  <div style={{ marginTop: 8, fontSize: 12, fontWeight: 600, fontStyle: 'normal' }}>— Mina Mathieson</div>
                </div>
              </Card>
            </Col>
          </Row>

          <div style={{ marginTop: 64 }}>
            <div style={{ textAlign: 'center', marginBottom: 32 }}>
              <Title level={3} style={{ marginBottom: 8 }}>Key Risks & Mitigations</Title>
              <Paragraph style={{ color: neutral[500], fontSize: 16 }}>
                We are proactively managing these risks to ensure the POC remains focused and deliverable.
              </Paragraph>
            </div>
            <Row gutter={[24, 24]}>
              {[
                { title: "Scope Creep", desc: "We’ve deliberately constrained the MVP to focus on coordination, not full user autonomy or comms." },
                { title: "Security Exposure", desc: "Uri calendar feeds have been deprioritised until robust permissioning is in place." },
                { title: "Mismatch of Expectations", desc: "This POC is explicitly designed to test Contributor coordination first. Clear comms will ensure alignment." },
                { title: "Underwhelming for Uri", desc: "The value for Uri will grow in future phases. For now, they benefit passively through better organised events." }
              ].map((risk, i) => (
                <Col xs={24} md={12} key={i}>
                  <div style={{ background: '#fff', padding: 24, borderRadius: 12, border: `1px solid ${neutral[200]}`, height: '100%' }}>
                    <Space align="start" style={{ marginBottom: 8 }}>
                      <WarningFilled style={{ color: secondary[500], fontSize: 20, marginTop: 4 }} />
                      <Text strong style={{ color: neutral[800], fontSize: 16 }}>{risk.title}</Text>
                    </Space>
                    <Paragraph style={{ color: neutral[600], margin: 0, paddingLeft: 28 }}>{risk.desc}</Paragraph>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* FUTURE                                                             */}
      {/* ================================================================== */}
      <div style={{ padding: '100px 24px', maxWidth: 800, margin: '0 auto' }}>
        <Title level={2} style={{ marginBottom: 48, textAlign: 'center' }}>What's Coming Later</Title>
        <Row gutter={[24, 24]}>
          {[
            { icon: <ClockCircleOutlined />, text: "RSVP and event reminders" },
            { icon: <CalendarOutlined />, text: ".ics / calendar integration" },
            { icon: <UserOutlined />, text: "Self-service registration" },
            { icon: <ThunderboltOutlined />, text: "Reporting or summaries" }
          ].map((item, i) => (
            <Col xs={24} sm={12} key={i}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 16, 
                fontSize: 16, 
                color: neutral[700],
                padding: 24,
                background: neutral[50],
                borderRadius: 12
              }}>
                <div style={{ color: primary[500], fontSize: 20 }}>{item.icon}</div>
                <span style={{ fontWeight: 500 }}>{item.text}</span>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      {/* ================================================================== */}
      {/* CTA                                                                */}
      {/* ================================================================== */}
      <div style={{ padding: '40px 24px', textAlign: 'center', background: '#fff', paddingBottom: 100 }}>
        <Link href="/dashboard">
          <Button type="primary" size="large" style={{ height: 64, padding: '0 48px', fontSize: 20, borderRadius: borderRadius.full }}>
            View the POC <ArrowRightOutlined />
          </Button>
        </Link>
      </div>

    </div>
  )
}