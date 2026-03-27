import { PlayCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-primary-500/10 to-transparent -z-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-400 font-medium text-sm mb-4">
            ثورة في عالم التجارة الإلكترونية
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-600 to-emerald-300">
              طوّر{" "}
            </span>
            علامتك التجارية
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 font-medium leading-relaxed max-w-3xl mx-auto">
            صفحة منتج <span className="text-primary-500 font-bold mx-1">سهلة على عميلك</span>,
            اضافات <span className="text-primary-500 font-bold mx-1">تزود ارباحك</span>,
            متابعة و تحديث سهل <span className="text-primary-500 font-bold mx-1">من هاتفك</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-6 text-slate-300 font-bold text-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span>0% نسبة على المبيعات</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span>0 اشتراكات شهرية للتطبيقات</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] w-full sm:w-auto">
              تصفح متجر العرض (Demo)
            </button>
            <button className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto text-center">
              تعرف على المزيد
            </button>
          </div>
        </div>

        {/* VSL Video Placeholder */}
        <div className="mt-16 mx-auto max-w-5xl rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative aspect-video group cursor-pointer transition-transform hover:scale-[1.01] duration-500">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80"
            alt="Video Thumbnail"
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="h-24 w-24 bg-primary-500/20 rounded-full flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:bg-primary-500/30 transition-all duration-300 border border-primary-500/30">
              <PlayCircle className="w-12 h-12 text-primary-500 group-hover:text-primary-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
