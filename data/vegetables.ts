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
  {
    slug: "cai-ngot",
    name: "Cải ngọt",
    images: ["/images/cai-ngot/cai-ngot-1.jpg", "/images/cai-ngot/cai-ngot-2.jpg"],
    type: "Rau",
    scientificName: "Brassica rapa subsp. parachinensis – choy sum",
    family: "Họ Cải",
    description:
      "Thân và lá xanh nhạt, mềm, vị ngọt thanh, ít cay; nấu canh, xào, luộc.",
    nutrientTags: ["Vitamin A", "Vitamin C", "Vitamin K", "Folate", "Canxi"],
    nutrients: "Vitamin A, C, K, folate, canxi.",
    benefits: [
      { title: "Vitamin A, C", text: "hỗ trợ mắt, da và đề kháng." },
      {
        title: "Canxi, folate, chất xơ",
        text: "bổ sung khoáng chất, hỗ trợ tiêu hóa.",
      },
      { text: "Vị ngọt thanh, dễ ăn, hợp nấu canh và nhúng lẩu." },
      { text: "Dân gian xem là rau mát, thanh đạm." },
    ],
    suitableFor: "Mọi lứa tuổi, nhất là trẻ nhỏ và người cần món thanh đạm.",
    notes: "Người dùng warfarin lưu ý vitamin K.",
  },
  {
    slug: "rau-den",
    name: "Rau dền",
    images: ["/images/rau-den/rau-den-1.webp", "/images/rau-den/rau-den-2.webp"],
    type: "Rau",
    scientificName: "Amaranthus spp.",
    family: "Họ Dền – Amaranthaceae; phổ biến: dền cơm, dền đỏ",
    description:
      "Lá xanh hoặc đỏ tía, thân mềm, hơi nhớt, vị ngọt nhạt. Dùng nấu canh, luộc.",
    nutrientTags: ["Sắt", "Canxi", "Magie", "Vitamin A", "Vitamin C", "Vitamin K"],
    nutrients:
      "Sắt, canxi, magie, vitamin A, C, K; dền đỏ chứa betalain/anthocyanin.",
    benefits: [
      {
        title: "Sắt",
        text: "hỗ trợ tạo máu, tốt cho người thiếu sắt do chế độ ăn (nên ăn kèm nguồn vitamin C như cà chua, chanh để hấp thu tốt hơn).",
      },
      {
        title: "Vitamin A, C, K và magie",
        text: "hỗ trợ mắt, đề kháng, xương.",
      },
      { text: "Chất xơ giúp nhuận tràng." },
      { text: "Dền đỏ chứa sắc tố betalain/anthocyanin chống oxy hóa." },
    ],
    suitableFor: "Phụ nữ, người ăn chay (không thay thế thuốc điều trị thiếu máu).",
    notes:
      "Hàm lượng oxalat cao: người có tiền sử sỏi thận nên hạn chế; luôn nấu chín. Canxi và sắt từ rau dền hấp thu hạn chế do oxalat.",
  },
  {
    slug: "rau-ma",
    name: "Rau má",
    images: ["/images/rau-ma/rau-ma-1.jpg", "/images/rau-ma/rau-ma-2.jpeg"],
    type: "Rau",
    scientificName: "Centella asiatica",
    family: "Họ Hoa tán – Apiaceae",
    description:
      "Cây thân bò, lá tròn hình quạt, mép khía, vị nhạt hơi đắng, tính mát. Dùng ăn sống, xay nước uống, nấu canh.",
    nutrientTags: ["Triterpenoid saponin", "Flavonoid", "Vitamin C", "β-carotene"],
    nutrients:
      "Triterpenoid saponin (asiaticoside, madecassoside), flavonoid, vitamin C, β-carotene.",
    benefits: [
      { text: "Dân gian dùng giải nhiệt, thanh mát cơ thể." },
      {
        title: "Hợp chất triterpenoid (asiaticoside, madecassoside)",
        text: "có nghiên cứu về hỗ trợ làm lành da và giảm sẹo, chủ yếu ở dạng chiết xuất bôi ngoài da.",
      },
      { text: "Cung cấp vitamin A, C." },
      { text: "Thường dùng xay nước uống hoặc ăn sống kèm món cuốn." },
    ],
    suitableFor: "Người thích đồ uống thanh mát vào ngày nóng; hạn chế nếu hay lạnh bụng.",
    notes:
      "Tính hàn: người lạnh bụng, hay tiêu chảy nên hạn chế. Phụ nữ mang thai, người bệnh gan nên hỏi ý kiến bác sĩ trước khi dùng thường xuyên hoặc dạng chiết xuất.",
  },
  {
    slug: "rau-mong-toi",
    name: "Rau mồng tơi",
    images: [
      "/images/rau-mong-toi/rau-mong-toi-1.jpg",
      "/images/rau-mong-toi/rau-mong-toi-2.jpg",
    ],
    type: "Rau",
    scientificName: "Basella alba",
    family: "Họ Mồng tơi – Basellaceae",
    description:
      "Dây leo, lá dày bóng, mọng nước, có chất nhớt đặc trưng, vị ngọt mát. Nấu canh với tôm, cua, mướp.",
    nutrientTags: ["Vitamin A", "Vitamin C", "Folate", "Sắt", "Canxi", "Chất xơ"],
    nutrients:
      "Vitamin A, C, folate, sắt, canxi, chất xơ; chất nhầy (mucilage).",
    benefits: [
      {
        title: "Nhuận tràng",
        text: "chất nhầy và chất xơ giúp giảm táo bón.",
      },
      { title: "Vitamin A, C", text: "hỗ trợ mắt và đề kháng." },
      { title: "Sắt, canxi, folate", text: "bổ sung khoáng chất." },
      { text: "Dân gian xem là rau mát, hợp mùa nóng." },
    ],
    suitableFor: "Người hay táo bón; hợp nấu canh cua, tôm.",
    notes:
      "Tính hàn: người lạnh bụng, tiêu chảy nên hạn chế. Có oxalat, người sỏi thận lưu ý.",
  },
  {
    slug: "rau-lang",
    name: "Rau lang",
    images: ["/images/rau-lang/rau-lang-1.jpg", "/images/rau-lang/rau-lang-2.jpeg"],
    type: "Rau",
    scientificName: "Ipomoea batatas – ngọn khoai lang",
    family: "Họ Bìm bìm – Convolvulaceae",
    description:
      "Ngọn và lá non, hình tim hoặc xẻ thùy, mềm, vị ngọt nhẹ. Luộc, xào tỏi, nấu canh.",
    nutrientTags: ["Vitamin K", "Vitamin A", "Vitamin C", "Chất xơ", "Polyphenol", "Lutein"],
    nutrients:
      "Vitamin K, A, C, chất xơ, polyphenol; giống lá tím chứa anthocyanin; có lutein.",
    benefits: [
      { title: "Vitamin K, A và lutein", text: "hỗ trợ xương, mắt." },
      { title: "Polyphenol, anthocyanin (giống lá tím)", text: "chống oxy hóa." },
      { text: "Chất xơ giúp tiêu hóa và no lâu." },
      { text: "Một số nghiên cứu sơ bộ gợi ý hỗ trợ đường huyết (chưa thay thế điều trị)." },
    ],
    suitableFor: "Người muốn đa dạng rau lá, ăn thanh đạm.",
    notes: "Nhiều vitamin K – lưu ý với warfarin.",
  },
  {
    slug: "rau-muong",
    name: "Rau muống (có lá)",
    images: ["/images/rau-muong/rau-muong-1.jpg", "/images/rau-muong/rau-muong-2.webp"],
    type: "Rau",
    scientificName: "Ipomoea aquatica",
    family: "Họ Bìm bìm – Convolvulaceae",
    description:
      "Thân rỗng, lá hình mũi tên, vị ngọt nhạt, tính mát. Trồng nước hoặc cạn; luộc, xào tỏi, nấu canh.",
    nutrientTags: ["Vitamin A", "Vitamin C", "Sắt", "Canxi", "Chất xơ"],
    nutrients:
      "Vitamin A (carotenoid), C, sắt, canxi, chất xơ; phần lá giàu dưỡng chất hơn cọng.",
    benefits: [
      { title: "Vitamin A (carotenoid), C", text: "hỗ trợ mắt và đề kháng." },
      { title: "Sắt, chất xơ", text: "hỗ trợ tạo máu và tiêu hóa." },
      { text: "Ít calo, dễ ăn, hợp nhiều món (xào tỏi, luộc, canh)." },
      { text: "Dân gian dùng giải nhiệt." },
    ],
    suitableFor: "Người cần bổ sung rau xanh trong bữa ăn thường ngày.",
    notes:
      "Rau muống trồng nước ở nguồn ô nhiễm có thể nhiễm ký sinh trùng (sán lá ruột) hoặc kim loại nặng: nên mua nơi uy tín, rửa kỹ và nấu chín. Tính hàn, người lạnh bụng ăn vừa phải.",
  },
  {
    slug: "rau-muong-cong",
    name: "Rau muống cọng",
    images: [
      "/images/rau-muong-cong/rau-muong-cong-1.jpg",
      "/images/rau-muong-cong/rau-muong-cong-2.jpg",
    ],
    type: "Rau",
    scientificName: "Ipomoea aquatica, phần cọng",
    family: "Họ Bìm bìm",
    description:
      "Phần thân rỗng, giòn, mọng nước, ít lá; dùng xào, làm gỏi, ăn sống kèm bún (thân chẻ).",
    nutrientTags: ["Nước", "Chất xơ", "Vitamin C"],
    nutrients: "Nước, chất xơ, một ít vitamin C; ít carotenoid hơn phần lá.",
    benefits: [
      { text: "Giòn mát; chất xơ giúp no và nhuận tràng." },
      { text: "Nhiều nước, ít calo." },
      { text: "Ăn sống kèm bún, gỏi giúp cân bằng món béo, chiên." },
      { text: "Phần cọng ít vitamin hơn phần lá nhưng nhiều nước và giòn." },
    ],
    suitableFor: "Người muốn món giòn nhẹ, kiểm soát cân nặng.",
    notes:
      "Nếu ăn sống: phải rửa thật sạch, nguồn trồng đảm bảo (nguy cơ ký sinh trùng ở rau trồng nước).",
  },
  {
    slug: "cai-bo-xoi",
    name: "Cải bó xôi",
    images: ["/images/cai-bo-xoi/cai-bo-xoi-1.webp", "/images/cai-bo-xoi/cai-bo-xoi-2.webp"],
    type: "Rau",
    scientificName: "Spinacia oleracea – rau chân vịt, spinach",
    family: "Họ Dền",
    description:
      "Lá xanh đậm, mềm, hơi nhớt, vị nhạt ngọt. Dùng xào, nấu canh, salad lá non, sinh tố.",
    nutrientTags: ["Lutein", "Zeaxanthin", "Vitamin K", "Vitamin A", "Vitamin C", "Folate"],
    nutrients: "Lutein, zeaxanthin, vitamin K, A, C, folate, magie, sắt (không-heme).",
    benefits: [
      { title: "Lutein, zeaxanthin", text: "bảo vệ mắt, đặc biệt với người dùng màn hình nhiều." },
      { title: "Folate", text: "tạo máu, cần cho thai kỳ." },
      { title: "Vitamin K, magie", text: "hỗ trợ xương và tim mạch." },
      { text: "Chất chống oxy hóa giúp bảo vệ tế bào." },
    ],
    suitableFor: "Người làm việc nhiều với máy tính, phụ nữ.",
    notes:
      "Oxalat cao: người sỏi thận (canxi oxalat) nên hạn chế. Rất nhiều vitamin K: lưu ý với warfarin.",
  },
  {
    slug: "cai-thao",
    name: "Cải thảo",
    images: ["/images/cai-thao/cai-thao-1.webp", "/images/cai-thao/cai-thao-2.webp"],
    type: "Rau",
    scientificName: "Brassica rapa subsp. pekinensis",
    family: "Họ Cải",
    description:
      "Lá xếp thành bắp dài, trắng ngà viền xanh nhạt, mọng nước, ngọt, ít xơ. Dùng nấu canh, xào, lẩu, làm kim chi.",
    nutrientTags: ["Nhiều nước", "Ít calo", "Vitamin C", "Vitamin K", "Folate", "Chất xơ"],
    nutrients: "Nhiều nước, ít calo; vitamin C, K, folate, chất xơ.",
    benefits: [
      { title: "Nhiều nước, ít calo", text: "phù hợp chế độ ăn giảm cân." },
      { title: "Chất xơ, vitamin C", text: "hỗ trợ tiêu hóa và đề kháng." },
      { text: "Vị ngọt, ngon khi nhúng lẩu; giúp cân bằng món nhiều đạm, béo." },
      { text: "Cải thảo muối chua (kim chi) cung cấp lợi khuẩn." },
    ],
    suitableFor: "Người ăn lẩu, người ăn kiêng.",
    notes: "Kim chi/cải muối nhiều natri. Người dùng warfarin lưu ý vitamin K.",
  },
  {
    slug: "cai-ro",
    name: "Cải rổ",
    images: ["/images/cai-ro/cai-ro-1.jpg", "/images/cai-ro/cai-ro-2.jpg"],
    type: "Rau",
    scientificName: "Brassica oleracea var. alboglabra – cải làn, Chinese broccoli",
    family: "Họ Cải",
    description:
      "Thân dày xanh, lá lớn, có nụ hoa trắng, vị ngọt hơi đắng nhẹ; xào dầu hào, luộc, nhúng lẩu.",
    nutrientTags: ["Canxi", "Vitamin K", "Vitamin C", "Vitamin A", "Folate", "Glucosinolate"],
    nutrients: "Canxi, vitamin K, C, A, folate; glucosinolate.",
    benefits: [
      { title: "Canxi hấp thu tốt (ít oxalat)", text: "hỗ trợ xương, răng." },
      { title: "Vitamin K, C", text: "xương và đề kháng." },
      { text: "Chất chống oxy hóa glucosinolate đặc trưng của rau họ Cải." },
      { text: "Vị ngọt đậm, hợp xào dầu hào hoặc nhúng lẩu." },
    ],
    suitableFor: "Người cần bổ sung canxi, người không uống sữa.",
    notes: "Vitamin K cao – lưu ý với warfarin. Có thể hơi đắng với trẻ nhỏ.",
  },
  {
    slug: "bi-do",
    name: "Bí đỏ",
    images: ["/images/bi-do/bi-do-1.jpg", "/images/bi-do/bi-do-2.jpg"],
    type: "Củ",
    scientificName: "Cucurbita spp.",
    family: "Họ Bầu bí – Cucurbitaceae",
    description:
      "Quả tròn, vỏ cứng, thịt vàng cam, ngọt bùi. Nấu canh, hầm, xào, nấu cháo; hạt ăn được.",
    nutrientTags: ["β-carotene", "Kali", "Chất xơ", "Vitamin C", "Kẽm", "Magie"],
    nutrients:
      "β-carotene (tiền vitamin A), kali, chất xơ, vitamin C; hạt chứa kẽm, magie, chất béo tốt.",
    benefits: [
      { title: "β-carotene", text: "mắt, da và miễn dịch." },
      { title: "Kali", text: "hỗ trợ huyết áp; chất xơ: nhuận tràng." },
      { text: "Vị ngọt bùi, mềm, dễ tiêu, thường dùng nấu cháo, canh." },
      { text: "Hạt bí chứa kẽm, magie." },
    ],
    suitableFor: "Trẻ em, người lớn tuổi, người cần món bổ nhẹ.",
    notes:
      "Chứa tinh bột/đường tự nhiên: người tiểu đường nên ăn lượng vừa phải. Ăn rất nhiều có thể làm da hơi vàng (vô hại).",
  },
  {
    slug: "bong-cai-xanh",
    name: "Bông cải xanh",
    images: [
      "/images/bong-cai-xanh/bong-cai-xanh-1.webp",
      "/images/bong-cai-xanh/bong-cai-xanh-2.jpg",
    ],
    type: "Rau",
    scientificName: "Brassica oleracea var. italica – súp lơ xanh",
    family: "Họ Cải",
    description: "Búp hoa xanh đậm, thân giòn, vị ngọt nhẹ; hấp, luộc, xào.",
    nutrientTags: ["Vitamin C", "Vitamin K", "Folate", "Chất xơ", "Glucosinolate", "Sulforaphane"],
    nutrients:
      "Vitamin C, K, folate, chất xơ; glucosinolate tạo sulforaphane khi cắt hoặc nhai.",
    benefits: [
      {
        title: "Sulforaphane và vitamin C",
        text: "chống oxy hóa; nghiên cứu dịch tễ liên quan đến giảm nguy cơ một số bệnh mạn tính (không phải thuốc điều trị).",
      },
      { title: "Vitamin K, folate", text: "hỗ trợ xương và thai kỳ." },
      { text: "Chất xơ giúp tiêu hóa và no lâu." },
      { text: "Hấp hoặc luộc ngắn giúp giữ dưỡng chất tốt hơn." },
    ],
    suitableFor: "Người quan tâm tim mạch, người giảm cân.",
    notes:
      "Hấp hoặc luộc ngắn để giữ dưỡng chất. Lưu ý vitamin K với warfarin; ăn nhiều dễ đầy hơi.",
  },
  {
    slug: "ca-tim",
    name: "Cà tím",
    images: ["/images/ca-tim/ca-tim-1.jpg", "/images/ca-tim/ca-tim-2.jpg"],
    type: "Củ",
    scientificName: "Solanum melongena",
    family: "Họ Cà – Solanaceae",
    description: "Quả dài hoặc tròn, vỏ tím bóng, ruột xốp trắng, vị nhạt. Nướng, xào, kho, chiên.",
    nutrientTags: ["Chất xơ", "Kali", "Mangan", "Anthocyanin", "Ít calo"],
    nutrients: "Chất xơ, kali, mangan; vỏ chứa anthocyanin (nasunin); ít calo.",
    benefits: [
      { title: "Nasunin ở vỏ", text: "chống oxy hóa, bảo vệ tế bào." },
      { title: "Chất xơ, kali", text: "hỗ trợ tiêu hóa và tim mạch." },
      { text: "Ít calo nếu nướng hoặc hấp (nếu chiên sẽ hút nhiều dầu)." },
      { text: "Một số nghiên cứu sơ bộ về giảm cholesterol." },
    ],
    suitableFor: "Người ăn kiêng, người thích món nướng.",
    notes:
      "Ruột hút nhiều dầu khi chiên → tăng calo. Nên nấu chín, không ăn sống. Người dị ứng họ Cà lưu ý.",
  },
];

export function getVegetable(slug: string) {
  return vegetables.find((v) => v.slug === slug);
}
