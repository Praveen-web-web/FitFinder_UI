import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Building2, Shield, ClipboardCheck, FileText, Award, Sparkles, Zap, TrendingUp } from 'lucide-react';

import {type Page} from './types';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-12 md:py-24 lg:py-32">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 lg:w-96 lg:h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 lg:w-96 lg:h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 lg:w-[600px] lg:h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-6 lg:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary">Next-Gen Assessment Platform</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Streamline Your Student Assessment Process
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
            A comprehensive platform connecting students with companies through efficient testing and evaluation. Filter, assess, and generate detailed reports seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-300">
            <Button 
              size="lg" 
              onClick={() => onNavigate('register')}
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-xl hover:shadow-2xl transition-all text-base sm:text-lg px-8 py-6"
            >
              <Zap className="mr-2 h-5 w-5" />
              Get Started Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => onNavigate('about')}
              className="border-2 text-base sm:text-lg px-8 py-6 hover:bg-primary/5"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto pt-8 lg:pt-12">
            <div className="p-4 bg-card rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">10K+</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Students</p>
            </div>
            <div className="p-4 bg-card rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">500+</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Companies</p>
            </div>
            <div className="p-4 bg-card rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">95%</div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Who We Serve
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform is designed for three key user groups, each with tailored features
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-6 sm:pt-8 text-center space-y-4 relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl">Students</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Register, get filtered, take assessments, and showcase your skills to potential employers
                </p>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => onNavigate('register')}
                >
                  Register as Student
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-6 sm:pt-8 text-center space-y-4 relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl">Companies</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Access filtered candidates, view test reports, and find the perfect talent for your organization
                </p>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                  onClick={() => onNavigate('register')}
                >
                  Register as Company
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary hover:shadow-2xl transition-all duration-300 group overflow-hidden relative sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="pt-6 sm:pt-8 text-center space-y-4 relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="text-2xl sm:text-3xl">Admins</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Manage the platform, oversee assessments, and ensure smooth operations across all user types
                </p>
                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-colors"
                  onClick={() => onNavigate('login')}
                >
                  Admin Login
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
              A simple, three-step process from registration to results
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative p-6 sm:p-8 text-center space-y-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary to-accent text-white rounded-2xl flex items-center justify-center mx-auto text-2xl sm:text-3xl shadow-xl group-hover:scale-110 transition-transform">
                  1
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <ClipboardCheck className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl">Registration & Filtering</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Students register on the platform and go through an initial filtering process based on criteria
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative p-6 sm:p-8 text-center space-y-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-accent to-secondary text-white rounded-2xl flex items-center justify-center mx-auto text-2xl sm:text-3xl shadow-xl group-hover:scale-110 transition-transform">
                  2
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto">
                  <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl">Assessment</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Shortlisted students take comprehensive tests designed to evaluate their skills and knowledge
                </p>
              </div>
            </div>

            <div className="relative group sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-primary rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative p-6 sm:p-8 text-center space-y-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-secondary to-primary text-white rounded-2xl flex items-center justify-center mx-auto text-2xl sm:text-3xl shadow-xl group-hover:scale-110 transition-transform">
                  3
                </div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6 sm:h-8 sm:w-8 text-secondary" />
                </div>
                <h3 className="text-xl sm:text-2xl">Report Generation</h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  Detailed reports are generated and made available to registered companies for evaluation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwek0wIDBoNnYzMEgwVjB6TTAgNDVoNnYxNUgwVjQ1em0zMCAxNWg2VjQ1aC02djE1ek00NSAzMGg2VjBoLTZ2MzB6bTE1IDBWMGgtNnYzMGg2ek0wIDYwaDYwVjMwSDB2MzB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
        
        <div className="relative container mx-auto px-4 text-center space-y-6 lg:space-y-8 text-white">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm mb-4">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm">Join Our Growing Community</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Ready to Get Started?</h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto opacity-90">
            Join thousands of students and companies already using our platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate('register')}
              className="shadow-2xl hover:shadow-3xl transition-all text-base sm:text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Create Your Account
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('contact')}
              className="border-2 border-white text-white hover:bg-white/10 text-base sm:text-lg px-8 py-6"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
