import { CheckCircle2, Calendar, Video, ShieldCheck, Store, Clock } from "lucide-react";

export default function FeaturesSection() {
  const offerItems = [
    {
      title: "نقوم بضبط متجرك بالكامل",
      description: "سنقوم بإنشاء متجرك وإضافة حتى 50 منتجاً لبدء البيع فوراً.",
      icon: <Store className="w-8 h-8 text-primary-500" />,
      value: null
    },
    {
      title: "جلسة استراتيجية لمدة 30 دقيقة",
      description: "سنساعدك في تفصيل مكسبك ليناسب مميزاتنا المتقدمة (العروض المجمعة، إلخ.. لبيع المزيد).",
      icon: <Calendar className="w-8 h-8 text-primary-500" />,
      value: "احجز موعداً"
    },
    {
      title: "دليل فيديو شامل",
      description: "فيديو يشرح كيفية إعداد متجرك مع شرح كل ميزة مدمجة بالتفصيل الممل.",
      icon: <Video className="w-8 h-8 text-primary-500" />,
      value: "بقيمة 1,000 جنيه"
    },
    {
      title: "ملكية كاملة للمتجر",
      description: "متجرك ملك لك بالكامل، تدفع فقط ثمن الاستضافة، ولا توجد أي رسوم إضافية (0%).",
      icon: <ShieldCheck className="w-8 h-8 text-primary-500" />,
      value: "بقيمة 2,000 جنيه"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 relative border-y border-slate-800/50">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 px-4 py-2 rounded-full mb-6">
            <Clock className="w-4 h-4 text-primary-500 animate-pulse" />
            <span className="text-primary-500 font-bold text-sm">عرض لفترة محدودة - باقي 10 أماكن فقط</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">ماذا <span className="text-primary-500">ستحصل عليه؟</span></h2>
          <p className="text-slate-400 text-xl leading-relaxed">باقة متكاملة تضمن لك النجاح من اليوم الأول، بدون تعقيدات تقنية.</p>
        </div>
        
        <div className="grid grid-rows-2 grid-flow-col md:grid-rows-none md:grid-flow-row md:grid-cols-2 gap-4 lg:gap-8 max-w-6xl mx-auto overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-10 md:pb-0 px-8 md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {offerItems.map((item, i) => (
            <div key={i} className="w-[280px] sm:w-[320px] md:w-auto shrink-0 snap-start bg-slate-900/40 border border-slate-800 p-6 md:p-8 rounded-3xl hover:border-primary-500/40 transition-all duration-300 group flex flex-col h-full">
              <div className="flex items-start justify-between mb-4 md:mb-6">
                <div className="p-3 bg-slate-950 rounded-2xl border border-slate-800 group-hover:bg-primary-500/10 group-hover:border-primary-500/20 transition-colors">
                  {item.icon}
                </div>
                {item.value && (
                  <span className="px-4 py-1.5 bg-primary-500 text-white text-sm font-bold rounded-lg shadow-lg shadow-primary-500/20">
                    {item.value}
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed grow">{item.description}</p>
              <div className="mt-8 flex items-center gap-2 text-primary-500 font-bold">
                 <CheckCircle2 className="w-5 h-5" />
                 <span>مضمن في العرض</span>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Summary */}
        <div className="mt-20 max-w-2xl mx-auto bg-primary-500 p-[2px] rounded-4xl">
           <div className="bg-slate-950 rounded-[calc(2.5rem-2px)] p-10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary-500 to-transparent"></div>
              <p className="text-slate-400 font-bold text-lg mb-4 line-through decoration-red-500/50 decoration-4">القيمة الإجمالية: 13,500 جنيه</p>
              <div className="flex flex-col items-center gap-2">
                 <span className="text-primary-500 font-black text-6xl md:text-7xl">10,000 <span className="text-2xl font-bold">جنيه</span></span>
                 <p className="text-white font-bold text-xl mt-2 italic animate-bounce">احصل على العرض الآن قبل نفاذ الأماكن!</p>
              </div>
              <button className="mt-10 w-full md:w-auto px-12 py-5 bg-primary-500 text-white font-black text-xl rounded-2xl hover:bg-primary-600 transition-all shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:scale-105 cursor-pointer">
                احصل على العرض الآن
              </button>
           </div>
        </div>

        {/* New Book a Meeting Button */}
        <div className="mt-12 text-center">
           <p className="text-slate-400 mb-6 text-lg">أو إذا كنت تفضل التحدث معنا أولاً:</p>
           <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-black text-xl rounded-2xl hover:bg-slate-100 transition-all hover:scale-105 shadow-xl shadow-white/5 cursor-pointer">
              <Calendar className="w-6 h-6" />
              <span>احجز موعداً للمناقشة</span>
              <div className="absolute inset-x-0 -bottom-1 h-1 bg-primary-500 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform"></div>
           </button>
        </div>
      </div>
    </section>
  );
}
