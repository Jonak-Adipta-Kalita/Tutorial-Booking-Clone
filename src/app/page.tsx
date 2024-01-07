import SearchForm from "@/components/SearchForm";
import { trending_data } from "@/data/trending";

export default function Home() {
  return (
    <main className="bg-[#013B94] xl:pb-2 xl:h-screen">
      <section className="max-w-7xl mx-auto p-6">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
          Find your Next Stay
        </h2>
        <h3 className="text-white py-5 text-xl">
          Search low prices on hostels, homes and much more...
        </h3>
      </section>
      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        <SearchForm />
      </section>
      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg xl:rounded-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destination</h3>
          <p className="font-light">
            Most popular choices for traveller from around the world
          </p>
        </div>
        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
              <img
                src={item.src}
                alt=""
                className="w-80 h-72 object-cover rounded-lg pb-2"
                loading="lazy"
              />
              <p className="font-bold">{item.title}</p>
              <p>{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
