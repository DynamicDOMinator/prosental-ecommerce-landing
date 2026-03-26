export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-white mb-4">Prosental <span className="text-primary-500">Template</span></h3>
        <p className="text-slate-500 max-w-md mx-auto mb-8">
          الحل الأمثل لبناء متجرك الإلكتروني الاحترافي وزيادة مبيعاتك في السوق المصري.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-slate-400 mb-8">
          <a href="#" className="hover:text-primary-500 transition-colors">عن القالب</a>
          <a href="#" className="hover:text-primary-500 transition-colors">الميزات</a>
          <a href="#" className="hover:text-primary-500 transition-colors">الأسعار</a>
          <a href="#" className="hover:text-primary-500 transition-colors">تواصل معنا</a>
        </div>
        <p className="text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} Prosental. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
