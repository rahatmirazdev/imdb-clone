"use client"
import React, { useState } from 'react'

const SearchBox = () => {

  const [search, setSearch] = useState("");
  const handleSubmit = () => {
    e.preventDefault();
    if (!search) return;

  }
  return (
    <form
      onSubmit={handleSubmit}
      value={search}
      onChange={
        (e) => setSearch(e.target.value)
      }
      className="flex max-w-6xl mx-auto justify-between items-center px-5">
      <input className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1" type="text" placeholder='Seacrh keywords...' />
      <button className="text-amber-600 disabled:text-gray-400" type="submit">Search</button>
    </form>
  )
}

export default SearchBox