"use client";

import { useState, useMemo } from "react";
import { SearchInput } from "./SearchInput";
import { SearchResults } from "./SearchResults";
import { searchData } from "@/lib/data";

export function SearchContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const results = useMemo(() => {
    if (!searchQuery.trim()) {
      return searchData.split("\n").filter(line => line.trim());
    }
    
    // Split the query into terms and filter out empty strings
    const searchTerms = searchQuery
      .toLowerCase()
      .split(/\s+/)
      .filter(term => term.length > 0);

    return searchData
      .split("\n")
      .filter(line => {
        if (!line.trim()) return false;
        const normalizedLine = line.toLowerCase();
        // Check if all search terms are present in the line
        return searchTerms.every(term => normalizedLine.includes(term));
      });
  }, [searchQuery]);

  return (
    <div className="space-y-4">
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <SearchResults results={results} />
    </div>
  );
}