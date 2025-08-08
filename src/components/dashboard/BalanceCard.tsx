import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export function BalanceCard() {
  return (
    <Card className="bg-white/90 backdrop-blur shadow-sm border-none">
      <CardHeader className="flex-row items-center justify-between gap-2 p-5">
        <CardTitle className="text-base font-medium text-muted-foreground">
          Current Balance
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
          <Wallet className="h-4 w-4" />
        </div>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <div className="text-3xl md:text-4xl font-semibold tracking-tight">
          $12,400
        </div>
        <div className="mt-2 text-sm text-muted-foreground">as of today</div>
        <div className="mt-4 flex gap-2">
          <Button size="sm">Add income</Button>
          <Button variant="secondary" size="sm">
            Add expense
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

