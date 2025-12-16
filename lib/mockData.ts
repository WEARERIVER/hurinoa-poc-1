// ============================================================================
// Mock Data Store
// ============================================================================
// In-memory data store for POC. Simulates a database with kaupapa and events.
// Events from other kaupapa are included to demonstrate clash detection.

export interface Kaupapa {
  id: string
  name: string
  color: string // For visual distinction in calendar
}

export interface Event {
  id: string
  title: string
  description: string
  location: string
  date: string       // ISO date string (YYYY-MM-DD)
  startTime?: string // Optional, format: HH:mm
  endTime?: string   // Optional, format: HH:mm
  kaupapa: string    // Kaupapa ID
  createdAt: string
  updatedAt: string
}

// ----------------------------------------------------------------------------
// Kaupapa (entities/groups)
// ----------------------------------------------------------------------------

export const kaupapa: Kaupapa[] = [
  { id: 'kp-1', name: 'Te Whānau Aroha', color: '#E07B54' },      // Primary orange
  { id: 'kp-2', name: 'Ngā Tamariki Trust', color: '#04B09E' },   // Teal
  { id: 'kp-3', name: 'Mātauranga Collective', color: '#7C3AED' }, // Purple
  { id: 'kp-4', name: 'Hauora Network', color: '#2563EB' },       // Blue
]

// The current contributor's kaupapa (for POC, Aroha manages kp-1)
export const CURRENT_KAUPAPA_ID = 'kp-1'

// ----------------------------------------------------------------------------
// Events (seeded with sample data including other kaupapa for clash testing)
// ----------------------------------------------------------------------------

// Helper to generate dates relative to today
const today = new Date()
const formatDate = (date: Date) => date.toISOString().split('T')[0]
const addDays = (days: number) => {
  const d = new Date(today)
  d.setDate(d.getDate() + days)
  return formatDate(d)
}

let events: Event[] = [
  // Current kaupapa events (Te Whānau Aroha)
  {
    id: 'evt-1',
    title: 'Whānau Hui',
    description: 'Monthly gathering to discuss upcoming initiatives and share kai.',
    location: 'Community Hall, 123 Main St',
    date: addDays(3),
    startTime: '10:00',
    endTime: '12:00',
    kaupapa: 'kp-1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'evt-2',
    title: 'Kapa Haka Practice',
    description: 'Weekly practice session for all ages.',
    location: 'School Gymnasium',
    date: addDays(7),
    startTime: '18:00',
    endTime: '20:00',
    kaupapa: 'kp-1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'evt-3',
    title: 'Planning Workshop',
    description: 'Strategic planning for 2025 initiatives.',
    location: 'Online - Zoom',
    date: addDays(14),
    startTime: '14:00',
    endTime: '16:00',
    kaupapa: 'kp-1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  
  // Other kaupapa events (for clash detection)
  {
    id: 'evt-4',
    title: 'Tamariki Day Out',
    description: 'Fun day for the kids.',
    location: 'Local Park',
    date: addDays(3), // Same day as Whānau Hui - potential clash
    startTime: '09:00',
    endTime: '15:00',
    kaupapa: 'kp-2',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'evt-5',
    title: 'Wānanga',
    description: 'Educational workshop.',
    location: 'University Campus',
    date: addDays(7), // Same day as Kapa Haka - potential clash
    startTime: '09:00',
    endTime: '17:00',
    kaupapa: 'kp-3',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'evt-6',
    title: 'Health Screening',
    description: 'Free community health checks.',
    location: 'Medical Centre',
    date: addDays(10),
    startTime: '08:00',
    endTime: '16:00',
    kaupapa: 'kp-4',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: 'evt-7',
    title: 'Hauora Hui',
    description: 'Wellbeing gathering.',
    location: 'Community Centre',
    date: addDays(14), // Same day as Planning Workshop - potential clash
    startTime: '10:00',
    endTime: '14:00',
    kaupapa: 'kp-4',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

// ----------------------------------------------------------------------------
// Data Access Functions
// ----------------------------------------------------------------------------

export function getAllKaupapa(): Kaupapa[] {
  return kaupapa
}

export function getKaupapa(id: string): Kaupapa | undefined {
  return kaupapa.find(k => k.id === id)
}

export function getCurrentKaupapa(): Kaupapa {
  return kaupapa.find(k => k.id === CURRENT_KAUPAPA_ID)!
}

export function getOtherKaupapa(): Kaupapa[] {
  return kaupapa.filter(k => k.id !== CURRENT_KAUPAPA_ID)
}

// Events for the current contributor's kaupapa
export function getMyEvents(): Event[] {
  return events
    .filter(e => e.kaupapa === CURRENT_KAUPAPA_ID)
    .sort((a, b) => a.date.localeCompare(b.date))
}

// Events from other kaupapa (for clash visibility)
export function getOtherEvents(filterKaupapa?: string[]): Event[] {
  return events
    .filter(e => e.kaupapa !== CURRENT_KAUPAPA_ID)
    .filter(e => !filterKaupapa || filterKaupapa.length === 0 || filterKaupapa.includes(e.kaupapa))
    .sort((a, b) => a.date.localeCompare(b.date))
}

// All events (for calendar view)
export function getAllEvents(filterKaupapa?: string[]): Event[] {
  return events
    .filter(e => !filterKaupapa || filterKaupapa.length === 0 || filterKaupapa.includes(e.kaupapa) || e.kaupapa === CURRENT_KAUPAPA_ID)
    .sort((a, b) => a.date.localeCompare(b.date))
}

export function getEvent(id: string): Event | undefined {
  return events.find(e => e.id === id)
}

// Check if an event belongs to the current kaupapa
export function isMyEvent(event: Event): boolean {
  return event.kaupapa === CURRENT_KAUPAPA_ID
}

// Get events on a specific date
export function getEventsOnDate(date: string, filterKaupapa?: string[]): Event[] {
  return getAllEvents(filterKaupapa).filter(e => e.date === date)
}

// Check for clashes (other events on the same date/time)
export function getClashesForEvent(date: string, startTime?: string, endTime?: string, excludeEventId?: string): Event[] {
  return events
    .filter(e => e.kaupapa !== CURRENT_KAUPAPA_ID) // Only other kaupapa
    .filter(e => e.id !== excludeEventId)
    .filter(e => e.date === date)
    .filter(e => {
      // If no times specified, any event on the same day is a potential clash
      if (!startTime || !e.startTime) return true
      
      // Check time overlap
      const eventStart = e.startTime || '00:00'
      const eventEnd = e.endTime || '23:59'
      const newStart = startTime || '00:00'
      const newEnd = endTime || '23:59'
      
      return newStart < eventEnd && newEnd > eventStart
    })
}

// ----------------------------------------------------------------------------
// CRUD Operations
// ----------------------------------------------------------------------------

export function createEvent(data: Omit<Event, 'id' | 'kaupapa' | 'createdAt' | 'updatedAt'>): Event {
  const newEvent: Event = {
    ...data,
    id: `evt-${Date.now()}`,
    kaupapa: CURRENT_KAUPAPA_ID,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
  events.push(newEvent)
  return newEvent
}

export function updateEvent(id: string, data: Partial<Omit<Event, 'id' | 'kaupapa' | 'createdAt'>>): Event | undefined {
  const index = events.findIndex(e => e.id === id)
  if (index === -1) return undefined
  
  // Only allow updating own events
  if (events[index].kaupapa !== CURRENT_KAUPAPA_ID) return undefined
  
  events[index] = {
    ...events[index],
    ...data,
    updatedAt: new Date().toISOString(),
  }
  return events[index]
}

export function deleteEvent(id: string): boolean {
  const index = events.findIndex(e => e.id === id)
  if (index === -1) return false
  
  // Only allow deleting own events
  if (events[index].kaupapa !== CURRENT_KAUPAPA_ID) return false
  
  events.splice(index, 1)
  return true
}

// ----------------------------------------------------------------------------
// Statistics (for dashboard)
// ----------------------------------------------------------------------------

export function getEventStats() {
  const myEvents = getMyEvents()
  const now = new Date()
  const todayStr = formatDate(now)
  
  // Calculate end of this week (Sunday)
  const endOfWeek = new Date(now)
  endOfWeek.setDate(now.getDate() + (7 - now.getDay()))
  const endOfWeekStr = formatDate(endOfWeek)
  
  const upcoming = myEvents.filter(e => e.date >= todayStr)
  const thisWeek = myEvents.filter(e => e.date >= todayStr && e.date <= endOfWeekStr)
  const past = myEvents.filter(e => e.date < todayStr)
  
  return {
    upcoming: upcoming.length,
    thisWeek: thisWeek.length,
    past: past.length,
  }
}
