import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { db } from "@/db/db";
import { bids } from "@/db/schema";

export default async function Home() {
  const queriedBids = await db.query.bids.findMany();

  return (
    <main className="container bg-slate-50 max-w-full min-h-screen p-24">
      <h1 className="text-2xl font-bold text-red-900">Get the best offers</h1>

      <form
        action={async (data: FormData) => {
          "use server";
          await db.insert(bids).values({
            amount: 0,
            timestamp: new Date(),
            userId: "1",
            id: 1,
            productId: 1,
          });
        }}
        className="flex flex-col gap-4 w-44"
      >
        <Label htmlFor="bid">Bid</Label>
        <Input name="bid" />
        <Button>Submit</Button>
      </form>

      <div>
        <h2 className="text-xl font-bold text-red-900">Elements:</h2>
        <ul>{JSON.stringify(queriedBids)}</ul>
      </div>
    </main>
  );
}
