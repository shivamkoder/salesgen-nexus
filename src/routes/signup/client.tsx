import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Eye, EyeOff, ArrowLeft, Building2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { createClient } from "@/integrations/supabase/client";
import signupHero from "@/assets/signup-hero.jpg";

export const Route = createFileRoute("/signup/client")({
  component: ClientSignupPage,
  head: () => ({
    meta: [
      { title: "Client Sign Up — SalesGen" },
      { name: "description", content: "Join SalesGen as a client and hire world-class sales talent." },
    ],
  }),
});

function ClientSignupPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [companySize, setCompanySize] = useState("");
  const [industry, setIndustry] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    contactPerson: "",
    phone: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setLoading(true);

    try {
      const supabase = createClient();

      const { data, error: signupError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            role: "business",
            full_name: formData.contactPerson,
            company_name: formData.companyName,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (signupError) {
        setError(signupError.message);
        setLoading(false);
        return;
      }

      if (data?.user) {
        setSuccessMessage("Account created successfully! Redirecting to login...");
        setTimeout(() => {
          navigate({ to: "/login" });
        }, 2000);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An unexpected error occurred");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-[1100px] rounded-2xl border border-border overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-card shadow-2xl">
        {/* Left Panel - Hero Image */}
        <div className="relative hidden md:flex flex-col justify-between p-6 overflow-hidden">
          <img
            src={signupHero}
            alt="Abstract futuristic landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />

          <div className="relative z-10 flex items-center justify-between">
            <span className="text-xl font-heading font-bold text-foreground tracking-tight">
              SalesGen
            </span>
            <Link
              to="/"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border/50 rounded-full px-3 py-1.5 backdrop-blur-sm bg-surface"
            >
              Back to website <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
            </Link>
          </div>

          <div className="relative z-10 pb-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-primary/10 backdrop-blur-sm">
                <Building2 className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground text-center leading-tight">
              Hire World-Class
              <br />
              Sales Talent
            </h2>
            <div className="flex justify-center gap-2 mt-6">
              <span className="w-8 h-1.5 rounded-full bg-foreground" />
              <span className="w-6 h-1.5 rounded-full bg-muted-foreground/40" />
              <span className="w-6 h-1.5 rounded-full bg-muted-foreground/40" />
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="p-8 md:p-10 flex flex-col justify-center max-h-[90vh] overflow-y-auto">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">
            Create Client Account
          </h1>
          <p className="text-muted-foreground text-sm mb-6">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Log in
            </Link>
          </p>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-600 text-sm">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="mb-4 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-600 text-sm">
              {successMessage}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSignup}>
            <Input
              placeholder="Company Name"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className="bg-secondary/50 border-border/60 h-11 placeholder:text-muted-foreground"
            />

            <Input
              type="email"
              placeholder="Business Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-secondary/50 border-border/60 h-11 placeholder:text-muted-foreground"
            />

            <Input
              placeholder="Contact Person Name"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleInputChange}
              required
              className="bg-secondary/50 border-border/60 h-11 placeholder:text-muted-foreground"
            />

            <Input
              type="tel"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="bg-secondary/50 border-border/60 h-11 placeholder:text-muted-foreground"
            />

            <Select value={companySize} onValueChange={setCompanySize}>
              <SelectTrigger className="bg-secondary/50 border-border/60 h-11">
                <SelectValue placeholder="Company Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 employees</SelectItem>
                <SelectItem value="11-50">11-50 employees</SelectItem>
                <SelectItem value="51-200">51-200 employees</SelectItem>
                <SelectItem value="201-500">201-500 employees</SelectItem>
                <SelectItem value="501+">501+ employees</SelectItem>
              </SelectContent>
            </Select>

            <Select value={industry} onValueChange={setIndustry}>
              <SelectTrigger className="bg-secondary/50 border-border/60 h-11">
                <SelectValue placeholder="Industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="healthcare">Healthcare</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="education">Education</SelectItem>
                <SelectItem value="real-estate">Real Estate</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="bg-secondary/50 border-border/60 h-11 pr-10 placeholder:text-muted-foreground"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <Checkbox
                id="terms-client"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(v === true)}
                className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label htmlFor="terms-client" className="text-sm text-muted-foreground cursor-pointer">
                I agree to the{" "}
                <span className="text-primary hover:underline cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>

            <Button
              type="submit"
              disabled={!agreed || loading}
              className="w-full h-12 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create Client Account"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground">
              Looking to join as an affiliate?{" "}
              <Link to="/signup/affiliate" className="text-primary hover:underline font-medium">
                Sign up here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
