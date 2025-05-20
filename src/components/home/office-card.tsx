import { baseImageUrl } from "../../service/api-client";
import type { Office } from "../../types/type";

export default function OfficeCard({ office }: { office: Office }) {
  return (
    <a href="details.html" className="card">
      <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
        <div className="thumbnail-container relative w-full h-[200px]">
          <img
            src={`${baseImageUrl}/${office.thumbnail}`}
            className="w-full h-full object-cover"
            alt="thumbnails"
          />
        </div>
        <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
          <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
            {office.name}
          </h3>
          <div className="flex items-center justify-between">
            <p className="font-semibold text-xl leading-[30px]">
              Rp {office.price.toLocaleString("id")}
            </p>
            <div className="flex items-center justify-end gap-[6px]">
              <p className="font-semibold">{office.duration} days</p>
              <img
                src="/assets/images/icons/clock.svg"
                className="w-6 h-6"
                alt="icon"
              />
            </div>
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-end gap-[6px]">
              <img
                src="/assets/images/icons/wifi.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <p className="font-semibold">Fast-Connection</p>
            </div>
            <div className="flex items-center justify-end gap-[6px]">
              <img
                src="/assets/images/icons/security-user.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <p className="font-semibold">Secure 100%</p>
            </div>
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-end gap-[6px]">
              <img
                src="/assets/images/icons/location.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <p className="font-semibold">{office.city.name}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export function OfficeCardSkeleton() {
  return (
    <div className="border-[1px] border-gray-400 shadow rounded-xl p-4 relative flex shrink-0 w-full h-[400px]">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-52 w-80 bg-slate-500 rounded"></div>
          <div className="space-y-10">
            <div className="h-2 bg-slate-500 rounded"></div>
            <div className="h-2 bg-slate-500 rounded"></div>
            <div className="h-2 bg-slate-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
