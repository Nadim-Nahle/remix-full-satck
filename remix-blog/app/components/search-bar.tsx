export function SearchBar() {
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
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="256"
          height="256"
          viewBox="0 0 256 256"
        >
          <defs></defs>
          <g>
            <path
              d="M 54.844 8 c 7.254 0 14.073 2.825 19.202 7.954 S 82 27.902 82 35.156 s -2.825 14.073 -7.954 19.202 c -5.129 5.129 -11.948 7.954 -19.202 7.954 c -7.254 0 -14.073 -2.825 -19.202 -7.954 s -7.954 -11.948 -7.954 -19.202 s 2.825 -14.073 7.954 -19.202 C 40.771 10.825 47.591 8 54.844 8 M 54.844 0 C 45.847 0 36.85 3.432 29.985 10.297 c -13.729 13.729 -13.729 35.989 0 49.718 c 6.865 6.865 15.862 10.297 24.859 10.297 s 17.994 -3.432 24.859 -10.297 c 13.729 -13.729 13.729 -35.989 0 -49.718 C 72.839 3.432 63.841 0 54.844 0 L 54.844 0 z"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
            <path
              d="M 4 90 c -1.024 0 -2.047 -0.391 -2.829 -1.172 c -1.562 -1.562 -1.562 -4.095 0 -5.656 L 29.86 54.482 c 1.563 -1.563 4.095 -1.563 5.657 0 c 1.562 1.562 1.562 4.095 0 5.656 L 6.829 88.828 C 6.047 89.609 5.024 90 4 90 z"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
            <path
              d="M 47.793 44.194 c 0 -0.977 -0.792 -1.769 -1.769 -1.769 h -5.648 c -0.977 0 -1.769 0.792 -1.769 1.769 v 7.554 c 2.699 2.34 5.82 4.047 9.186 5.04 V 44.194 z"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
            <path
              d="M 59.7 57.339 V 36.867 c 0 -0.977 -0.792 -1.769 -1.769 -1.769 h -5.648 c -0.977 0 -1.769 0.792 -1.769 1.769 v 20.555 c 1.423 0.25 2.877 0.385 4.352 0.385 C 56.508 57.806 58.125 57.647 59.7 57.339 z"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
            <path
              d="M 69.838 25.023 H 64.19 c -0.977 0 -1.769 0.792 -1.769 1.769 v 29.846 c 3.381 -1.073 6.508 -2.867 9.186 -5.31 V 26.792 C 71.607 25.815 70.815 25.023 69.838 25.023 z"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
          </g>
        </svg>
      </div>
    </form>
  );
}
