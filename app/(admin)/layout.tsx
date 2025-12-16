'use client'

import { AppShell } from '@/components'

/**
 * Admin Layout
 * ============
 * Wraps all contributor/admin pages with the shared AppShell.
 * The AppShell automatically shows contributor navigation based on user context.
 */
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppShell>{children}</AppShell>
}
