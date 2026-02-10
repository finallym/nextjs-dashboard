/*
 * @Author: Liu.Yingming
 * @Date: 2026-02-09 15:01:42
 * @LastEditors: Liu.Yingming
 * @LastEditTime: 2026-02-10 10:38:46
 * @Description: 
 */
import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
