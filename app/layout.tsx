import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormScheduler – Schedule Browser Form Submissions Automatically",
  description: "Chrome extension that records form filling actions and schedules them to run automatically. Perfect for daily reports, recurring applications, and compliance tasks."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="69d01c65-d19f-4ff9-976f-3a3effcf01ad"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
