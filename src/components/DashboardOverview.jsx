"use client";

export default function DashboardOverview() {
  return (
    <section className="py-24 overflow-hidden relative border-t border-slate-800/50 bg-slate-950">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/5 blur-[150px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">تحكم كامل في <span className="text-primary-500">متجرك</span> من هاتفك</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">أدر تجارتك بالكامل، تتبع المبيعات، وعدّل المنتجات بكل سهولة من خلال لوحة تحكم احترافية وسريعة.</p>
        </div>
        
        <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center mt-20">
          <div className="w-full relative overflow-visible">
            <div 
              className="flex flex-row items-start justify-start md:justify-center gap-6 lg:gap-16 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-12 md:pb-0 px-8 md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* Phone Mockup 1 */}
              <div className="relative shrink-0 snap-start h-[580px]">
                 {/* Annotation 1: Box and Line */}
                 <div className="absolute -left-16 md:-left-32 top-10 z-30 pointer-events-none w-56 md:w-72">
                    <div className="bg-white border-[3px] border-black p-3 md:p-6 rounded-[2.5rem] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-center transform -rotate-2">
                       <p className="text-black font-extrabold text-sm md:text-xl leading-tight">full product customization</p>
                       <p className="text-gray-700 mt-1 md:mt-2 text-[10px] md:text-lg">Your paragraph text</p>
                    </div>
                    {/* Pointer Line 1 */}
                    <svg className="absolute top-1/2 left-full w-12 md:w-32 h-24 overflow-visible pointer-events-none" style={{ filter: 'drop-shadow(2px 2px 0 black)' }}>
                       <path d="M0 0 L 60 40" className="md:hidden" stroke="black" strokeWidth="4" fill="none" />
                       <path d="M0 0 L 160 80" className="hidden md:block" stroke="black" strokeWidth="4" fill="none" />
                    </svg>
                 </div>

                 {/* Annotation 2: Plain Text and Line */}
                 <div className="absolute -left-12 bottom-20 z-30 pointer-events-none">
                    <p className="text-white font-extrabold text-lg md:text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">ferfeferf</p>
                    {/* Pointer Line 2 */}
                    <svg className="absolute top-1/2 left-full w-12 md:w-40 h-24 overflow-visible pointer-events-none" style={{ filter: 'drop-shadow(2px 2px 0 black)' }}>
                       <path d="M0 0 L 80 80" className="md:hidden" stroke="black" strokeWidth="4" fill="none" />
                       <path d="M0 0 L 120 120" className="hidden md:block" stroke="black" strokeWidth="4" fill="none" />
                    </svg>
                 </div>

                 <div className="w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-10 border-slate-800 shadow-2xl shadow-primary-500/10 overflow-hidden relative z-10 transition-transform duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80" 
                      alt="Dashboard View 1" 
                      className="w-full h-full object-cover"
                    />
                 </div>
              </div>

              {/* Phone Mockup 2 */}
              <div className="relative shrink-0 snap-start">
                 <div className="w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-10 border-slate-800 shadow-2xl shadow-emerald-500/10 overflow-hidden relative z-10 transition-transform duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" 
                      alt="Dashboard View 2" 
                      className="w-full h-full object-cover"
                    />
                 </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
