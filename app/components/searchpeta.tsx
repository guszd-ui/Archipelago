"use client";
import React, { useState } from "react";
import { Search } from "lucide-react";

interface ProvinsiData {
  id: string;
  nama: string;
}

interface SearchPetaProps {
  data: ProvinsiData[];
  onHoverProvinsi: (id: string | null) => void;
  onSelectProvinsi: (id: string) => void;
}

const SearchPeta: React.FC<SearchPetaProps> = ({
  data,
  onHoverProvinsi,
  onSelectProvinsi,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredResults = searchTerm
    ? data.filter((provinsi) =>
        provinsi.nama.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleSelect = (id: string) => {
    onSelectProvinsi(id);
    setSearchTerm("");
  };

  return (
    <div className="relative w-full max-w-sm">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        <input
          type="text"
          placeholder="Cari provinsi..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {filteredResults.length > 0 && (
        <div className="absolute top-full mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
          {filteredResults.map((provinsi) => (
            <button
              key={provinsi.id}
              onClick={() => handleSelect(provinsi.id)}
              onMouseEnter={() => onHoverProvinsi(provinsi.id)}
              onMouseLeave={() => onHoverProvinsi(null)}
              className="w-full text-left px-4 py-2.5 hover:bg-blue-100 transition-colors duration-150"
            >
              {provinsi.nama}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPeta;
