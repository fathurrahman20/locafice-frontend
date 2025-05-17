// import OfficeCard from "../components/home/office-card";

export default function OfficeWrapper() {
  return (
    <section
      id="Fresh-Space"
      className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[100px] mb-[120px]">
      <h2 className="font-bold text-[32px] leading-[48px] text-nowrap text-center">
        Browse Our Fresh Space.
        <br />
        For Your Better Productivity.
      </h2>
      <div className="grid grid-cols-3 gap-[30px]">
        {/* <OfficeCard /> */}
        <a href="details.html" className="card">
          <div className="flex flex-col rounded-[20px] border border-[#E0DEF7] bg-white overflow-hidden">
            <div className="thumbnail-container relative w-full h-[200px]">
              <p className="absolute top-5 left-5 w-fit rounded-full p-[6px_16px] bg-[#207ECA] font-bold text-sm leading-[21px] text-[#F7F7FD]">
                Popular
              </p>
              <img
                src="assets/images/thumbnails/thumbnails-1.png"
                className="w-full h-full object-cover"
                alt="thumbnails"
              />
            </div>
            <div className="card-detail-container flex flex-col p-5 pb-[30px] gap-4">
              <h3 className="line-clamp-2 font-bold text-[22px] leading-[36px] h-[72px]">
                Angga Park Central Master Silicon Valley Star Class
              </h3>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-xl leading-[30px]">
                  Rp 18.560.000
                </p>
                <div className="flex items-center justify-end gap-[6px]">
                  <p className="font-semibold">20 days</p>
                  <img
                    src="assets/images/icons/clock.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-end gap-[6px]">
                  <img
                    src="assets/images/icons/location.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                  <p className="font-semibold">Jakarta Pusat</p>
                </div>
                <div className="flex items-center justify-end gap-[6px]">
                  <p className="font-semibold">4.5/5</p>
                  <img
                    src="assets/images/icons/Star 1.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                </div>
              </div>
              <hr className="border-[#F6F5FD]" />
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-end gap-[6px]">
                  <img
                    src="assets/images/icons/wifi.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                  <p className="font-semibold">Fast-Connection</p>
                </div>
                <div className="flex items-center justify-end gap-[6px]">
                  <img
                    src="assets/images/icons/security-user.svg"
                    className="w-6 h-6"
                    alt="icon"
                  />
                  <p className="font-semibold">Secure 100%</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
