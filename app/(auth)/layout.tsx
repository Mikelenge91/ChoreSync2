import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "../globals.css";

export const metadata = {
  title: "ChoreSync",
  description:
    "ChoreSync is a chore management app that helps you keep track of household tasks and responsibilities.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <UserButton />
        <body className={`bg-dark-1 ${inter.className}`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
