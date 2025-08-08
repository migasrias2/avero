import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb } from "lucide-react";

const tips = [
  "You’re overspending vs. last month",
  "No income added for September",
  "Consider a 3-month tax set-aside",
];

export function TipsCard() {
  return (
    <Card className="bg-white/90 backdrop-blur shadow-sm border-none">
      <CardHeader className="flex-row items-center justify-between gap-2 p-5">
        <CardTitle className="text-base font-medium text-muted-foreground">
          Tips & Reminders
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center">
          <Lightbulb className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0 space-y-3">
        {tips.map((tip, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Badge variant="secondary" className="mt-0.5">New</Badge>
            <p className="text-sm text-muted-foreground">{tip}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

