import { SearchContainer } from "@/components/SearchContainer";

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Paper Search</h1>
          <p className="text-muted-foreground">
            Search through available accounting papers and materials
          </p>
        </div>
        <SearchContainer />
      </div>
    </main>
  );
}