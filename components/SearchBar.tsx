import { MapPin, SearchIcon } from "./icons/uiIcons";

//TODO: стили + обработка ошибок
export default function SearchBar({
  isDisabled,
  onSearch,
}: {
  onSearch: (value: string) => void;
  isDisabled: boolean
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
    <form action={handleSearch} className="flex justify-between md:w-fit min-w-fit bg-surface pl-4 py-1 pr-1.5 rounded-xl">
      <label className="text-foreground flex items-center gap-3">
        <MapPin />
        <input name="city" className="outline-none" placeholder="Найти город"/>
        </label>
        <button type="submit" disabled={isDisabled} className={`text-primary-foreground bg-primary p-2.5 rounded-xl transition-transform ${isDisabled ? "" :"hover:bg-primary-hover active:translate-y-0.5"}`}>
          <SearchIcon />
        </button>
      
    </form>
  );
}
