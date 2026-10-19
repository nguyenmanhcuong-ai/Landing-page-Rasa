import Image from "next/image";
import Link from "next/link";
import VegetableExplorer from "@/components/VegetableExplorer";
import { vegetables } from "@/data/vegetables";

const guide = [
  { title: "Đặc điểm", text: "Tên khoa học, họ thực vật và mô tả hình dáng, hương vị, cách ăn." },
  { title: "Dinh dưỡng nổi bật", text: "Các vitamin, khoáng chất và hợp chất đáng chú ý trong từng loại." },
  { title: "Công dụng", text: "Lợi ích cho sức khỏe, kèm mức độ bằng chứng khi cần thiết." },
  { title: "Phù hợp & lưu ý", text: "Ai nên ăn nhiều hơn, ai cần thận trọng khi sử dụng." },
];

export default function Home() {
  const heroImages = vegetables.flatMap((v) => v.images.slice(0, 1)).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="leaf-pattern relative overflow-hidden text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-12 sm:px-6 sm:py-14 sm:py-20 md:py-28 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-sand/40 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-sand sm:px-4 sm:text-xs sm:tracking-[0.2em]">
              Ngon &amp; lành từ thiên nhiên
            </p>
            <h1 className="font-serif text-[2.25rem] leading-[1.15] sm:text-5xl lg:text-6xl">
              Dinh dưỡng của <span className="italic text-sand">60+</span> loại rau, củ &amp; nấm
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:mt-6 sm:text-lg">
              Hiểu rõ từng nguyên liệu trên bàn ăn — đặc điểm, giá trị dinh dưỡng, công dụng và những
              lưu ý cần biết để chọn món phù hợp với cơ thể bạn.
            </p>

            {heroImages.length > 0 && (
              <div className="mt-8 flex items-center gap-3 lg:hidden">
                {heroImages.map((src) => (
                  <div key={src} className="relative h-24 flex-1 overflow-hidden rounded-2xl ring-2 ring-white/10 sm:h-36">
                    <Image src={src} alt="" fill sizes="50vw" className="object-cover" priority />
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8 grid gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
              <Link
                href="#rau-cu-nam"
                className="rounded-full bg-sand px-7 py-3.5 text-center font-semibold text-forest transition hover:bg-white"
              >
                Khám phá ngay
              </Link>
              <Link
                href="#cach-doc"
                className="rounded-full border border-white/30 px-7 py-3.5 text-center font-semibold text-white transition hover:border-sand hover:text-sand"
              >
                Cách đọc thông tin
              </Link>
            </div>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-lg lg:block">
            <div className="absolute inset-0 rounded-full border border-sand/20" />
            <div className="absolute inset-10 rounded-full border border-sand/10" />
            {heroImages[0] && (
              <div className="absolute left-0 top-6 h-72 w-60 overflow-hidden rounded-[2rem] shadow-2xl ring-4 ring-white/10">
                <Image src={heroImages[0]} alt="" fill sizes="240px" className="object-cover" priority />
              </div>
            )}
            {heroImages[1] && (
              <div className="absolute bottom-6 right-0 h-72 w-60 overflow-hidden rounded-[2rem] shadow-2xl ring-4 ring-white/10">
                <Image src={heroImages[1]} alt="" fill sizes="240px" className="object-cover" priority />
              </div>
            )}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-2xl ring-8 ring-forest">
              <Image src="/logo.jpg" alt="Rasa" width={447} height={447} className="h-36 w-36" />
            </div>
          </div>
        </div>
      </section>

      {/* Danh mục */}
      <section id="rau-cu-nam" className="scroll-mt-20 bg-cream py-7 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="hidden md:block">
            <SectionHeading eyebrow="Thư viện nguyên liệu" title="Rau, củ & nấm tại Rasa" />
          </div>
          <VegetableExplorer items={vegetables} />
        </div>
      </section>

      {/* Hướng dẫn */}
      <section id="cach-doc" className="leaf-pattern scroll-mt-20 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Cách đọc thông tin" title="Mỗi nguyên liệu, bốn góc nhìn" dark />
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {guide.map((g, i) => (
              <div
                key={g.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:border-sand/50 sm:p-7"
              >
                <span className="font-serif text-2xl italic text-sand sm:text-4xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-base leading-snug sm:mt-4 sm:text-xl">{g.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-white/70 sm:mt-2 sm:text-sm">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Về Rasa */}
      <section id="ve-rasa" className="scroll-mt-20 bg-cream py-14 sm:py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand-600">Về Rasa</p>
          <h2 className="mt-4 font-serif text-4xl text-forest sm:text-5xl">
            <span className="italic">ngon</span> &amp; <span className="italic">lành</span>
          </h2>
          <div className="mx-auto my-8 h-px w-24 bg-sand" />
          <p className="text-base leading-relaxed text-forest/80 sm:text-lg">
            Chúng tôi tin rằng một bữa ăn ngon cần bắt đầu từ việc hiểu nguyên liệu. Thư viện này giúp
            bạn biết rõ mỗi loại rau, củ, nấm mang lại điều gì cho sức khỏe.
          </p>
          <a
            href="tel:19006644"
            className="mt-8 inline-flex rounded-full sm:mt-10 bg-forest px-8 py-4 font-semibold text-white transition hover:bg-forest-700"
          >
            Gọi 1900 66 44
          </a>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ eyebrow, title, dark }: { eyebrow: string; title: string; dark?: boolean }) {
  return (
    <div className="mb-8 text-center sm:mb-12">
      <p className={`text-xs font-semibold uppercase tracking-[0.25em] ${dark ? "text-sand" : "text-sand-600"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 font-serif text-3xl sm:text-4xl md:text-5xl ${dark ? "text-white" : "text-forest"}`}>
        {title}
      </h2>
    </div>
  );
}
