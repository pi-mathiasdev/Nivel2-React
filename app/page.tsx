"use client";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setPeople } from "./store/peopleSlice";
import Loading from "./components/loading";
import { IPeople } from "./interfaces/IPeople.model";
import SearchComponent from "./components/searchComponent";
import CardPeople from "./components/cardPeople";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const people = useSelector((state: { people: IPeople[] }) => state.people);

  //#region Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/people");
        const data = await response.json();
        dispatch(setPeople(data.results));
      } catch (error) {
        console.error("Error al obtener personas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);
  //#endregion

  //#region Search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredPeople = people.filter((person: IPeople) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  //#endregion

  return (
    <main className="container mx-auto p-5 h-screen flex flex-col md:flex-row gap-4">
      <div className="w-full flex flex-col h-full mt-3">
        <div className="text-4xl text-amber-400 font-bold mb-4">StarWars</div>
        <SearchComponent
          searchQuery={searchQuery}
          handleSearch={handleSearch}
        />

        <div className="flex-1 flex flex-col">
          {loading && <Loading />}

          {!loading && filteredPeople.length === 0 && (
            <p className="text-center text-white col-span-full">
              No se encontraron resultados
            </p>
          )}

          {!loading && filteredPeople.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {filteredPeople.map((people: IPeople, index: number) => (
                <CardPeople key={index} people={people} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
