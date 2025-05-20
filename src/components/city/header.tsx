// import { useParams } from "react-router";
// import { useCity } from "../../hooks/city";
import { baseImageUrl } from "../../service/api-client";
import type { City } from "../../types/type";

export default function Header({ city }: { city?: City }) {
  return (
    <header className="flex flex-col w-full">
      <section id="Hero-Banner" className="relative flex h-[434px]">
        <div
          id="Hero-Text"
          className="relative flex flex-col w-full max-w-[650px] h-fit rounded-[30px] border border-[#E0DEF7] p-10 gap-[30px] bg-white mt-[70px] ml-[calc((100%-1130px)/2)] z-10">
          <h1 className="font-extrabold text-[50px] leading-[60px]">
            Great Office in <br />{" "}
            <span className="text-[#0D903A]">{city?.name} City</span>
          </h1>
          <p className="text-lg leading-8 text-[#000929]">
            Kantor yang tepat dapat memberikan impact pekerjaan menjadi lebih
            baik dan sehat dalam tumbuhkan karir.
          </p>
        </div>
        <div
          id="Hero-Image"
          className="absolute right-0 w-[calc(100%-((100%-1130px)/2)-305px)] h-[434px] rounded-bl-[40px] overflow-hidden">
          <img
            src={`${baseImageUrl}/${city?.photo}`}
            className="w-full h-full object-cover"
            alt="hero background"
          />
        </div>
      </section>
    </header>
  );
}
