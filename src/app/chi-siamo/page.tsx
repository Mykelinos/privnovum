export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <div className="border-l-4 border-white pl-6 mb-16">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-4">Chi Siamo</h1>
        <p className="tag-label text-gray-400">La Filosofia dietro NOVUM</p>
      </div>

      <div className="space-y-12 text-lg text-gray-300">
        <section>
          <h2 className="text-2xl font-bold text-white uppercase mb-4">Oltre la Moda</h2>
          <p className="leading-relaxed">
            NOVUM non è solo un brand, è un esperimento sartoriale. Nato nelle strade ma progettato con la precisione di un atelier, cerchiamo di colmare il divario tra l'abbigliamento utilitaristico e l'alta moda. La nostra estetica dark non è una semplice scelta cromatica, ma una tela vuota su cui esaltare forme, silhouette e texture.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y tag-border my-12">
          <div className="border tag-border p-6 bg-[#0a0a0a]">
            <h3 className="tag-label text-white mb-4 border-b border-[#333] pb-2">01 / Artigianalità</h3>
            <p className="text-sm text-gray-400">Ogni capo è cucito e rifinito a mano. Non produciamo in massa, ma creiamo lotti limitatissimi per garantire un controllo qualità maniacale.</p>
          </div>
          <div className="border tag-border p-6 bg-[#0a0a0a]">
            <h3 className="tag-label text-white mb-4 border-b border-[#333] pb-2">02 / Esclusività</h3>
            <p className="text-sm text-gray-400">Il concetto di "Pezzo Unico". Crediamo che i vestiti debbano avere un'identità. Ogni etichetta è numerata a mano per certificare l'autenticità.</p>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white uppercase mb-4">Materiali Tecnici</h2>
          <p className="leading-relaxed">
            Siamo ossessionati dai tessuti. Utilizziamo Nylon Ripstop, Gore-Tex e cotone organico heavyweight. La nostra ricerca si concentra su materiali in grado di resistere all'usura urbana pur mantenendo un drappeggio impeccabile e una struttura architettonica.
          </p>
        </section>
      </div>
    </div>
  );
}

