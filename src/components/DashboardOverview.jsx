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
        
        <div className="relative mt-20">
          <div className="w-full relative overflow-x-auto hide-scrollbar pb-16 md:pb-8 pt-12 md:pt-16 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex snap-x snap-mandatory">
            <div 
              className="flex flex-row items-center w-max min-w-full before:content-[''] after:content-[''] before:m-auto after:m-auto before:hidden lg:before:block after:hidden lg:after:block before:min-w-[4rem] lg:before:min-w-[14rem] after:min-w-[4rem] lg:after:min-w-[14rem]"
            >
              {/* Phone Mockup 1 (Slide 1) */}
              <div className="w-[100vw] sm:w-[500px] lg:w-auto flex justify-center lg:justify-end shrink-0 snap-center lg:pl-12 py-8">
                <div className="relative w-[280px] h-[580px]">
                 {/* Annotation 1: Point 1 (Top-Right) */}
                 <div className="absolute -right-20 md:-right-40 top-8 z-30 pointer-events-none w-52 md:w-64">
                    <div className="bg-white border-[3px] border-black p-3 md:p-4 rounded-[1.5rem] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-right transform rotate-2">
                       <h4 className="text-black font-extrabold text-sm md:text-lg leading-tight mb-1">التحليلات</h4>
                       <p className="text-gray-700 text-[10px] md:text-xs xl:text-sm font-medium">تابع كل عمليات البيع و المرتجعات و الاحصائيات بشكل دقيق</p>
                    </div>
                    {/* Pointer Line */}
                    <svg className="absolute top-1/2 right-full w-12 md:w-16 h-16 overflow-visible pointer-events-none -translate-x-1 md:-translate-x-2" style={{ filter: 'drop-shadow(2px 2px 0 black)' }}>
                       <path d="M0 0 C -15 10, -25 -10, -35 -5" className="md:hidden" stroke="black" strokeWidth="3" fill="none" />
                       <path d="M0 0 C -25 20, -45 -20, -55 -10" className="hidden md:block" stroke="black" strokeWidth="4" fill="none" />
                       <circle cx="-35" cy="-5" r="4" className="md:hidden" fill="black" />
                       <circle cx="-55" cy="-10" r="6" className="hidden md:block" fill="black" />
                    </svg>
                 </div>

                 {/* Annotation 2: Point 2 (Middle-Left) */}
                 <div className="absolute -left-24 md:-left-48 top-1/2 -translate-y-1/2 z-30 pointer-events-none w-56 md:w-72">
                    <div className="bg-white border-[3px] border-black p-3 md:p-4 rounded-[1.5rem] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-right transform -rotate-2">
                       <h4 className="text-black font-extrabold text-sm md:text-lg leading-tight mb-1">خصائص احترافية</h4>
                       <p className="text-gray-700 text-[10px] md:text-xs xl:text-sm font-medium">زد ارباحك بتعيين منتجات بخصائص احترافية (اقتراح منتجات اضافية, تعيين حزم منتجات)</p>
                    </div>
                    {/* Pointer Line */}
                    <svg className="absolute top-1/2 left-full w-12 md:w-16 h-16 overflow-visible pointer-events-none translate-x-1 md:translate-x-2" style={{ filter: 'drop-shadow(2px 2px 0 black)' }}>
                       <path d="M0 0 C 15 10, 25 -10, 35 5" className="md:hidden" stroke="black" strokeWidth="3" fill="none" />
                       <path d="M0 0 C 25 20, 45 -20, 55 10" className="hidden md:block" stroke="black" strokeWidth="4" fill="none" />
                       <circle cx="35" cy="5" r="4" className="md:hidden" fill="black" />
                       <circle cx="55" cy="10" r="6" className="hidden md:block" fill="black" />
                    </svg>
                 </div>

                 {/* Annotation 3: Point 3 (Bottom-Right) */}
                 <div className="absolute -right-20 md:-right-40 bottom-16 z-30 pointer-events-none w-52 md:w-72">
                    <div className="bg-white border-[3px] border-black p-3 md:p-4 rounded-[1.5rem] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-right transform rotate-1">
                       <h4 className="text-black font-extrabold text-sm md:text-lg leading-tight mb-1">تحكم شامل</h4>
                       <p className="text-gray-700 text-[10px] md:text-xs xl:text-sm font-medium">تحكم فى كل تفاصيل الموقع من الشكل الى الكتابة</p>
                    </div>
                    {/* Pointer Line */}
                    <svg className="absolute top-1/2 right-full w-12 md:w-16 h-16 overflow-visible pointer-events-none -translate-x-1 md:-translate-x-2" style={{ filter: 'drop-shadow(2px 2px 0 black)' }}>
                       <path d="M0 0 C -15 -10, -25 10, -35 5" className="md:hidden" stroke="black" strokeWidth="3" fill="none" />
                       <path d="M0 0 C -25 -20, -45 20, -55 10" className="hidden md:block" stroke="black" strokeWidth="4" fill="none" />
                       <circle cx="-35" cy="5" r="4" className="md:hidden" fill="black" />
                       <circle cx="-55" cy="10" r="6" className="hidden md:block" fill="black" />
                    </svg>
                 </div>

                 <div className="w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-800 shadow-2xl shadow-primary-500/10 overflow-hidden relative z-10 transition-transform duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
                    <img 
                      src="/dashboard1.png" 
                      alt="Dashboard View 1" 
                      className="w-full h-full object-contain relative z-0"
                    />
                 </div>
                </div>
              </div>

              {/* Phone Mockup 2 (Slide 2) */}
              <div className="w-[100vw] sm:w-[500px] lg:w-auto flex justify-center lg:justify-start shrink-0 snap-center lg:pr-12 py-8">
                <div className="relative w-[280px] h-[580px]">
                 {/* Annotation 4: Point 4 (Top-Left) */}
                 <div className="absolute -left-24 md:-left-48 top-20 z-30 pointer-events-none w-52 md:w-64">
                    <div className="bg-white border-[3px] border-black p-3 md:p-4 rounded-[1.5rem] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-right transform -rotate-1">
                       <h4 className="text-black font-extrabold text-sm md:text-lg leading-tight mb-1">اكواد الخصم</h4>
                       <p className="text-gray-700 text-[10px] md:text-xs xl:text-sm font-medium">عين اكواد خصم و ميزات اضافية لزيادة ارباحك</p>
                    </div>
                    {/* Pointer Line */}
                    <svg className="absolute top-1/2 left-full w-12 md:w-16 h-16 overflow-visible pointer-events-none translate-x-1 md:translate-x-2" style={{ filter: 'drop-shadow(2px 2px 0 black)' }}>
                       <path d="M0 0 C 15 10, 25 -10, 35 -5" className="md:hidden" stroke="black" strokeWidth="3" fill="none" />
                       <path d="M0 0 C 25 20, 45 -20, 55 -10" className="hidden md:block" stroke="black" strokeWidth="4" fill="none" />
                       <circle cx="35" cy="-5" r="4" className="md:hidden" fill="black" />
                       <circle cx="55" cy="-10" r="6" className="hidden md:block" fill="black" />
                    </svg>
                 </div>

                 {/* Annotation 5: Point 5 (Bottom-Right) */}
                 <div className="absolute -right-20 md:-right-40 bottom-24 z-30 pointer-events-none w-56 md:w-72">
                    <div className="bg-white border-[3px] border-black p-3 md:p-4 rounded-[1.5rem] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-right transform rotate-2">
                       <h4 className="text-black font-extrabold text-sm md:text-lg leading-tight mb-1">إدارة المسؤولين</h4>
                       <p className="text-gray-700 text-[10px] md:text-xs xl:text-sm font-medium">ادارة المسؤولين و تعيين صلاحيات , و تحديد ارسال الاشعارات لهم</p>
                    </div>
                    {/* Pointer Line */}
                    <svg className="absolute top-1/2 right-full w-12 md:w-16 h-16 overflow-visible pointer-events-none -translate-x-1 md:-translate-x-2" style={{ filter: 'drop-shadow(2px 2px 0 black)' }}>
                       <path d="M0 0 C -15 -10, -25 10, -35 5" className="md:hidden" stroke="black" strokeWidth="3" fill="none" />
                       <path d="M0 0 C -25 -20, -45 20, -55 10" className="hidden md:block" stroke="black" strokeWidth="4" fill="none" />
                       <circle cx="-35" cy="5" r="4" className="md:hidden" fill="black" />
                       <circle cx="-55" cy="10" r="6" className="hidden md:block" fill="black" />
                    </svg>
                 </div>

                 <div className="w-[280px] h-[580px] bg-slate-900 rounded-[3rem] border-[10px] border-slate-800 shadow-2xl shadow-emerald-500/10 overflow-hidden relative z-10 transition-transform duration-500">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20"></div>
                    <img 
                      src="/dashboard2.png" 
                      alt="Dashboard View 2" 
                      className="w-full h-full object-contain relative z-0"
                    />
                 </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
