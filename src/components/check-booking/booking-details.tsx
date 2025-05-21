import { useForm } from "react-hook-form";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { viewBookingSchema } from "../../types/validation-booking";
import { useViewBookingTransaction } from "../../hooks/booking";
import { baseImageUrl } from "../../service/api-client";

export default function BookingDetail() {
  const { mutate, isPending, data, error, isError } =
    useViewBookingTransaction();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<z.infer<typeof viewBookingSchema>>({
    resolver: zodResolver(viewBookingSchema),
    defaultValues: {
      booking_trx_id: "",
      phone_number: "",
    },
  });

  function onSubmit(values: z.infer<typeof viewBookingSchema>) {
    mutate(values);
  }

  if (isError) {
    if (error.status === 404) {
      console.log(`Error nich: ${error.status}`);
    }
  }

  console.log(`Data: ${JSON.stringify(data)}`);
  return (
    <>
      <div
        id="Banner"
        className="relative w-full h-[240px] flex items-center shrink-0 overflow-hidden -mb-[50px]">
        <h1 className="text-center mx-auto font-extrabold text-[40px] leading-[60px] text-white mb-5 z-20">
          View Your Booking Details
        </h1>
        <div className="absolute w-full h-full bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,#000000_91.83%)] z-10" />
        <img
          src="/assets/images/thumbnails/thumbnail-details-5.png"
          className="absolute object-cover object-top w-full h-full"
          alt=""
        />
      </div>
      <section
        id="Check-Booking"
        className="relative flex flex-col w-[930px] shrink-0 gap-[30px] mx-auto mb-[100px] z-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-end rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[16px] bg-white">
          <div className="flex flex-col w-full gap-2">
            <label className="font-semibold">Booking TRX ID</label>
            <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#207ECA]">
              <img
                src="/assets/images/icons/receipt-text-black.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <input
                type="text"
                id="booking-trx-id"
                className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                placeholder="Write your booking trx id"
                {...register("booking_trx_id")}
              />
            </div>
            {errors.booking_trx_id && (
              <span className="text-red-500">
                Booking Transaction ID is required
              </span>
            )}
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="font-semibold">Phone Number</label>
            <div className="flex items-center rounded-full border border-[#000929] px-5 gap-[10px] transition-all duration-300 focus-within:ring-2 focus-within:ring-[#207ECA]">
              <img
                src="/assets/images/icons/call-black.svg"
                className="w-6 h-6"
                alt="icon"
              />
              <input
                type="tel"
                id="phone"
                className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#000929]"
                placeholder="Write your valid number"
                {...register("phone_number")}
              />
            </div>
            {errors.phone_number && (
              <span className="text-red-500">Phone number is required</span>
            )}
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="flex items-center justify-center rounded-full p-[12px_30px] gap-3 bg-[#207ECA] font-bold text-[#F7F7FD]">
            <span className="text-nowrap">
              {isPending ? "Loading..." : "Check Booking"}
            </span>
          </button>
        </form>
        {isError && error.status === 404 && (
          <div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] bg-white">
            <img
              src="/assets/images/icons/404.svg"
              className="w-[30%] mx-auto"
              alt="booking not found"
            />
            <p className="font-bold text-xl leading-[30px] text-center -mt-10 mb-6">
              Booking not found
            </p>
          </div>
        )}
        {data && (
          <div id="Result" className="grid grid-cols-2 gap-[30px]">
            <div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
              <div className="flex items-center gap-4">
                <div className="flex shrink-0 w-[140px] h-[100px] rounded-[20px] overflow-hidden">
                  <img
                    src={`${baseImageUrl}/${data.office.thumbnail}`}
                    className="object-cover w-full h-full"
                    alt="thumbnail"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-xl leading-[30px]">
                    {data.office.name}
                  </p>
                  <div className="flex items-center gap-[6px]">
                    <img
                      src="/assets/images/icons/location.svg"
                      className="w-6 h-6"
                      alt="icon"
                    />
                    <p className="font-semibold">{data.office.city.name}</p>
                  </div>
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <div className="flex flex-col gap-4">
                <h2 className="font-bold">Customer Details</h2>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Full Name</h3>
                  <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                    <img
                      src="/assets/images/icons/security-user-black.svg"
                      className="w-6 h-6"
                      alt="icon"
                    />
                    <p className="font-semibold">{data.name}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Phone Number</h3>
                  <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                    <img
                      src="/assets/images/icons/call-black.svg"
                      className="w-6 h-6"
                      alt="icon"
                    />
                    <p className="font-semibold">{data.phone_number}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Started At</h3>
                  <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                    <img
                      src="/assets/images/icons/calendar-black.svg"
                      className="w-6 h-6"
                      alt="icon"
                    />
                    <p className="font-semibold">{data.started_at}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">Ended At</h3>
                  <div className="flex items-center rounded-full px-5 py-3 gap-[10px] bg-[#F7F7FD]">
                    <img
                      src="/assets/images/icons/calendar-black.svg"
                      className="w-6 h-6"
                      alt="icon"
                    />
                    <p className="font-semibold">{data.ended_at}</p>
                  </div>
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <div className="flex items-center gap-3">
                <img
                  src="/assets/images/icons/shield-tick.svg"
                  className="w-[30px] h-[30px]"
                  alt="icon"
                />
                <p className="font-semibold leading-[28px]">
                  Privasi Anda aman bersama kami.
                </p>
              </div>
            </div>
            <div className="flex flex-col h-fit shrink-0 rounded-[20px] border border-[#E0DEF7] p-[30px] gap-[30px] bg-white">
              <h2 className="font-bold">Order Details</h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Status Pembayaran</p>
                  <p
                    className={`rounded-full w-fit p-[6px_16px] ${
                      data.is_paid ? "bg-[#207ECA]" : "bg-[#FF852D]"
                    } font-bold text-sm leading-[21px] text-[#F7F7FD]`}>
                    {data.is_paid ? "SUCCESS" : "Pending"}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Booking TRX ID</p>
                  <p className="font-bold">{data.booking_trx_id}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Duration</p>
                  <p className="font-bold">{data.duration} Days Working</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Total Amount</p>
                  <p className="font-bold text-[22px] leading-[33px] text-[#207ECA]">
                    Rp {data.total_amount.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <h2 className="font-bold">Bonus Packages For You</h2>
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/assets/images/icons/coffee.svg"
                    className="w-[34px] h-[34px]"
                    alt="icon"
                  />
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Extra Snacks</p>
                    <p className="text-sm leading-[21px]">Work-Life Balance</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/assets/images/icons/group.svg"
                    className="w-[34px] h-[34px]"
                    alt="icon"
                  />
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-bold">Free Move</p>
                    <p className="text-sm leading-[21px]">Anytime 24/7</p>
                  </div>
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <a
                href=""
                className="flex items-center justify-center w-full rounded-full border border-[#000929] p-[12px_20px] gap-3 bg-white font-semibold">
                <img
                  src="/assets/images/icons/call-black.svg"
                  className="w-6 h-6"
                  alt="icon"
                />
                <span>Call Customer Service</span>
              </a>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
