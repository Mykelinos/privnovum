import ProductCard from "@/components/product/ProductCard";

const products = [
  {
    id: "prod_01",
    name: "Obsidian Hoodie",
    price: 180,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop",
    tagId: "PZ/01",
    material: "100% Cotone Heavyweight",
    fit: "Oversized",
  },
  {
    id: "prod_02",
    name: "Carbon Cargo Pants",
    price: 220,
    image: "https://images.unsplash.com/photo-1517423568366-8b83523034fd?q=80&w=800&auto=format&fit=crop",
    tagId: "PZ/02",
    material: "Nylon Ripstop",
    fit: "Relaxed",
  },
  {
    id: "prod_03",
    name: "Void T-Shirt",
    price: 95,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=800&auto=format&fit=crop",
    tagId: "PZ/03",
    material: "Cotone Organico 250gsm",
    fit: "Boxy",
  },
  {
    id: "prod_04",
    name: "Asphalt Tech Jacket",
    price: 340,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop",
    tagId: "PZ/04",
    material: "Gore-Tex Pro",
    fit: "Regolare",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden border-b tag-border">
        <div className="absolute inset-0 bg-[#050505] z-0">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=2000&auto=format&fit=crop')", backgroundSize: "cover", backgroundPosition: "center", filter: "grayscale(100%)" }}></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <div className="border tag-border px-3 py-1 mb-6">
            <span className="tag-label text-gray-400">Collezione 01</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6 leading-tight">
            Redefining <br/> The Underground
          </h1>
          <p className="text-gray-400 max-w-lg mb-10 text-lg">
            Pezzi unici, materiali tecnici e un&apos;estetica brutalista. Esplora la nuova collezione limitata.
          </p>
          <a href="#collection" className="bg-white text-black px-8 py-4 uppercase font-bold tracking-widest hover:bg-gray-200 transition-colors">
            Scopri i capi
          </a>
        </div>
        
        <div className="absolute bottom-8 left-8 hidden md:block">
          <p className="tag-label text-gray-500">EST. 2026</p>
        </div>
        <div className="absolute bottom-8 right-8 hidden md:block">
          <p className="tag-label text-gray-500">TOKYO / MILANO</p>
        </div>
      </section>

      <section id="collection" className="container mx-auto px-4 pb-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b tag-border pb-4">
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-tighter">Archivio</h2>
            <p className="text-gray-500 mt-2">Disponibilita&apos; limitata. Nessun restock.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <span className="tag-label px-2 py-1 border tag-border text-gray-400">4 Pezzi Totali</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </div>
  );
}