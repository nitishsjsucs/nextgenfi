import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
}

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background layers are provided by RootLayout; this ensures structure */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black/50"></div>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "url(\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E\\")",
          }}
        ></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/5 via-transparent to-gray-900/10"></div>
      </div>

      <div className="relative z-10 flex h-screen backdrop-blur-[2px]">
        {/* Compact left sidebar */}
        <aside className="fixed inset-y-0 left-0 z-40 w-16 transform transition-all duration-300 md:translate-x-0 -translate-x-full bg-black/95 backdrop-blur-xl md:bg-transparent">
          <div className="relative flex flex-col h-full">
            <div className="p-4">
              <div className="flex items-center justify-between">
                <a href="/dashboard" className="flex items-center gap-2 justify-center w-full" aria-label="Home">
                  <img src="/logo.png" alt="Logo" className="w-4 h-4" />
                </a>
              </div>
            </div>
            <nav className="flex-1 px-3 py-4">
              <ul className="space-y-1">
                <li>
                  <a href="/dashboard" className="flex items-center justify-center px-2.5 py-1.5 rounded-lg transition-all group relative bg-white/10 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                      <rect width="7" height="18" x="3" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="3" rx="1" />
                      <rect width="7" height="7" x="14" y="14" rx="1" />
                    </svg>
                    <div className="absolute left-full ml-2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-50 border border-white/10">Home</div>
                  </a>
                </li>
                <li>
                  <a href="/dashboard/scenarios" className="flex items-center justify-center px-2.5 py-1.5 rounded-lg transition-all group relative text-gray-400 hover:bg-white/5 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                      <path d="M10 10h4" />
                      <path d="M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3" />
                      <path d="M22 16H2" />
                      <path d="M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z" />
                    </svg>
                    <div className="absolute left-full ml-2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-50 border border-white/10">Discover</div>
                  </a>
                </li>
                <li>
                  <a href="/dashboard/team" className="flex items-center justify-center px-2.5 py-1.5 rounded-lg transition-all group relative text-gray-400 hover:bg-white/5 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                      <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z" />
                      <path d="M7 16.5l5-3" />
                      <path d="M17 16.5v5.17" />
                    </svg>
                    <div className="absolute left-full ml-2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-50 border border-white/10">Party</div>
                  </a>
                </li>
                <li>
                  <a href="/dashboard/settings" className="flex items-center justify-center px-2.5 py-1.5 rounded-lg transition-all group relative text-gray-400 hover:bg-white/5 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                      <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831 2.34 2.34 0 0 1 2.33-4.033 2.34 2.34 0 0 0 3.319-1.915" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <div className="absolute left-full ml-2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap transition-opacity z-50 border border-white/10">Settings</div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main content area */}
        <main className="flex-1 md:ml-12 transition-all duration-300 p-4">
          <div className="h-full bg-black/0 rounded-sm overflow-hidden relative backdrop-blur-sm">
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-black/50"></div>
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/40"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-red-950/5 via-transparent to-gray-900/10"></div>
            </div>
            <div className="h-full overflow-y-auto relative z-10 dashboard-scroll">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}


