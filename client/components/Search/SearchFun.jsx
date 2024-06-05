"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchFun() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/api/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        className="absolute w-[75%] h-[35px] rounded-full top-[52%] left-[12%] outline-none p-4"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </form>
  );
}
