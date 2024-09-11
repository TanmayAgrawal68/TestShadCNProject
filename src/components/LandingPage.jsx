"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link, Loader2, MountainIcon } from "lucide-react";

export function LandingPage() {
  const [idea, setIdea] = useState("");
  const [plan, setPlan] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setPlan(`Here's your execution plan for "${idea}":
1. Market Research
2. Business Model Development
3. MVP Creation
4. Funding Strategy
5. Team Building
6. Launch Plan
7. Growth Hacking Strategies`);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#testimonials"
          >
            Testimonials
          </Link>
        </nav>
        <Button className="ml-4" variant="outline">
          Log in
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Turn Your Startup Idea into Reality
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Enter your startup idea and let our AI create a complete
                  execution plan for you. From market research to launch
                  strategies, we've got you covered.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <Textarea
                    placeholder="Enter your startup idea"
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating Plan
                      </>
                    ) : (
                      "Get Execution Plan"
                    )}
                  </Button>
                </form>
              </div>
              {plan && (
                <div className="w-full max-w-md mt-4 p-4 bg-gray-100 rounded-lg">
                  <pre className="whitespace-pre-wrap text-left">{plan}</pre>
                </div>
              )}
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>1. Input Your Idea</CardTitle>
                </CardHeader>
                <CardContent>
                  Share your startup concept with our AI system.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>2. AI Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  Our advanced AI analyzes your idea and market conditions.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>3. Get Your Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  Receive a comprehensive execution plan tailored to your idea.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>For new entrepreneurs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$29/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>1 Idea Analysis per month</li>
                    <li>Basic execution plan</li>
                    <li>Email support</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For serious founders</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$99/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>5 Idea Analyses per month</li>
                    <li>Detailed execution plans</li>
                    <li>Priority support</li>
                    <li>Market insights report</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For teams and accelerators</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li>Unlimited Idea Analyses</li>
                    <li>Comprehensive execution plans</li>
                    <li>Dedicated account manager</li>
                    <li>API access</li>
                    <li>Custom integrations</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="Sarah"
                      />
                      <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>Sarah Lee</CardTitle>
                      <CardDescription>Founder, TechStart</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  "This AI-powered platform turned my vague idea into a concrete
                  plan. It's like having a team of consultants at your
                  fingertips!"
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="John"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>John Doe</CardTitle>
                      <CardDescription>CEO, InnovateCo</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  "The execution plans provided are comprehensive and
                  actionable. It's been instrumental in our startup's success."
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2023 AI Startup Planner. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
