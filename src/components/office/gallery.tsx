import { Swiper, SwiperSlide } from "swiper/react";
import { useOffice } from "../../hooks/office";
import { baseImageUrl } from "../../service/api-client";

export default function Gallery({ slug }: { slug: string }) {
  const { data: office } = useOffice(slug);

  return (
    <section id="Gallery" className="-mb-[50px]">
      <div className="swiper w-full">
        <Swiper
          direction="horizontal"
          spaceBetween={10}
          slidesPerView="auto"
          slidesOffsetAfter={10}
          slidesOffsetBefore={10}>
          <SwiperSlide className="!w-fit">
            <div className="w-[700px] h-[550px] overflow-hidden">
              <img
                src={`${baseImageUrl}/${office?.data.thumbnail}`}
                className="w-full h-full object-cover"
                alt="thumbnail"
              />
            </div>
          </SwiperSlide>
          {office?.data.photos.map((officePhotos) => (
            <SwiperSlide key={officePhotos.id} className="!w-fit">
              <div className="w-[700px] h-[550px] overflow-hidden">
                <img
                  src={`${baseImageUrl}/${officePhotos.photo}`}
                  className="w-full h-full object-cover"
                  alt="thumbnail"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
