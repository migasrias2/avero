import { AppShell } from "@/components/layout/AppSidebar";
import { QuickEntryForm } from "@/components/entries/QuickEntryForm";
import { RecentList } from "@/components/entries/RecentList";

const categories = ["Software", "Hosting", "Equipment", "Travel", "Taxes"];

export default function ExpensesPage() {
  const recent = [
    { title: "Figma", amount: "-$15", date: "Sep 16", category: "Software" },
    { title: "AWS", amount: "-$120", date: "Sep 14", category: "Hosting" },
    { title: "MacBook stand", amount: "-$39", date: "Sep 12", category: "Equipment" },
  ];

  return (
    <AppShell>
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Expenses</h1>
          <p className="text-sm text-muted-foreground">Log expenses quickly and keep your costs visible.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-2">
            <QuickEntryForm mode="expense" categories={categories} ctaLabel="Add expense" />
          </div>
          <div className="lg:col-span-1">
            <RecentList title="Recent expenses" items={recent} />
          </div>
        </div>
      </div>
    </AppShell>
  );
}

