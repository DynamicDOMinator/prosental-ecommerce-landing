"use client"
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const faqs = [
    {
      q: "هل أحتاج لخبرة برمجية لاستخدام القالب؟",
      a: "لا، يمكنك تعديل كل شيء من لوحة التحكم أو حتى من هاتفك بكل سهولة دون كتابة سطر كود واحد."
    },
    {
      q: "كم يستغرق تجهيز المتجر؟",
      a: "نقوم بإعداد وتجهيز متجرك بالكامل مع إضافة ما يصل إلى 50 منتجاً خلال 48 ساعة فقط كحد أقصى."
    },
    {
      q: "ما هي رسوم المعاملات والمبيعات؟",
      a: "نحن لا نقتطع أي نسبة من مبيعاتك على الإطلاق. 0% رسوم معاملات (Transaction Fees)."
    },
    {
      q: "هل القالب متوافق تماماً مع السوق المصري؟",
      a: "نعم، القالب مهيأ لدعم خيارات الدفع المحلية مثل Instapay والمحافظ الإلكترونية، مع إمكانية الدفع بضغطة واحدة."
    },
    {
      q: "كيف يمكنني الحصول على المساعدة إذا واجهت مشكلة؟",
      a: "نوفر دعماً فنياً مميزاً، ويمكنك حجز مكالمة معنا لمساعدتك في أي استفسار أو مشكلة تقنية."
    }
  ];

  return (
    <section className="py-24 bg-slate-900/50 border-y border-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">الأسئلة <span className="text-primary-500">الشائعة</span></h2>
          <p className="text-slate-400 text-lg">كل ما تحتاج معرفته عن خدماتنا والقالب الخاص بنا.</p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <FaqItem key={i} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`border rounded-2xl overflow-hidden transition-colors ${isOpen ? 'bg-slate-800/50 border-primary-500/50' : 'bg-slate-950 border-slate-800 hover:border-slate-700'}`}
    >
      <button 
        className="w-full text-right px-6 py-5 flex items-center justify-between gap-4 font-bold text-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.q}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-primary-500 flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
        )}
      </button>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'pb-6 opacity-100 max-h-40' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-400 leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}
