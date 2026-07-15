import "./globals.css";

export const metadata = {
  title: "Joe.dev | Senior Fullstack Engineer",
  description:
    "Portfolio for Joe, a senior fullstack engineer focused on scalable systems and intentional engineering.",
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-slate-50 text-slate-900">
        <div className="flex min-h-screen flex-col">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
            <a href="/" className="text-xl font-bold tracking-tight">
              JOE.DEV
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Download Resume
            </a>
          </nav>

          <main className="flex-1">{children}</main>

          <footer className="px-6 py-12 text-center text-sm text-slate-400">
            (c) {year} - Built with Next.js and Intentional Engineering
          </footer>
        </div>
      </body>
    </html>
  );
}
