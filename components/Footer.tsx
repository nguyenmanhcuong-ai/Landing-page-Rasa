import Image from "next/image";

export default function Footer() {
  return (
    <footer className="leaf-pattern text-white/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 pb-[max(3rem,env(safe-area-inset-bottom))] sm:px-6 md:grid-cols-3 md:gap-10 md:py-14">
        <div className="flex items-center gap-4">
          <Image src="/logo.jpg" alt="Logo Rasa" width={447} height={447} className="h-20 w-20 rounded-lg" />
          <p className="font-serif text-2xl italic text-white">ngon &amp; lành</p>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sand">Liên hệ</h3>
          <a href="tel:19006644" className="font-serif text-3xl text-white transition hover:text-sand">
            1900 66 44
          </a>
        </div>

        <div className="text-sm leading-relaxed">
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sand">Lưu ý</h3>
          Thông tin dinh dưỡng mang tính tham khảo, không thay thế tư vấn của bác sĩ hoặc chuyên gia dinh
          dưỡng.
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © 2026 Cuongnm - SĐT 036.244.3830
      </div>
    </footer>
  );
}
