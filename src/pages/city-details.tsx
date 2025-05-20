import { useParams } from "react-router";
import Header from "../components/city/header";
import Layout from "../components/layout";
import { useCity } from "../hooks/city";
import OfficeCard, { OfficeCardSkeleton } from "../components/home/office-card";

export default function CityDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { data: city, isLoading } = useCity(slug as string);
  return (
    <Layout>
      <Header city={city?.data} />
      <section
        id="Fresh-Space"
        className="flex flex-col gap-[30px] w-full max-w-[1130px] mx-auto mt-[70px] mb-[120px]">
        <h2 className="font-bold text-[32px] leading-[48px] text-nowrap">
          Browse Offices
        </h2>
        <div className="grid grid-cols-3 gap-[30px]">
          {city?.data.officeSpaces.map((office) => (
            <OfficeCard key={office.id} office={office} />
          ))}
          {city?.data.officeSpaces.length === 0 && (
            <p className="text-2xl font-bold text-center col-span-3 mt-9">
              No Office Available
            </p>
          )}
          {isLoading &&
            [1, 2, 3].map((index) => <OfficeCardSkeleton key={index} />)}
        </div>
      </section>
    </Layout>
  );
}
