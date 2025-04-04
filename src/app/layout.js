// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }

import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
// import ChatbotIcon from "./components/chatbot"; // Ensure the chatbot component exists

// Load Google Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cloud Booking Software Solution",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.className} w-full bg-white m-0 p-0 relative antialiased`}
      >
        {/* Top Loader */}
        <NextTopLoader color="#4F46E5" showSpinner={false} />

        {/* Toast Notifications */}
        <ToastContainer position="top-center" autoClose={5000} />
        {/* Main Content */}
        {children}

        {/* Chatbot Icon (Uncomment if needed) */}
        <Navbar/>
        <SocialMedia/>
        <Footer/>
        {/* <div className="fixed bottom-5 right-5 z-50">
      
        </div> */}
      </body>
    </html>
  );
}
