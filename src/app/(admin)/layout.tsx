'use client'

import DashboardLayout from "@/app/(admin)/_components/layout/AdminDashboardLayout";
import {menuList} from "@/app/(admin)/_config/navigation/menu";
export default function AdminRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <DashboardLayout mainMenu={menuList}>
    {children}
  </DashboardLayout>
}
