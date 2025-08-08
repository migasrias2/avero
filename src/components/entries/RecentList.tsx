import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Item = {
  title: string;
  amount: string;
  date: string;
  category: string;
};

type RecentListProps = {
  title: string;
  items: Item[];
};

export function RecentList({ title, items }: RecentListProps) {
  return (
    <Card className="bg-white/90 backdrop-blur border-none shadow-sm">
      <CardHeader className="p-5 pb-2">
        <CardTitle className="text-base font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <div className="divide-y">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between py-3">
              <div className="min-w-0">
                <div className="font-medium truncate">{item.title}</div>
                <div className="text-xs text-muted-foreground">{item.category} • {item.date}</div>
              </div>
              <div className="tabular-nums font-medium">{item.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

