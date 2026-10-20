import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import VegetableExplorer from "@/components/VegetableExplorer";
import { vegetables } from "@/data/vegetables";

const guide = [
  { title: "Đặc điểm", text: "Tên khoa học, họ thực vật và mô tả hình dáng, hương vị, cách ăn." },
  { title: "Dinh dưỡng nổi bật", text: "Các vitamin, khoáng chất và hợp chất đáng chú ý trong từng loại." },
  { title: "Công dụng", text: "Lợi ích cho sức khỏe, kèm mức độ bằng chứng khi cần thiết." },
  { title: "Phù hợp & lưu ý", text: "Ai nên ăn nhiều hơn, ai cần thận trọng khi sử dụng." },
];

const brandTraits = [
  "Thân thiện",
  "Gần gũi",
  "Tinh tế",
  "Hiện đại",
  "Tử tế",
  "Minh bạch",
  "Tươi mới",
  "Tích cực",
  "Trách nhiệm",
  "Bền vững",
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
                href="#ve-rasa"
                className="rounded-full border border-white/30 px-7 py-3.5 text-center font-semibold text-white transition hover:border-sand hover:text-sand"
              >
                Về Rasa
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
      <section id="rau-cu-nam" className="render-lazy scroll-mt-20 bg-cream py-7 sm:py-20 md:py-28">
        <RevealOnScroll className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="hidden md:block">
            <SectionHeading eyebrow="Thư viện nguyên liệu" title="Rau, củ & nấm tại Rasa" />
          </div>
          <VegetableExplorer items={vegetables} />
        </RevealOnScroll>
      </section>

      {/* Hướng dẫn */}
      <section id="cach-doc" className="leaf-pattern render-lazy scroll-mt-20 py-20 text-white md:py-28">
        <RevealOnScroll className="mx-auto max-w-7xl px-4 sm:px-6">
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
        </RevealOnScroll>
      </section>

      {/* Về Rasa */}
      <section id="ve-rasa" className="render-lazy scroll-mt-20 overflow-hidden bg-cream">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-28">
          <RevealOnScroll>
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand-600">Về Rasa</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-forest sm:text-5xl">
                Rau sạch – Ngon và Lành
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-forest/75 sm:text-xl">
                Hương vị tinh túy từ thiên nhiên, nuôi dưỡng cơ thể, gắn kết yêu thương, sống xanh bền vững.
              </p>
              <p className="mt-7 text-lg font-semibold italic text-forest sm:text-2xl">
                “Vì một Việt Nam tốt đẹp hơn”
              </p>
            </div>

            <div className="relative mt-12 aspect-[16/9] overflow-hidden rounded-3xl md:mt-16 md:aspect-[16/7]">
              <Image
                src="/images/ve-rasa/ve-rasa-1.jpg"
                alt="Không gian nhà hàng Rasa"
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mt-16 grid items-start gap-10 md:mt-24 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
              <h3 className="text-3xl font-semibold leading-tight text-forest sm:text-4xl">
                RASA được sinh ra từ một niềm tin đơn giản
              </h3>
              <div className="space-y-5 text-base leading-relaxed text-forest/75 sm:text-lg">
                <p>
                  Ăn rau không chỉ tốt cho sức khỏe, mà còn có thể trở thành một trải nghiệm ẩm thực trọn
                  vẹn, ngon và hạnh phúc.
                </p>
                <p>
                  Chúng tôi tin rằng mỗi bữa ăn lành mạnh hôm nay sẽ góp phần tạo nên một cuộc sống cân bằng
                  và một tương lai xanh hơn cho tất cả.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-6">
              {[
                {
                  title: "Sạch",
                  text: "Không chỉ là nguồn nguyên liệu được kiểm chứng, mà còn là sự minh bạch và tử tế trong từng chi tiết.",
                },
                {
                  title: "Ngon",
                  text: "Không chỉ ở vị giác, mà còn ở cảm giác an tâm và niềm vui được chia sẻ.",
                },
                {
                  title: "Lành",
                  text: "Không chỉ cho cơ thể, mà còn cho tinh thần và cả hành tinh.",
                },
              ].map((value) => (
                <article key={value.title} className="rounded-3xl border border-forest/10 bg-white p-6 sm:p-8">
                  <h3 className="text-2xl font-semibold text-forest">“{value.title}”</h3>
                  <p className="mt-3 leading-relaxed text-forest/70">{value.text}</p>
                </article>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="relative mt-16 aspect-[16/9] overflow-hidden rounded-3xl sm:mt-20 md:aspect-[16/7]">
              <Image
                src="/images/ve-rasa/ve-rasa-2.jpg"
                alt="Các món rau và lẩu tại Rasa"
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>
        </div>

        <div className="leaf-pattern text-white">
          <RevealOnScroll className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:gap-16 md:py-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand">Định hướng</p>
              <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">Tầm nhìn và Sứ mệnh</h3>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-white/75 sm:text-lg">
              <p>
                RASA với mong muốn mang đến một không gian ẩm thực nơi thiên nhiên và con người hòa quyện.
                Từ những nguyên liệu rau củ tươi xanh, chúng tôi sáng tạo nên các món lẩu ngon miệng, vừa
                lành mạnh cho sức khỏe.
              </p>
              <p>
                Với triết lý “ngon &amp; lành”, RASA không chỉ phục vụ món ăn, mà còn truyền tải lối sống
                xanh, cân bằng và tinh tế đến từng thực khách.
              </p>
            </div>
          </RevealOnScroll>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 md:py-24">
          <RevealOnScroll className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand-600">Nền tảng</p>
              <h3 className="mt-3 text-3xl font-semibold text-forest">Giá trị cốt lõi</h3>
              <div className="mt-8 space-y-4">
                {[
                  ["Sạch", "Rau sạch, nguyên liệu minh bạch."],
                  ["Ngon", "Vị ngon tự nhiên, chế biến tinh tế."],
                  ["Lành", "Tốt cho sức khỏe, cân bằng cuộc sống."],
                ].map(([title, text], index) => (
                  <div key={title} className="flex gap-4 border-b border-forest/10 pb-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1.5 text-forest/75">
                      <strong className="text-forest">{title}:</strong> {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sand-600">Chúng tôi</p>
              <h3 className="mt-3 text-3xl font-semibold text-forest">Tính cách thương hiệu</h3>
              <div className="mt-8 flex flex-wrap gap-2.5">
                {brandTraits.map((trait) => (
                  <span
                    key={trait}
                    className="rounded-full border border-forest/15 bg-white px-4 py-2.5 text-sm font-medium text-forest sm:text-base"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="relative mt-16 aspect-[16/9] overflow-hidden rounded-3xl sm:mt-20 md:aspect-[16/7]">
              <Image
                src="/images/ve-rasa/ve-rasa-3.jpg"
                alt="Quầy rau xanh tại Rasa"
                fill
                sizes="(min-width: 1280px) 1280px, 100vw"
                className="object-cover"
              />
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mt-16 rounded-3xl bg-sand/30 px-6 py-10 text-center sm:mt-20 sm:px-10 sm:py-14">
              <p className="text-2xl font-semibold italic text-forest sm:text-4xl">
                “RASA - Ăn rau ngon, sống lành mạnh.”
              </p>
              <a
                href="tel:19006644"
                className="mt-7 inline-flex rounded-full bg-forest px-8 py-4 font-semibold text-white transition hover:bg-forest-700"
              >
                Gọi 1900 66 44
              </a>
            </div>
          </RevealOnScroll>
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
