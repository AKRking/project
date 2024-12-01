'use client';

interface SearchResultsProps {
  results: string[];
}

export function SearchResults({ results }: SearchResultsProps) {
  const copyResults = () => {
    const textToCopy = results.join('\n');
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        // You might want to add a toast notification here
        console.log('Results copied to clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy results:', err);
      });
  };

  if (results.length === 0) {
    return (
      <div className="text-center p-4 text-muted-foreground">
        No results found
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button
          onClick={copyResults}
          className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors"
        >
          Copy Results
        </button>
      </div>
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
    </div>
  );
}