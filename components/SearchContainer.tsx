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
    
    const query = searchQuery.toLowerCase();
    return searchData
      .split("\n")
      .filter(line => line.trim() && line.toLowerCase().includes(query));
  }, [searchQuery]);

  return (
    <div className="space-y-4">
      <SearchInput value={searchQuery} onChange={setSearchQuery} />
      <SearchResults results={results} />
    </div>
  );
}