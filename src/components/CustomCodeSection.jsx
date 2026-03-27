"use client";
import { MessageCircle, Code2, ArrowLeft } from "lucide-react";

export default function CustomCodeSection() {
  const whatsappNumber = "+201034674293";
  const whatsappMsg = encodeURIComponent("مرحباً، أود الاستفسار عن خدمة البرمجة الخاصة لمشروعي.");
  const waUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none -ml-20 -mb-20"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-slate-900/60 backdrop-blur-xl border border-slate-800 rounded-[3rem] p-10 md:p-20 overflow-hidden relative group hover:border-primary-500/30 transition-all duration-500 shadow-2xl">
          <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
            <div className="space-y-8 text-center lg:text-right flex-1">
              <div className="inline-flex items-center gap-3 bg-primary-500/10 border border-primary-500/20 px-6 py-2 rounded-full text-primary-500 font-black text-sm uppercase tracking-widest animate-pulse">
                <Code2 className="w-5 h-5" />
                حلول برمجية مخصصة
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                هل تحتاج إلى <span className="text-primary-500 underline decoration-primary-500/30 underline-offset-12">برمجة خاصة</span> لنظامك؟
              </h2>
              
              <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl lg:ml-0 lg:mr-auto">
                إذا كنت تبحث عن إضافات فريدة أو نظام برمجي مخصص بالكامل يتناسب مع رؤيتك الخاصة، فريقنا التقني جاهز لتحويل أفكارك إلى واقع بأعلى معايير الجودة والسرعة.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_50px_rgba(16,185,129,0.5)] flex items-center gap-4 hover:-translate-y-1 active:scale-95"
                >
                  تواصل معنا عبر واتساب
                  <MessageCircle className="w-7 h-7 animate-bounce" />
                </a>
              </div>
            </div>

            <div className="relative group/icon hidden lg:block">
              <div className="absolute inset-0 bg-primary-500/20 blur-[60px] rounded-full group-hover/icon:bg-primary-500/30 transition-all"></div>
              <div className="relative bg-slate-950 border border-slate-800 p-12 rounded-[2.5rem] shadow-inner group-hover/icon:scale-105 transition-transform duration-700">
                <Code2 className="w-32 h-32 text-primary-500 group-hover/icon:rotate-6 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
