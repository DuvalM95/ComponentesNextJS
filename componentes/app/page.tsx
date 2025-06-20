import Header from "../Header";
import PlayerCard from "../PlayerCard";
import Footer from "../Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <section className="p-8 flex-1">
        <h2 className="text-2xl font-semibold mb-4">Bienvenido a la página de baloncesto</h2>
        <p className="text-gray-700 mb-8">¡Explora noticias, jugadores y partidos!</p>
        <h3 className="text-xl font-bold mb-4">Jugadores Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <PlayerCard name="LeBron James" team="Los Angeles Lakers" img="https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg" />
          <PlayerCard name="Stephen Curry" team="Golden State Warriors" img="https://hips.hearstapps.com/hmg-prod/images/stephen-curry-of-the-golden-state-warriors-poses-for-the-news-photo-1741984248.pjpeg?crop=0.930xw:0.621xh;0,0.0760xh&resize=1200:*" />
          <PlayerCard name="Giannis Antetokounmpo" team="Milwaukee Bucks" img="https://upload.wikimedia.org/wikipedia/commons/9/9c/Giannis_Antetokounmpo_%2851915153421%29_%28cropped%29.jpg" />
        </div>
      </section>
      <Footer />
    </main>
  );
}