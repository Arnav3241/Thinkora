import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thinkora - Plan, Focus, Achieve",
  description: "Thinkora is a customizable to-do app with calendar-based task lists, Pomodoro tracking, and reminders, designed to boost productivity in a sleek, minimalist interface.",
  keywords: ["Thinkora", "to-do app", "productivity", "Pomodoro", "calendar", "task management"],
  authors: [{ name: "Arnav Singh", url: "https://github.com/Arnav3241" }],
  openGraph: {
    type: "website",
    url: "https://thinkora.vercel.app/",
    title: "Thinkora - Plan, Focus, Achieve",
    description: "Thinkora is a customizable to-do app with calendar-based task lists, Pomodoro tracking, and reminders, designed to boost productivity in a sleek, magical interface.",
    images: [
      {
        url: "https://thinkora.vercel.app/icon.png",
        alt: "Thinkora logo",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Thinkora - Plan, Focus, Achieve",
    description: "Boost productivity with Thinkora's customizable to-do lists, reminders, and focus-driven Pomodoro tracking.",
    images: [
      {
        url: "https://thinkora.vercel.app/icon.png",
        alt: "Thinkora logo",
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
