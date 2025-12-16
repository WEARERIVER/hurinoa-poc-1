'use client'

import { useRef, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import { EventClickArg, EventContentArg, DatesSetArg } from '@fullcalendar/core'
import { primary, secondary, tertiary, neutral, semantic } from '@/theme'

// ============================================================================
// Event Calendar Component
// ============================================================================
// A robust calendar wrapper using FullCalendar with day/week/month views.
// Styled to match our design system.

export interface CalendarEvent {
  id: string
  title: string
  start: Date | string
  end?: Date | string
  allDay?: boolean
  // Custom properties for our app
  kaupapa?: string
  isOwn?: boolean        // Whether this event belongs to the current user's kaupapa
  hasClash?: boolean     // Whether this event has a scheduling clash
  color?: string         // Event color
}

export interface EventCalendarProps {
  events: CalendarEvent[]
  onDateClick?: (date: Date, allDay: boolean) => void
  onEventClick?: (eventId: string) => void
  onViewChange?: (view: string, start: Date, end: Date) => void
  initialView?: 'dayGridMonth' | 'timeGridWeek' | 'timeGridDay'
  height?: number | string
}

/**
 * EventCalendar
 * =============
 * Full-featured calendar with day/week/month views.
 * 
 * Features:
 * - Month view: Overview of all events
 * - Week view: Hourly time grid
 * - Day view: Detailed hourly view
 * - Click date/time to create event
 * - Click event to view/edit
 * - Mobile responsive
 */
export function EventCalendar({
  events,
  onDateClick,
  onEventClick,
  onViewChange,
  initialView = 'dayGridMonth',
  height = 700,
}: EventCalendarProps) {
  const calendarRef = useRef<FullCalendar>(null)

  // Handle date/time click - opens create modal
  const handleDateClick = (arg: DateClickArg) => {
    if (onDateClick) {
      // allDay is true when clicking on month view or all-day area
      const allDay = arg.allDay || arg.view.type === 'dayGridMonth'
      onDateClick(arg.date, allDay)
    }
  }

  // Handle event click - opens event detail
  const handleEventClick = (arg: EventClickArg) => {
    if (onEventClick) {
      onEventClick(arg.event.id)
    }
  }

  // Handle view/date range change
  const handleDatesSet = (arg: DatesSetArg) => {
    if (onViewChange) {
      onViewChange(arg.view.type, arg.start, arg.end)
    }
  }

  // Custom event rendering
  const renderEventContent = (eventInfo: EventContentArg) => {
    const { event, view } = eventInfo
    const isOwn = event.extendedProps.isOwn
    const hasClash = event.extendedProps.hasClash
    const kaupapa = event.extendedProps.kaupapa

    // Compact render for month view
    if (view.type === 'dayGridMonth') {
      return (
        <div
          style={{
            padding: '2px 4px',
            fontSize: 11,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {hasClash && (
            <span style={{ color: semantic.warning.base, fontSize: 10 }}>⚠</span>
          )}
          <span>{event.title}</span>
        </div>
      )
    }

    // Detailed render for week/day views
    return (
      <div
        style={{
          padding: '4px 6px',
          fontSize: 12,
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: 2 }}>
          {hasClash && <span style={{ marginRight: 4 }}>⚠</span>}
          {event.title}
        </div>
        {eventInfo.timeText && (
          <div style={{ fontSize: 10, opacity: 0.8 }}>{eventInfo.timeText}</div>
        )}
        {!isOwn && kaupapa && (
          <div style={{ fontSize: 10, opacity: 0.7, marginTop: 2 }}>
            {kaupapa}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="event-calendar-wrapper">
      <style>{`
        /* ================================================================== */
        /* FullCalendar Theme Overrides                                      */
        /* ================================================================== */
        
        .event-calendar-wrapper {
          --fc-border-color: ${neutral[200]};
          --fc-button-bg-color: ${neutral[100]};
          --fc-button-border-color: ${neutral[200]};
          --fc-button-text-color: ${neutral[700]};
          --fc-button-hover-bg-color: ${neutral[200]};
          --fc-button-hover-border-color: ${neutral[300]};
          --fc-button-active-bg-color: ${primary[500]};
          --fc-button-active-border-color: ${primary[500]};
          --fc-today-bg-color: ${primary[50]};
          --fc-page-bg-color: #fff;
          --fc-neutral-bg-color: ${neutral[50]};
          --fc-list-event-hover-bg-color: ${neutral[100]};
          --fc-highlight-color: ${primary[100]};
          --fc-non-business-color: ${neutral[50]};
        }

        /* Toolbar styling */
        .event-calendar-wrapper .fc-toolbar {
          margin-bottom: 16px !important;
          flex-wrap: wrap;
          gap: 12px;
        }

        .event-calendar-wrapper .fc-toolbar-title {
          font-size: 18px !important;
          font-weight: 600 !important;
          color: ${neutral[800]} !important;
        }

        /* Button styling */
        .event-calendar-wrapper .fc-button {
          border-radius: 6px !important;
          font-weight: 500 !important;
          font-size: 13px !important;
          padding: 6px 12px !important;
          text-transform: capitalize !important;
          box-shadow: none !important;
        }

        .event-calendar-wrapper .fc-button-group > .fc-button {
          border-radius: 0 !important;
        }

        .event-calendar-wrapper .fc-button-group > .fc-button:first-child {
          border-radius: 6px 0 0 6px !important;
        }

        .event-calendar-wrapper .fc-button-group > .fc-button:last-child {
          border-radius: 0 6px 6px 0 !important;
        }

        .event-calendar-wrapper .fc-button-active {
          background-color: ${primary[500]} !important;
          border-color: ${primary[500]} !important;
          color: #fff !important;
        }

        /* Today button */
        .event-calendar-wrapper .fc-today-button {
          background-color: transparent !important;
          border-color: ${neutral[300]} !important;
          color: ${neutral[700]} !important;
        }

        .event-calendar-wrapper .fc-today-button:hover {
          background-color: ${neutral[100]} !important;
        }

        .event-calendar-wrapper .fc-today-button:disabled {
          opacity: 0.5;
        }

        /* Navigation buttons */
        .event-calendar-wrapper .fc-prev-button,
        .event-calendar-wrapper .fc-next-button {
          background-color: transparent !important;
          border-color: ${neutral[300]} !important;
          color: ${neutral[600]} !important;
        }

        .event-calendar-wrapper .fc-prev-button:hover,
        .event-calendar-wrapper .fc-next-button:hover {
          background-color: ${neutral[100]} !important;
          color: ${neutral[800]} !important;
        }

        /* Day headers */
        .event-calendar-wrapper .fc-col-header-cell {
          padding: 12px 4px !important;
          background: ${neutral[50]} !important;
          font-weight: 500 !important;
          font-size: 13px !important;
          color: ${neutral[600]} !important;
        }

        /* Day cells */
        .event-calendar-wrapper .fc-daygrid-day {
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .event-calendar-wrapper .fc-daygrid-day:hover {
          background-color: ${neutral[50]} !important;
        }

        .event-calendar-wrapper .fc-daygrid-day-number {
          padding: 8px !important;
          font-size: 14px !important;
          color: ${neutral[600]} !important;
        }

        .event-calendar-wrapper .fc-day-today .fc-daygrid-day-number {
          background: ${primary[500]} !important;
          color: #fff !important;
          border-radius: 50% !important;
          width: 28px !important;
          height: 28px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
        }

        /* Time grid slots */
        .event-calendar-wrapper .fc-timegrid-slot {
          height: 48px !important;
          cursor: pointer;
        }

        .event-calendar-wrapper .fc-timegrid-slot:hover {
          background-color: ${neutral[50]} !important;
        }

        .event-calendar-wrapper .fc-timegrid-slot-label {
          font-size: 12px !important;
          color: ${neutral[500]} !important;
        }

        /* Events - Own kaupapa */
        .event-calendar-wrapper .fc-event.event-own {
          background-color: ${primary[500]} !important;
          border-color: ${primary[600]} !important;
          color: #fff !important;
          border-radius: 4px !important;
          cursor: pointer !important;
        }

        .event-calendar-wrapper .fc-event.event-own:hover {
          background-color: ${primary[600]} !important;
        }

        /* Events - Other kaupapa */
        .event-calendar-wrapper .fc-event.event-other {
          background-color: ${neutral[200]} !important;
          border-color: ${neutral[300]} !important;
          color: ${neutral[700]} !important;
          border-radius: 4px !important;
          cursor: pointer !important;
          border-left: 3px solid ${neutral[400]} !important;
        }

        .event-calendar-wrapper .fc-event.event-other:hover {
          background-color: ${neutral[300]} !important;
        }

        /* Events - With clash */
        .event-calendar-wrapper .fc-event.event-clash {
          border-left: 3px solid ${semantic.warning.base} !important;
        }

        /* More events link */
        .event-calendar-wrapper .fc-daygrid-more-link {
          font-size: 11px !important;
          color: ${primary[500]} !important;
          font-weight: 500 !important;
        }

        /* Now indicator */
        .event-calendar-wrapper .fc-timegrid-now-indicator-line {
          border-color: ${semantic.error.base} !important;
        }

        .event-calendar-wrapper .fc-timegrid-now-indicator-arrow {
          border-color: ${semantic.error.base} !important;
          border-top-color: transparent !important;
          border-bottom-color: transparent !important;
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .event-calendar-wrapper .fc-toolbar {
            flex-direction: column;
            align-items: stretch !important;
          }

          .event-calendar-wrapper .fc-toolbar-chunk {
            display: flex;
            justify-content: center;
          }

          .event-calendar-wrapper .fc-toolbar-title {
            font-size: 16px !important;
          }

          .event-calendar-wrapper .fc-button {
            padding: 8px 10px !important;
            font-size: 12px !important;
          }

          .event-calendar-wrapper .fc-col-header-cell {
            font-size: 11px !important;
          }

          .event-calendar-wrapper .fc-daygrid-day-number {
            font-size: 12px !important;
            padding: 4px !important;
          }
        }
      `}</style>

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={initialView}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events.map((event) => ({
          ...event,
          classNames: [
            event.isOwn ? 'event-own' : 'event-other',
            event.hasClash ? 'event-clash' : '',
          ].filter(Boolean),
          extendedProps: {
            isOwn: event.isOwn,
            hasClash: event.hasClash,
            kaupapa: event.kaupapa,
          },
        }))}
        eventContent={renderEventContent}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        datesSet={handleDatesSet}
        height={height}
        nowIndicator={true}
        dayMaxEvents={3}
        weekends={true}
        selectable={false}
        editable={false}
        slotMinTime="06:00:00"
        slotMaxTime="22:00:00"
        slotDuration="00:30:00"
        allDaySlot={true}
        allDayText="All day"
        buttonText={{
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
        }}
        firstDay={0} // Sunday
        eventTimeFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: 'short',
        }}
        slotLabelFormat={{
          hour: 'numeric',
          minute: '2-digit',
          meridiem: 'short',
        }}
      />
    </div>
  )
}
