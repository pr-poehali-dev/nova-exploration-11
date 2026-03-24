export default function Featured() {
  return (
    <div id="biography" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Белла Ахмадулина"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-widest text-neutral-500">Биография</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight font-light">
          Белла Ахатовна Ахмадулина — поэт-шестидесятник, чей голос стал символом оттепели и свободной мысли.
        </p>
        <div className="flex flex-col gap-4 mb-10">
          <div className="flex items-start gap-4">
            <span className="text-neutral-400 text-sm font-mono mt-1">1937</span>
            <p className="text-neutral-700">Родилась в Москве. Детство прошло в послевоенной столице.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-neutral-400 text-sm font-mono mt-1">1960</span>
            <p className="text-neutral-700">Окончила Литературный институт. Дружба с Евтушенко, Вознесенским, Окуджавой.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-neutral-400 text-sm font-mono mt-1">1962</span>
            <p className="text-neutral-700">Первый сборник «Струна» — триумфальный дебют в большой поэзии.</p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-neutral-400 text-sm font-mono mt-1">2010</span>
            <p className="text-neutral-700">Ушла из жизни, оставив более 20 книг и неповторимый поэтический стиль.</p>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-widest">
          Читать стихи
        </button>
      </div>
    </div>
  );
}
