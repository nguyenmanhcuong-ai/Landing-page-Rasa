export type Branch = {
  name: string;
  address: string;
  hours: string;
};

const hours = "Mở cửa: 00:00:00 - 23:59:00";

export const branches: Branch[] = [
  {
    name: "N.HÀNG RASA BÌNH PHÚ",
    address: "31 Bình Phú, P Bình Phú, TP Hồ Chí Minh",
    hours,
  },
  {
    name: "N.HÀNG Rasa Hoàng Diệu 2",
    address: "65 HOÀNG DIỆU 2, P. LINH XUÂN, TP. HỒ CHÍ MINH",
    hours,
  },
  {
    name: "N.HÀNG RASA LÊ THỊ HÀ",
    address: "269 Lê Thị Hà, Hóc Môn, TP Hồ Chí Minh",
    hours,
  },
  {
    name: "N.HÀNG RASA MẠC ĐĨNH CHI",
    address: "92 MẠC ĐĨNH CHI, P. TÂN ĐỊNH, TP. HỒ CHÍ MINH",
    hours,
  },
  {
    name: "N.HÀNG RASA PHAN XÍCH LONG",
    address: "264 Phan Xích Long, Cầu Kiệu, TP Hồ Chí Minh",
    hours,
  },
  {
    name: "N.HÀNG RASA UNG VĂN KHIÊM",
    address: "118 UNG VĂN KHIÊM, P. THẠNH MỸ TÂY, TP. HỒ CHÍ MINH",
    hours,
  },
  {
    name: "NHÀ HÀNG RASA PHAN HUY ÍCH",
    address: "455 Phan Huy Ích, An Hội Tây, Tp Hồ Chí Minh",
    hours,
  },
];

export function branchMapUrl(branch: Branch) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${branch.name} ${branch.address}`)}`;
}
