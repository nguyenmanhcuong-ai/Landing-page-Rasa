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
  {
    slug: "cai-cau-vong",
    name: "Cải cầu vồng",
    images: ["/images/cai-cau-vong/cai-cau-vong-1.webp", "/images/cai-cau-vong/cai-cau-vong-2.jpg"],
    type: "Rau",
    scientificName: "Beta vulgaris subsp. vulgaris (nhóm Cicla) – rainbow chard",
    family: "Họ Dền",
    description:
      "Cuống nhiều màu (đỏ, vàng, cam, trắng), lá xanh đậm, vị ngọt đất nhẹ; xào, luộc, ăn sống lá non.",
    nutrientTags: ["Vitamin K", "Vitamin A", "Vitamin C", "Magie", "Kali", "Betalain"],
    nutrients: "Vitamin K, A, C, magie, kali; cuống đỏ chứa betalain.",
    benefits: [
      { title: "Vitamin K", text: "hỗ trợ xương." },
      { title: "Magie, kali", text: "hỗ trợ cơ bắp và huyết áp." },
      { title: "Betalain (cuống đỏ)", text: "chống oxy hóa." },
      { text: "Màu sắc đẹp, ăn lạ miệng, dùng trong salad, xào, hấp." },
    ],
    suitableFor: "Người thích rau lạ, người ăn salad.",
    notes: "Oxalat cao: người sỏi thận hạn chế. Vitamin K cao: lưu ý với warfarin.",
  },
  {
    slug: "cai-xoan",
    name: "Cải xoăn",
    images: ["/images/cai-xoan/cai-xoan-1.webp", "/images/cai-xoan/cai-xoan-2.jpg"],
    type: "Rau",
    scientificName: "Brassica oleracea var. sabellica – kale",
    family: "Họ Cải",
    description: "Lá xanh đậm, mép xoăn, dày, vị hơi đắng; dùng salad, sinh tố, xào, nướng giòn.",
    nutrientTags: ["Vitamin K", "Vitamin C", "Vitamin A", "Lutein", "Canxi", "Chất xơ"],
    nutrients: "Vitamin K, C, A, lutein, canxi (hấp thu tốt), chất xơ.",
    benefits: [
      { title: "Lutein", text: "tốt cho mắt." },
      { title: "Vitamin K, C, A", text: "xương, đề kháng, mắt." },
      { text: "Canxi hấp thu tốt và chất xơ cao." },
      { text: "Dùng salad, sinh tố, nướng giòn." },
    ],
    suitableFor: "Người ăn theo hướng lành mạnh, ăn kiêng.",
    notes:
      "Vitamin K rất cao: lưu ý với warfarin. Ăn sống số lượng lớn kéo dài có thể ảnh hưởng tuyến giáp ở người đã có bệnh giáp (nấu chín giảm nguy cơ).",
  },
  {
    slug: "bong-cai-xanh-baby",
    name: "Bông cải xanh baby",
    images: [
      "/images/bong-cai-xanh-baby/cai-xanh-baby-1.jpg",
      "/images/bong-cai-xanh-baby/cai-xanh-baby-2.webp",
    ],
    type: "Rau",
    scientificName:
      "Thường là broccolini (lai giữa bông cải xanh và cải rổ) hoặc bông cải xanh búp nhỏ",
    family: "Họ Cải",
    description:
      "Thân dài, mảnh, búp nhỏ, mềm hơn, vị ngọt, ít đắng; thường nấu nhanh (xào, hấp, nướng).",
    nutrientTags: ["Vitamin C", "Vitamin K", "Vitamin A", "Folate", "Chất xơ", "Glucosinolate"],
    nutrients: "Vitamin C, K, A, folate, chất xơ; glucosinolate như bông cải xanh.",
    benefits: [
      { title: "Giống bông cải xanh", text: "vitamin C, K, folate." },
      { text: "Chất xơ hỗ trợ tiêu hóa, no lâu." },
      { text: "Mềm, ngọt, ít đắng hơn nên dễ ăn." },
      { text: "Glucosinolate chống oxy hóa." },
    ],
    suitableFor: "Trẻ em, người thích rau mềm.",
    notes: "Như bông cải xanh. Hỏi nơi bán để biết đúng giống nếu cần.",
  },
  {
    slug: "xa-lach-son-lon",
    name: "Xà lách son lớn",
    images: [
      "/images/xa-lach-son-lon/xa-lach-xoong-lon-1.jpg",
      "/images/xa-lach-son-lon/xa-lach-xoong-lon-2.png",
    ],
    type: "Rau",
    scientificName: "Lactuca sativa – xà lách lá đỏ/son",
    family: "Họ Cúc – Asteraceae",
    description: "Lá xanh viền đỏ tím, mềm giòn, vị ngọt nhẹ, ăn sống (salad, cuốn bánh tráng).",
    nutrientTags: ["Nhiều nước", "Ít calo", "Vitamin K", "Vitamin A", "Anthocyanin"],
    nutrients: "Nhiều nước, ít calo; vitamin K, A; lá đỏ chứa anthocyanin.",
    benefits: [
      { title: "Nhiều nước, ít calo", text: "giải khát, tạo cảm giác no." },
      { title: "Vitamin K, A", text: "hỗ trợ xương, mắt." },
      { title: "Anthocyanin ở lá đỏ", text: "chống oxy hóa." },
      { text: "Giòn mát, ăn kèm đồ nướng, chiên giúp đỡ ngấy." },
    ],
    suitableFor: "Người ăn đồ nướng, chiên; người giảm cân.",
    notes:
      "Ăn sống nên rửa kỹ nhiều lần bằng nước sạch để tránh vi khuẩn, ký sinh trùng, dư lượng thuốc.",
  },
  {
    slug: "chanh-trai",
    name: "Chanh trái",
    images: ["/images/chanh-trai/chanh-trai-1.jpg", "/images/chanh-trai/chanh-trai-2.webp"],
    type: "Củ",
    scientificName: "Citrus aurantiifolia/Citrus × latifolia",
    family: "Họ Cam – Rutaceae",
    description:
      "Quả tròn nhỏ, vỏ xanh hoặc vàng, vị chua gắt, thơm; dùng vắt nước, làm nước chấm, ướp thực phẩm.",
    nutrientTags: ["Vitamin C", "Acid citric", "Flavonoid", "Tinh dầu"],
    nutrients: "Vitamin C, acid citric, flavonoid; tinh dầu ở vỏ.",
    benefits: [
      { title: "Vitamin C", text: "tăng đề kháng." },
      { text: "Giúp hấp thu sắt từ rau, đậu khi ăn cùng." },
      { title: "Acid citric", text: "có thể góp phần giảm nguy cơ sỏi thận." },
      { text: "Vị chua kích thích tiêu hóa, giúp giảm ngấy khi ăn hải sản, đồ béo." },
    ],
    suitableFor: "Người ăn nhiều đồ béo, hải sản.",
    notes:
      "Acid có thể làm mòn men răng và kích ứng người đau dạ dày, trào ngược. Nên pha loãng khi uống.",
  },
  {
    slug: "cu-cai-trang",
    name: "Củ cải trắng",
    images: ["/images/cu-cai-trang/cu-cai-trang-1.jpg", "/images/cu-cai-trang/cu-cai-trang-2.jpg"],
    type: "Củ",
    scientificName: "Raphanus sativus var. longipinnatus",
    family: "Họ Cải",
    description:
      "Củ dài, màu trắng, giòn, vị cay nhẹ khi sống, ngọt dịu khi nấu chín. Nấu canh, kho, muối chua.",
    nutrientTags: ["Nhiều nước", "Vitamin C", "Glucosinolate", "Amylase"],
    nutrients: "Nhiều nước, vitamin C, glucosinolate, men tiêu hóa tự nhiên (amylase).",
    benefits: [
      { title: "Enzym tiêu hóa tự nhiên (amylase)", text: "hỗ trợ tiêu hóa tinh bột." },
      { text: "Nhiều nước, ít calo." },
      { title: "Vitamin C", text: "đề kháng." },
      { text: "Dân gian dùng giảm ho, đầy bụng." },
    ],
    suitableFor: "Người ăn nhiều thịt, hay đầy bụng.",
    notes:
      "Ăn sống nhiều có thể đầy hơi; người có vấn đề tuyến giáp không nên ăn quá nhiều sống.",
  },
  {
    slug: "dau-bap",
    name: "Đậu bắp",
    images: ["/images/dau-bap/dau-bap-1.webp", "/images/dau-bap/dau-bap-2.jpg"],
    type: "Củ",
    scientificName: "Abelmoschus esculentus",
    family: "Họ Bông – Malvaceae",
    description:
      "Quả thon dài, có lông tơ, ruột nhiều hạt và chất nhầy; vị nhạt, hơi nhớt. Luộc, xào, nấu canh chua.",
    nutrientTags: ["Chất xơ hòa tan", "Folate", "Vitamin K", "Vitamin C", "Magie"],
    nutrients: "Chất xơ hòa tan, folate, vitamin K, C, magie.",
    benefits: [
      {
        title: "Chất nhầy và chất xơ hòa tan",
        text: "hỗ trợ giảm cholesterol, làm chậm hấp thu đường (nghiên cứu sơ bộ).",
      },
      { title: "Folate, vitamin K, C", text: "thai kỳ, xương, đề kháng." },
      { text: "Hỗ trợ tiêu hóa." },
      { text: "Ít calo." },
    ],
    suitableFor: "Người quan tâm đường huyết và mỡ máu (không thay thuốc).",
    notes: "Có thể gây đầy hơi ở người nhạy cảm; vitamin K lưu ý với warfarin.",
  },
  {
    slug: "bong-sung",
    name: "Bông súng",
    images: ["/images/bong-sung/bong-sung-1.webp", "/images/bong-sung/bong-sung-2.jpg"],
    type: "Rau",
    scientificName: "Nymphaea spp.",
    family: "Họ Súng – Nymphaeaceae; phần ăn là cuống hoa và hoa non",
    description:
      "Cuống mềm, giòn, rỗng, vị ngọt nhẹ, hơi chát; ăn sống trong gỏi, lẩu mắm hoặc nấu canh.",
    nutrientTags: ["Nước", "Chất xơ", "Ít calo"],
    nutrients: "Nước, chất xơ, một ít vitamin và khoáng; ít calo.",
    benefits: [
      { text: "Giòn mát, ít calo." },
      { text: "Chất xơ hỗ trợ tiêu hóa." },
      { text: "Dân gian xem là rau mát, an thần nhẹ." },
      { text: "Ăn kèm lẩu mắm, gỏi giúp đỡ ngấy." },
    ],
    suitableFor: "Người ăn lẩu mắm, gỏi.",
    notes:
      "Mọc dưới nước nên cần rửa kỹ, nguồn đảm bảo; nên nấu chín nếu không rõ nguồn gốc (nguy cơ ký sinh trùng).",
  },
  {
    slug: "cai-troi",
    name: "Cải trời",
    images: ["/images/cai-troi/cai-troi-1.jpg", "/images/cai-troi/cai-troi-2.jpg"],
    type: "Rau",
    scientificName: "Blumea lacera",
    family: "Họ Cúc; còn gọi kim đầu, cải ma, hạ khô thảo nam",
    description:
      "Cây dại mọc hoang, lá có lông mịn, mùi thơm nồng đặc trưng (tinh dầu chứa cineol); ăn luộc, xào hoặc nấu canh.",
    nutrientTags: ["Tinh dầu", "Flavonoid"],
    nutrients: "Tinh dầu, flavonoid; ít dữ liệu dinh dưỡng chi tiết.",
    benefits: [
      { text: "Dân gian dùng thanh nhiệt, hỗ trợ giảm ho, mụn nhọt." },
      { text: "Mùi thơm đặc trưng (tinh dầu) kích thích vị giác." },
      { text: "Là rau dại ăn được, bổ sung chất xơ và vi chất." },
      { text: "Nghiên cứu hiện đại còn thiếu." },
    ],
    suitableFor: "Người thích rau đặc sản, rau dại.",
    notes:
      "Dùng làm rau ăn thường lành tính; dùng làm thuốc nên hỏi thầy thuốc. Phụ nữ mang thai tránh dùng dạng thuốc sắc.",
  },
  {
    slug: "dau-hu-mieng",
    name: "Đậu hũ miếng",
    images: ["/images/dau-hu-mieng/dau-hu-mieng-1.webp", "/images/dau-hu-mieng/dau-hu-mieng-2.jpg"],
    scientificName: "Chế biến từ đậu nành (Glycine max)",
    family: "Họ Đậu – Fabaceae",
    description:
      "Khối mềm, trắng, vị béo nhẹ; làm từ sữa đậu nành đông tụ bằng muối canxi hoặc nigari.",
    nutrientTags: ["Đạm thực vật", "Isoflavone", "Sắt", "Magie", "Canxi"],
    nutrients:
      "Đạm thực vật đầy đủ amino acid thiết yếu, isoflavone, sắt, magie; canxi cao nếu đông tụ bằng canxi sulfat.",
    benefits: [
      { title: "Đạm thực vật đầy đủ amino acid thiết yếu", text: "thay thế đạm động vật." },
      { title: "Isoflavone", text: "hỗ trợ giảm LDL cholesterol." },
      { text: "Canxi (nếu đông tụ bằng canxi), sắt, magie." },
      { text: "Dễ tiêu, ít cholesterol." },
    ],
    suitableFor: "Người ăn chay, người cao mỡ máu (ăn thay thịt béo), người lớn tuổi.",
    notes:
      "Người dị ứng đậu nành phải tránh. Người suy thận hoặc có bệnh tuyến giáp nên hỏi ý kiến bác sĩ về lượng ăn.",
  },
  {
    slug: "bi-dao",
    name: "Bí đao",
    images: ["/images/bi-dao/bi-dao-1.jpg", "/images/bi-dao/bi-dao-2.jpg"],
    type: "Củ",
    scientificName: "Benincasa hispida",
    family: "Họ Bầu bí",
    description:
      "Quả lớn, vỏ xanh phủ phấn trắng, thịt trắng mọng nước (khoảng 95% nước), vị nhạt. Nấu canh, hầm, nấu nước giải khát.",
    nutrientTags: ["Ít calo", "Nhiều nước", "Vitamin C", "Kali"],
    nutrients: "Rất ít calo, nhiều nước, một ít vitamin C, kali.",
    benefits: [
      { text: "Nhiều nước, giải khát, ít calo." },
      { text: "Giúp no lâu mà ít năng lượng, hỗ trợ giảm cân." },
      { text: "Dân gian xem là mát, lợi tiểu nhẹ." },
      { text: "Dễ tiêu, hợp canh, hầm." },
    ],
    suitableFor: "Người giảm cân, người ăn thanh đạm vào ngày nóng.",
    notes: "Tính hàn: người lạnh bụng, tiêu chảy nên ăn ít.",
  },
  {
    slug: "dot-su",
    name: "Đọt su",
    images: ["/images/dot-su/dot-su-1.jpg", "/images/dot-su/dot-su-2.jpg"],
    type: "Rau",
    scientificName: "Ngọn su su – Sechium edule",
    family: "Họ Bầu bí",
    description: "Ngọn non, mềm, hơi nhớt, vị ngọt thanh; xào tỏi, luộc, nấu canh.",
    nutrientTags: ["Vitamin C", "Folate", "Chất xơ", "Sắt"],
    nutrients: "Vitamin C, folate, chất xơ, một ít sắt.",
    benefits: [
      { title: "Vitamin C, folate", text: "đề kháng, thai kỳ." },
      { title: "Chất xơ", text: "hỗ trợ tiêu hóa." },
      { text: "Mềm ngọt, dễ ăn." },
      { text: "Dân gian dùng giải nhiệt." },
    ],
    suitableFor: "Người cần ăn rau mềm, dễ tiêu.",
    notes: "Rửa kỹ; nấu chín.",
  },
  {
    slug: "dua-leo",
    name: "Dưa leo",
    images: ["/images/dua-leo/dua-leo-1.jpg", "/images/dua-leo/dua-leo-2.webp"],
    type: "Củ",
    scientificName: "Cucumis sativus",
    family: "Họ Bầu bí",
    description:
      "Quả dài, vỏ xanh, ruột mọng nước (hơn 90% nước), giòn, vị mát. Ăn sống, muối chua, làm salad.",
    nutrientTags: ["Nước", "Vitamin K", "Kali", "Chất xơ", "Ít calo"],
    nutrients: "Nước, vitamin K, kali, chất xơ (ở vỏ); rất ít calo.",
    benefits: [
      { text: "Bù nước, giải khát." },
      { text: "Vitamin K, chất xơ (ở vỏ)." },
      { text: "Ít calo, tạo cảm giác no." },
      { text: "Ăn kèm đồ nướng, chiên giúp đỡ ngấy." },
    ],
    suitableFor: "Người giảm cân, người ăn đồ nướng.",
    notes: "Ăn cả vỏ phải rửa kỹ. Dưa muối nhiều natri. Đầu quả đắng do cucurbitacin nên bỏ.",
  },
  {
    slug: "muop-huong",
    name: "Mướp hương",
    images: ["/images/muop-huong/muop-huong-1.webp", "/images/muop-huong/muop-huong-2.jpg"],
    type: "Củ",
    scientificName: "Luffa aegyptiaca/Luffa cylindrica",
    family: "Họ Bầu bí",
    description: "Quả dài, vỏ xanh, thịt mềm ngọt, thơm nhẹ; nấu canh, xào.",
    nutrientTags: ["Nước", "Vitamin C", "Chất xơ", "Kali", "Ít calo"],
    nutrients: "Nước, vitamin C, chất xơ, kali; ít calo.",
    benefits: [
      { text: "Giải nhiệt, thanh mát (dân gian)." },
      { title: "Vitamin C, chất xơ", text: "hỗ trợ tiêu hóa và đề kháng." },
      { text: "Ít calo, mềm ngọt." },
      { text: "Dân gian dùng lợi sữa cho mẹ sau sinh." },
    ],
    suitableFor: "Mẹ sau sinh (theo dân gian), người ăn nhẹ.",
    notes: "Quả mướp bị đắng (cucurbitacin) có thể gây ngộ độc: nếm thấy đắng thì bỏ.",
  },
  {
    slug: "nam-bach-tuyet",
    name: "Nấm bạch tuyết",
    images: ["/images/nam-bach-tuyet/nam-bach-tuyet-1.png", "/images/nam-bach-tuyet/nam-bach-tuyet-2.jpg"],
    type: "Nấm",
    scientificName: "Thường là Hypsizygus tessellatus (giống trắng), còn gọi shimeji trắng, nấm bạch ngọc",
    description: "Nấm mọc thành cụm, mũ nhỏ trắng, thân dài, giòn, ngọt nhẹ.",
    nutrientTags: ["Chất xơ", "Beta-glucan", "Vitamin B", "Kali"],
    nutrients: "Chất xơ, beta-glucan, vitamin B (niacin, riboflavin), kali.",
    benefits: [
      { text: "Đạm thực vật, ít calo." },
      { title: "Vitamin B", text: "tham gia chuyển hóa năng lượng." },
      { title: "Beta-glucan", text: "hỗ trợ miễn dịch (nghiên cứu sơ bộ)." },
      { text: "Chất xơ hỗ trợ tiêu hóa." },
    ],
    suitableFor: "Người ăn chay, người ăn kiêng.",
    notes: "Phải nấu chín, không ăn sống. Người gout nên ăn vừa phải.",
  },
  {
    slug: "nam-bao-ngu",
    name: "Nấm bào ngư",
    images: ["/images/nam-bao-ngu/nam-bao-ngu-1.jpg", "/images/nam-bao-ngu/nam-bao-ngu-2.jpg"],
    type: "Nấm",
    scientificName: "Pleurotus ostreatus",
    family: "Họ Pleurotaceae",
    description: "Mũ hình vỏ sò, thịt dày, dai giòn, vị ngọt đậm; xào, nấu canh, nướng.",
    nutrientTags: ["Đạm thực vật", "Chất xơ", "Vitamin B", "Kali", "Ergothioneine", "Lovastatin"],
    nutrients:
      "Đạm thực vật, chất xơ, vitamin B (niacin, riboflavin), kali, ergothioneine; chứa lovastatin tự nhiên (lượng nhỏ).",
    benefits: [
      {
        title: "Beta-glucan và lovastatin tự nhiên (lượng nhỏ)",
        text: "hỗ trợ cholesterol (nghiên cứu sơ bộ).",
      },
      { title: "Vitamin B, kali", text: "hỗ trợ chuyển hóa, huyết áp." },
      { text: "Đạm thực vật." },
      { title: "Ergothioneine", text: "chất chống oxy hóa." },
    ],
    suitableFor: "Người cao mỡ máu (hỗ trợ), người ăn chay.",
    notes: "Phải nấu chín. Người gout ăn vừa phải; người dị ứng bào tử nấm lưu ý.",
  },
  {
    slug: "nam-dui-ga",
    name: "Nấm đùi gà",
    images: ["/images/nam-dui-ga/nam-dui-ga-1.webp", "/images/nam-dui-ga/nam-dui-ga-2.png"],
    type: "Nấm",
    scientificName: "Pleurotus eryngii – king oyster",
    family: "Họ Pleurotaceae",
    description: "Thân to, chắc, trắng, mũ nâu nhỏ; thịt dày, dai giòn, vị ngọt thanh; xào, nướng, áp chảo.",
    nutrientTags: ["Chất xơ", "Đạm", "Vitamin B", "Kali", "Ergothioneine", "Ít calo"],
    nutrients: "Chất xơ, đạm, vitamin B, kali, ergothioneine; ít calo.",
    benefits: [
      { text: "Thịt dày, dai giòn, có thể thay thịt trong bữa ăn chay." },
      { text: "Chất xơ, đạm thực vật." },
      { title: "Ergothioneine", text: "chất chống oxy hóa." },
      { text: "Ít calo." },
    ],
    suitableFor: "Người ăn chay, người muốn giảm thịt.",
    notes: "Nấu chín. Người gout ăn vừa phải.",
  },
  {
    slug: "nam-kim-cham",
    name: "Nấm kim châm",
    images: ["/images/nam-kim-cham/nam-kim-cham-1.webp", "/images/nam-kim-cham/nam-kim-cham-2.webp"],
    type: "Nấm",
    scientificName: "Flammulina velutipes",
    family: "Họ Physalacriaceae",
    description:
      "Sợi dài, mảnh, mũ nhỏ trắng ngà, giòn, vị ngọt nhẹ; thường dùng nhúng lẩu, nấu canh, cuộn thịt.",
    nutrientTags: ["Chất xơ", "Vitamin B", "Vitamin D2", "Beta-glucan", "Ít calo"],
    nutrients: "Chất xơ, vitamin B, D2 (nếu phơi nắng), beta-glucan; ít calo.",
    benefits: [
      { text: "Ít calo, chất xơ hỗ trợ tiêu hóa." },
      { text: "Vitamin B hỗ trợ chuyển hóa." },
      { text: "Chất chống oxy hóa (nghiên cứu sơ bộ)." },
      { text: "Giòn ngọt, hợp nhúng lẩu." },
    ],
    suitableFor: "Người ăn lẩu (cần nấu chín kỹ).",
    notes:
      "Phải nấu chín kỹ, cắt bỏ phần gốc: nấm kim châm đã từng bị cảnh báo nhiễm Listeria. Phụ nữ mang thai, người suy giảm miễn dịch nên đặc biệt cẩn trọng.",
  },
  {
    slug: "nam-linh-chi-nau",
    name: "Nấm linh chi nâu",
    images: ["/images/nam-linh-chi-nau/nam-linh-chi-nau-1.jpg", "/images/nam-linh-chi-nau/nam-linh-chi-nau-2.jpg"],
    type: "Nấm",
    scientificName: "Ganoderma lucidum",
    family: "Họ Ganodermataceae; thường là linh chi đỏ/nâu",
    description:
      "Nấm gỗ, cứng, hình quạt/thận, bóng, màu nâu đỏ, vị rất đắng. Không ăn như rau; dùng sắc nước, ngâm, chế phẩm.",
    nutrientTags: ["Polysaccharide", "Beta-glucan", "Triterpenoid", "Acid ganoderic"],
    nutrients: "Polysaccharide (beta-glucan), triterpenoid (acid ganoderic).",
    benefits: [
      { text: "Y học cổ truyền dùng để bồi bổ, an thần." },
      {
        title: "Polysaccharide, triterpenoid",
        text: "có nghiên cứu về miễn dịch, mỡ máu nhưng bằng chứng lâm sàng còn hạn chế.",
      },
      { text: "Thường dùng dạng nước sắc hoặc trà, không ăn như rau." },
      { text: "Dùng đều đặn mới thấy hiệu quả (theo kinh nghiệm); không thay thuốc." },
    ],
    suitableFor: "Người thích dược liệu; nên hỏi bác sĩ nếu đang dùng thuốc.",
    notes:
      "Có thể tương tác với thuốc chống đông, thuốc hạ huyết áp, thuốc ức chế miễn dịch. Phụ nữ mang thai, cho con bú nên tránh. Tác dụng phụ có thể gồm khô miệng, rối loạn tiêu hóa.",
  },
  {
    slug: "nam-linh-chi-trang",
    name: "Nấm linh chi trắng",
    images: [
      "/images/nam-linh-chi-trang/nam-linh-chi-trang-1.webp",
      "/images/nam-linh-chi-trang/nam-linh-chi-trang-2.jpg",
    ],
    type: "Nấm",
    scientificName:
      "Tên thương mại; tùy nguồn có thể là biến thể trắng của Ganoderma lucidum hoặc loài linh chi khác",
    description:
      "Quả thể màu trắng/kem; dùng chủ yếu để sắc nước hoặc ngâm; thành phần phụ thuộc loài và nơi trồng.",
    nutrientTags: ["Polysaccharide", "Triterpenoid"],
    nutrients:
      'Polysaccharide, triterpenoid như các loại linh chi khác; dữ liệu riêng cho "linh chi trắng" ít hơn.',
    benefits: [
      { text: "Dùng theo hướng bồi bổ, hỗ trợ miễn dịch như các loại linh chi nói chung." },
      { title: "Polysaccharide, triterpenoid", text: "có nghiên cứu sơ bộ." },
      { text: "Dùng chủ yếu sắc nước, ngâm." },
      { text: "Dữ liệu riêng cho linh chi trắng còn ít." },
    ],
    suitableFor: "Người thích dược liệu; nên hỏi bác sĩ nếu đang dùng thuốc.",
    notes:
      "Nên hỏi nhà cung cấp tên khoa học và nguồn gốc. Lưu ý tương tác thuốc và phụ nữ mang thai/cho con bú như linh chi nâu.",
  },
  {
    slug: "nam-rom",
    name: "Nấm rơm",
    images: ["/images/nam-rom/nam-rom-1.jpg", "/images/nam-rom/nam-rom-2.jpg"],
    type: "Nấm",
    scientificName: "Volvariella volvacea",
    family: "Họ Pluteaceae",
    description: "Mũ tròn hình trứng, màu nâu xám, thịt thơm, ngọt, mềm; xào, nấu canh, kho.",
    nutrientTags: ["Đạm thực vật", "Vitamin B", "Kali", "Phốt-pho", "Chất xơ"],
    nutrients: "Đạm thực vật, vitamin B, kali, phốt-pho; chất xơ.",
    benefits: [
      { title: "Đạm thực vật, vitamin B", text: "bổ sung dinh dưỡng, chuyển hóa năng lượng." },
      { title: "Kali, phốt-pho", text: "cân bằng điện giải, xương." },
      { text: "Chất xơ hỗ trợ tiêu hóa." },
      { text: "Vị ngọt thơm, hợp nấu canh, xào." },
    ],
    suitableFor: "Người ăn chay, người ăn kiêng.",
    notes: "Phải nấu chín. Người gout ăn vừa phải; không nên ăn nấm đã ôi, mốc.",
  },
  {
    slug: "cu-sen",
    name: "Củ sen",
    images: ["/images/cu-sen/cu-sen-1.jpg", "/images/cu-sen/cu-sen-2.jpg"],
    type: "Củ",
    scientificName: "Nelumbo nucifera – thân rễ",
    family: "Họ Sen – Nelumbonaceae",
    description:
      "Thân rễ dài, nhiều đốt, ruột có các lỗ khí, giòn, vị ngọt nhẹ. Nấu canh, hầm xương, muối chua, làm gỏi.",
    nutrientTags: ["Tinh bột", "Chất xơ", "Vitamin C", "Vitamin B6", "Kali"],
    nutrients: "Tinh bột, chất xơ, vitamin C, B6, kali.",
    benefits: [
      { title: "Kali, chất xơ", text: "hỗ trợ tim mạch và tiêu hóa." },
      { text: "Vitamin C, B6." },
      { text: "Y học cổ truyền: củ sen sống tính mát, củ sen chín bổ tỳ." },
      { text: "Giòn, no nhẹ, hợp canh, hầm, gỏi." },
    ],
    suitableFor: "Người ăn thanh đạm, người thích món hầm.",
    notes: "Củ sen mọc dưới bùn: rửa kỹ, nấu chín nếu không rõ nguồn.",
  },
  {
    slug: "bap-non",
    name: "Bắp non",
    images: ["/images/bap-non/bap-non-1.png", "/images/bap-non/bap-non-2.jpg"],
    type: "Củ",
    scientificName: "Zea mays – baby corn",
    family: "Họ Hòa thảo – Poaceae",
    description: "Bắp ngô thu hoạch sớm trước khi thụ phấn, nhỏ, ăn được cả lõi, giòn ngọt.",
    nutrientTags: ["Chất xơ", "Vitamin C", "Folate", "Kali"],
    nutrients: "Chất xơ, vitamin C, folate, kali; ít calo hơn ngô già.",
    benefits: [
      { title: "Chất xơ", text: "no lâu, hỗ trợ tiêu hóa." },
      { text: "Vitamin C, folate." },
      { text: "Ít calo hơn ngô già." },
      { text: "Ngọt giòn, dễ ăn." },
    ],
    suitableFor: "Trẻ em, người giảm cân.",
    notes: "Hàng đóng hộp thường chứa nhiều natri; nên chọn bắp tươi.",
  },
  {
    slug: "tac-trai",
    name: "Tắc trái",
    images: ["/images/tac-trai/tac-trai-1.jpg", "/images/tac-trai/trai-tac-2.jpg"],
    type: "Củ",
    scientificName: "Quất/tắc – Citrus japonica (Fortunella japonica)",
    family: "Họ Cam",
    description: "Quả tròn nhỏ, vỏ cam, ăn được cả vỏ; vị chua thơm, vỏ ngọt nhẹ.",
    nutrientTags: ["Vitamin C", "Flavonoid", "Tinh dầu"],
    nutrients: "Vitamin C, flavonoid, tinh dầu ở vỏ.",
    benefits: [
      { title: "Vitamin C", text: "hỗ trợ đề kháng." },
      { title: "Tinh dầu ở vỏ", text: "thơm, kích thích tiêu hóa." },
      { text: "Dân gian ngâm mật ong dùng giảm ho, đau họng." },
      { text: "Dùng pha nước chấm, trà tắc giải khát." },
    ],
    suitableFor: "Người thích nước chấm, trà tắc.",
    notes:
      "Không cho trẻ dưới 12 tháng dùng mật ong. Ngâm đường nhiều → tăng đường huyết, răng sâu.",
  },
  {
    slug: "tan-o",
    name: "Tần ô",
    images: ["/images/tan-o/tan-o-1.webp", "/images/tan-o/tan-o-2.jpg"],
    type: "Rau",
    scientificName: "Chrysanthemum coronarium – cải cúc",
    family: "Họ Cúc",
    description:
      "Lá xẻ thùy, mùi thơm nồng đặc trưng từ tinh dầu, vị hơi đắng; dùng nhúng lẩu, nấu canh, xào.",
    nutrientTags: ["Vitamin A", "Vitamin C", "Vitamin K", "Kali", "Chất xơ", "Tinh dầu"],
    nutrients: "Vitamin A, C, K, kali, chất xơ; tinh dầu.",
    benefits: [
      { text: "Hương thơm kích thích tiêu hóa, hợp ăn lẩu." },
      { text: "Vitamin A, C, K, kali." },
      {
        text: "Dân gian dùng giảm ho, an thần, hạ huyết áp, lợi sữa (tác dụng chậm, chưa có nghiên cứu lâm sàng chắc chắn).",
      },
      { text: "Chất xơ." },
    ],
    suitableFor: "Người ăn lẩu, người thích rau thơm.",
    notes:
      "Người dị ứng với họ Cúc (cúc, phấn hoa ragweed) có thể bị phản ứng. Vitamin K lưu ý với warfarin.",
  },
  {
    slug: "ca-rot",
    name: "Cà rốt",
    images: ["/images/ca-rot/ca-rot-1.webp", "/images/ca-rot/ca-rot-2.jpg"],
    type: "Củ",
    scientificName: "Daucus carota subsp. sativus",
    family: "Họ Hoa tán – Apiaceae",
    description: "Củ màu cam (hoặc tím, vàng), giòn, ngọt. Ăn sống, nấu canh, hầm, ép nước.",
    nutrientTags: ["β-carotene", "Chất xơ", "Vitamin K", "Kali"],
    nutrients: "β-carotene, chất xơ, vitamin K, kali.",
    benefits: [
      { title: "β-carotene", text: "tốt cho mắt (ngừa thiếu vitamin A), da." },
      { title: "Chất xơ", text: "hỗ trợ tiêu hóa." },
      { text: "Vitamin K, kali." },
      { text: "Ăn chín có dầu mỡ giúp hấp thu β-carotene tốt hơn." },
    ],
    suitableFor: "Trẻ em, người dùng mắt nhiều.",
    notes: "Ăn quá nhiều có thể làm da hơi vàng (vô hại).",
  },
  {
    slug: "ca-chua",
    name: "Cà chua",
    images: ["/images/ca-chua/ca-chua-1.jpg", "/images/ca-chua/ca_chua-2.jpg"],
    type: "Củ",
    scientificName: "Solanum lycopersicum",
    family: "Họ Cà",
    description: "Quả tròn, đỏ khi chín, mọng nước, chua ngọt. Ăn sống, nấu canh, xào, làm sốt.",
    nutrientTags: ["Lycopene", "Vitamin C", "Vitamin K", "Kali", "Folate"],
    nutrients: "Lycopene, vitamin C, K, kali, folate.",
    benefits: [
      { title: "Lycopene", text: "chống oxy hóa (hấp thu tốt hơn khi nấu chín cùng dầu)." },
      { title: "Vitamin C, kali", text: "đề kháng, huyết áp." },
      { text: "Nghiên cứu dịch tễ liên quan đến giảm nguy cơ tim mạch." },
      { text: "Vị chua ngọt kích thích ăn ngon." },
    ],
    suitableFor: "Người cần bổ sung vitamin C, ăn salad, nấu canh.",
    notes: "Acid có thể kích ứng người trào ngược dạ dày.",
  },
  {
    slug: "ca-chua-bi",
    name: "Cà chua bi",
    images: ["/images/ca-chua-bi/ca-chua-bi-1.jpg", "/images/ca-chua-bi/ca-chua-bi-2.jpg"],
    type: "Củ",
    scientificName: "Solanum lycopersicum var. cerasiforme",
    family: "Họ Cà",
    description: "Quả nhỏ, tròn hoặc bầu dục, đỏ/vàng, vị ngọt hơn, ít chua; ăn vặt, salad.",
    nutrientTags: ["Lycopene", "Vitamin C", "Vitamin K", "Kali"],
    nutrients: "Lycopene, vitamin C, K, kali; tương tự cà chua thường.",
    benefits: [
      { text: "Lycopene và vitamin C chống oxy hóa." },
      { text: "Ít calo, ngọt, ăn vặt tiện lợi." },
      { title: "Kali", text: "huyết áp." },
      { text: "Hợp salad, ăn kèm đồ nướng." },
    ],
    suitableFor: "Trẻ em (cắt đôi), người giảm cân.",
    notes: "Cắt đôi khi cho trẻ nhỏ ăn để tránh hóc. Người trào ngược lưu ý.",
  },
  {
    slug: "trai-bau",
    name: "Trái bầu",
    images: ["/images/trai-bau/trai-bau-1.jpg", "/images/trai-bau/trai-bau-2.jpg"],
    type: "Củ",
    scientificName: "Lagenaria siceraria",
    family: "Họ Bầu bí",
    description: "Quả dài hoặc tròn, vỏ xanh nhạt, thịt trắng mềm, mọng nước; nấu canh, luộc, xào.",
    nutrientTags: ["Nước", "Ít calo", "Vitamin C", "Kali"],
    nutrients: "Nước (rất nhiều), ít calo, một ít vitamin C, kali.",
    benefits: [
      { text: "Nhiều nước, giải khát." },
      { text: "Ít calo, hỗ trợ giảm cân." },
      { text: "Dân gian xem là mát, lợi tiểu nhẹ." },
      { text: "Dễ tiêu, hợp nấu canh, luộc." },
    ],
    suitableFor: "Người ăn thanh đạm, người giảm cân.",
    notes:
      "Quan trọng: bầu bị đắng chứa cucurbitacin, có thể gây ngộ độc (buồn nôn, nôn, tiêu chảy): nếu đắng phải bỏ.",
  },
  {
    slug: "cai-duong",
    name: "Cải đường",
    images: ["/images/cai-duong/cai-duong-1.jpg", "/images/cai-duong/cai-duong-2.webp"],
    type: "Rau",
    scientificName: "Beta vulgaris",
    family: "Họ Dền. Tên gọi tùy vùng, thường chỉ rau cải họ củ dền (Swiss chard) hoặc củ cải đường",
    description:
      "Rau lá lớn, xanh đậm, cuống to, vị ngọt dịu; củ cải đường (sugar beet) là loại củ màu trắng/đỏ, ngọt.",
    nutrientTags: ["Vitamin K", "Vitamin A", "Vitamin C", "Magie", "Kali", "Betalain"],
    nutrients: "Lá: vitamin K, A, C, magie, kali; củ đỏ chứa betalain và nitrat tự nhiên.",
    benefits: [
      { title: "Lá", text: "vitamin K, A, C giúp hỗ trợ xương, mắt, đề kháng." },
      { title: "Magie, kali", text: "hỗ trợ cơ và huyết áp." },
      { title: "Củ đỏ", text: "nitrat tự nhiên có nghiên cứu hỗ trợ huyết áp nhẹ." },
      { text: "Betalain chống oxy hóa." },
    ],
    suitableFor: "Người cần bổ sung khoáng chất, người thích rau lạ.",
    notes:
      "Oxalat cao: người sỏi thận hạn chế. Củ cải đường nhiều đường: người tiểu đường lưu ý. Có thể làm nước tiểu/phân đỏ (vô hại). Nên xác định đúng loại rau bạn dùng.",
  },
  {
    slug: "bi-nu",
    name: "Bí nụ",
    images: ["/images/bi-nu/bi-nu-1.webp", "/images/bi-nu/bi-nu-2.webp"],
    type: "Củ",
    scientificName: "Thường hiểu là bí ngòi non/bí nụ (Cucurbita pepo)",
    family: "Họ Bầu bí",
    description: "Quả nhỏ, vỏ xanh mỏng, thịt mềm, vị ngọt nhẹ; xào, nướng, nấu canh.",
    nutrientTags: ["Nước", "Ít calo", "Vitamin C", "Kali", "Carotenoid"],
    nutrients: "Nước, ít calo, vitamin C, kali; vỏ có carotenoid.",
    benefits: [
      { title: "Ít calo, nhiều nước", text: "nhẹ bụng." },
      { text: "Vitamin C, kali." },
      { text: "Dễ tiêu, mềm ngọt." },
      { text: "Carotenoid ở vỏ chống oxy hóa." },
    ],
    suitableFor: "Người giảm cân, người cần món nhẹ.",
    notes: 'Tên "bí nụ" có thể khác nhau theo vùng; nếu là loại khác cần xác nhận lại.',
  },
  {
    slug: "kho-qua",
    name: "Khổ qua",
    images: ["/images/kho-qua/kho-qua-1.webp", "/images/kho-qua/kho-qua-2.jpeg"],
    type: "Củ",
    scientificName: "Momordica charantia – mướp đắng",
    family: "Họ Bầu bí",
    description:
      "Quả sần sùi, vị đắng đặc trưng (do momordicin). Nấu canh, xào trứng, nhồi thịt, ép nước.",
    nutrientTags: ["Vitamin C", "Folate", "Chất xơ", "Charantin", "Polypeptide-p"],
    nutrients: "Vitamin C, folate, chất xơ; charantin, polypeptide-p và các hợp chất đắng.",
    benefits: [
      { text: "Nghiên cứu cho thấy hạ đường huyết nhẹ nhưng chưa đủ để thay thuốc." },
      { text: "Vitamin C, folate, chất xơ." },
      { text: "Dân gian dùng giải nhiệt." },
      { text: "Vị đắng kích thích tiêu hóa, hợp nấu canh, xào trứng." },
    ],
    suitableFor: "Người thích vị đắng; người tiểu đường nên hỏi bác sĩ.",
    notes:
      "Phụ nữ mang thai nên tránh (có thể gây co tử cung). Người dùng thuốc hạ đường huyết có thể bị hạ đường huyết quá mức. Người thiếu men G6PD nên tránh ăn hạt. Ăn nhiều có thể khó chịu dạ dày.",
  },
  {
    slug: "khoai-mon",
    name: "Khoai môn",
    images: ["/images/khoai-mon/khoai-mon-1.jpg", "/images/khoai-mon/khoai-mon-2.jpg"],
    type: "Củ",
    scientificName: "Colocasia esculenta",
    family: "Họ Ráy – Araceae",
    description:
      "Củ có nhiều bột, ruột trắng hoặc có đốm tím nhạt, dẻo bùi, thơm. Nấu canh, hầm, chè, chiên.",
    nutrientTags: ["Tinh bột", "Chất xơ", "Kali", "Vitamin E", "Vitamin B6", "Magie"],
    nutrients: "Tinh bột (có tinh bột kháng), chất xơ, kali, vitamin E, B6, magie.",
    benefits: [
      { text: "Cung cấp năng lượng, tinh bột." },
      { title: "Tinh bột kháng, chất xơ", text: "hỗ trợ tiêu hóa, đường ruột." },
      { text: "Kali, magie, vitamin B6, E." },
      { text: "Dẻo bùi, no lâu." },
    ],
    suitableFor: "Người cần năng lượng, người thích món hầm, chè.",
    notes:
      "Chứa canxi oxalat dạng tinh thể gây ngứa miệng, ngứa tay: phải nấu chín kỹ, đeo găng khi gọt. Nhiều tinh bột: người tiểu đường lưu ý. Người suy thận nên lưu ý kali.",
  },
  {
    slug: "mang-tay",
    name: "Măng tây",
    images: ["/images/mang-tay/mang-tay-1.webp", "/images/mang-tay/mang-tay-2.jpg"],
    type: "Rau",
    scientificName: "Asparagus officinalis",
    family: "Họ Măng tây – Asparagaceae",
    description: "Chồi non dài, xanh (hoặc trắng/tím), giòn, vị ngọt thanh hơi đắng nhẹ. Hấp, xào, nướng.",
    nutrientTags: ["Folate", "Vitamin K", "Vitamin C", "Vitamin E", "Asparagine", "Inulin"],
    nutrients: "Folate, vitamin K, C, E; asparagine; inulin (chất xơ prebiotic).",
    benefits: [
      { title: "Folate", text: "hỗ trợ thai kỳ." },
      { title: "Inulin", text: "chất xơ prebiotic nuôi lợi khuẩn đường ruột." },
      { title: "Vitamin K, C, E", text: "xương, đề kháng, chống oxy hóa." },
      { text: "Lợi tiểu nhẹ (dân gian)." },
    ],
    suitableFor: "Phụ nữ mang thai, người quan tâm tiêu hóa.",
    notes:
      "Làm nước tiểu có mùi đặc trưng (vô hại). Người gout ăn vừa phải. Vitamin K: lưu ý với warfarin.",
  },
  {
    slug: "bap-my",
    name: "Bắp mỹ",
    images: ["/images/bap-my/bap-my-1.webp", "/images/bap-my/bap-my-2.jpg"],
    type: "Củ",
    scientificName: "Zea mays var. saccharata – bắp ngọt, ngô ngọt",
    family: "Họ Hòa thảo – Poaceae",
    description:
      "Bắp to, hạt vàng mọng nước, vị ngọt đậm hơn ngô thường. Dùng hấp, luộc, nướng, xào, nấu canh.",
    nutrientTags: ["Tinh bột", "Chất xơ", "Vitamin B", "Vitamin C", "Kali", "Lutein"],
    nutrients:
      "Tinh bột và đường tự nhiên, chất xơ, vitamin B (thiamin, folate), vitamin C, kali, magie; lutein và zeaxanthin (sắc tố vàng).",
    benefits: [
      {
        title: "Lutein và zeaxanthin",
        text: "nhóm carotenoid tốt cho mắt, góp phần bảo vệ võng mạc khi tuổi cao.",
      },
      { title: "Chất xơ (nhiều ở vỏ hạt)", text: "hỗ trợ tiêu hóa, giúp no lâu." },
      { text: "Cung cấp năng lượng và vitamin B (thiamin, folate) cho hoạt động của cơ thể." },
      { title: "Kali, magie", text: "hỗ trợ hoạt động của cơ và huyết áp." },
      { text: "Vị ngọt tự nhiên, dễ ăn, hợp làm món ăn kèm cho trẻ em." },
    ],
    suitableFor: "Trẻ em, người cần bổ sung năng lượng, người ăn chay.",
    notes:
      "Nhiều tinh bột và đường: người tiểu đường nên ăn lượng vừa phải. Vỏ hạt khó tiêu, có thể thấy lại trong phân (bình thường); ăn nhiều có thể đầy hơi. Với trẻ nhỏ nên tách hạt để tránh hóc.",
  },
  {
    slug: "ot-hiem-do",
    name: "Ớt hiểm đỏ",
    images: ["/images/ot-hiem-do/ot-hiem-do-1.webp", "/images/ot-hiem-do/ot-hiem-do-2.jpg"],
    type: "Củ",
    scientificName: "Capsicum frutescens",
    family: "Họ Cà – Solanaceae",
    description: "Quả nhỏ, thon, chín đỏ, rất cay. Dùng tươi làm nước chấm, ướp, nấu lẩu, xào.",
    nutrientTags: ["Capsaicin", "Vitamin C", "Carotenoid", "Vitamin B6", "Kali"],
    nutrients:
      "Capsaicin (tạo vị cay), vitamin C, carotenoid, vitamin B6, kali; tuy nhiên mỗi bữa chỉ ăn lượng nhỏ.",
    benefits: [
      { text: "Capsaicin kích thích vị giác, tăng tiết nước bọt và dịch vị: giúp ăn ngon miệng." },
      {
        text: "Capsaicin làm tăng nhẹ và tạm thời quá trình sinh nhiệt của cơ thể; tác dụng này nhỏ, không thay thế ăn uống cân đối và vận động.",
      },
      { title: "Vitamin C và carotenoid", text: "chất chống oxy hóa (lượng nhỏ khi dùng làm gia vị)." },
      { text: "Capsaicin ở dạng kem hoặc miếng dán được dùng giảm đau tại chỗ (khác với việc ăn)." },
    ],
    suitableFor: "Người thích ăn cay, dùng lượng nhỏ làm gia vị.",
    notes:
      "Có thể gây rát miệng, đau bụng, kích ứng dạ dày: người đau dạ dày, trào ngược, viêm loét, trĩ nên hạn chế. Rửa tay kỹ sau khi cắt ớt, tránh dụi mắt. Không cho trẻ nhỏ ăn cay.",
  },
  {
    slug: "sa-cay",
    name: "Sả cây",
    images: ["/images/sa-cay/sa-cay-1.jpg", "/images/sa-cay/sa-cay-2.jpg"],
    type: "Rau",
    scientificName: "Cymbopogon citratus",
    family: "Họ Hòa thảo – Poaceae",
    description:
      "Cây thân bẹ dài, gốc trắng, ngọn xanh, thơm mùi chanh đặc trưng. Thường đập dập để nấu lẩu, ướp thịt, hải sản, hấp, pha trà.",
    nutrientTags: ["Tinh dầu", "Citral"],
    nutrients: "Tinh dầu (chứa citral), ít vitamin và khoáng chất; dùng với lượng nhỏ như gia vị.",
    benefits: [
      { text: "Hương thơm kích thích tiêu hóa, khử mùi tanh của hải sản, thịt, giúp món ăn dễ ăn hơn." },
      { text: "Dân gian dùng nước sả hoặc trà sả để dễ chịu bụng, giảm đầy hơi." },
      {
        text: "Tinh dầu sả có hoạt tính kháng khuẩn, chống oxy hóa trong phòng thí nghiệm; chưa đủ bằng chứng ở người.",
      },
      { text: "Dân gian dùng nước sả nóng khi cảm lạnh để ấm người, dễ chịu." },
    ],
    suitableFor: "Người ăn lẩu, hải sản, thịt nướng; người thích trà thảo mộc.",
    notes:
      "Phần bẹ già dai, chỉ dùng để nấu lấy hương, không ăn. Phụ nữ mang thai không nên dùng liều lớn (trà đậm đặc) và không uống tinh dầu sả.",
  },
  {
    slug: "toi-phi",
    name: "Tỏi phi",
    images: ["/images/toi-phi/toi-phi-1.jpg", "/images/toi-phi/toi-phi-2.jpg"],
    scientificName: "Allium sativum, tỏi băm hoặc thái lát chiên vàng",
    family: "Họ Hành – Amaryllidaceae",
    description:
      "Tỏi băm nhuyễn phi trong dầu nóng đến vàng, giòn, thơm. Dùng rắc lên món ăn, nước chấm, cơm, cháo.",
    nutrientTags: ["Chất béo", "Hợp chất lưu huỳnh"],
    nutrients:
      "Do chiên trong dầu nên có thêm chất béo và calo; vẫn còn các hợp chất lưu huỳnh nhưng allicin của tỏi tươi bị giảm mạnh khi gặp nhiệt cao.",
    benefits: [
      { text: "Tạo hương thơm đặc trưng, kích thích vị giác, giúp món ăn ngon miệng hơn." },
      {
        text: "Giữ lại một phần hợp chất lưu huỳnh của tỏi, nhưng tác dụng sinh học của tỏi tươi (allicin) giảm đáng kể sau khi chiên.",
      },
      { text: "Dùng lượng nhỏ nên giá trị chủ yếu là hương vị, không nên kỳ vọng tác dụng chữa bệnh." },
    ],
    suitableFor: "Người thích hương vị tỏi, dùng rắc lên món ăn.",
    notes:
      "Tỏi cháy sẽ đắng, không nên ăn. Có thêm dầu chiên nên không phù hợp nếu cần hạn chế chất béo. Người trào ngược, đau dạ dày có thể bị khó chịu. Nên dùng trong ngày.",
  },
  {
    slug: "toi-xay",
    name: "Tỏi xay",
    images: ["/images/toi-xay/toi-xay-1.jpg", "/images/toi-xay/toi-xay-2.jpg"],
    scientificName: "Allium sativum, tỏi tươi xay nhuyễn",
    family: "Họ Hành – Amaryllidaceae",
    description: "Tỏi tươi giã hoặc xay nhuyễn, mùi hăng nồng, vị cay. Dùng ướp thịt, làm nước chấm, xào, nấu.",
    nutrientTags: ["Allicin", "Vitamin B6", "Vitamin C", "Mangan", "Selen"],
    nutrients:
      "Hợp chất lưu huỳnh (alliin chuyển thành allicin khi tỏi bị nghiền), vitamin B6, C, mangan, selen với lượng nhỏ.",
    benefits: [
      {
        text: "Khi nghiền, tỏi tạo ra allicin: hợp chất có hoạt tính kháng khuẩn và chống oxy hóa (ghi nhận trong phòng thí nghiệm).",
      },
      {
        text: "Các nghiên cứu về tỏi (thường ở liều bổ sung) cho thấy có thể giảm nhẹ huyết áp và cholesterol; dùng làm gia vị với lượng nhỏ thì tác dụng hạn chế.",
      },
      { text: "Hỗ trợ miễn dịch (nghiên cứu sơ bộ); dân gian dùng khi cảm lạnh." },
      { text: "Để tỏi đã xay khoảng 10 phút trước khi nấu giúp giữ lại nhiều allicin hơn." },
      { text: "Tạo hương vị đậm đà, kích thích ăn ngon." },
    ],
    suitableFor: "Người thích món nướng, nước chấm; người quan tâm tim mạch (chỉ hỗ trợ, không thay thuốc).",
    notes:
      "Có thể gây nóng rát, đau dạ dày, hơi thở có mùi. Lượng lớn có thể làm tăng nguy cơ chảy máu và tương tác với một số thuốc (người dùng thuốc chống đông, sắp phẫu thuật nên hỏi bác sĩ). Bảo quản lạnh, dùng sớm; không ngâm tỏi trong dầu để ở nhiệt độ phòng (nguy cơ vi khuẩn botulinum).",
  },
  {
    slug: "hanh-la",
    name: "Hành lá",
    images: ["/images/hanh-la/hanh-la-1.jpg", "/images/hanh-la/hanh-la-2.jpg"],
    type: "Rau",
    scientificName: "Allium fistulosum",
    family: "Họ Hành – Amaryllidaceae",
    description:
      "Lá xanh rỗng, thẳng, phần gốc trắng; mùi hăng nhẹ, vị cay dịu. Thái nhỏ rắc lên món, nấu canh, xào, nhúng lẩu.",
    nutrientTags: ["Vitamin K", "Vitamin C", "Vitamin A", "Folate", "Kali", "Quercetin"],
    nutrients: "Vitamin K, C, A (carotenoid), folate, kali; quercetin và các hợp chất lưu huỳnh.",
    benefits: [
      { text: "Hương thơm kích thích tiêu hóa, khử mùi tanh, giúp món ăn ngon miệng hơn." },
      {
        title: "Phần lá xanh nhiều vitamin K",
        text: "hỗ trợ xương và đông máu; vitamin C, A hỗ trợ đề kháng và mắt.",
      },
      { title: "Quercetin và hợp chất lưu huỳnh", text: "có tác dụng chống oxy hóa." },
      { text: "Dân gian dùng cháo hành khi mới cảm lạnh để ấm người, dễ chịu." },
    ],
    suitableFor: "Mọi lứa tuổi; ăn cùng đồ nướng, lẩu, cháo, mì.",
    notes:
      "Người dùng warfarin nên giữ lượng ăn ổn định (vitamin K). Người hay đầy hơi, hội chứng ruột kích thích có thể khó chịu với phần gốc trắng; phần lá xanh ít gây hơn. Rửa kỹ trước khi ăn.",
  },
  {
    slug: "ngo-ri",
    name: "Ngò rí",
    images: ["/images/ngo-ri/ngo-ri-1.jpg", "/images/ngo-ri/ngo-ri-2.jpg"],
    type: "Rau",
    scientificName: "Coriandrum sativum – rau mùi, cilantro",
    family: "Họ Hoa tán – Apiaceae",
    description:
      "Lá xanh nhỏ, xẻ thùy, thân mảnh, mùi thơm đặc trưng. Rắc lên món, ăn kèm bún, phở, lẩu, canh.",
    nutrientTags: ["Vitamin K", "Vitamin C", "Vitamin A", "Folate", "Kali", "Flavonoid"],
    nutrients: "Vitamin K, C, A, folate, kali; tinh dầu và flavonoid.",
    benefits: [
      { text: "Mùi thơm kích thích vị giác, giúp món ăn dễ ăn và đỡ ngấy." },
      { title: "Vitamin K, C, A", text: "hỗ trợ xương, đề kháng và mắt." },
      { title: "Flavonoid và tinh dầu", text: "chất chống oxy hóa." },
      { text: "Dân gian dùng để dễ tiêu, giảm đầy bụng." },
    ],
    suitableFor: "Người ăn bún, phở, lẩu, canh; dùng như rau thơm.",
    notes:
      "Một số người cảm thấy mùi giống xà phòng (liên quan di truyền) nên không thích. Người dị ứng họ Hoa tán (cần tây, cà rốt, thì là) có thể bị phản ứng. Vitamin K lưu ý với warfarin. Rửa kỹ nhiều lần.",
  },
  {
    slug: "rau-kim-cuong",
    name: "Rau kim cương",
    images: ["/images/rau-kim-cuong/rau-kim-cuong-1.webp", "/images/rau-kim-cuong/rau-kim-cuong-2.jpg"],
    type: "Rau",
    scientificName: "Mesembryanthemum crystallinum – rau bông tuyết, ice plant",
    family: "Họ Aizoaceae",
    description:
      "Thân và lá mọng nước, bề mặt phủ các tế bào trong suốt long lanh như tinh thể; vị hơi mặn tự nhiên, giòn, hơi chua nhẹ. Thường ăn sống trong salad, hoặc xào nhanh, nhúng lẩu.",
    nutrientTags: ["Nhiều nước", "Kali", "Magie", "Betacyanin", "Flavonoid"],
    nutrients:
      "Nhiều nước, kali, magie; betacyanin và flavonoid (chất chống oxy hóa); có vị mặn do muối khoáng tự nhiên tích lũy trong cây.",
    benefits: [
      { title: "Nhiều nước, giòn mát, ít calo", text: "no nhẹ, hợp ăn kèm món nhiều dầu mỡ." },
      { title: "Kali", text: "góp phần cân bằng điện giải và hỗ trợ huyết áp." },
      {
        title: "Betacyanin và flavonoid",
        text: "chất chống oxy hóa (đã ghi nhận ở các nghiên cứu về loại cây này).",
      },
      { text: "Vị mặn tự nhiên nên khi làm salad có thể giảm bớt lượng muối nêm thêm." },
    ],
    suitableFor: "Người thích rau lạ, ăn salad, người ăn kiêng.",
    notes:
      "Cây tích lũy muối nên có vị mặn: người cần hạn chế natri (cao huyết áp, bệnh thận) nên ăn vừa phải. Cây hấp thu nitrat và muối nhiều từ môi trường trồng nên chọn nguồn đáng tin cậy; rửa kỹ vì thường ăn sống.",
  },
  {
    slug: "nam-hau-thu",
    name: "Nấm hầu thủ",
    images: ["/images/nam-hau-thu/nam-hau-thu-1.jpg", "/images/nam-hau-thu/nam-hau-thu-2.jpg"],
    type: "Nấm",
    scientificName: "Hericium erinaceus – nấm đầu khỉ, nấm bờm sư tử",
    family: "Họ Hericiaceae",
    description:
      "Quả thể trắng ngà, phủ gai mềm dài như bờm, thịt xốp, dai nhẹ, vị ngọt thanh. Dùng xào, hầm, nướng, nấu canh.",
    nutrientTags: ["Đạm thực vật", "Chất xơ", "Beta-glucan", "Vitamin B", "Kali", "Hericenone"],
    nutrients:
      "Đạm thực vật, chất xơ, beta-glucan, vitamin B, kali; hợp chất đặc trưng hericenone và erinacine.",
    benefits: [
      { text: "Y học cổ truyền dùng để bồi bổ tỳ vị, hỗ trợ tiêu hóa và dạ dày." },
      {
        title: "Hericenone, erinacine",
        text: "các nghiên cứu (chủ yếu trên tế bào, động vật và một số thử nghiệm nhỏ ở người) gợi ý hỗ trợ thần kinh và trí nhớ; cần thêm nghiên cứu lớn hơn.",
      },
      { title: "Beta-glucan và chất chống oxy hóa", text: "hỗ trợ miễn dịch (nghiên cứu sơ bộ)." },
      { text: "Đạm thực vật, ít calo; thịt dai giòn có thể thay thế thịt trong món chay." },
    ],
    suitableFor: "Người ăn chay, người lớn tuổi, người quan tâm bồi bổ.",
    notes:
      "Phải nấu chín trước khi ăn. Người dị ứng nấm nên tránh. Công dụng về trí nhớ chưa được chứng minh chắc chắn và không thay thế điều trị.",
  },
  {
    slug: "nam-moi",
    name: "Nấm mối",
    images: ["/images/nam-moi/nam-moi-1.jpg", "/images/nam-moi/nam-moi-2.jpg"],
    type: "Nấm",
    scientificName: "Termitomyces spp. – nấm mọc cộng sinh với mối",
    description:
      "Mũ nấm nâu xám, nhú nhọn ở giữa, thân dài chắc, thơm đặc trưng, vị ngọt đậm; mọc tự nhiên vào đầu mùa mưa. Thường xào, nấu canh, nướng, kho.",
    nutrientTags: ["Đạm thực vật", "Chất xơ", "Vitamin B", "Kali", "Phốt-pho"],
    nutrients: "Đạm thực vật, chất xơ, vitamin B, khoáng chất (kali, phốt-pho); ít chất béo.",
    benefits: [
      { text: "Cung cấp đạm thực vật, chất xơ và vitamin B, phù hợp thay thế đạm trong bữa ăn." },
      { text: "Hương vị ngọt đậm, thơm nên giúp món ăn ngon miệng." },
      { text: "Ít calo, ít chất béo." },
      { text: "Dân gian xem là nấm bồi bổ; nghiên cứu về tác dụng sức khỏe còn hạn chế." },
    ],
    suitableFor: "Người ăn chay, người thích đặc sản mùa mưa.",
    notes:
      "Nấm mọc tự nhiên: chỉ dùng loại mua từ nơi uy tín, không tự hái vì dễ nhầm với nấm độc. Phải nấu chín kỹ. Người dị ứng nấm lưu ý.",
  },
  {
    slug: "nam-bung-de",
    name: "Nấm bụng dê",
    images: ["/images/nam-bung-de/nam-bung-de-1.jpg", "/images/nam-bung-de/nam-bung-de-2.webp"],
    type: "Nấm",
    scientificName: "Morchella spp. (thường gọi Morchella esculenta) – nấm morel",
    family: "Họ Morchellaceae",
    description:
      "Mũ nấm rỗng, bề mặt nhiều hốc lõm như tổ ong, màu nâu xám; thịt thơm, dai giòn, hương vị đậm đà đặc trưng. Thường dùng khô, ngâm nở để nấu canh, hầm gà, súp, lẩu.",
    nutrientTags: ["Đạm thực vật", "Chất xơ", "Vitamin B", "Sắt", "Kali", "Polysaccharide"],
    nutrients: "Đạm thực vật, chất xơ, vitamin B, sắt, kali; polysaccharide và chất chống oxy hóa.",
    benefits: [
      { text: "Hương vị đậm, thơm đặc trưng nên là nguyên liệu cao cấp cho canh, hầm, lẩu." },
      {
        title: "Polysaccharide và chất chống oxy hóa",
        text: "nghiên cứu sơ bộ (chủ yếu trong phòng thí nghiệm, trên động vật) cho thấy hỗ trợ miễn dịch, bảo vệ gan.",
      },
      { text: "Cung cấp đạm thực vật, chất xơ, vitamin B và một ít sắt." },
      { text: "Dân gian xem là nấm bồi bổ, hợp người mệt mỏi, người lớn tuổi." },
    ],
    suitableFor: "Người cần bồi bổ nhẹ, người thích món hầm, canh.",
    notes:
      "Quan trọng: phải nấu chín kỹ, không ăn sống hoặc chưa chín vì có thể gây rối loạn tiêu hóa. Nấm khô cần rửa sạch và ngâm nở để loại cát bụi. Một số người khó chịu khi dùng cùng rượu. Không tự hái nấm dại vì dễ nhầm với nấm độc.",
  },
];

export function getVegetable(slug: string) {
  return vegetables.find((v) => v.slug === slug);
}
