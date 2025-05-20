import { Link } from "react-router";
import type { City } from "../../types/type";
import { baseImageUrl } from "../../service/api-client";

export default function CityCard({ city }: { city: City }) {
  return (
    <Link to={`/city/${city.slug}`} className="card">
      <div className="relative flex shrink-0 w-[230px] h-[300px] rounded-[20px] overflow-hidden">
        <div className="relative flex flex-col justify-end w-full h-full p-5 gap-[2px] bg-[linear-gradient(180deg,_rgba(0,0,0,0)_49.87%,_rgba(0,0,0,0.8)_100%)] z-10">
          <h3 className="font-bold text-xl leading-[30px] text-white">
            {city.name}
          </h3>
          <p className="text-white">{city.officeSpaces_count} Offices</p>
        </div>
        <img
          src={`${baseImageUrl}/${city.photo}`}
          className="absolute w-full h-full object-cover"
          alt="thumbnails"
          loading="lazy"
        />
      </div>
    </Link>
  );
}

export function CityCardSkeleton() {
  return (
    <div className="border-[1px] border-gray-400 shadow rounded-md p-4 relative flex shrink-0 w-[230px] h-[300px]">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-52 w-48 bg-slate-500 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-500 rounded col-span-2"></div>
              <div className="h-2 bg-slate-500 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
