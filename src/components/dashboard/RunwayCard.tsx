import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CalendarDays } from "lucide-react";

export function RunwayCard() {
  // Fake values for UI only
  const daysLeft = 43;
  const capacityPercent = Math.min((daysLeft / 90) * 100, 100);

  return (
    <Card className="bg-white/90 backdrop-blur shadow-sm border-none">
      <CardHeader className="flex-row items-center justify-between gap-2 p-5">
        <CardTitle className="text-base font-medium text-muted-foreground">
          Runway Estimate
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center">
          <CalendarDays className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <div className="flex items-baseline gap-2">
          <div className="text-3xl md:text-4xl font-semibold tracking-tight">
            {daysLeft} days
          </div>
          <span className="text-sm text-muted-foreground">until $0</span>
        </div>
        <div className="mt-4">
          <Progress value={capacityPercent} />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>0</span>
            <span>90</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

