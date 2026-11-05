import { MapPin, SearchIcon } from "./icons/uiIcons";

//TODO: стили + обработка ошибок
export default function SearchBar({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  const handleSearch = function (formData: FormData) {
    let queryCity = formData.get("city");

    if (typeof queryCity === "string") {
      queryCity = queryCity.trim();
      if (queryCity.length > 0) {
        onSearch(queryCity);
      }
    }
  };

  return (
    <form action={handleSearch} className=" w-fit bg-surface pl-4 py-1 pr-1.5 rounded-xl">
      <label className="text-foreground flex items-center gap-3">
        <MapPin />
        <input name="city" className="outline-none" placeholder="Найти город"/>
        <button type="submit" className="text-primary-foreground bg-primary hover:bg-primary-hover p-2.5 rounded-xl transition-transform active:translate-y-0.5">
          <SearchIcon />
        </button>
      </label>
    </form>
  );
}
