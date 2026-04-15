import { MapPin, Route } from "lucide-react";

export const BottomNav = () => {
  return (
    <nav className="w-full bg-white border-t border-border py-3 flex justify-evenly items-center shrink-0">
      <button className="flex flex-col items-center gap-1 text-primary">
        <MapPin size={22} />
        <span className="text-[10px] font-semibold uppercase tracking-wider">
          Map
        </span>
      </button>

      <button className="flex flex-col items-center gap-1 text-text-secondary">
        <Route size={22} />
        <span className="text-[10px] font-semibold uppercase tracking-wider">
          Journeys
        </span>
      </button>
    </nav>
  );
};
