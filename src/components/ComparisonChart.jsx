import React from "react";

export default function ComparisonChart() {
  return (
    <section className="py-24 bg-slate-950/50 border-y border-slate-800/50 relative">
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">لماذا نحن خيارك <span className="text-primary-500">الأفضل؟</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">مقارنة شاملة توضح كيف نتفوق على المنصات الأخرى من حيث التكلفة والسرعة والتوافق مع السوق المحلي.</p>
        </div>
        
        <div className="max-w-5xl mx-auto overflow-x-auto pb-8">
          <table className="w-full text-right border-collapse min-w-[800px]">
            <thead>
              <tr className="text-lg">
                <th className="py-6 px-6 font-bold text-slate-100 border-b border-slate-800 w-1/4">المقارنة</th>
                <th className="py-6 px-6 font-bold text-xl text-primary-500 bg-slate-800/40 rounded-t-2xl border-b border-primary-500/30 text-center w-1/4 shadow-[0_-10px_30px_-15px_rgba(59,130,246,0.2)]">نحن </th>
                <th className="py-6 px-6 font-bold text-slate-100 border-b border-slate-800 text-center w-1/4">Shopify</th>
                <th className="py-6 px-6 font-bold text-slate-100 border-b border-slate-800 text-center w-1/4">Woocommerce</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {[
                { feature: "واجهة باللغة العربية", us: "نعم", sh: "محدود", woo: "يحتاج إضافات" },
                { feature: "تخصيص كامل للمتجر من الهاتف", us: "تحكم كامل", sh: "محدود", woo: "محدود" },
                { feature: "دعم RTL (من اليمين لليسار)", us: "نعم", sh: "محدود", woo: "يحتاج إضافات" },
                { feature: "رسوم على المبيعات", us: "0%", sh: "2%", woo: "2.9%" },
                { feature: "الدفع بضغطة واحدة (Instapay/محافظ)", us: "نعم", sh: "غير متوفر", woo: "غير متوفر" },
                { 
                  feature: "السعر", 
                  us: "8,000 ج.م، ملكك للأبد + استضافة مجانية لأول سنة", 
                  sh: "29 دولار شهرياً (~1,450 ج.م)", 
                  woo: "مجاني + 50 دولار شهرياً (~2,500 ج.م استضافة)" 
                },
                { 
                  feature: "تجميع المنتجات، الأبسل والنوافذ المنبثقة", 
                  us: "مدمجة مجاناً وبتحكم كامل", 
                  sh: "7,500 - 12,500 ج.م سنوياً إضافية", 
                  woo: "2,500 - 5,000 ج.م سنوياً إضافية" 
                },
              ].map((row, i, arr) => (
                <tr key={i} className="group hover:bg-slate-800/30 transition-colors">
                  <td className="py-5 px-6 text-slate-100 font-bold group-hover:text-white transition-colors">{row.feature}</td>
                  <td className={`py-5 px-6 bg-slate-800/40  text-center font-bold text-primary-400 ${i === arr.length - 1 ? "rounded-b-2xl" : ""}`}>
                    {row.us}
                  </td>
                  <td className="py-5 px-6 text-center text-slate-300">
                    {row.sh}
                  </td>
                  <td className="py-5 px-6 text-center text-slate-300">
                    {row.woo}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
