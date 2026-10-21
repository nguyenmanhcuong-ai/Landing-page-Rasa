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
  {
    slug: "cai-xanh",
    name: "Cải xanh",
    images: ["/images/cai-xanh/cai-xanh-1.webp", "/images/cai-xanh/cai-xanh-2.webp"],
    type: "Rau",
    scientificName: "Brassica juncea – cải bẹ xanh",
    family: "Họ Cải",
    description:
      "Bẹ và lá to, xanh đậm, vị cay nồng nhẹ (do isothiocyanate). Dùng nấu canh, xào, muối dưa.",
    nutrientTags: ["Vitamin A", "Vitamin C", "Vitamin K", "Folate", "Canxi"],
    nutrients: "Vitamin A (carotenoid), C, K, folate, canxi.",
    benefits: [
      { title: "Vitamin A", text: "tốt cho mắt, da và niêm mạc." },
      { title: "Vitamin C và chất chống oxy hóa", text: "hỗ trợ đề kháng." },
      {
        title: "Vitamin K, canxi",
        text: "góp phần cho xương chắc khỏe và đông máu bình thường.",
      },
      {
        text: "Vị cay nhẹ kích thích tiêu hóa; dân gian dùng hỗ trợ long đờm, giảm ho.",
      },
    ],
    suitableFor: "Người muốn tăng lượng rau xanh đậm; ăn kèm lẩu, đồ nướng.",
    notes:
      "Nhiều vitamin K – người dùng warfarin cần lưu ý. Cải muối chua có nhiều natri, người cao huyết áp nên hạn chế.",
  },
  {
    slug: "cai-be-xanh-con",
    name: "Cải bẹ xanh con",
    images: [
      "/images/cai-be-xanh-con/cai-be-xanh-non-1.jpg",
      "/images/cai-be-xanh-con/cai-be-xanh-non-2.jpg",
    ],
    type: "Rau",
    scientificName: "Brassica juncea, thu hoạch khi còn non",
    family: "Họ Cải",
    description:
      "Cây nhỏ, lá mềm, ít cay và ít xơ hơn cải bẹ xanh trưởng thành; phù hợp nấu canh, xào nhanh.",
    nutrientTags: ["Vitamin A", "Vitamin C", "Vitamin K", "Folate", "Chất xơ"],
    nutrients:
      "Tương tự cải xanh: vitamin A, C, K, folate; hàm lượng chất xơ thấp hơn cải già.",
    benefits: [
      { title: "Cung cấp vitamin A, C", text: "hỗ trợ mắt, da và miễn dịch." },
      { title: "Mềm, ít cay, ít xơ", text: "dễ nhai, dễ tiêu." },
      { text: "Chất xơ nhẹ nhàng giúp nhuận tràng." },
      { text: "Bổ sung khoáng chất và chất chống oxy hóa cho bữa ăn." },
    ],
    suitableFor: "Trẻ em, người lớn tuổi, người mới tập ăn rau cải.",
    notes: "Như cải xanh (vitamin K với người dùng warfarin).",
  },
  {
    slug: "cai-ngong",
    name: "Cải ngồng",
    images: ["/images/cai-ngong/cai-ngong-1.jpg", "/images/cai-ngong/cai-ngong-2.jpg"],
    type: "Rau",
    scientificName:
      "Rau họ Cải trổ ngồng, thường là cải ngọt/cải bẹ (Brassica rapa var. parachinensis)",
    description:
      "Phần ăn là thân hoa non (ngồng) mọc cao, có nụ hoặc hoa vàng nhỏ, giòn, vị ngọt nhẹ, ít xơ khi còn non.",
    nutrientTags: ["Vitamin C", "Vitamin A", "Vitamin K", "Folate", "Canxi"],
    nutrients: "Vitamin C, A, K, folate, canxi.",
    benefits: [
      {
        title: "Folate",
        text: "cần cho phụ nữ chuẩn bị mang thai và đang mang thai (trong chế độ ăn đa dạng).",
      },
      { title: "Vitamin C, K, canxi", text: "hỗ trợ đề kháng, xương." },
      { text: "Chất xơ giúp tiêu hóa, giữ cảm giác no." },
      { text: "Ngồng non giòn ngọt, ít xơ, dễ ăn." },
    ],
    suitableFor: "Phụ nữ mang thai, người cần bổ sung khoáng chất.",
    notes: "Chọn ngồng non; ngồng già nhiều xơ. Người dùng warfarin lưu ý vitamin K.",
  },
  {
    slug: "cai-thia",
    name: "Cải thìa",
    images: ["/images/cai-thia/cai-thia-1.jpg", "/images/cai-thia/cai-thia-2.jpg"],
    type: "Rau",
    scientificName: "Brassica rapa subsp. chinensis – bok choy",
    family: "Họ Cải",
    description:
      "Bẹ trắng mập, lá xanh đậm, giòn, vị ngọt thanh, ít cay. Dùng xào, nấu canh, nhúng lẩu.",
    nutrientTags: ["Vitamin A", "Vitamin C", "Vitamin K", "Canxi", "Folate", "Ít calo"],
    nutrients: "Vitamin A, C, K, canxi, folate; ít calo.",
    benefits: [
      { title: "Canxi hấp thu khá tốt (ít oxalat)", text: "hỗ trợ xương và răng." },
      { title: "Vitamin A, C, K", text: "tốt cho mắt, đề kháng và đông máu." },
      { text: "Ít calo, giòn ngọt, tạo cảm giác no nhẹ." },
      { text: "Chất chống oxy hóa đặc trưng của rau họ Cải." },
    ],
    suitableFor: "Người cần bổ sung canxi từ thực vật, người ăn kiêng.",
    notes: "Người dùng warfarin lưu ý vitamin K.",
  },
];

export function getVegetable(slug: string) {
  return vegetables.find((v) => v.slug === slug);
}
