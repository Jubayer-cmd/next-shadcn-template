import type { Metadata } from "next"

import Header from "@/components/layout/header"
import Sidebar from "@/components/layout/sidebar"

export const metadata: Metadata = {
  title: "Next Shadcn Dashboard Starter",
  description: "Basic dashboard with Next.js and Shadcn",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar className="hidden w-1/6 md:block" />
        <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 ">
          {children}
        </main>
      </div>
    </>
  )
}
