import { 
  TrendingUp, 
  ShieldCheck, 
  MapPin, 
  Zap, 
  MessageSquare, 
  Wallet, 
  ArrowUpRight, 
  Mail, 
  Globe 
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      color: "bg-primary-500",
      title: "زيادة العائد على الإعلانات بميزات متقدمة",
      description: "عروض زيادة المبيعات بعد الشراء (Post-purchase Upsell) لضمان أقصى ربحية من كل عميل."
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      color: "bg-primary-500",
      title: "ميزات تقنية متقدمة",
      description: "تنبيهات فورية بحالة الطلب لفريق عملك عبر البريد الإلكتروني وواتساب للمتابعة اللحظية."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      color: "bg-primary-500",
      title: "مظهر احترافي يبني ثقة عملائك",
      description: "توفير صفحة تتبع الطلبات وتأكيد الشراء آلياً عبر واتساب لتعزيز مصداقية متجرك."
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      color: "bg-primary-500",
      title: "مثالي للسوق المصري",
      description: "تفعيل نظام الدفع بضغطة واحدة عبر انستاباي والمحافظ الإلكترونية (VC) لتسهيل الشراء."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">ميزات ستغير مسار <span className="text-primary-500">مشروعك</span></h2>
          <p className="text-slate-400 text-lg">كل ما تحتاجه للتميز والنمو في سوق التجارة الإلكترونية المصري بذكاء واحترافية.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-8 rounded-3xl hover:border-slate-600 transition-all duration-300 group hover:-translate-y-1">
              <div className={`w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
