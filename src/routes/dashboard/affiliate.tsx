import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Menu,
  DollarSign,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Home,
  Megaphone,
  Wallet,
  HelpCircle,
  Plus,
  TrendingUp,
  Calendar,
  Clock,
  ChevronRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

export const Route = createFileRoute("/dashboard/affiliate")({
  component: AffiliateDashboard,
  head: () => ({
    meta: [
      { title: "Affiliate Dashboard — SalesGen" },
      {
        name: "description",
        content:
          "Your affiliate performance dashboard. Track earnings, campaigns, and payouts.",
      },
    ],
  }),
});

/* ─── mock data ─── */
const weeklyData = [
  { day: "MON", value: 45, highlight: false },
  { day: "TUE", value: 62, highlight: true },
  { day: "WED", value: 78, highlight: true },
  { day: "THU", value: 55, highlight: false },
  { day: "FRI", value: 70, highlight: true },
  { day: "SAT", value: 82, highlight: true },
  { day: "SUN", value: 40, highlight: false },
];

const campaigns = [
  {
    id: 1,
    name: "Aura Design",
    description: "Premium UI Kits & Systems",
    rate: "15%",
    featured: true,
  },
  {
    id: 2,
    name: "CloudSync Pro",
    description: "Enterprise Cloud Storage",
    rate: "12%",
    featured: false,
  },
];

const updates = [
  {
    id: 1,
    text: 'New "Real-Time Tracking" feature now live for Aura Design.',
    time: "2 HOURS AGO",
  },
  {
    id: 2,
    text: "Payout processing delayed by 24h due to banking holiday.",
    time: "YESTERDAY",
  },
  {
    id: 3,
    text: "Commission rates updated for CloudSync Pro campaign.",
    time: "3 DAYS AGO",
  },
];

/* ─── bottom nav items ─── */
const navItems = [
  { icon: Home, label: "HOME", active: true },
  { icon: Megaphone, label: "CAMPAIGNS", active: false },
  { icon: Wallet, label: "PAYOUTS", active: false },
  { icon: HelpCircle, label: "SUPPORT", active: false },
];

function AffiliateDashboard() {
  const [activeNav, setActiveNav] = useState("HOME");

  return (
    <div
      data-testid="affiliate-dashboard"
      className="min-h-screen bg-[#0a0a0f] text-white pb-28"
    >
      {/* ── Header ── */}
      <header
        data-testid="dashboard-header"
        className="sticky top-0 z-50 flex items-center justify-between px-5 py-4 bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5"
      >
        <button data-testid="menu-button" className="p-1.5 rounded-lg hover:bg-white/5 transition-colors">
          <Menu className="w-5 h-5 text-white/70" />
        </button>
        <h1 className="font-heading text-lg font-bold tracking-tight">
          Affiliate Lab
        </h1>
        <button data-testid="profile-button" className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs font-bold ring-2 ring-white/10">
          JD
        </button>
      </header>

      <main className="mx-auto max-w-lg px-4 pt-5 space-y-5">
        {/* ── Available Balance ── */}
        <section
          data-testid="balance-card"
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#13131f] to-[#0f0f1a] border border-white/[0.06] p-6"
        >
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />
          <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 font-medium">
            Available Balance
          </p>
          <p
            data-testid="balance-amount"
            className="mt-2 text-[2.75rem] leading-none font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent"
          >
            $12,450.00
          </p>
          <p className="mt-3 text-sm text-white/50 leading-relaxed">
            Your revenue has increased by{" "}
            <span className="text-blue-400 font-semibold">12.4%</span> since
            last month. Keep optimizing your active campaigns.
          </p>

          <button
            data-testid="request-payout-btn"
            className="mt-5 w-full flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all active:scale-[0.98]"
          >
            Request Payout
            <DollarSign className="w-4 h-4" />
          </button>

          <div className="mt-5 pt-4 border-t border-white/[0.06]">
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
              Last Payout
            </p>
            <p
              data-testid="last-payout"
              className="mt-1 text-lg font-semibold text-white/80"
            >
              $2,100.00{" "}
              <span className="text-sm font-normal text-white/30">
                (Oct 12)
              </span>
            </p>
          </div>
        </section>

        {/* ── Payout Schedule ── */}
        <section
          data-testid="payout-schedule-card"
          className="relative rounded-2xl bg-[#13131f] border border-white/[0.06] p-5 overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-orange-500 rounded-l-2xl" />
          <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium ml-3">
            Payout Schedule
          </p>
          <div className="mt-3 flex items-end justify-between ml-3">
            <div>
              <p className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-white/30" />
                <span
                  data-testid="next-payout-date"
                  className="text-2xl font-bold"
                >
                  Oct 28
                </span>
              </p>
              <p className="text-xs text-white/40 mt-0.5">Next Payout Date</p>
            </div>
            <div className="text-right">
              <p
                data-testid="pending-clearance"
                className="text-2xl font-bold text-amber-400"
              >
                $840.50
              </p>
              <p className="text-xs text-white/40 mt-0.5">Pending Clearance</p>
            </div>
          </div>
        </section>

        {/* ── Weekly Conversion Trend ── */}
        <section
          data-testid="conversion-trend-card"
          className="rounded-2xl bg-[#13131f] border border-white/[0.06] p-5"
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <p className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-medium">
              Weekly Conversion Trend
            </p>
          </div>
          <div className="h-36">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={weeklyData}
                barCategoryGap="20%"
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis
                  dataKey="day"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "rgba(255,255,255,0.3)" }}
                />
                <YAxis hide />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {weeklyData.map((entry, idx) => (
                    <Cell
                      key={idx}
                      fill={
                        entry.highlight
                          ? "rgba(99,130,180,0.7)"
                          : "rgba(60,75,100,0.5)"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* ── High-Yield Campaigns ── */}
        <section data-testid="campaigns-section">
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-xl font-bold leading-tight">
              High-Yield
              <br />
              Campaigns
            </h2>
            <button
              data-testid="view-all-campaigns-btn"
              className="flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              View all campaigns <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-3">
            {campaigns.map((campaign) => (
              <div
                key={campaign.id}
                data-testid={`campaign-card-${campaign.id}`}
                className="rounded-2xl bg-[#13131f] border border-white/[0.06] p-5"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/10 flex items-center justify-center border border-white/[0.06]">
                    <Sparkles className="w-5 h-5 text-blue-400" />
                  </div>
                  {campaign.featured && (
                    <span
                      data-testid="featured-badge"
                      className="text-[10px] uppercase tracking-[0.15em] font-semibold text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1"
                    >
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="mt-4 text-base font-bold">{campaign.name}</h3>
                <p className="text-sm text-white/40">{campaign.description}</p>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                      Rate
                    </p>
                    <p className="text-lg font-bold text-blue-400">
                      {campaign.rate} Comm.
                    </p>
                  </div>
                  <button
                    data-testid={`promote-btn-${campaign.id}`}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2 text-sm font-medium text-white/70 hover:bg-white/[0.06] hover:text-white transition-all active:scale-95"
                  >
                    Promote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Priority Support ── */}
        <section
          data-testid="priority-support-card"
          className="relative rounded-2xl bg-[#13131f] border border-white/[0.06] p-6 overflow-hidden"
        >
          <div className="absolute right-4 top-4 text-[6rem] leading-none font-bold text-white/[0.02] select-none pointer-events-none">
            ?
          </div>
          <h3 className="text-lg font-bold">Priority Support</h3>
          <p className="mt-2 text-sm text-white/40 leading-relaxed max-w-[280px]">
            Need help with a campaign or payout? Our dedicated affiliate team is
            online 24/7.
          </p>
          <button
            data-testid="chat-now-btn"
            className="mt-5 flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600/80 to-blue-500/80 border border-blue-400/20 px-5 py-3 text-sm font-semibold text-white hover:from-blue-600 hover:to-blue-500 transition-all active:scale-[0.98]"
          >
            Chat Now <MessageSquare className="w-4 h-4" />
          </button>
        </section>

        {/* ── Platform Updates ── */}
        <section
          data-testid="platform-updates-section"
          className="rounded-2xl bg-[#13131f] border border-white/[0.06] p-5"
        >
          <h3 className="text-lg font-bold mb-4">Platform Updates</h3>
          <div className="space-y-4">
            {updates.map((update) => (
              <div
                key={update.id}
                data-testid={`update-item-${update.id}`}
                className="flex gap-3"
              >
                <span className="mt-1.5 w-2 h-2 shrink-0 rounded-full bg-blue-500" />
                <div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {update.text}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-white/25">
                    <Clock className="w-3 h-3" />
                    {update.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── Bottom Navigation ── */}
      <nav
        data-testid="bottom-nav"
        className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-white/[0.06]"
      >
        <div className="mx-auto max-w-lg flex items-center justify-around px-2 py-2">
          {navItems.map((item) => {
            const isActive = activeNav === item.label;
            return (
              <button
                key={item.label}
                data-testid={`nav-${item.label.toLowerCase()}`}
                onClick={() => setActiveNav(item.label)}
                className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                  isActive
                    ? "bg-blue-500/15 text-blue-400"
                    : "text-white/30 hover:text-white/50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-[9px] uppercase tracking-[0.15em] font-semibold">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* ── Floating Action Button ── */}
      <button
        data-testid="fab-button"
        className="fixed bottom-20 right-5 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40 transition-all active:scale-90"
      >
        <Plus className="w-6 h-6 text-white" />
      </button>
    </div>
  );
}
