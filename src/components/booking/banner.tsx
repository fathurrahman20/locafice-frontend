import { useParams } from "react-router";
import { useOffice } from "../../hooks/office";
import { baseImageUrl } from "../../service/api-client";

export default function Banner() {
  const { slug } = useParams<{ slug: string }>();
  const { data: office, isLoading } = useOffice(slug as string);
  return (
    <div
      id="Banner"
      className="relative w-full h-[240px] flex items-center shrink-0 overflow-hidden -mb-[50px]">
      <h1 className="text-center mx-auto font-extrabold text-[40px] leading-[60px] text-white mb-5 z-20">
        Start Booking {isLoading && <span className="animate-pulse">...</span>}{" "}
        {office?.data.name}
      </h1>
      <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
      <img
        src={
          isLoading
            ? "assets/images/thumbnails/thumbnail-details-4.png isLoading ?"
            : `${baseImageUrl}/${office?.data.thumbnail}`
        }
        className="absolute w-full h-full object-cover object-top"
        alt=""
      />
    </div>
  );
}
