// 

import CheckoutMovies from "@/components/Homepage/CheckoutMovies/CheckoutMovies";
import Headers from "@/components/Homepage/Headers/Headers";
import MovieNow from "@/components/Homepage/MovieNow/MovieNow";

export default function Home() {
  return (
    <section>
      <Headers />
      <MovieNow/>
      <CheckoutMovies/>
     
    </section>
  );
}
