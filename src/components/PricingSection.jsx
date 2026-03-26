export default function PricingSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden ring-1 ring-primary-500/30">
          {/* Ribbon */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
          <div className="absolute -right-20 top-10 bg-primary-500 text-white font-bold py-1 px-20 rotate-45 border-y border-white/20 shadow-lg text-sm text-center">
            عرض لفترة محدودة
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-white to-slate-400">
                استثمر في متجرك بذكاء
              </h2>
              <p className="text-lg text-slate-400">
                احصل على القالب الاحترافي، مع إعداد المتجر بالكامل ودعم فني متميز بسعر يدفع لمرة واحدة فقط.
              </p>
              
              <ul className="space-y-4 pt-4">
                {[
                  "بدون اشتراكات شهرية",
                  "تحديثات مستمرة مجانية",
                  "نقل متجرك الحالي مجاناً",
                  "دعم فني وتوجيه استراتيجي"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-950/80 rounded-2xl p-8 border border-slate-800 text-center shadow-2xl relative">
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-slate-800 text-primary-400 text-xs font-bold px-4 py-1 rounded-full border border-slate-700">
                الدفع مرة واحدة فقط
              </div>
              <p className="text-slate-400 mb-2 font-medium">سعر الباقة المتكاملة</p>
              <div className="flex justify-center items-end gap-2 mb-2">
                <span className="text-5xl font-black text-white">$149</span>
                <span className="text-slate-500 line-through text-xl">$299</span>
              </div>
              <p className="text-sm text-primary-500/80 mb-8 font-medium">✨ وفر 50% لفترة محدودة ✨</p>
              
              <button className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-1 mb-4">
                احصل على القالب الآن
              </button>
              <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-xl transition-all border border-slate-700">
                احجز مكالمة استشارية
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
