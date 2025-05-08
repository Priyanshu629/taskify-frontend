import Header from "./components/Header";
import { GlobalProvider } from "./context/global";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Taskify",
  description: "Task Management application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-200">
        <GlobalProvider>
          <Header />
          {children}
          <Toaster />
        </GlobalProvider>
      </body>
    </html>
  );
}
