"use client";

export default function Footer() {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 text-center relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">
        Tejjara <span className="text-primary-500">Template</span>
        </h3>
        <p className="text-slate-400 max-w-md mx-auto mb-10 text-lg font-medium leading-relaxed">
          الحل الأمثل والذكي لزيادة مبيعاتك في السوق المصري والوصول لقمة النجاح.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm md:text-base font-bold text-slate-300 mb-12">
          <a 
            href="#benefits" 
            onClick={(e) => handleLinkClick(e, "#benefits")}
            className="hover:text-primary-500 transition-all hover:-translate-y-1"
          >
            ميز علامتك التجارية
          </a>
          <a 
            href="#dashboard" 
            onClick={(e) => handleLinkClick(e, "#dashboard")}
            className="hover:text-primary-500 transition-all hover:-translate-y-1"
          >
            عن لوحة التحكم
          </a>
          <a 
            href="#faq" 
            onClick={(e) => handleLinkClick(e, "#faq")}
            className="hover:text-primary-500 transition-all hover:-translate-y-1"
          >
            الأسئلة الشائعة
          </a>
          <a 
            href="#custom-code" 
            onClick={(e) => handleLinkClick(e, "#custom-code")}
            className="bg-primary-500/10 text-primary-500 px-6 py-2 rounded-full border border-primary-500/20 hover:bg-primary-500 hover:text-white transition-all hover:-translate-y-1"
          >
            تواصل معنا
          </a>
        </div>
        
        <div className="border-t border-slate-900 pt-8 mt-8">
          <p className="text-slate-500 text-sm font-medium">
            &copy; {new Date().getFullYear()} Prosental. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
