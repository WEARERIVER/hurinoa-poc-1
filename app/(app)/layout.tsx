'use client'

import { AppShell } from '@/components'

/**
 * App Layout (Uri)
 * ================
 * Wraps all uri/app pages with the shared AppShell.
 * The AppShell automatically shows uri navigation based on user context.
 */
export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AppShell>{children}</AppShell>
}
