import { Swiper, SwiperSlide } from "swiper/react";
import { useCities } from "../hooks/city";
import CityCard, { CityCardSkeleton } from "../components/home/city-card";

export default function CityWrapper() {
  const { data: cityData, isLoading } = useCities();
  return (
    <section id="Cities" className="flex flex-col gap-[30px] mt-[100px]">
      <div className="w-full max-w-[1130px] mx-auto flex items-center justify-between">
        <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
          You Can Choose <br />
          Our Favorite Cities
        </h2>
        <a href="#" className="rounded-full py-3 px-5 bg-white font-bold">
          Explore All City
        </a>
      </div>
      <div className="swiper w-full">
        <div className="swiper-wrapper">
          <Swiper
            direction="horizontal"
            spaceBetween={30}
            slidesPerView="auto"
            slidesOffsetAfter={30}
            slidesOffsetBefore={30}>
            {cityData?.data.map((city) => (
              <SwiperSlide
                key={city.id}
                className="!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]">
                <CityCard city={city} />
              </SwiperSlide>
            ))}

            {isLoading &&
              [1, 2, 3, 4].map((index) => (
                <SwiperSlide
                  key={index}
                  className="!w-fit first-of-type:pl-[calc((100%-1130px-60px)/2)] last-of-type:pr-[calc((100%-1130px-60px)/2)]">
                  <CityCardSkeleton />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
