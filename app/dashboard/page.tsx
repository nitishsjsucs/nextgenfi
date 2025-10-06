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
import { Notification, Alert } from "@/components/ui/notification";
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
    <div className="min-h-screen bg-flash-white" style={{ fontFamily: 'var(--font-family-primary)' }}>
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-orange rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
                <h1 className="heading-small text-primary">NextGenFI Dashboard</h1>
              </div>
              <Badge variant="outline" className="bg-light-grey text-orange border-light">
                <Activity className="h-3 w-3 mr-1" />
                Live
              </Badge>
            </div>
            <AuthButton />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="heading-medium text-primary mb-2">
              Welcome back, {user?.name || "User"}! 👋
            </h2>
            <p className="text-body text-muted mb-4">
              Your comprehensive banking platform dashboard with AI-powered insights and campaign management.
            </p>
            
            {/* System Alerts */}
            <div className="space-y-3">
              <Alert
                type="success"
                title="System Status"
                message="All systems operational. Last backup completed 2 hours ago."
              />
              <Alert
                type="info"
                title="New Feature"
                message="Enhanced analytics dashboard is now available. Check out the new metrics!"
              />
            </div>
          </div>

          {/* Quick Stats */}
          <div className="metrics-grid three-columns mb-8">
            <div className="metric-card">
              <div className="metric-header">
                <h3 className="metric-title">Active Campaigns</h3>
                <Target className="metric-icon" />
              </div>
              <div className="metric-value">12</div>
              <div className="metric-change positive">
                <TrendingUp className="metric-change-icon" />
                <span className="metric-change-value">+2</span>
                <span className="metric-change-label">from last week</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <h3 className="metric-title">Emails Sent</h3>
                <Send className="metric-icon" />
              </div>
              <div className="metric-value">2,847</div>
              <div className="metric-change positive">
                <TrendingUp className="metric-change-icon" />
                <span className="metric-change-value">+15%</span>
                <span className="metric-change-label">from last month</span>
              </div>
            </div>

            <div className="metric-card">
              <div className="metric-header">
                <h3 className="metric-title">Open Rate</h3>
                <Mail className="metric-icon" />
              </div>
              <div className="metric-value">24.3%</div>
              <div className="metric-change positive">
                <TrendingUp className="metric-change-icon" />
                <span className="metric-change-value">+3.2%</span>
                <span className="metric-change-label">from last month</span>
              </div>
            </div>
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
                        <span className="text-body-bold text-primary">AI Analytics</span>
                        <Badge variant="secondary" className="bg-orange text-white">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-body-bold text-primary">RAG Assistant</span>
                        <Badge variant="secondary" className="bg-orange text-white">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-body-bold text-primary">Email Campaigns</span>
                        <Badge variant="secondary" className="bg-orange text-white">Active</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-body-bold text-primary">Compliance Suite</span>
                        <Badge variant="secondary" className="bg-orange text-white">Active</Badge>
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
                        <div className="w-2 h-2 bg-orange rounded-full"></div>
                        <span className="text-body text-primary">Earthquake campaign completed - 150 emails sent</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange rounded-full"></div>
                        <span className="text-body text-primary">Weather insurance targets identified - 89 prospects</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange rounded-full"></div>
                        <span className="text-body text-primary">RAG system updated with new demographic data</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-orange rounded-full"></div>
                        <span className="text-body text-primary">Email engagement rate improved by 12%</span>
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
                      <div className="flex items-center justify-between p-3 bg-light-grey rounded-lg">
                        <div>
                          <p className="text-body-bold text-primary">Earthquake Insurance</p>
                          <p className="text-small text-muted">Last 7 days</p>
                        </div>
                        <div className="text-right">
                          <p className="heading-small text-orange">24.3%</p>
                          <p className="text-small text-muted">Open Rate</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-light-grey rounded-lg">
                        <div>
                          <p className="text-body-bold text-primary">Weather Insurance</p>
                          <p className="text-small text-muted">Last 7 days</p>
                        </div>
                        <div className="text-right">
                          <p className="heading-small text-orange">18.7%</p>
                          <p className="text-small text-muted">Open Rate</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-light-grey rounded-lg">
                        <div>
                          <p className="text-body-bold text-primary">General Marketing</p>
                          <p className="text-small text-muted">Last 7 days</p>
                        </div>
                        <div className="text-right">
                          <p className="heading-small text-orange">31.2%</p>
                          <p className="text-small text-muted">Open Rate</p>
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