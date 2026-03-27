import { Calendar, Video, ShieldCheck, Store, Clock, Plus, ArrowLeft } from "lucide-react";

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
    <section className="py-24 bg-slate-950 relative overflow-hidden border-y border-slate-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black mb-6 leading-tight">ماذا <span className="text-primary-500 text-shadow-primary">ستحصل عليه؟</span></h2>
          <p className="text-slate-400 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto font-medium">باقة متكاملة تضمن لك النجاح من اليوم الأول، بدون تعقيدات تقنية.</p>
          
         
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Top Value Box */}
          <div className="bg-slate-900/40 border-2 border-slate-800 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group hover:border-slate-700 transition-all duration-500 shadow-2xl">
             <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 blur-[100px] -z-10 rounded-full"></div>
             
             <div className="space-y-12 text-center">
                {/* Item 1 */}
                <div className="space-y-4">
                   <div className="flex flex-col items-center gap-4">
                      <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-primary-500 shadow-inner group-hover:scale-110 transition-transform">
                         <Video className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-white">دليل فيديو شامل</h3>
                   </div>
                   <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
                     فيديو يشرح كيفية إعداد متجرك مع شرح كل ميزة مدمجة بالتفصيل الممل.
                   </p>
                </div>

                {/* Item 2 */}
                <div className="space-y-4">
                   <div className="flex flex-col items-center gap-4">
                      <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-primary-500 shadow-inner group-hover:scale-110 transition-transform">
                         <ShieldCheck className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-white">ملكية كاملة للمتجر</h3>
                   </div>
                   <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
                     متجرك ملكك بالكامل، تدفع فقط ثمن الاستضافة، ولا توجد أي رسوم إضافية (0%).
                   </p>
                </div>

                {/* Divider Line */}
                <div className="relative py-4">
                  <div className="w-full h-[2px] bg-linear-to-r from-transparent via-slate-700 to-transparent"></div>
                </div>

                {/* Item 3 (Value Added) */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-right pt-2 border border-primary-500/10 bg-primary-500/5 p-8 rounded-4xl">
                   <div className="space-y-3 flex-1">
                      <div className="flex items-center gap-4 justify-center md:justify-start">
                         <Calendar className="w-8 h-8 text-primary-500" />
                         <h3 className="text-2xl md:text-4xl font-black text-white">جلسة استراتيجية (60 دقيقة)</h3>
                      </div>
                      <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-medium">
                        سنساعدك في تفصيل مكسبك ليناسب مميزاتنا المتقدمة (العروض المجمعة، إلخ.. لبيع المزيد).
                      </p>
                   </div>
                   <div className="shrink-0 bg-slate-950 p-6 rounded-3xl border border-slate-800 min-w-[200px] shadow-xl">
                      <p className="text-slate-500 text-sm font-black uppercase tracking-widest mb-2">بقيمة</p>
                      <span className="text-3xl font-black text-primary-500">1,000 جنيه</span>
                      <div className="mt-2 text-xs text-center font-black text-white uppercase tracking-tighter">مجاناً لأول 10</div>
                   </div>
                </div>
             </div>
          </div>

          {/* Plus Sign Spacer */}
          <div className="flex justify-center -my-6 relative z-20">
             <div className="w-20 h-20 bg-slate-950 border-4 border-slate-800 rounded-3xl flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] transform rotate-45 group hover:rotate-0 transition-all duration-500">
                <Plus className="w-12 h-12 text-white -rotate-45 group-hover:rotate-0 transition-all duration-500" />
             </div>
          </div>

          {/* Bottom Offer Box */}
          <div className="bg-slate-900/60 border-4 border-primary-500/30 rounded-[2.5rem] p-10 md:p-14 group hover:border-primary-500/50 transition-all duration-500 relative overflow-hidden shadow-[0_0_50px_rgba(16,185,129,0.1)]">
             <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
             
             <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                <div className="space-y-4 text-center md:text-right flex-1">
                   <div className="flex flex-col md:flex-row items-center gap-4 md:gap-5 justify-center md:justify-start">
                      <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-primary-500 group-hover:scale-110 transition-transform">
                         <Store className="w-8 h-8" />
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">
                        باقي <span className="text-primary-500 animate-pulse">10</span> أماكن فقط
                      </h3>
                   </div>
                   <p className="text-slate-300 text-xl md:text-3xl font-black mt-2">سنقوم بإنشاء متجرك وإضافة حتى 50 منتجاً فوراً.</p>
                </div>
                <div className="shrink-0 bg-primary-500 p-8 rounded-3xl shadow-2xl shadow-primary-500/30 min-w-[220px] text-center transform group-hover:scale-105 transition-transform">
                   <p className="text-white/80 text-sm font-black uppercase tracking-widest mb-2">بقيمة</p>
                   <span className="text-3xl md:text-4xl font-black text-white">2,000 جنيه</span>
                   <div className="mt-3 py-1 px-3 bg-white/20 rounded-lg text-xs font-black text-white uppercase tracking-wider">مجاناً لك الآن</div>
                </div>
             </div>
          </div>

          {/* Final Call to Action & Pricing */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-10 px-8">
             <button className="text-3xl md:text-4xl font-black text-white hover:text-primary-500 transition-all flex items-center gap-4 group underline decoration-primary-500/30 underline-offset-16 decoration-8 cursor-pointer">
                احجز موعداً للمناقشة
                <ArrowLeft className="w-10 h-10 group-hover:-translate-x-3 transition-transform" />
             </button>
             
             <div className="flex items-center gap-8 bg-slate-900 border-2 border-slate-800 px-12 py-8 rounded-[2.5rem] shadow-2xl">
                <div className="text-right">
                   <div className="flex items-center gap-6 dir-rtl">
                      <span className="text-6xl md:text-8xl font-black text-white tracking-tighter">10,000</span>
                      <div className="flex flex-col italic">
                         <span className="text-3xl font-black text-primary-500">جنيه</span>
                         <span className="text-2xl font-bold text-slate-500 line-through decoration-red-500/60 decoration-8">13,500</span>
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
