"use client";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name")?.toString().trim(); 

    if (name) {
      router.push(`/list?name=${encodeURIComponent(name)}`);
    }
  };

  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-50 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Buscar..."
        className="flex-1 bg-transparent outline-none text-black"
      />
      <button type="submit" className="cursor-pointer">
      </button>
    </form>
  );
};

export default SearchBar;