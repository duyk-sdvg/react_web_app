import { MapPin } from "./icons/uiIcons";

export default function ButtonLocationSearch({
  onSearch,
  isDisabled,
}: {
  isDisabled:boolean
  onSearch: () => void;
}) {
  return (
    <div className="flex items-center gap-2 text-sky-foreground">
      <MapPin />
      <button disabled={isDisabled} onClick={onSearch}>Мое местоположение</button>
    </div>
  );
}
