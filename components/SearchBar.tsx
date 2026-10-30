//TODO: стили + обработка ошибок
export default function SearchBar({
  onSearch,
}: {
  onSearch: (value: string) => void;
}) {
  const handleSearch = function (formData:FormData) {
    let queryCity = formData.get("city")

    if(typeof queryCity === "string") {
        queryCity = queryCity.trim()
        if(queryCity.length > 0){
            onSearch(queryCity)
        }
    }    
  };

  return (
    <form action={handleSearch}>
      <label className="w-fit">
        <input name="city" className="bg-amber-700" />
      </label>
      <button type="submit" className="bg-amber-950">
        Поиск
      </button>
    </form>
  );
}
