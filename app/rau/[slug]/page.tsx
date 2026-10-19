import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getVegetable, vegetables } from "@/data/vegetables";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return vegetables.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const veg = getVegetable((await params).slug);
  if (!veg) return {};
  return {
    title: `${veg.name} – Dinh dưỡng & công dụng`,
    description: veg.description ?? veg.nutrients,
    openGraph: { images: veg.images.slice(0, 1) },
  };
}

export default async function VegetablePage({ params }: Props) {
  const { slug } = await params;
  const veg = getVegetable(slug);
  if (!veg) notFound();

  const index = vegetables.findIndex((v) => v.slug === slug);
  const prev = vegetables[index - 1];
  const next = vegetables[index + 1];
  const hasContent = Boolean(veg.description || veg.nutrients || veg.benefits?.length);

  return (
    <article>
      <section className="leaf-pattern text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 pb-10 pt-4 sm:gap-10 sm:px-6 sm:py-14 md:py-20 lg:grid-cols-[1.1fr_1fr]">
          <Link
            href="/#rau-cu-nam"
            className="inline-flex py-2 text-sm text-white/60 transition hover:text-sand lg:hidden"
          >
            ← Tất cả rau củ nấm
          </Link>

          <div className="animate-fade-up order-last lg:order-none">
            <Link href="/#rau-cu-nam" className="hidden text-sm text-white/60 transition hover:text-sand lg:inline">
              ← Tất cả rau củ nấm
            </Link>
            <p className="font-serif text-lg italic text-sand lg:mt-8">
              {String(index + 1).padStart(2, "0")}
              {veg.type && ` · ${veg.type}`}
            </p>
            <h1 className="mt-1 font-serif text-[2.25rem] leading-tight sm:mt-2 sm:text-5xl lg:text-6xl">{veg.name}</h1>
            {veg.scientificName && (
              <p className="mt-2 text-base italic text-white/70 sm:mt-3 sm:text-lg">{veg.scientificName}</p>
            )}
            {veg.family && <p className="mt-1 text-sm text-white/50">{veg.family}</p>}
            {veg.nutrientTags?.length ? (
              <ul className="mt-6 flex flex-wrap gap-2 sm:mt-8">
                {veg.nutrientTags.map((t) => (
                  <li key={t} className="rounded-full border border-sand/50 px-3.5 py-1 text-sm text-sand">
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="-mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
            {veg.images.slice(0, 2).map((src, i) => (
              <div
                key={src}
                className={`relative aspect-[4/3] w-[85%] shrink-0 snap-start overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 sm:aspect-[3/4] sm:w-auto ${
                  i === 1 ? "sm:mt-10" : ""
                }`}
              >
                <Image
                  src={src}
                  alt={`${veg.name} – ảnh ${i + 1}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 85vw"
                  className="object-cover"
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-8 sm:py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {hasContent ? (
            <div className="grid gap-4 sm:gap-8 lg:grid-cols-3">
              <div className="space-y-4 sm:space-y-8 lg:col-span-2">
                {veg.description && (
                  <Block title="Mô tả">
                    <p className="leading-relaxed">{veg.description}</p>
                  </Block>
                )}
                {veg.nutrients && (
                  <Block title="Dinh dưỡng nổi bật">
                    <p className="leading-relaxed">{veg.nutrients}</p>
                  </Block>
                )}
                {veg.benefits?.length ? (
                  <Block title="Công dụng">
                    <ul className="space-y-3 sm:space-y-4">
                      {veg.benefits.map((b, i) => (
                        <li key={i} className="flex gap-3 sm:gap-4">
                          <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-sand-600" aria-hidden />
                          <p className="leading-relaxed">
                            {b.title && <strong className="font-semibold text-forest">{b.title}: </strong>}
                            {b.text}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Block>
                ) : null}
              </div>

              <aside className="space-y-4 sm:space-y-6 lg:sticky lg:top-28 lg:self-start">
                {veg.suitableFor && (
                  <div className="rounded-3xl bg-forest p-5 text-white sm:p-7">
                    <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-sand">Phù hợp với</h2>
                    <p className="mt-3 font-serif text-lg leading-snug sm:text-xl">{veg.suitableFor}</p>
                  </div>
                )}
                {veg.notes && (
                  <div className="rounded-3xl border-2 border-sand bg-white p-5 sm:p-7">
                    <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sand-600">
                      <span aria-hidden>⚠</span> Lưu ý
                    </h2>
                    <p className="mt-3 leading-relaxed text-forest/85">{veg.notes}</p>
                  </div>
                )}
              </aside>
            </div>
          ) : (
            <p className="rounded-3xl border border-dashed border-sand py-20 text-center text-forest/60">
              Thông tin dinh dưỡng của {veg.name.toLowerCase()} đang được cập nhật.
            </p>
          )}

          <nav className="mt-10 grid grid-cols-2 gap-2 border-t border-sand pt-6 sm:mt-16 sm:gap-4 sm:pt-8">
            {prev ? <PagerLink veg={prev} label="← Trước" /> : <span />}
            {next && <PagerLink veg={next} label="Tiếp theo →" align="right" />}
          </nav>
        </div>
      </section>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-sand/60 bg-white p-5 text-[15px] text-forest/85 shadow-sm sm:p-7 sm:text-base md:p-9">
      <h2 className="mb-3 font-serif text-xl text-forest sm:mb-4 sm:text-2xl">{title}</h2>
      {children}
    </div>
  );
}

function PagerLink({
  veg,
  label,
  align,
}: {
  veg: { slug: string; name: string };
  label: string;
  align?: "right";
}) {
  return (
    <Link
      href={`/rau/${veg.slug}`}
      className={`group rounded-2xl p-3 transition hover:bg-white active:bg-white sm:p-4 ${align === "right" ? "text-right" : ""}`}
    >
      <span className="text-sm text-forest/50">{label}</span>
      <span className="mt-1 block font-serif text-base text-forest sm:text-xl group-hover:text-forest-700">{veg.name}</span>
    </Link>
  );
}
