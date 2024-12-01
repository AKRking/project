interface SearchResultsProps {
  results: string[];
}

export function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center p-4 text-muted-foreground">
        No results found
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {results.map((result, index) => (
        <div
          key={index}
          className="p-4 rounded-lg border bg-card text-card-foreground hover:bg-accent transition-colors"
        >
          {result}
        </div>
      ))}
    </div>
  );
}