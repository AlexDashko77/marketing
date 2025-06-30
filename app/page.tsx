import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  BarChart3,
  Calendar,
  CheckCircle,
  Globe,
  Lightbulb,
  Mail,
  Palette,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  Zap,
  Star,
  Quote,
  Play,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Target className="h-8 w-8 text-orange-600" />
          <span className="ml-2 text-xl font-bold">Foxxy</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:text-orange-600 transition-colors"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium hover:text-orange-600 transition-colors"
            href="#products"
          >
            Products
          </Link>
          <Link
            className="text-sm font-medium hover:text-orange-600 transition-colors"
            href="#mms"
          >
            MMS Tech
          </Link>
          <Link
            className="text-sm font-medium hover:text-orange-600 transition-colors"
            href="#about"
          >
            About
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4 max-w-4xl">
                <Badge
                  variant="outline"
                  className="text-orange-600 border-orange-200"
                >
                  <Zap className="w-3 h-3 mr-1" />
                  Powered by Smart Technology
                </Badge>
                <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl tracking-normal">
                  Smart Marketing Starts Here
                </h1>
                <p className="text-xl text-muted-foreground md:text-2xl max-w-3xl mx-auto">
                  Services, Tools, and Tech That Drive Growth
                </p>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto tracking-wide">
                  We're a full-service marketing agency powered by strategy,
                  creativity, and our cutting-edge Marketing Management System
                  (MMS) that helps you track, manage, and scale effortlessly.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                  Get a Free Strategy Session
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <Play className="mr-2 h-4 w-4" />
                  See Our Tech in Action
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl tracking-wide">
                    More Than an Agency — We're Your Growth Infrastructure
                  </h2>
                  <p className="text-lg text-muted-foreground tracking-wide">
                    At Foxxy, we combine human creativity with smart automation.
                    Alongside our expert team, our in-house Marketing Management
                    System (MMS) gives you real-time visibility, task tracking,
                    campaign performance, and ROI—all in one place.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">Expert Team</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">
                      Smart Automation
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">
                      Real-time Visibility
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">ROI Tracking</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-first">
                <img
                  src="/images/marketing-team.jpg"
                  alt="Marketing team collaborating with technology and data analytics"
                  className="aspect-video rounded-xl object-cover w-full shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Full-Service Marketing That Covers Every Angle
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From strategy to execution, we handle every aspect of your
                marketing needs
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Target className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle>Digital Campaigns</CardTitle>
                  <CardDescription>
                    Strategic paid advertising across all major platforms
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Palette className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle>Branding & Design</CardTitle>
                  <CardDescription>
                    Visual identity and creative assets that convert
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Globe className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle>Web Design & Development</CardTitle>
                  <CardDescription>
                    High-converting websites and landing pages
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Mail className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle>Email & Automation</CardTitle>
                  <CardDescription>
                    Nurture sequences and automated workflows
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Lightbulb className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle>Content Strategy</CardTitle>
                  <CardDescription>
                    Engaging content that drives engagement and sales
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-orange-200 bg-orange-50">
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-orange-600 mb-2" />
                  <CardTitle className="text-orange-900">
                    Marketing Management System
                  </CardTitle>
                  <CardDescription className="text-orange-700">
                    Your central dashboard for tracking and optimization
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Highlight Box */}
            <Card className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Included with Every Plan:
                    </h3>
                    <p className="text-orange-100 tracking-wide">
                      Our <strong>Marketing Management System (MMS)</strong> is
                      your central dashboard for tracking KPIs, campaign
                      updates, creative approvals, and ROI—on desktop or mobile.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Marketing Kits & Tools That Work
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready-to-use templates, strategies, and automation tools
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Palette className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Templates</CardTitle>
                  <CardDescription>
                    Social, email, and funnel templates
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Strategy Kits</CardTitle>
                  <CardDescription>
                    Proven frameworks and playbooks
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Automation Scripts</CardTitle>
                  <CardDescription>Ready-to-deploy workflows</CardDescription>
                </CardHeader>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">MMS Add-ons</CardTitle>
                  <CardDescription>
                    Advanced features and upgrades
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" size="lg">
                Browse All Products
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Technology Section - MMS */}
        <section
          id="mms"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-gray-100"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <Badge
                variant="outline"
                className="text-orange-600 border-orange-200"
              >
                <Zap className="w-3 h-3 mr-1" />
                Proprietary Technology
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Your Command Center: Our Marketing Management System (MMS)
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto tracking-wide">
                Our proprietary MMS helps clients and teams stay aligned,
                organized, and in control. Track every campaign, monitor KPIs in
                real time, approve creative, and communicate—all from one
                intuitive dashboard.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2 items-center mb-12">
              <div className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <BarChart3 className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Real-Time Campaign Performance
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Live metrics and KPI tracking
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Task and Approval Workflows
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Streamlined creative approval process
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Calendar className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Marketing Calendar and Scheduling
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Plan and coordinate all activities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Zap className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Automation Integration</h3>
                      <p className="text-sm text-muted-foreground">
                        Email, Ads, CRM connections
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Smartphone className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">
                        Mobile and Desktop Access
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Manage campaigns anywhere
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="aspect-video rounded-xl bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center border-2 border-orange-200">
                  <div className="text-center space-y-4">
                    <div className="grid grid-cols-2 gap-4 p-8">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <BarChart3 className="h-8 w-8 text-orange-600 mb-2" />
                        <div className="text-xs text-muted-foreground">
                          Campaign ROI
                        </div>
                        <div className="text-lg font-bold text-green-600">
                          +247%
                        </div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <TrendingUp className="h-8 w-8 text-orange-600 mb-2" />
                        <div className="text-xs text-muted-foreground">
                          Active Tasks
                        </div>
                        <div className="text-lg font-bold">12</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      MMS Dashboard Preview
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Request a Live Demo
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What Clients Love About Our Services & Tech
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Quote className="h-8 w-8 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-lg mb-4">
                        "The MMS completely changed how we work with an
                        agency—it's like having a full marketing team inside our
                        dashboard."
                      </p>
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-orange-400 text-orange-400"
                          />
                        ))}
                      </div>
                      <p className="font-semibold">Daniel K.</p>
                      <p className="text-sm text-muted-foreground">
                        Jumptech CEO
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <Quote className="h-8 w-8 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-lg mb-4">
                        "Everything is faster and clearer. No more digging
                        through emails or docs."
                      </p>
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-orange-400 text-orange-400"
                          />
                        ))}
                      </div>
                      <p className="font-semibold">Michelle T.</p>
                      <p className="text-sm text-muted-foreground">
                        Ecommerce Brand Manager
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                We Don't Just Deliver. We Empower.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Lightbulb className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold">
                  Full-Service + Productized Solutions
                </h3>
                <p className="text-muted-foreground tracking-wide">
                  Complete marketing services plus ready-to-use tools and
                  templates
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <BarChart3 className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold">
                  Powerful Marketing Management Tech (MMS)
                </h3>
                <p className="text-muted-foreground tracking-wide">
                  Proprietary technology that gives you complete visibility and
                  control
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold">ROI-Focused Strategy</h3>
                <p className="text-muted-foreground tracking-wide">
                  Every campaign is designed and optimized for maximum return on
                  investment
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold">True Collaboration</h3>
                <p className="text-muted-foreground tracking-wide">
                  Work directly with our team through integrated communication
                  tools
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold">
                  Transparent Reporting & Dashboards
                </h3>
                <p className="text-muted-foreground tracking-wide">
                  Real-time access to all metrics, reports, and campaign
                  performance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Want Full Visibility, Better Performance, and Less Stress?
                </h2>
                <p className="text-xl text-orange-100 max-w-2xl mx-auto tracking-wide">
                  Let's build smarter together. Book a strategy call or see our
                  MMS in action.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-orange-600 hover:bg-orange-50"
                >
                  Book My Free Strategy Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                >
                  <Play className="mr-2 h-4 w-4" />
                  See the MMS Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center space-x-2">
          <Target className="h-6 w-6 text-orange-600" />
          <span className="font-bold">Foxxy</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © 2024 GrowthLab. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            MMS Demo
          </Link>
        </nav>
        <div className="w-full sm:w-auto mt-4 sm:mt-0">
          <Badge
            variant="outline"
            className="text-orange-600 border-orange-200"
          >
            Now featuring the Marketing Management System — included with every
            service plan
          </Badge>
        </div>
      </footer>
    </div>
  );
}
