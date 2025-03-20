import { FaSearch } from "react-icons/fa";

const SearchComponent = ({
  searchQuery,
  handleSearch,
}: {
  searchQuery: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative mb-4 ">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <FaSearch className="text-white" />
      </div>
      <input
        type="text"
        placeholder="Buscar por nombre"
        value={searchQuery}
        onChange={handleSearch}
        className="pl-10 w-full p-2 rounded-lg border border-white bg-[var(--background)] text-white focus:outline-none "
      />
    </div>
  );
};

export default SearchComponent;
