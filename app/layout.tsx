import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/src/styles/global.css";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/footer";
const open_Sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={open_Sans.className}>
                {/* <Header /> */}
                {children}
                {/* <Footer /> */}
            </body>
        </html>
    );
}
