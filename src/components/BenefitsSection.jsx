import { TrendingUp, Zap, Smartphone, Sparkles } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      title: "عائد اكبر لاعلاناتك",
      icon: <TrendingUp className="w-10 h-10" />,
      content: (
        <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-medium">
          تطبيقات <span className="text-white font-black">upsell, bundles</span> لزيادة متوسط سعر الطلب
          <br />
          صفحة <span className="text-white font-black">post purchase</span> لأقتراح منتجات <span className="text-white  font-black">اضافية لعميلك</span> بعد عملية البيع الاولى
        </p>
      )
    },
    {
      title: "ميزات متقدمة",
      icon: <Zap className="w-10 h-10" />,
      content: (
        <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-medium">
          امكانية انشاء حساب للعملاء لمتابعة اكثر من طلب
          <br />
          او متابعة كل طلب <span className="text-white font-black">عن طريق الايميل</span> المرسل لهم
          <br />
          ارسال <span className="text-white font-black">تفاصيل الطلبات</span> للمسؤولين عن طريق الواتس اب او الايميل
        </p>
      )
    },
    {
      title: "سهولة الاستخدام",
      icon: <Smartphone className="w-10 h-10" />,
      content: (
        <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-medium">
          التحكم الكامل فى اى وقت <span className="text-white font-black">عن طريق الهاتف</span>
          <br />
          تعيين <span className="text-white font-black">صلاحيات</span> لكل فرد فى شركتك
          <br />
          ترجمة فورية <span className="text-white font-black">بالAI</span> للغة التانية
        </p>
      )
    },
    {
      title: "انطباع قوى و تجربة شراء فريدة لعميلك",
      icon: <Sparkles className="w-10 h-10" />,
      content: (
        <p className="text-slate-400 text-xl md:text-2xl leading-relaxed font-medium">
          صفحة منتج سهلة مستوحاة من اكبر منصات التجارة كـ <span className="text-white font-black">amazon</span>
          <br />
          امكانية الدفع و رفع وصل <span className="text-white font-black">انستاباى و فودافون كاش</span>
          <br />
          صفحة <span className="text-white font-black">متابعة</span> حالة الطلب
          <br />
          رسالة <span className="text-white font-black">تأكيدية</span> لطلب عميلك عن طريق الواتس اب
        </p>
      )
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-[600px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">ميزات ستغير مسار <span className="text-primary-500">مشروعك</span></h2>
          <p className="text-slate-400 text-xl md:text-2xl font-medium">كل ما تحتاجه للتميز والنمو في سوق التجارة الإلكترونية بذكاء واحترافية.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-slate-900/40 backdrop-blur-md border-2 border-primary-500/30 p-10 md:p-14 rounded-[3rem] hover:border-primary-500/30 transition-all duration-500 group flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 blur-3xl -z-10 group-hover:bg-primary-500/10 transition-colors"></div>
              
              <div className="mb-6 p-4 bg-primary-500/10 rounded-2xl text-primary-500 shadow-inner group-hover:scale-110 group-hover:bg-primary-500/20 transition-all duration-300">
                 {benefit.icon}
              </div>

              <h3 className="text-3xl md:text-4xl font-black mb-8 text-primary-500 group-hover:text-primary-500 transition-colors">{benefit.title}</h3>
              <div className="space-y-4">
                {benefit.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
