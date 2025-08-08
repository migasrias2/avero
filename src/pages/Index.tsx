import { AppShell } from "@/components/layout/AppSidebar";
import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { RunwayCard } from "@/components/dashboard/RunwayCard";
import { BalanceChartCard } from "@/components/dashboard/BalanceChartCard";
import { TipsCard } from "@/components/dashboard/TipsCard";
import { UpcomingCard } from "@/components/dashboard/UpcomingCard";

const Index = () => {
  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground">
            Avero Lite — track your cash runway with a calm, blue vibe.
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <div className="xl:col-span-2">
            <BalanceCard />
          </div>
          <RunwayCard />
          <UpcomingCard />
        </div>

        <div className="mt-4 md:mt-6 grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-6">
          <div className="xl:col-span-2">
            <BalanceChartCard />
          </div>
          <TipsCard />
        </div>
      </div>
    </AppShell>
  );
};

export default Index;