import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["200", "400", "700"]
});

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} antialiased min-w-screen min-h-screen`}
            >
                {children}
            </body>
        </html>
    );
}
