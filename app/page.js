// 

import CheckoutMovies from "@/components/Homepage/CheckoutMovies/CheckoutMovies";
import Documentary from "@/components/Homepage/Documentary/Documentary";
import Headers from "@/components/Homepage/Headers/Headers";
import MovieNow from "@/components/Homepage/MovieNow/MovieNow";
import PhotoGallery from "@/components/Homepage/PhotoGallery/PhotoGallery";

export default function Home() {
  return (
    <section className="containerExtra">
      <Headers />
      <MovieNow />
      <CheckoutMovies />
      <Documentary />
      <PhotoGallery />
    </section>
  );
}
