export default function Footer() {
  return (
    <div
      className="relative h-[400px] sm:h-[600px] lg:h-[800px] max-h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+400px)] sm:h-[calc(100vh+600px)] lg:h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[400px] sm:h-[600px] lg:h-[800px] sticky top-[calc(100vh-400px)] sm:top-[calc(100vh-600px)] lg:top-[calc(100vh-800px)]">
          <div className="bg-neutral-900 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 h-full w-full flex flex-col justify-between">
            <div className="flex shrink-0 gap-8 sm:gap-12 lg:gap-20">
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Основные темы</h3>
                <p className="text-white text-sm sm:text-base">Дружба и любовь</p>
                <p className="text-white text-sm sm:text-base">Одиночество поэта</p>
                <p className="text-white text-sm sm:text-base">Красота и время</p>
                <p className="text-white text-sm sm:text-base">Свобода духа</p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Сборники</h3>
                <p className="text-white text-sm sm:text-base">«Струна» (1962)</p>
                <p className="text-white text-sm sm:text-base">«Озноб» (1968)</p>
                <p className="text-white text-sm sm:text-base">«Метель» (1977)</p>
                <p className="text-white text-sm sm:text-base">«Тайна» (1983)</p>
              </div>
              <div className="flex flex-col gap-1 sm:gap-2">
                <h3 className="mb-1 sm:mb-2 uppercase text-neutral-400 text-xs sm:text-sm">Награды</h3>
                <p className="text-white text-sm sm:text-base">Государственная премия</p>
                <p className="text-white text-sm sm:text-base">Пушкинская премия</p>
                <p className="text-white text-sm sm:text-base">Орден «За заслуги»</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 sm:gap-0">
              <h1 className="text-[12vw] sm:text-[11vw] lg:text-[10vw] leading-[0.8] mt-4 sm:mt-6 lg:mt-10 text-white font-bold tracking-tight">
                АХМАДУЛИНА
              </h1>
              <p className="text-white text-sm sm:text-base opacity-50">1937 — 2010</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}