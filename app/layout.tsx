import "@/app/ui/global.css";
import { inter, outfit, notoSansJP } from "@/app/ui/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${outfit.variable} ${notoSansJP.variable}`}>
      <body>{children}</body>
    </html>
  );
}
