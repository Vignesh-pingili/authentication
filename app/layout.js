import "./globals.css";
import Providers from "./components/Providers";

export const metadata = {
  title: "authentication app",
  description: "My awesome Next.js application",
  icons: {
    icon: "/favicon.png",
  },
    verification: {
    google: "hyL4OJxW4Qahij7GyY0FMb13dH_7mYx8E0Dy-bgCPsE",
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
