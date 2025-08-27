
export default function handler(req, res) {
  const { email, order } = req.query;

  // Basit örnek sipariş kontrolü
  if (email && order === "123456") {
    res.status(200).json({
      status: "success",
      message: "Kargonuz yolda. Tahmini teslim süresi: 2 gün.",
    });
  } else {
    res.status(404).json({
      status: "error",
      message: "Sipariş bulunamadı. Lütfen bilgilerinizi kontrol edin.",
    });
  }
}
