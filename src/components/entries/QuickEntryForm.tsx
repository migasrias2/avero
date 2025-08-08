import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";

type QuickEntryFormProps = {
  mode: "income" | "expense";
  categories: string[];
  ctaLabel?: string;
};

export function QuickEntryForm({ mode, categories, ctaLabel }: QuickEntryFormProps) {
  const form = useForm({
    defaultValues: {
      amount: "",
      title: "",
      category: categories[0] || "",
      date: new Date().toISOString().slice(0, 10),
      notes: "",
    },
  });

  return (
    <Card className="bg-white/90 backdrop-blur border-none shadow-sm">
      <CardHeader className="p-5 pb-2">
        <CardTitle className="text-base font-medium text-muted-foreground">
          Quick {mode === "income" ? "Income" : "Expense"}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-0">
        <Form {...form}>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input placeholder={mode === "income" ? "e.g. 1500" : "e.g. 220"} inputMode="decimal" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{mode === "income" ? "Client/Source" : "Vendor/Payee"}</FormLabel>
                  <FormControl>
                    <Input placeholder={mode === "income" ? "Acme Design" : "AWS, Figma, etc."} {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {categories.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="md:col-span-2">
              <FormField
                control={form.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Notes</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Optional notes (visible only to you)" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="md:col-span-2 flex gap-2">
              <Button type="button">{ctaLabel || (mode === "income" ? "Add income" : "Add expense")}</Button>
              <Button type="button" variant="secondary" onClick={() => form.reset()}>Clear</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

