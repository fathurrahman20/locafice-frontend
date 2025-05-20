import { Link } from "react-router";
import { useOffice } from "../../hooks/office";

export default function OfficeDetail({ slug }: { slug: string }) {
  const { data: office, isLoading } = useOffice(slug);

  return (
    <section
      id="Details"
      className="relative flex max-w-[1130px] mx-auto gap-[30px] mb-20 z-10">
      <div className="flex flex-col w-full rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
        <p className="w-fit rounded-full p-[6px_16px] bg-[#207ECA] font-bold text-sm leading-[21px] text-[#F7F7FD]">
          Popular
        </p>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-extrabold text-[32px] leading-[44px]">
              {office?.data.name}
              {isLoading && (
                // show loading skeleton
                <span className="animate-pulse">...</span>
              )}
            </h1>
            <div className="flex items-center gap-[6px] mt-[10px]">
              <img
                src="/assets/images/icons/location.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <p className="font-semibold">{office?.data.city.name}</p>
            </div>
          </div>
        </div>
        <p className="leading-[30px]">{office?.data.about}</p>
        <hr className="border-[#F6F5FD]" />
        <div className="flex flex-col gap-[6px]">
          <h2 className="font-bold">Office Address</h2>
          <p>{office?.data.name}</p>
          <p>{office?.data.address}</p>
        </div>
        <div className="overflow-hidden w-full h-[280px]">
          <div
            id="my-map-display"
            className="h-full w-full max-w-[none] bg-none">
            <iframe
              className="h-full w-full border-0"
              frameBorder={0}
              src={`https://www.google.com/maps/embed/v1/place?q=${office?.data.city.name},&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}
            />
          </div>
        </div>
      </div>
      <div className="w-[392px] flex flex-col shrink-0 gap-[30px]">
        <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
          <div>
            <p className="font-extrabold text-[32px] leading-[48px] text-[#207ECA]">
              Rp {office?.data.price.toLocaleString("id-ID")}
            </p>
            <p className="font-semibold mt-1">
              For {office?.data.duration} days working
            </p>
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex flex-col gap-5">
            {office?.data.benefits.map((benefit) => (
              <div key={benefit.id} className="flex items-center gap-3">
                <img
                  src="/assets/images/icons/verify.svg"
                  className="w-[30px] h-[30px]"
                  alt="icon"
                />
                <p className="font-semibold leading-[28px]">{benefit.name}</p>
              </div>
            ))}
          </div>
          <hr className="border-[#F6F5FD]" />
          <div className="flex flex-col gap-[14px]">
            <Link
              to={`/office/${office?.data.slug}/book`}
              className="flex items-center justify-center w-full rounded-full p-[16px_26px] gap-3 bg-[#207ECA] font-bold text-[#F7F7FD]">
              <img
                src="/assets/images/icons/slider-horizontal-white.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <span>Book This Office</span>
            </Link>
            <button className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[16px_26px] gap-3 bg-white font-semibold">
              <img
                src="/assets/images/icons/save-add.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <span>Save for Later</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
