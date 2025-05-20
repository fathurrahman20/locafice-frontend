import OfficeCard, { OfficeCardSkeleton } from "../components/home/office-card";
import { useOffices } from "../hooks/office";

export default function OfficeWrapper() {
  const { data: OfficeData, isLoading } = useOffices();
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
        {OfficeData?.data.map((office) => (
          <OfficeCard key={office.id} office={office} />
        ))}
        {isLoading &&
          [1, 2, 3].map((index) => <OfficeCardSkeleton key={index} />)}
      </div>
    </section>
  );
}
