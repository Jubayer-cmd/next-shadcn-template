import React from "react"

import BreadCrumb from "@/components/breadcrumb"

export default function UserBoard() {
  const breadcrumbItems = [{ title: "User", link: "/dashboard/user" }]
  return (
    <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
      <BreadCrumb items={breadcrumbItems} />
      This is user dashboard
    </div>
  )
}
