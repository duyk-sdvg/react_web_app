import { MapPin } from "./icons/uiIcons";

export default function ButtonLocationSearch({
  onSearch,
}: {
  onSearch: () => void;
}) {
  return (
    <div className="flex items-center gap-2 text-border">
      <MapPin />
      <button onClick={onSearch}>Мое местоположение</button>
    </div>
  );
}
