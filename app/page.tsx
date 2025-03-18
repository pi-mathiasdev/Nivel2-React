"use client";
import { useState } from "react";

export default function Home() {
  const itemsPerPage = 6;
  const allItems = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  // Filtrar elementos por búsqueda
  const filteredItems = allItems.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calcular páginas después de filtrar
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  // Resetear a la primera página si cambia la búsqueda
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPage(1); // Resetear a la página 1 al filtrar
  };

  return (
    <main className="container mx-auto p-4 h-screen flex flex-col md:flex-row gap-4 ">
      <div className="w-full md:w-[70%] flex flex-col h-full ">
        <div className="mb-4 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <h1 className="h-4 w-4">B</h1>
          </div>
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={handleSearch}
            className="pl-10 w-full p-2 rounded-lg"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paginatedItems.length > 0 ? (
              paginatedItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-blue-400 flex p-4 justify-center items-center rounded-3xl aspect-square"
                >
                  <h3>{item}</h3>
                </div>
              ))
            ) : (
              <p className="text-center text-white col-span-full">
                No se encontraron resultados
              </p>
            )}
          </div>

          {filteredItems.length > itemsPerPage && (
            <div className="flex justify-center items-center gap-2 mt-4">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg disabled:opacity-50"
              >
                ←
              </button>

              <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg disabled:opacity-50"
              >
                →
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full md:w-[30%] h-full ">
        <div className="bg-blue-400 h-full flex justify-center items-center rounded-3xl p-4">
          <h4 className="text-white">Card Principal</h4>
        </div>
      </div>
    </main>
  );
}
