export type Benefit = {
  /** Phần in đậm trước dấu ":" — bỏ trống nếu câu không có tiêu đề */
  title?: string;
  text: string;
};

export type Vegetable = {
  slug: string;
  name: string;
  images: string[];
  /** Nhóm hiển thị trong bộ lọc, ví dụ "Rau", "Củ", "Nấm" */
  type?: string;
  scientificName?: string;
  family?: string;
  description?: string;
  /** Các chất nổi bật, hiển thị dạng thẻ nhỏ */
  nutrientTags?: string[];
  nutrients?: string;
  benefits?: Benefit[];
  suitableFor?: string;
  notes?: string;
};

export const vegetables: Vegetable[] = [
  {
    slug: "bap-cai-trang",
    name: "Bắp cải trắng",
    images: ["/images/bap-cai-trang/bap-cai-1.jpg", "/images/bap-cai-trang/bap-cai-2.webp"],
    type: "Rau",
    scientificName: "Brassica oleracea var. capitata",
    family: "Họ Cải – Brassicaceae",
    description:
      "Lá xếp cuộn chặt thành bắp tròn, màu trắng xanh, giòn, vị ngọt nhẹ. Ăn sống (salad, dưa muối) hoặc nấu chín.",
    nutrientTags: ["Vitamin C", "Vitamin K", "Folate", "Chất xơ", "Glucosinolate"],
    nutrients:
      "Vitamin C, vitamin K, folate, chất xơ; chứa glucosinolate (hợp chất lưu huỳnh đặc trưng của rau họ Cải).",
    benefits: [
      {
        title: "Tốt cho tiêu hóa",
        text: "chất xơ giúp nhuận tràng, hạn chế táo bón; bắp cải lên men (kim chi, dưa cải) cung cấp thêm lợi khuẩn.",
      },
      {
        title: "Tăng đề kháng",
        text: "vitamin C giúp bảo vệ tế bào và hỗ trợ hệ miễn dịch.",
      },
      { text: "Hỗ trợ xương và quá trình đông máu nhờ vitamin K." },
      { text: "Ít calo, nhiều nước, giúp no lâu – cân bằng bữa buffet nhiều đạm và đồ béo." },
      { text: "Dân gian dùng nước ép bắp cải cho đau dạ dày (bằng chứng hiện đại còn hạn chế)." },
    ],
    suitableFor: "Người hay táo bón, người muốn kiểm soát cân nặng.",
    notes:
      "Người dùng thuốc chống đông warfarin nên giữ lượng ăn ổn định (do vitamin K). Ăn nhiều dễ đầy hơi.",
  },
  {
    slug: "bap-chuoi-bao",
    name: "Bắp chuối bào",
    images: ["/images/bap-chuoi-bao/bap-chuoi-1.jpg", "/images/bap-chuoi-bao/hoa-chuoi-2.webp"],
    type: "Rau",
    scientificName: "Cụm hoa chuối chưa nở (Musa spp.)",
    family: "Họ Chuối – Musaceae",
    description:
      "Búp hoa màu tím đỏ, bẹ hoa thái mỏng, vị chát nhẹ, giòn. Thường ngâm nước chanh hoặc giấm để bớt chát và không bị thâm; ăn kèm bún, gỏi.",
    nutrientTags: ["Chất xơ", "Tannin", "Flavonoid", "Kali", "Magie"],
    nutrients: "Chất xơ, tannin, flavonoid, kali, magie.",
    benefits: [
      { title: "Chất xơ cao", text: "giúp nhuận tràng, no lâu, hỗ trợ kiểm soát cân nặng." },
      { title: "Chứa kali, magie", text: "hỗ trợ hoạt động của cơ và cân bằng điện giải." },
      { title: "Tannin và flavonoid", text: "có tác dụng chống oxy hóa." },
      { text: "Ăn kèm bún, gỏi, món chiên béo giúp đỡ ngấy, dễ tiêu hơn." },
      { text: "Dân gian dùng để lợi sữa cho mẹ sau sinh; một số nghiên cứu sơ bộ về hỗ trợ đường huyết." },
    ],
    suitableFor: "Người cần bổ sung chất xơ, người thích món gỏi, bún.",
    notes: "Vị chát, ăn nhiều có thể gây đầy bụng, táo bón ở một số người.",
  },
];

export function getVegetable(slug: string) {
  return vegetables.find((v) => v.slug === slug);
}
