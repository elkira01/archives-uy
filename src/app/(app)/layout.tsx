import AppLayout from "@/app/shared/layout/AppLayout";

export default function AppRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <AppLayout>
        {children}
    </AppLayout>
  );
}
