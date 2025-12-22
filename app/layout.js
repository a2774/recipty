import "./globals.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import Providers from "./src/redux/providers";

export const metadata = {
  title: "Jdish",
  description: "Food Social App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <Providers>
          <main className="w-full px-4 sm:px-6 pt-4 sm:pt-6">
            <div className="mx-auto max-w-[1400px]">
              <div className="grid grid-cols-12 gap-4 lg:gap-6">
                <aside className="hidden lg:block lg:col-span-3 xl:col-span-2">
                  <div className="sticky top-20">
                    <Sidebar />
                  </div>
                </aside>

                <section className="col-span-12 lg:col-span-6 xl:col-span-7">
                  {children}
                </section>

                <aside className="hidden lg:block lg:col-span-3">
                  <div className="sticky top-20">
                    <RightSidebar />
                  </div>
                </aside>
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
