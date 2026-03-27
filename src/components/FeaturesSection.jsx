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
        
        <div className="max-w-4xl mx-auto bg-slate-900/40 border border-slate-800 backdrop-blur-xl p-8 md:p-12 rounded-[3.5rem] shadow-2xl relative ring-1 ring-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[120px] -z-10 rounded-full"></div>
          
          <ul className="space-y-10 md:space-y-12">
            {offerItems.map((item, i) => (
              <li key={i} className="flex items-start gap-6 md:gap-10 group">
                {/* Custom Dot */}
                <div className="mt-4 md:mt-5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary-500 shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover:scale-150 transition-transform duration-500" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-5">
                      <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl text-primary-500 group-hover:border-primary-500/40 group-hover:bg-primary-500/5 transition-all duration-300 shadow-inner">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-primary-500 transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>
                    {item.value && (
                      <div className="flex shrink-0">
                        <span className="px-5 py-2 bg-primary-500 text-white text-sm font-black rounded-xl shadow-xl shadow-primary-500/20 self-start md:self-auto uppercase tracking-tighter">
                          {item.value}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-slate-400 text-lg md:text-xl leading-relaxed md:pr-10">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>



        {/* New Book a Meeting Button */}
        <div className="mt-12 text-center">
        
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
