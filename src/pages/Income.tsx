import { AppShell } from "@/components/layout/AppSidebar";
import { QuickEntryForm } from "@/components/entries/QuickEntryForm";
import { RecentList } from "@/components/entries/RecentList";

const categories = ["Client", "Affiliate", "Royalties", "Interest"];

export default function IncomePage() {
  const recent = [
    { title: "Nixtio Design Retainer", amount: "+$1,800", date: "Sep 16", category: "Client" },
    { title: "Template sales", amount: "+$240", date: "Sep 14", category: "Royalties" },
    { title: "Upwork payout", amount: "+$640", date: "Sep 11", category: "Client" },
  ];

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Income</h1>
          <p className="text-sm text-muted-foreground">Fast entry for new income with recent items on the right.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-2">
            <QuickEntryForm mode="income" categories={categories} ctaLabel="Add income" />
          </div>
          <div className="lg:col-span-1">
            <RecentList title="Recent income" items={recent} />
          </div>
        </div>
      </div>
    </AppShell>
  );
}

