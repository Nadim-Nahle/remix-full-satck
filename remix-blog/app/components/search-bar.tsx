import { useNavigate, useSearchParams } from "@remix-run/react";
import { sortOptions } from "~/utils/constants";
import { SelectBox } from "./select-box";
import { UserCircle } from "./user-circle";

export function SearchBar() {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const clearFilter = () => {
    searchParams.delete("filter");
    searchParams.delete("sort");
    navigate("/");
  };
  return (
    <form className="w-full px-6 flex items-center gap-x-4 border-b-4 border-b-blue-900 border-opacity-30 h-20 ">
      <div className={`flex items-center w-2/5`}>
        <input
          type="text"
          name="filter"
          className="w-full rounded-xl px-3 py-2"
          placeholder="Search a messageor a name"
        />

        <svg
          className="w-4 h-4 fill-current text-gray-400 -ml-8"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
        </svg>
      </div>
      <SelectBox
        className="w-full rounded-xl px-3 py-2 text-gray-400 "
        containerClassName="w-40"
        name="sort"
        options={sortOptions}
      />
      <button
        type="submit"
        className="rounded-xl bg-yellow-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-300 "
      >
        Search
      </button>
      {searchParams.get("filter") && (
        <button
          className="rounded-xl bg-red-300 font-semibold text-blue-600 px-3 py-2 transition duration-300 ease-in-out hover:bg-yellow-300 "
          onClick={clearFilter}
        >
          Clear Filters
        </button>
      )}
      <div className="flex-1" />
      <UserCircle
        className="h-14 w-14 transition duration-300 ease-in-out hover:scale-110 hover:border-2 hover:border-yellow-300"
        profile={}
        onClick={() => navigate("profile")}
      />
    </form>
  );
}
