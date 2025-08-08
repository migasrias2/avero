import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CreditCard } from "lucide-react";

const items = [
  { title: "Figma contract - invoice", date: "Sep 18", amount: "$1,800" },
  { title: "AWS hosting", date: "Sep 20", amount: "$120" },
  { title: "Upwork payout", date: "Sep 24", amount: "$640" },
];

export function UpcomingCard() {
  return (
    <Card className="bg-white/90 backdrop-blur shadow-sm border-none">
      <CardHeader className="flex-row items-center justify-between gap-2 p-5">
        <CardTitle className="text-base font-medium text-muted-foreground">
          Upcoming
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center">
          <Calendar className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                    <CreditCard className="h-3.5 w-3.5" />
                  </div>
                  <span className="truncate text-sm font-medium">{item.title}</span>
                </div>
                <div className="pl-9 text-xs text-muted-foreground">{item.date}</div>
              </div>
              <div className="text-sm font-medium tabular-nums">{item.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

