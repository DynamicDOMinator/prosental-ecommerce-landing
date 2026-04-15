"use client";
import { PlayCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-22 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-primary-500/10 to-transparent -z-10"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-primary-600 to-emerald-300">
              طوّر{" "}
            </span>
            علامتك التجارية
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 font-medium leading-relaxed max-w-3xl mx-auto">
            صفحة منتج{" "}
            <span className="text-primary-500 font-bold mx-1">
              سهلة على عميلك
            </span>
            , اضافات{" "}
            <span className="text-primary-500 font-bold mx-1">تزود ارباحك</span>
            , متابعة و تحديث سهل{" "}
            <span className="text-primary-500 font-bold mx-1">من هاتفك</span>
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
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
              <span>استضافة مجانية لمدة عام</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button onClick={() => window.open("https://ecommerce.prosental.com", "_blank")} className=" hover:bg-primary-600 cursor-pointer text-white  px-8 py-4 rounded-full font-bold text-lg transition-all underline hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] w-full sm:w-auto">
              تصفح متجر العرض (Demo)
            </button>
            <button
              onClick={() => {
                window.open(
                  "https://calendly.com/midoalaa12345/consultation",
                  "_blank",
                );
              }}
              className="bg-primary-500 cursor-pointer hover:bg-primary-600 border shadow-[0_0_30px_rgba(16,185,129,0.5)] border-slate-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto text-center"
            >
              أحجز موعد شرائك
            </button>
          </div>
        </div>

        {/* VSL Video Container */}
        <div className="mt-16 mx-auto max-w-[350px] md:max-w-[400px] rounded-[3rem] overflow-hidden border-[8px] border-slate-800 bg-slate-950 shadow-[0_20px_50px_rgba(16,185,129,0.2)] relative aspect-[9/16]">
          <iframe
            src="https://www.youtube.com/embed/WeGd77XwsKs?autoplay=0&rel=0&modestbranding=1"
            title="Prosental VSL"
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
