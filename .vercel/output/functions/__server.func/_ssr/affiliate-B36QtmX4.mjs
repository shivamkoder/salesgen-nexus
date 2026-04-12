import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as signupHero, I as Input, B as Button, c as cn } from "./signup-hero-wYr2yi2i.mjs";
import { C as Checkbox } from "./checkbox-tAo3Z_3u.mjs";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-Dh8PA5v8.mjs";
import { A as ArrowLeft, Z as Zap, E as EyeOff, a as Eye } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-checkbox.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-select.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
const Textarea = reactExports.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ref,
      ...props
    }
  );
});
Textarea.displayName = "Textarea";
function AffiliateSignupPage() {
  const [showPassword, setShowPassword] = reactExports.useState(false);
  const [agreed, setAgreed] = reactExports.useState(false);
  const [experienceLevel, setExperienceLevel] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-[1100px] rounded-2xl border border-border overflow-hidden grid grid-cols-1 md:grid-cols-2 bg-card shadow-2xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden md:flex flex-col justify-between p-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: signupHero, alt: "Abstract futuristic landscape", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-heading font-bold text-foreground tracking-tight", children: "SalesGen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors border border-border/50 rounded-full px-3 py-1.5 backdrop-blur-sm bg-surface", children: [
          "Back to website ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-3.5 h-3.5 rotate-180" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4 rounded-2xl bg-primary/10 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "w-12 h-12 text-primary" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl md:text-3xl font-heading font-bold text-foreground text-center leading-tight", children: [
          "Join the Performance",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Ecosystem"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center gap-2 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-1.5 rounded-full bg-muted-foreground/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-8 h-1.5 rounded-full bg-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-6 h-1.5 rounded-full bg-muted-foreground/40" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 md:p-10 flex flex-col justify-center max-h-[90vh] overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-heading font-bold text-foreground mb-2", children: "Create Affiliate Account" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mb-6", children: [
        "Already have an account?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-primary hover:underline font-medium", children: "Log in" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "space-y-4", onSubmit: (e) => {
        e.preventDefault();
        console.log("Affiliate signup submitted");
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "First Name", required: true, className: "bg-secondary/50 border-border/60 h-11 placeholder:text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Last Name", required: true, className: "bg-secondary/50 border-border/60 h-11 placeholder:text-muted-foreground" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", placeholder: "Email Address", required: true, className: "bg-secondary/50 border-border/60 h-11 placeholder:text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "tel", placeholder: "Phone Number", required: true, className: "bg-secondary/50 border-border/60 h-11 placeholder:text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Select, { value: experienceLevel, onValueChange: setExperienceLevel, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { className: "bg-secondary/50 border-border/60 h-11", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Experience Level" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "beginner", children: "Beginner (0-2 years)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "intermediate", children: "Intermediate (2-5 years)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "expert", children: "Expert (5+ years)" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { placeholder: "Area of Expertise (e.g., SaaS, E-commerce, B2B Sales)", required: true, className: "bg-secondary/50 border-border/60 min-h-[80px] placeholder:text-muted-foreground resize-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "url", placeholder: "LinkedIn or Portfolio URL (optional)", className: "bg-secondary/50 border-border/60 h-11 placeholder:text-muted-foreground" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: showPassword ? "text" : "password", placeholder: "Create Password", required: true, className: "bg-secondary/50 border-border/60 h-11 pr-10 placeholder:text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors", children: showPassword ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, { id: "terms-affiliate", checked: agreed, onCheckedChange: (v) => setAgreed(v === true), className: "data-[state=checked]:bg-primary data-[state=checked]:border-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "terms-affiliate", className: "text-sm text-muted-foreground cursor-pointer", children: [
            "I agree to the",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary hover:underline cursor-pointer", children: "Terms & Conditions" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: !agreed, className: "w-full h-12 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground mt-2 disabled:opacity-50 disabled:cursor-not-allowed", children: "Create Affiliate Account" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "Looking to hire sales talent?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup/client", className: "text-primary hover:underline font-medium", children: "Sign up here" })
      ] }) })
    ] })
  ] }) });
}
export {
  AffiliateSignupPage as component
};
