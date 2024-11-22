import "./globals.css";
import Providers from "./components/Providers";

export const metadata = {
  title: "sign in app",
  description: "My awesome Next.js application",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Providers> {children}</Providers>
      </body>
    </html>
  );
}
