"use client";

import { useQuery } from "convex/react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { api } from "@/convex/_generated/api";
import { AuthButton } from "@/components/auth/AuthButton";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Globe, 
  CloudRain, 
  Mail, 
  TrendingUp, 
  Users, 
  Shield, 
  Activity,
  Target,
  MapPin,
  Send
} from "lucide-react";

// Import all your existing components
import { BankingPlatformDiagram } from "@/components/banking-platform-diagram";
import EmailEngagementChart from "@/components/email-engagement-chart";
import { InsuranceCampaigns } from "@/components/rag/insurance-campaigns";
import { EarthquakeMap } from "@/components/rag/earthquake-map";
import { WeatherMap } from "@/components/rag/weather-map";

export default function DashboardPage() {
  return (
    <>
      <AuthLoading>
        <div className="min-h-screen flex items-center justify-center p-4 md:p-6">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      </AuthLoading>
      
      <Unauthenticated>
        <div className="min-h-screen flex items-center justify-center p-4 md:p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
            <p className="text-muted-foreground mb-4">Please sign in to access the dashboard.</p>
            <a
              href="/auth/login"
              className="text-primary hover:underline"
            >
              Sign In
            </a>
          </div>
        </div>
      </Unauthenticated>

      <Authenticated>
        <DashboardContent />
      </Authenticated>
    </>
  );
}

function DashboardContent() {
  const user = useQuery(api.auth.getCurrentUser);
  const router = useRouter();

  // Check if user needs KYC verification
  useEffect(() => {
    if (user && !user.kycVerified) {
      router.replace('/kyc');
    }
  }, [user, router]);

  // Show loading while checking KYC status
  if (user && !user.kycVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 md:p-6">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Redirecting to KYC verification...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header: dark styled with welcome + tokens/status */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-light text-white mb-1">Welcome back, <span className="capitalize">{(user?.name as string) || "user"}</span></h1>
            <p className="text-xs sm:text-sm text-white/60 font-light">Ready to uncover the truth?</p>
          </div>
          <div className="flex items-center gap-3 bg-white/5 rounded-md px-4 py-2 border border-white/10">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
              <div className="flex flex-col">
                <span className="text-[10px] text-gray-500 uppercase tracking-wider">TOKENS</span>
                <span className="text-sm font-medium text-white">3 Remaining</span>
              </div>
            </div>
            <div className="h-6 w-px bg-white/10"></div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path></svg>
              <span className="text-sm font-medium text-white capitalize">free</span>
            </div>
            <div className="ml-2">
              <AuthButton />
            </div>
          </div>
        </div>
      
        {/* Trending Scenarios grid cards (visual only) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-light text-white">Trending Scenarios</h2>
            <a className="text-xs text-primary hover:text-white transition-colors flex items-center gap-1" href="/dashboard/scenarios">View All
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "The Wedding Disaster", tag: "Easy", tagColor: "#FE8FB5", location: "Luxury Hotel Ballroom", genres: ["Romance","Drama","Comedy"] },
              { title: "Office Meltdown", tag: "Medium", tagColor: "#FFBE7B", location: "Corporate Boardroom", genres: ["Business","Mystery","Sabotage"] },
              { title: "Paradise Lost", tag: "Medium", tagColor: "#FFBE7B", location: "Beach Resort", genres: ["Travel","Adventure","Drama"] },
              { title: "Dinner Party Fiasco", tag: "Easy", tagColor: "#FE8FB5", location: "Upscale Restaurant", genres: ["Food","Social","Comedy"] },
              { title: "Family Reunion Chaos", tag: "Hard", tagColor: "#E72734", location: "Grandma's House", genres: ["Family","Drama","Secrets"] },
              { title: "Birthday Gone Wrong", tag: "Hard", tagColor: "#E72734", location: "Rooftop Venue", genres: ["Party","Celebration","Chaos"] },
            ].map((card) => (
              <div key={card.title} className="relative group h-full">
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="pointer-events-none absolute inset-0 size-full rounded-[inherit]" style={{ padding: 2 }}></div>
                </div>
                <div className="relative h-full flex flex-col bg-black/30 backdrop-blur-xl rounded-xl border border-white/5 overflow-hidden group-hover:border-white/20 transition-all">
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-base font-light text-white flex-1">{card.title}</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded text-black font-medium ml-2" style={{ backgroundColor: card.tagColor, fontWeight: 500 }}>{card.tag}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 mb-4">{card.location}</p>
                    <p className="text-xs text-gray-400 mb-4 line-clamp-2 flex-1">A sample description for {card.title}. Each witness has a different story.</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {card.genres.map((g) => (
                        <span key={g} className="text-[10px] text-gray-400">{g}</span>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <button className="flex-1 py-2 px-3 rounded-lg text-[10px] font-light transition-all flex items-center justify-center gap-2 bg-transparent text-white hover:bg-white/5 border cursor-pointer border-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><path d="M14 18a2 2 0 0 0-4 0" /><path d="m19 11-2.11-6.657a2 2 0 0 0-2.752-1.148l-1.276.61A2 2 0 0 1 12 4H8.5a2 2 0 0 0-1.925 1.456L5 11" /><path d="M2 11h20" /><circle cx="17" cy="18" r="3" /><circle cx="7" cy="18" r="3" /></svg>
                        Host Game
                      </button>
                      <button className="flex-1 py-2 px-3 rounded-lg text-[10px] font-light transition-all flex items-center justify-center gap-2 bg-transparent text-white hover:bg-white/5 border cursor-pointer border-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" /></svg>
                        Play Solo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content (existing tabs) */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Emails Sent</CardTitle>
                <Send className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,847</div>
                <p className="text-xs text-muted-foreground">
                  +15% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Open Rate</CardTitle>
                <Mail className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.3%</div>
                <p className="text-xs text-muted-foreground">
                  +3.2% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview" className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Overview</span>
              </TabsTrigger>
              <TabsTrigger value="platform" className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Platform</span>
              </TabsTrigger>
              <TabsTrigger value="campaigns" className="flex items-center space-x-2">
                <Target className="h-4 w-4" />
                <span className="hidden sm:inline">Campaigns</span>
              </TabsTrigger>
              <TabsTrigger value="analytics" className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span className="hidden sm:inline">Analytics</span>
              </TabsTrigger>
              <TabsTrigger value="maps" className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="hidden sm:inline">Maps</span>
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="h-5 w-5" />
                      <span>Platform Overview</span>
                    </CardTitle>
                    <CardDescription>
                      Your comprehensive banking platform capabilities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">AI Analytics</span>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">RAG Assistant</span>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Email Campaigns</span>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Compliance Suite</span>
                        <Badge variant="secondary">Active</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="h-5 w-5" />
                      <span>Recent Activity</span>
                    </CardTitle>
                    <CardDescription>
                      Latest platform activities and events
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm">Earthquake campaign completed - 150 emails sent</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm">Weather insurance targets identified - 89 prospects</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm">RAG system updated with new demographic data</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm">Email engagement rate improved by 12%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Email Performance Overview</CardTitle>
                  <CardDescription>
                    Recent email campaign performance and engagement metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <EmailEngagementChart days={7} />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Platform Tab */}
            <TabsContent value="platform" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-5 w-5" />
                    <span>Banking Platform Architecture</span>
                  </CardTitle>
                  <CardDescription>
                    Visual representation of your integrated banking platform capabilities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BankingPlatformDiagram />
                </CardContent>
              </Card>
            </TabsContent>

            {/* Campaigns Tab */}
            <TabsContent value="campaigns" className="space-y-6">
              <InsuranceCampaigns />
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Email Engagement Analytics</CardTitle>
                    <CardDescription>
                      Comprehensive email performance metrics and trends
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EmailEngagementChart days={30} />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Campaign Performance</CardTitle>
                    <CardDescription>
                      Recent campaign performance and ROI metrics
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Earthquake Insurance</p>
                          <p className="text-sm text-gray-600">Last 7 days</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-green-600">24.3%</p>
                          <p className="text-xs text-gray-500">Open Rate</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">Weather Insurance</p>
                          <p className="text-sm text-gray-600">Last 7 days</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-blue-600">18.7%</p>
                          <p className="text-xs text-gray-500">Open Rate</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium">General Marketing</p>
                          <p className="text-sm text-gray-600">Last 7 days</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-purple-600">31.2%</p>
                          <p className="text-xs text-gray-500">Open Rate</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Maps Tab */}
            <TabsContent value="maps" className="space-y-6">
              <Tabs defaultValue="earthquake-map" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="earthquake-map" className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <span>Earthquake Map</span>
                  </TabsTrigger>
                  <TabsTrigger value="weather-map" className="flex items-center space-x-2">
                    <CloudRain className="h-4 w-4" />
                    <span>Weather Map</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="earthquake-map" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Globe className="h-5 w-5" />
                        <span>Earthquake Activity Map</span>
                      </CardTitle>
                      <CardDescription>
                        Real-time earthquake data for insurance targeting
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <EarthquakeMap />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="weather-map" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <CloudRain className="h-5 w-5" />
                        <span>Weather Events Map</span>
                      </CardTitle>
                      <CardDescription>
                        Bangladesh weather events for insurance campaigns
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <WeatherMap />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}