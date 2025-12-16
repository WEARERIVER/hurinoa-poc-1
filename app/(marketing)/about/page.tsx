'use client'

import { Typography, Button, Row, Col, Card, Space, Divider, Tag } from 'antd'
import { 
  CalendarOutlined, 
  SafetyCertificateOutlined, 
  TeamOutlined, 
  CheckCircleOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
  RocketOutlined,
  HeartOutlined,
  ThunderboltOutlined
} from '@ant-design/icons'
import { primary, secondary, neutral, layout, borderRadius, fontSize, spacing, shadow } from '@/theme'
import Link from 'next/link'
import { CSSProperties } from 'react'

const { Title, Paragraph, Text } = Typography

// Animation styles
const styles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  .animate-fade-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
  }
  
  .delay-100 { animation-delay: 0.1s; }
  .delay-200 { animation-delay: 0.2s; }
  .delay-300 { animation-delay: 0.3s; }
  
  .hover-card {
    transition: all 0.3s ease;
  }
  .hover-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
  }

  .gradient-text {
    background: linear-gradient(135deg, ${primary[600]}, ${secondary[500]});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export default function AboutPage() {
  return (
    <div style={{ background: '#fff', overflowX: 'hidden' }}>
      <style>{styles}</style>
      
      {/* ================================================================== */}
      {/* HERO & FEATURES WRAPPER                                            */}
      {/* ================================================================== */}
      <div style={{ 
        background: primary[50],
        position: 'relative',
        overflow: 'hidden'
      }}>

      {/* HERO SECTION - MAGAZINE STYLE */}
      <div style={{ 
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        position: 'relative'
      }}>
        {/* Decorative background elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 300,
          height: 300,
          background: secondary[100],
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.5,
          zIndex: 0
        }} />
        
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="animate-fade-up">
            <Text style={{ 
              color: primary[600], 
              fontWeight: 600, 
              letterSpacing: '1px', 
              textTransform: 'uppercase',
              marginBottom: 16,
              display: 'block'
            }}>
              Welcome to Huri Noa
            </Text>
          </div>
          
          <Title className="animate-fade-up delay-100" style={{ 
            fontSize: 'clamp(48px, 8vw, 84px)', // Responsive massive font
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 24,
            letterSpacing: '-0.02em',
            color: neutral[900]
          }}>
            Bring clarity to your <br/>
            <span className="gradient-text">kaupapa schedule.</span>
          </Title>
          
          <Paragraph className="animate-fade-up delay-200" style={{ 
            fontSize: 'clamp(18px, 2vw, 24px)',
            lineHeight: 1.6,
            color: neutral[600],
            maxWidth: 700,
            margin: '0 auto 48px',
            fontWeight: 400
          }}>
            Huri Noa helps whānau contributors create events, avoid clashes, and give uri a clear view of what's happening — all in one place.
          </Paragraph>
          
          <Space size="large" className="animate-fade-up delay-300">
            <Button 
              type="primary" 
              size="large" 
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ 
                height: 64, 
                padding: '0 48px', 
                fontSize: 18, 
                borderRadius: borderRadius.full,
                boxShadow: '0 10px 20px rgba(224, 123, 84, 0.3)'
              }}
            >
              Learn More
            </Button>
            <Link href="/">
              <Button size="large" type="text" style={{ 
                height: 64, 
                padding: '0 32px', 
                fontSize: 18,
                color: neutral[600],
                background: neutral[100],
                borderRadius: borderRadius.full
              }}>
                Get Started
              </Button>
            </Link>
          </Space>
        </div>
      </div>

      {/* ================================================================== */}
      {/* EDITORIAL FEATURES - ZIG ZAG                                       */}
      {/* ================================================================== */}
      <div id="features" style={{ padding: '120px 24px', maxWidth: 1200, margin: '0 auto' }}>
        
        {/* Feature 1 */}
        <Row gutter={[64, 64]} align="middle" style={{ marginBottom: 120 }}>
          <Col xs={24} md={12} className="animate-fade-up">
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: -20,
                left: -20,
                width: 100,
                height: 100,
                background: primary[100],
                borderRadius: '50%',
                zIndex: 0
              }} />
              <Title level={2} style={{ fontSize: 48, marginBottom: 24, position: 'relative', zIndex: 1 }}>
                Create with <br/>
                <span style={{ color: primary[500] }}>Confidence.</span>
              </Title>
              <Paragraph style={{ fontSize: 20, color: neutral[600], lineHeight: 1.8 }}>
                No more spreadsheets or group chat chaos. Contributors can quickly create and update events for their kaupapa in a dedicated, purpose-built space.
              </Paragraph>
              <Space direction="vertical" size="middle" style={{ marginTop: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleOutlined style={{ fontSize: 24, color: primary[500], marginRight: 16 }} />
                  <Text style={{ fontSize: 18 }}>Simple event creation tools</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircleOutlined style={{ fontSize: 24, color: primary[500], marginRight: 16 }} />
                  <Text style={{ fontSize: 18 }}>Instant updates for everyone</Text>
                </div>
              </Space>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="hover-card" style={{ 
              background: '#fff',
              padding: 48,
              borderRadius: 32,
              boxShadow: shadow.lg,
              border: `1px solid ${neutral[100]}`,
              textAlign: 'center'
            }}>
              <div style={{ 
                width: 120, 
                height: 120, 
                background: primary[50], 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 32px',
                color: primary[500],
                fontSize: 48,
                animation: 'float 6s ease-in-out infinite'
              }}>
                <RocketOutlined />
              </div>
              <Title level={4}>Streamlined Workflow</Title>
              <Text type="secondary">Designed for speed and simplicity.</Text>
            </div>
          </Col>
        </Row>

        {/* Feature 2 */}
        <Row gutter={[64, 64]} align="middle" style={{ flexDirection: 'row-reverse' }}>
          <Col xs={24} md={12} className="animate-fade-up">
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 100,
                height: 100,
                background: secondary[100],
                borderRadius: '50%',
                zIndex: 0
              }} />
              <Title level={2} style={{ fontSize: 48, marginBottom: 24, position: 'relative', zIndex: 1 }}>
                Harmony in <br/>
                <span style={{ color: secondary[500] }}>Scheduling.</span>
              </Title>
              <Paragraph style={{ fontSize: 20, color: neutral[600], lineHeight: 1.8 }}>
                Avoid the frustration of double-bookings. Huri Noa gives you a heads-up if your event overlaps with another kaupapa, helping us all work better together.
              </Paragraph>
              <Space direction="vertical" size="middle" style={{ marginTop: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SafetyCertificateOutlined style={{ fontSize: 24, color: secondary[500], marginRight: 16 }} />
                  <Text style={{ fontSize: 18 }}>Smart clash detection</Text>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <SafetyCertificateOutlined style={{ fontSize: 24, color: secondary[500], marginRight: 16 }} />
                  <Text style={{ fontSize: 18 }}>Respectful coordination</Text>
                </div>
              </Space>
            </div>
          </Col>
          <Col xs={24} md={12}>
            <div className="hover-card" style={{ 
              background: '#fff',
              padding: 48,
              borderRadius: 32,
              boxShadow: shadow.lg,
              border: `1px solid ${neutral[100]}`,
              textAlign: 'center'
            }}>
              <div style={{ 
                width: 120, 
                height: 120, 
                background: secondary[50], 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 32px',
                color: secondary[500],
                fontSize: 48,
                animation: 'float 6s ease-in-out infinite 1s'
              }}>
                <HeartOutlined />
              </div>
              <Title level={4}>Community First</Title>
              <Text type="secondary">Built to support our shared mana.</Text>
            </div>
          </Col>
        </Row>

      </div>
      </div> {/* End Wrapper */}

      {/* ================================================================== */}
      {/* WHAT YOU CAN DO NOW (FROM ABOUT2)                                  */}
      {/* ================================================================== */}
      <div style={{ padding: '100px 24px', background: '#fff', borderTop: `1px solid ${neutral[200]}`, borderBottom: `1px solid ${neutral[200]}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <Title level={2} style={{ marginBottom: 16 }}>What you can do now</Title>
            <Paragraph style={{ fontSize: 18, color: neutral[500] }}>
              Simple tools to help you coordinate better.
            </Paragraph>
          </div>

          <Row gutter={[48, 48]}>
            {/* Feature 1 */}
            <Col xs={24} md={8}>
              <Card 
                bordered={false} 
                style={{ height: '100%', textAlign: 'center', boxShadow: 'none' }}
                bodyStyle={{ padding: 0 }}
              >
                <div style={{ 
                  width: 64, 
                  height: 64, 
                  background: primary[50], 
                  borderRadius: borderRadius.full,
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  color: primary[500],
                  fontSize: 28
                }}>
                  <CalendarOutlined />
                </div>
                <Title level={4} style={{ marginBottom: 12 }}>Create events with ease</Title>
                <Paragraph style={{ color: neutral[600], fontSize: 16 }}>
                  Contributors can quickly create and update events for their kaupapa.
                </Paragraph>
              </Card>
            </Col>

            {/* Feature 2 */}
            <Col xs={24} md={8}>
              <Card 
                bordered={false} 
                style={{ height: '100%', textAlign: 'center', boxShadow: 'none' }}
                bodyStyle={{ padding: 0 }}
              >
                <div style={{ 
                  width: 64, 
                  height: 64, 
                  background: secondary[50], 
                  borderRadius: borderRadius.full,
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  color: secondary[500],
                  fontSize: 28
                }}>
                  <SafetyCertificateOutlined />
                </div>
                <Title level={4} style={{ marginBottom: 12 }}>Avoid event clashes</Title>
                <Paragraph style={{ color: neutral[600], fontSize: 16 }}>
                  Get a heads-up if your event overlaps with another kaupapa.
                </Paragraph>
              </Card>
            </Col>

            {/* Feature 3 */}
            <Col xs={24} md={8}>
              <Card 
                bordered={false} 
                style={{ height: '100%', textAlign: 'center', boxShadow: 'none' }}
                bodyStyle={{ padding: 0 }}
              >
                <div style={{ 
                  width: 64, 
                  height: 64, 
                  background: neutral[100], 
                  borderRadius: borderRadius.full,
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  color: neutral[600],
                  fontSize: 28
                }}>
                  <TeamOutlined />
                </div>
                <Title level={4} style={{ marginBottom: 12 }}>View your upcoming kaupapa</Title>
                <Paragraph style={{ color: neutral[600], fontSize: 16 }}>
                  Uri can see a personalised list of events relevant to them.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* ================================================================== */}
      {/* COMING SOON - GRID                                                 */}
      {/* ================================================================== */}
      <div style={{ padding: '120px 24px', background: neutral[50] }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <Space align="center" style={{ marginBottom: 16 }}>
              <ClockCircleOutlined style={{ fontSize: 24, color: primary[400] }} />
              <Text style={{ fontSize: 16, fontWeight: 600, color: primary[500], textTransform: 'uppercase', letterSpacing: 1 }}>Roadmap</Text>
            </Space>
            <Title level={2} style={{ fontSize: 42, marginTop: 16 }}>We're just getting started</Title>
            <Paragraph style={{ fontSize: 18, color: neutral[500], maxWidth: 600, margin: '0 auto' }}>
              Here is what we are working on next to make coordination even easier.
            </Paragraph>
          </div>

          <Row gutter={[24, 24]}>
            {[
              { title: "RSVP & Reminders", icon: <ClockCircleOutlined />, desc: "Know who's coming and keep everyone in the loop." },
              { title: "Calendar Sync", icon: <CalendarOutlined />, desc: "Sync events directly to your personal calendar (.ics)." },
              { title: "Self Registration", icon: <TeamOutlined />, desc: "Easier onboarding for new whānau members." },
              { title: "Smart Notifications", icon: <ThunderboltOutlined />, desc: "Get alerted via email or mobile when things change." },
            ].map((item, index) => (
              <Col xs={24} sm={12} key={index}>
                <Card 
                  className="hover-card"
                  bordered={false}
                  style={{ height: '100%', borderRadius: 16 }}
                  bodyStyle={{ padding: 32 }}
                >
                  <div style={{ fontSize: 32, color: primary[500], marginBottom: 24 }}>{item.icon}</div>
                  <Title level={4} style={{ marginBottom: 12 }}>{item.title}</Title>
                  <Paragraph style={{ color: neutral[500], fontSize: 16, marginBottom: 0 }}>
                    {item.desc}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* ================================================================== */}
      {/* FINAL CTA                                                          */}
      {/* ================================================================== */}
      <div style={{ 
        padding: '80px 24px', 
        background: neutral[900], 
        textAlign: 'center',
        color: '#fff'
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <Title level={2} style={{ color: '#fff', marginBottom: 16 }}>
            Have a kaupapa to manage?
          </Title>
          <Paragraph style={{ color: neutral[400], fontSize: 18, marginBottom: 32 }}>
            Login to get started or contact us to get your group set up.
          </Paragraph>
          <Link href="/dashboard">
            <Button type="primary" size="large" style={{ height: 56, padding: '0 40px', fontSize: 18 }}>
              Login Now <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>

    </div>
  )
}
