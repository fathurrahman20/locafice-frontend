import { benefitList } from "../../data/benefit-list";

export default function Benefits() {
  return (
    <section
      id="Benefits"
      className="flex items-center justify-center w-[1015px] mx-auto gap-[100px] mt-[100px]">
      <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
        We Might Good <br />
        For Your Business
      </h2>
      <div className="grid grid-cols-2 gap-[30px]">
        {benefitList.map((benefit, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex items-center justify-center shrink-0 w-[70px] h-[70px] rounded-[23px] bg-white overflow-hidden">
              <img
                src={benefit.icon}
                className="w-[34px] h-[34px]"
                alt="icon"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <p className="font-bold text-lg leading-[27px]">
                {benefit.title}
              </p>
              <p className="text-sm leading-[24px]">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
