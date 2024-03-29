/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/src/styles/global.css";
import Header from "@/src/components/header/header";
import Footer from "@/src/components/footer";
const open_Sans = Open_Sans({ subsets: ["latin"] });
import Head from "./head";
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
            <Head />
            <body className={open_Sans.className}>
                <noscript>
                    <div>
                        <img
                            src="https://mc.yandex.ru/watch/96725374"
                            style={{ position: "absolute", left: "-9999px" }}
                            alt=""
                        />
                    </div>
                </noscript>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
