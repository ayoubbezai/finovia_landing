"use client";
import { useState, useEffect, useRef } from "react";
import { 
  Smartphone, Camera, Mic, Brain, MessageCircle, Languages, Shield,
  ArrowRight, Play, Star, Users, FileText, Zap, Check, Crown, Gift,
  ShieldCheck, Mail, MapPin, Twitter, Facebook, Instagram, Apple, User,
  QrCode, Maximize, Minimize, Sparkles, Search, Settings
} from "lucide-react";

export default function Home() {
  const [showWireframe, setShowWireframe] = useState(true);
  const [arrowDrawn, setArrowDrawn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);

  const scrollToDashboard = () => {
    dashboardRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const timer = setTimeout(() => setShowWireframe(false), 2500);
    const arrowTimer = setTimeout(() => setArrowDrawn(true), 800);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      clearTimeout(timer);
      clearTimeout(arrowTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  // NavBar Component
  const NavBar = () => (
    <>
      <div
        className={` top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-gray-100"
            : "bg-transparent py-4 bg-white/95 "
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-semibold bg-gradient-to-br from-purple-500 via-violet-600 to-violet-700 bg-clip-text text-transparent">
              Pocket AI
            </h1>
          </div>

          {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-7">
            <li>
              <a
                href="#features"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-it-works"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                How it Works
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#download"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                Download
              </a>
            </li>
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Toggle fullscreen"
            >
              {isFullscreen ? (
                <Minimize className="w-5 h-5 text-gray-600" />
              ) : (
                <Maximize className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <button className="h-9 px-4 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 hover:text-gray-900 transition-colors">
              Sign In
            </button>
            <button className="h-9 px-4 text-sm font-medium bg-gradient-to-br from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white shadow-sm hover:shadow-md transition-all rounded-md">
              Get Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-1.5 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-16 inset-x-0 z-40 md:hidden bg-white border-b border-gray-200 shadow-lg">
          <div className="px-4 py-3 space-y-2">
            <a
              href="#features"
              className="block py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="block py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="block py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#download"
              className="block py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download
            </a>
            <div className="pt-2 space-y-2 border-t border-gray-200 mt-2">
              <button className="w-full h-9 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50">
                Sign In
              </button>
              <button className="w-full h-9 text-sm font-medium bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-md">
                Get Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );

  // Hero Component
  const Hero = () => (
    <>
      <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden text-center px-4 mt-16 md:mt-6 z-10">
        {/* Sticky note elements */}
        <div className="hidden sm:block absolute top-10 sm:top-20 left-2 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-yellow-100 bg-opacity-50 shadow-lg rounded-md transform rotate-6 animate-float-slow flex items-center justify-center p-2 border border-yellow-200 z-0">
          <div className="text-yellow-700 text-xs font-medium text-center">
            <Camera className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mb-1" />
            <p className="text-[10px] sm:text-xs">OCR receipt scanning in seconds</p>
          </div>
        </div>

        <div className="hidden sm:block absolute bottom-20 sm:bottom-40 right-2 sm:right-16 w-24 h-24 sm:w-28 sm:h-28 bg-purple-100 bg-opacity-50 shadow-lg rounded-md transform -rotate-3 animate-float-medium flex items-center justify-center p-2 border border-purple-200 z-0">
          <div className="text-purple-700 text-xs font-medium text-center">
            <Mic className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mb-1" />
            <p className="text-[10px] sm:text-xs">Voice commands in Darja & Arabic</p>
          </div>
        </div>

        <div className="hidden sm:block absolute top-1/3 sm:top-1/2 left-2 sm:left-20 w-20 h-20 sm:w-24 sm:h-24 bg-violet-100 bg-opacity-50 shadow-lg rounded-md transform rotate-3 animate-float-fast flex items-center justify-center p-2 border border-violet-200 z-0">
          <div className="text-violet-700 text-xs font-medium text-center">
            <Brain className="w-3 h-3 sm:w-4 sm:h-4 mx-auto mb-1" />
            <p className="text-[10px] sm:text-xs">AI-powered insights</p>
          </div>
        </div>

        {/* Mobile-only sticky notes */}
        <div className="sm:hidden flex justify-center gap-8 mt-8 mb-6 w-full px-4">
          <div className="w-20 h-20 bg-yellow-100 bg-opacity-50 shadow-lg rounded-md flex items-center justify-center p-1 border border-yellow-200 rotate-6">
            <div className="text-yellow-700 text-[10px] font-medium text-center">
              <Camera className="w-3 h-3 mx-auto mb-1" />
              <p>OCR Scanning</p>
            </div>
          </div>
          <div className="w-20 h-20 bg-purple-100 bg-opacity-50 shadow-lg rounded-md flex items-center justify-center p-1 border border-purple-200 -rotate-3">
            <div className="text-purple-700 text-[10px] font-medium text-center">
              <Mic className="w-3 h-3 mx-auto mb-1" />
              <p>Voice Input</p>
            </div>
          </div>
          <div className="w-20 h-20 bg-violet-100 bg-opacity-50 shadow-lg rounded-md flex items-center justify-center p-1 border border-violet-200 -rotate-12">
            <div className="text-violet-700 text-[10px] font-medium text-center">
              <Brain className="w-3 h-3 mx-auto mb-1" />
              <p>AI Insights</p>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-6 w-full mx-auto max-w-4xl">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fadeIn border border-purple-200 shadow-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 sm:w-4 sm:h-4 fill-purple-400 text-purple-400"
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm">Trusted by 50,000+ Algerian users</span>
          </div>

          {/* Enhanced Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-3xl">
            Your Personal{" "}
            <span className="text-purple-600 relative inline-block">
              Finance Assistant
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M 0 6 Q 50 10 100 6 Q 150 2 200 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-50"
                />
              </svg>
            </span>{" "}
            for Algeria
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            AI-powered financial management designed specifically for Algerian users. 
            Track expenses, get insights, and learn finance in Darja, Arabic, and French.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mt-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 bg-white bg-opacity-70 px-3 py-1.5 rounded-full border border-gray-200">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
              <span className="font-semibold text-gray-700">85%</span> faster expense tracking
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 bg-white bg-opacity-70 px-3 py-1.5 rounded-full border border-gray-200">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
              <span className="font-semibold text-gray-700">2.5x</span> better savings
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 bg-white bg-opacity-70 px-3 py-1.5 rounded-full border border-gray-200">
              <FileText className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500" />
              <span className="font-semibold text-gray-700">60%</span> less manual work
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <div className="relative inline-block group">
              <button
                onClick={scrollToDashboard}
                className="relative bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg font-medium transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-xl shadow-lg flex items-center gap-2"
              >
                <span className="relative z-10 text-sm sm:text-base">Download Free</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              </button>
              <span className="absolute -top-2 -right-2 text-[10px] font-semibold tracking-wide text-white px-2 py-0.5 rounded-md bg-gradient-to-r from-fuchsia-400 to-fuchsia-500 shadow-md transition-all duration-300 transform group-hover:-translate-y-1 group-hover:scale-105">
                FREE
              </span>
            </div>
            <button className="border border-gray-200 hover:border-gray-300 bg-white text-gray-700 px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md relative text-sm sm:text-base">
              <Play className="w-4 h-4 sm:w-5 sm:h-5" /> Watch Demo
            </button>
          </div>
        </div>
      </div>
    </>
  );

  // Dashboard Component
  const Dashboard = () => (
    <div
      ref={dashboardRef}
      className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Left Side */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="font-medium">AI-Powered Finance</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight md:leading-snug relative">
              Smart{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 relative">
                  Money Management
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_3s_linear_infinite]" />
                </span>
                {/* Underline */}
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-gradient-to-r from-purple-500 via-purple-400 to-pink-400 rounded-full overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[scan_2.5s_linear_infinite]" />
                </span>
              </span>{" "}
              for Algeria
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
              Track expenses instantly with OCR receipt scanning and voice commands in Darja, Arabic, and French.{" "}
              <span className="font-medium text-gray-800">Pocket AI</span> gives you AI-powered insights and personalized financial guidance tailored for Algerian users.
            </p>
          </div>

          {/* Right Side - Dashboard Image */}
          <div className="w-full lg:w-3/5 relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-2xl border border-gray-200 bg-white/90 backdrop-blur-md">
            {/* Decorative gradient glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-400/20 to-purple-400/20 blur-lg -z-10" />

            {/* Sleek Browser Header */}
            <div className="bg-gray-50/95 backdrop-blur-sm p-2 md:p-3 flex items-center gap-1 md:gap-2 border-b border-gray-200">
              {/* Browser dots */}
              <div className="flex gap-1 md:gap-1.5 mr-2 md:mr-3">
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-purple-500"></div>
              </div>

              {/* Search / URL Bar */}
              <div className="flex-1 bg-white rounded-md py-1 px-2 md:px-3 text-xs md:text-sm text-gray-700 font-medium shadow-sm border border-gray-300 flex items-center justify-between">
                <div className="flex items-center truncate">
                  <Shield
                    size={isMobile ? 12 : 14}
                    className="mr-1 md:mr-1.5 text-violet-600 flex-shrink-0"
                  />
                  <span className="truncate">app.pocketai.dz/dashboard</span>
                </div>
                <div className="flex items-center gap-2 md:gap-3 ml-2">
                  <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-fuchsia-400 animate-pulse flex-shrink-0"></div>
                  <span className="text-xs text-gray-500 hidden xs:inline-block">
                    Secure
                  </span>
                </div>
              </div>

              {/* Right-side utilities */}
              <div className="flex items-center gap-2 md:gap-3 ml-2 md:ml-3">
                <button className="p-1 md:p-1.5 rounded-md hover:bg-gray-100 transition">
                  <Search size={isMobile ? 14 : 16} className="text-gray-500" />
                </button>
                <button className="p-1 md:p-1.5 rounded-md hover:bg-gray-100 transition">
                  <Settings size={isMobile ? 14 : 16} className="text-gray-500" />
                </button>
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-full overflow-hidden shadow-sm ring-1 ring-gray-300 bg-white flex items-center justify-center flex-shrink-0">
                  <Smartphone className="text-purple-600" size={isMobile ? 16 : 20} />
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="min-h-[280px] sm:min-h-[350px] md:min-h-[420px] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="text-center p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pocket AI Dashboard</h3>
                <p className="text-gray-600">AI-powered financial insights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Features Component
  const Features = () => {
    const features = [
      {
        icon: Camera,
        title: "Instant Tracking",
        description: "Snap a receipt or speak to log expenses in real time, perfect for cash transactions common in Algeria.",
        color: "from-purple-500 to-pink-500"
      },
      {
        icon: Brain,
        title: "Smart Organization",
        description: "AI automatically sorts spending into personalized categories and provides predictive financial insights.",
        color: "from-purple-500 to-pink-500"
      },
      {
        icon: Languages,
        title: "Locally Designed",
        description: "Built around Algerian habits with a safe, simple experience in Darja, Arabic, and French.",
        color: "from-fuchsia-500 to-purple-500"
      },
      {
        icon: MessageCircle,
        title: "AI Finance Assistant",
        description: "Built-in chatbot explains your money, helps set goals, and teaches basic finance in a friendly way.",
        color: "from-orange-500 to-red-500"
      },
      {
        icon: Mic,
        title: "Voice Input",
        description: "Use voice commands in your preferred language to quickly log expenses and get insights.",
        color: "from-indigo-500 to-purple-500"
      },
      {
        icon: Shield,
        title: "Secure & Private",
        description: "Your financial data stays on your device. We prioritize your privacy and security.",
        color: "from-gray-600 to-gray-800"
      }
    ];

    return (
      <section id="features" className="py-20 bg-transparent">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for
              <span className="text-transparent bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text">
                {" "}Smart Finance
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Designed specifically for the Algerian market with cutting-edge AI technology
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-purple-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  // Download Component
  const Download = () => (
    <section id="download" className="py-20 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Ready to Transform
                  <br />
                  Your Finances?
                </h2>
                <p className="text-xl text-purple-100 leading-relaxed">
                  Join thousands of Algerians who are taking control of their money with Pocket AI. 
                  Download now and start your journey to financial wisdom.
                </p>
              </div>

              {/* App Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">4.8/5</div>
                  <div className="text-purple-200 text-sm">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-purple-200 text-sm">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99%</div>
                  <div className="text-purple-200 text-sm">Satisfaction</div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="space-y-4">
                <button className="w-full bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3">
                  <Apple className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-lg">App Store</div>
                  </div>
                </button>
                
                <button className="w-full bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-3">
                  <User className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-lg">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Content - QR Code */}
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl p-8 text-center shadow-2xl">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-6">
                  <QrCode className="w-32 h-32 text-gray-400" />
                </div>
                <div className="text-gray-900">
                  <div className="font-semibold text-lg mb-2">Scan to Download</div>
                  <p className="text-gray-600 text-sm">
                    Available on both App Store and Google Play
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Pocket AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your intelligent financial assistant, designed for Algeria. 
              Track, learn, and grow your financial wisdom.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span>hello@pocketai.dz</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span>Algiers, Algeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pocket AI. All rights reserved. Built with ❤️ for Algeria.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen scrollbar-custom overflow-y-auto overflow-x-hidden relative">
  {/* Background that covers entire page (overlayed above section backgrounds but under textual content/cards) */}
  <div className="fixed inset-0 w-full h-full pointer-events-none z-10">
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, rgba(147,51,234,0.15) 0%, transparent 70%, rgba(147,51,234,0.15) 100%),
              radial-gradient(circle at 15% 50%, rgba(192,132,252,0.08) 0%, transparent 15%),
              radial-gradient(circle at 85% 30%, rgba(109,40,217,0.06) 0%, transparent 15%),
              linear-gradient(to right, rgba(168,85,247,0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(168,85,247,0.4) 1px, transparent 1px)
            `,
            backgroundSize: `
              100% 100vh,
              40px 40px,
              40px 40px,
              40px 40px,
              40px 40px
            `,
            backgroundRepeat: "no-repeat, repeat, repeat, repeat, repeat",
          }}
        ></div>
        {/* Animated gradient overlay - covers entire page */}
        <div className="absolute inset-0 opacity-25 mix-blend-soft-light pointer-events-none">
          {/* Top fade */}
          <div className="absolute top-0 left-0 w-full h-1/12 bg-gradient-to-b from-purple-400/20 to-transparent"></div>

          {/* Transparent middle  */}
          <div className="absolute top-1/3 left-0 w-full h-5/6 bg-transparent"></div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 w-full h-1/12 bg-gradient-to-t from-purple-400/20 to-transparent"></div>
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-30">
        <NavBar />
      </div>

  <div className="relative z-20">
        <Hero />
        <Dashboard />
        <Features />
        <Download />
        <Footer />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float-slow {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) translateX(10px) rotate(2deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
        }
        @keyframes float-medium {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) translateX(-15px) rotate(-3deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
        }
        @keyframes float-fast {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) translateX(-8px) rotate(2deg);
          }
          100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
        }
        @keyframes gradient-shift {
          0% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
          100% {
            opacity: 0.1;
          }
        }
        @keyframes drawPath {
          0% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
          }
          100% {
            stroke-dasharray: 1000;
            stroke-dashoffset: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-float-medium {
          animation: float-medium 8s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 6s ease-in-out infinite;
        }
        .animate-gradient-shift {
          animation: gradient-shift 8s ease-in-out infinite;
        }
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}