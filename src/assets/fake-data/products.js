
const products = [
  {
    
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Apple Watch Seri 8",
    price: "12990000",
    image01: "/products/prd/product_01_img_01.png",
    image02: "/products/prd/product_01_img_02.png",
    image03: "/products/prd/product_01_img_03.png",
    image04: "/products/prd/product_01_img_04.png",
    categorySlug: "Apple",
    colors: ["white", "black", "red", "gold"],
    slug: "apple-watch-seri-8",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệt Tính quãng đường chạy Nhắc nhở nhịp tim cao, thấp Theo dõi mức độ stress Đo nồng độ oxy (SpO2) Đếm số bước chân Chấm điểm giấc ngủ Theo dõi giấc ngủ Điện tâm đồ Đo lượng tiêu thụ oxy tối đa (VO2 max) Ước tính ngày rụng trứng Cảm biến nhiệt độ Đo nhịp tim",
  },
  {
    
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Apple Watch SE",
    price: "7490000",
    image01: "/products/prd/product_02_img_01.png",
    image02: "/products/prd/product_02_img_02.png",
    image03: "/products/prd/product_02_img_03.png",
    categorySlug: "Apple",
    colors: ["black", "gold", "white"],
    slug: "apple-watch-se",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệt Nhắc nhở nhịp tim cao, thấp Tính lượng calories tiêu thụ Theo dõi mức độ stress Tính quãng đường chạy Chế độ luyện tập Theo dõi giấc ngủ Đo nhịp tim Gửi thông báo khi có tai nạn Đếm số bước chân Cảm biến nhiệt độ",
  },
  {
    
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Apple Watch Ultra",
    price: "23990000",
    image01: "/products/prd/product_03_img_01.png",
    image02: "/products/prd/product_03_img_02.png",
    image03: "/products/prd/product_03_img_03.png",
    categorySlug: "Apple",
    colors: ["green", "orange", "gold"],
    slug: "apple-watch-ultra",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệt Nhắc nhở nhịp tim cao, thấp Tính lượng calories tiêu thụ Đo nồng độ oxy (SpO2) Điện tâm đồ Theo dõi giấc ngủ Đo nhịp tim Gửi thông báo khi có tai nạn Đếm số bước chân Chấm điểm giấc ngủ Cảm biến nhiệt độ Ước tính ngày rụng trứng",
  },
  {
   
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Apple Watch Seri 7",
    price: "9990000",
    image01: "/products/prd/product_04_img_01.png",
    image02: "/products/prd/product_04_img_02.png",
    image03: "/products/prd/product_04_img_03.png",
    // image04: product_04_image_04,
    categorySlug: "Apple",
    colors: ["black", "white", "red", "blue"],
    slug: "apple-watch-seri-7",
    type: [],
    description:
      "Tính lượng calories tiêu thụĐo nồng độ oxy (SpO2)Tính quãng đường chạyĐiện tâm đồChế độ luyện tậpTheo dõi giấc ngủĐo nhịp timĐếm số bước chân",
  },
  {
   
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Apple Watch Seri 6 LTE 40mm viền nhôm dây silicone",
    price: "11490000",
    image01: "/products/prd/product_05_img_01.png",
    image02: "/products/prd/product_05_img_02.png",
    image03: "/products/prd/product_05_img_03.png",
    // image04: product_05_image_04,
    categorySlug: "Apple",
    colors: ["blue", "red"],
    slug: "apple-watch-seri-6",
    type: [],
    description:
      "Tính quãng đường chạyTính lượng calories tiêu thụĐo nồng độ oxy (SpO2)Đếm số bước chânChế độ luyện tậpTheo dõi giấc ngủĐiện tâm đồĐo nhịp tim",
  },
  {
   
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Apple Watch S6 LTE 40mm viền thép dây silicone",
    price: "16490000",
    image01: "/products/prd/product_06_img_01.png",
    image02: "/products/prd/product_06_img_02.png",
    image03: "/products/prd/product_06_img_03.png",
    // image04: product_06_image_04,
    // image05: product_06_image_05,
    // image06: product_06_image_06,
    categorySlug: "Apple",
    colors: ["black", "green", "blue"],
    slug: "apple-watch-seri-6",
    type: [],
    descriapetio:
      "Tính lượng calories tiêu thụĐo nồng độ oxy (SpO2)Tính quãng đường chạyĐiện tâm đồChế độ luyện tậpTheo dõi giấc ngủĐo nhịp timĐếm số bước chân",
  },
  {
   
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Apple Watch S5 LTE 40mm viền thép dây thép",
    price: "16990000",
    image01: "/products/prd/product_07_img_01.png",
    image02: "/products/prd/product_07_img_02.png",
    image03: "/products/prd/product_07_img_03.png",
    // image04: product_07_image_04,
    categorySlug: "Apple",
    colors: ["gold", "silver"],
    slug: "apple-watch-seri-5",
    type: [],
    description:
      "Tính lượng calories tiêu thụTính quãng đường chạyChế độ luyện tậpĐo nhịp timĐếm số bước chân",
  },
  {
 
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Apple Watch S3 GPS 38mm viền nhôm dây silicone",
    price: "4790000",
    image01: "/products/prd/product_08_img_01.png",
    image02: "/products/prd/product_08_img_02.png",
    image03: "/products/prd/product_08_img_03.png",
    // image04: product_08_image_04,
    categorySlug: "Apple",
    colors: ["black", "white"],
    slug: "apple-watch-seri-3",
    type: [],
    description:
      "Tính lượng calories tiêu thụĐếm số bước chânChế độ luyện tậpTheo dõi giấc ngủĐo nhịp tim",
  },
  {
        countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Vòng đeo tay thông minh Oppo Band",
    price: "790000",
    image01: "/products/prd/product_09_img_01.png",
    image02: "/products/prd/product_09_img_02.png",
    image03: "/products/prd/product_09_img_03.png",
    // image04: product_09_image_04,
    categorySlug: "Oppo",
    colors: ["black", "violet"],
    slug: "oppo-band",
    type: [],
    description:
      "Đo nồng độ oxy (SpO2)Đếm số bước chânTheo dõi giấc ngủĐo nhịp tim Từ chối cuộc gọiTìm điện thoạiBáo thứcĐiều khiển chơi nhạcĐồng hồ bấm giờDự báo thời tiết",
  },
  {
    
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Oppo Watch Free",
    price: "1790000",
    image01: "/products/prd/product_10_img_01.png",
    image02: "/products/prd/product_10_img_02.png",
    image03: "/products/prd/product_10_img_03.png",
    // image04: product_10_image_04,
    categorySlug: "Oppo",
    colors: ["gold", "black"],
    slug: "oppo-watch-free",
    type: [],
    description:
      "Đo nồng độ oxy (SpO2)Theo dõi nhịp thởNhắc nhở ít vận độngChế độ luyện tậpTheo dõi giấc ngủĐa dạng hình thức luyện tậpĐo nhịp timTheo dõi nhịp tim 24h",
  },
  {
    
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title:
      "Đồng hồ thông minh theo dõi sức khỏe ASUS VivoWatch 5 dây viền trắng",
    price: "8990000",
    image01: "/products/prd/product_11_img_01.png",
    image02: "/products/prd/product_11_img_02.png",
    image03: "/products/prd/product_11_img_03.png",
    categorySlug: "Asus",
    colors: ["black"],
    slug: "asus-vivowatch",
    type: [],
    description:
      "Nhiệt độ trên daTính lượng calories tiêu thụTheo dõi mức độ stressĐo nồng độ oxy (SpO2)Điện tâm đồĐo huyết ápChế độ luyện tậpTheo dõi giấc ngủĐo nhịp timĐếm số bước chânNhắc nhở uống nước",
  },
  {
    
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Realme Watch 2 dây silicone đen",
    price: "1290000",
    image01: "/products/prd/product_12_img_01.png",
    image02: "/products/prd/product_12_img_02.png",
    image03: "/products/prd/product_12_img_03.png",
    categorySlug: "Realme",
    colors: ["black"],
    slug: "realme-watch-2",
    type: [],
    description:
      "Nhắc nhở nhịp tim cao, thấpĐo nồng độ oxy (SpO2)Theo dõi nhịp tim 24hNhắc nhở ít vận độngChế độ luyện tậpTheo dõi giấc ngủĐếm số bước chânNhắc nhở uống nước",
  },
  {
    
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Realme Watch 2 pro dây silicone đen",
    price: "1990000",
    image01: "/products/prd/product_13_img_01.png",
    image02: "/products/prd/product_13_img_02.png",
    image03: "/products/prd/product_13_img_03.png",
    categorySlug: "Realme",
    colors: ["black"],
    slug: "realme-watch-2-pro",
    type: [],
    description:
      "Nhắc nhở nhịp tim cao, thấpTính lượng calories tiêu thụĐo nồng độ oxy (SpO2)Theo dõi nhịp tim 24hNhắc nhở ít vận độngĐếm số bước chânNhắc nhở uống nước",
  },
  {
    
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Realme Watch 3 45mm dây silicone ",
    price: "1990000",
    image01: "/products/prd/product_14_img_01.png",
    image02: "/products/prd/product_14_img_02.png",
    image03: "/products/prd/product_14_img_03.png",
    // image04: product_14_image_04,
    categorySlug: "Realme",
    colors: ["gray", "black"],
    slug: "realme-watch-3",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệtNhắc nhở nhịp tim cao, thấpTính lượng calories tiêu thụTheo dõi mức độ stressĐo nồng độ oxy (SpO2)Theo dõi nhịp tim 24hTheo dõi sức khỏe và thể chấtNhắc nhở ít vận độngTheo dõi giấc ngủĐếm số bước chânNhắc nhở uống nước",
  },
  {
    
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh BeU B1 39mm Đen",
    price: "690000",
    image01: "/products/prd/product_15_img_01.png",
    image02: "/products/prd/product_15_img_02.png",
    image03: "/products/prd/product_15_img_03.png",
    categorySlug: "BeFit",
    colors: ["black"],
    slug: "befit-b1",
    type: [],
    description:
      "Tính lượng calories tiêu thụĐếm số bước chânChế độ luyện tậpTheo dõi giấc ngủĐo nhịp timĐo huyết áp",
  },
  {
    
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh BeU Active 1 45mm Đen",
    price: "1090000",
    image01: "/products/prd/product_16_img_01.png",
    image02: "/products/prd/product_16_img_02.png",
    image03: "/products/prd/product_16_img_03.png",
    categorySlug: "BeFit",
    colors: ["black"],
    slug: "befit-active-1",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệtTính lượng calories tiêu thụNhắc nhở ít vận độngĐếm số bước chânTheo dõi giấc ngủĐo nhịp timTheo dõi nhịp tim 24hĐo hyế áp",
  },
  {
    
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh BeU Sporty 1 46mm",
    price: "1690000",
    image01: "/products/prd/product_17_img_01.png",
    image02: "/products/prd/product_17_img_02.png",
    image03: "/products/prd/product_17_img_03.png",
    categorySlug: "BeFit",
    colors: ["black"],
    slug: "befit-sporty-1",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệtTính lượng calories tiêu thụTheo dõi mức độ stressĐo nồng độ oxy (SpO2)Theo dõi nhịp tim 24hĐo huyết ápNhắc nhở ít vận độngTheo dõi giấc ngủĐo nhịp tim",
  },
  {
    
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh BeFit B4 45mm Đen",
    price: "890000",
    image01: "/products/prd/product_18_img_01.png",
    image02: "/products/prd/product_18_img_02.png",
    image03: "/products/prd/product_18_img_03.png",
    // image03: product_18_image_03,
    // image04: product_18_image_04,
    categorySlug: "BeFit",
    colors: ["black", "pink"],
    slug: "befit-b4",
    type: [],
    description:
      "Nhiệt độ trên daĐo nồng độ oxy (SpO2)Nhắc nhở ít vận độngĐếm số bước chânChế độ luyện tậpTheo dõi giấc ngủTheo dõi nhịp tim 24hĐo huyết áp",
  },
  {
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Amazfit GTS 4 mini",
    price: "2590000",
    image01: "/products/prd/product_19_img_01.png",
    image02: "/products/prd/product_19_img_02.png",
    image03: "/products/prd/product_19_img_03.png",
    image04: "/products/prd/product_19_img_04.png",
    image05: "/products/prd/product_19_img_05.png",
    image06: "/products/prd/product_19_img_06.png",
    categorySlug: "Amazfit",
    colors: ["black", "white", "pink"],
    slug: "amazfit-gts-4",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệtNhắc nhở nhịp tim cao, thấpĐa dạng hình thức luyện tậpTheo dõi nhịp tim 24hNhắc nhở ít vận độngTheo dõi giấc ngủTự động phát hiện chế độ tập luyệnĐếm số bước chânTheo dõi Nồng độ oxy trong máu 24hTheo dõi mức độ căng thẳng 24hChấm điểm giấc ngủNhắc nhở uống nướcHệ thống đánh giá sức khỏe PAI",
  },
  {
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Amazfit GTR 4",
    price: "4990000",
    image01: "/products/prd/product_20_img_01.png",
    image02: "/products/prd/product_20_img_02.png",
    image03: "/products/prd/product_20_img_03.png",
    image04: "/products/prd/product_20_img_04.png",
    image05: "/products/prd/product_20_img_05.png",
    image06: "/products/prd/product_20_img_06.png",
    categorySlug: "Huami Amazfit",
    colors: ["black", "gray", "brown"],
    slug: "amazfit-gtr-4",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệtNhắc nhở nhịp tim cao, thấpĐo nồng độ oxy (SpO2)Theo dõi nhịp tim 24hTheo dõi giấc ngủĐếm số bước chânTheo dõi mức độ căng thẳng 24hHệ thống đánh giá sức khỏe PAI",
  },
  {
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Amazfit T-Rex",
    price: "4790000",
    image01: "/products/prd/product_21_img_01.png",
    image02: "/products/prd/product_21_img_02.png",
    categorySlug: "Huami Amazfit",
    colors: ["green"],
    slug: "amazfit-t-rex",
    type: [],
    description:
      "Theo dõi mức độ stressĐo nồng độ oxy (SpO2)Theo dõi nhịp tim 24hTheo dõi sức khỏe và thể chấtTheo dõi nhịp thởĐo lượng tiêu thụ oxy tối đa (VO2 max)Theo dõi giấc ngủĐếm số bước chânHệ thống đánh giá sức khỏe PAI",
  },
  {
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Amazfit GTS 3",
    price: "3490000",
    image01: "/products/prd/product_22_img_01.png",
    image02: "/products/prd/product_22_img_02.png",
    categorySlug: "Huami Amazfit",
    colors: ["black"],
    slug: "amazfit-gts-3",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệtTheo dõi mức độ stressĐo nồng độ oxy (SpO2)Chế độ luyện tậpTheo dõi giấc ngủTự động phát hiện chế độ tập luyệnĐo nhịp timĐo nhịp tim cổ tay dưới nướcHệ thống đánh giá sức khỏe PAI",
  },
  {
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Amazfit GTR 3 Pro",
    price: "4590000",
    image01: "/products/prd/product_23_img_01.png",
    image02: "/products/prd/product_23_img_02.png",
    image03: "/products/prd/product_23_img_03.png",
    image04: "/products/prd/product_23_img_04.png",
    categorySlug: "Huami Amazfit",
    colors: ["black", "brown"],
    slug: "amazfit-gtr-3-pro",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệtTheo dõi mức độ stressĐo nồng độ oxy (SpO2)Theo dõi nhịp thởChế độ luyện tậpTheo dõi giấc ngủTự động phát hiện chế độ tập luyệnĐo nhịp timĐo nhịp tim cổ tay dưới nước",
  },
  {
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Amazfit GTR 3",
    price: "3490000",
    image01: "/products/prd/product_24_img_01.png",
    image02: "/products/prd/product_24_img_01.png",
    image03: "/products/prd/product_24_img_03.png",
    image04: "/products/prd/product_24_img_04.png",
    categorySlug: "Huami Amazfit",
    colors: ["black", "gray"],
    slug: "amazfit-gtr-3",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệtTheo dõi mức độ stressĐo nồng độ oxy (SpO2)Theo dõi nhịp thởChế độ luyện tậpTheo dõi giấc ngủTự động phát hiện chế độ tập luyệnĐo nhịp tim",
  },
  {
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Amazfit GTS 2 mini",
    price: "2299000",
    image01: "/products/prd/product_25_img_01.png",
    image02: "/products/prd/product_25_img_02.png",
    image03: "/products/prd/product_25_img_03.png",
    image04: "/products/prd/product_25_img_04.png",
    image05: "/products/prd/product_25_img_05.png",
    image06: "/products/prd/product_25_img_06.png",
    categorySlug: "Huami Amazfit",
    colors: ["black", "green", "pink"],
    slug: "amazfit-gts-2-mini",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệtTính lượng calories tiêu thụTheo dõi mức độ stressĐo nồng độ oxy (SpO2)Đa dạng hình thức luyện tậpTheo dõi nhịp tim 24hTheo dõi giấc ngủĐếm số bước chânHệ thống đánh giá sức khỏe PAI",
  },
  {
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Amazfit Bip 3 Pro",
    price: "1390000",
    image01: "/products/prd/product_26_img_01.png",
    image02: "/products/prd/product_26_img_02.png",
    image03: "/products/prd/product_26_img_03.png",
    image04: "/products/prd/product_26_img_04.png",
    categorySlug: "Huami Amazfit",
    colors: ["black", "white"],
    slug: "amazfit-bip-3-pro",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệtNhắc nhở nhịp tim cao, thấpTheo dõi mức độ stressĐo nồng độ oxy (SpO2)Theo dõi nhịp thởTheo dõi sức khỏe và thể chấtTheo dõi giấc ngủTheo dõi nhịp tim 24hHệ thống đánh giá sức khỏe PAI",
  },
  {
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Amazfit Bip 3",
    price: "1190000",
    image01: "/products/prd/product_27_img_01.png",
    image02: "/products/prd/product_27_img_02.png",
    image03: "/products/prd/product_27_img_03.png",
    image04: "/products/prd/product_27_img_04.png",
    categorySlug: "Huami Amazfit",
    colors: ["violet", "pink"],
    slug: "amazfit-bip-3",
    type: [],
    description:
      "Theo dõi chu kì kinh nguyệtNhắc nhở nhịp tim cao, thấpTheo dõi mức độ stressĐo nồng độ oxy (SpO2)Theo dõi nhịp thởTheo dõi sức khỏe và thể chấtTheo dõi giấc ngủTheo dõi nhịp tim 24hHệ thống đánh giá sức khỏe PAI",
  },
  {
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh Amazfit Neo",
    price: "749000",
    image01: "/products/prd/product_28_img_01.png",
    image02: "/products/prd/product_28_img_02.png",
    categorySlug: "Huami Amazfit",
    colors: ["black"],
    slug: "amazfit-neo",
    type: [],
    description:
      "Tính lượng calories tiêu thụĐếm số bước chânChế độ luyện tậpTheo dõi giấc ngủTheo dõi nhịp tim 24hHệ thống đánh giá sức khỏe PAI",
  },
  {
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh HONOR Watch GS3",
    price: "5990000",
    image01: "/products/prd/product_29_img_01.png",
    image02: "/products/prd/product_29_img_02.png",
    image03: "/products/prd/product_29_img_03.png",
    image04: "/products/prd/product_29_img_04.png",
    categorySlug: "Huami Amazfit",
    colors: ["blue", "brown"],
    slug: "honor-watch-gs3",
    type: [],
    description:
      "Nhắc nhở nhịp tim cao, thấpTính lượng calories tiêu thụTheo dõi mức độ stressĐo nồng độ oxy (SpO2)Theo dõi nhịp thởNhắc nhở ít vận độngĐếm số bước chânTheo dõi nhịp tim bằng trí tuệ nhân tạo (AI)Theo dõi sức khỏe và thể chấtTheo dõi giấc ngủĐa dạng hình thức luyện tậpTự động phát hiện chế độ tập luyện",
  },
  {
    countInStock: 3,
    rating: 4,
    numReviews: 4,
    title: "Đồng hồ thông minh HAYLOU RT2",
    price: "1790000",
    image01: "/products/prd/product_30_img_01.png",
    image02: "/products/prd/product_30_img_02.png",
    categorySlug: "Haylou",
    colors: ["black"],
    slug: "haylou-rt2",
    type: [],
    description:
      "Tính lượng calories tiêu thụĐo nồng độ oxy (SpO2)Đa dạng hình thức luyện tậpTheo dõi nhịp thởNhắc nhở ít vận độngTheo dõi giấc ngủĐo nhịp timĐếm số bước chân",
  },
];

const getAllProducts = () => products;

const getProducts = (count) => {
  const max = products.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};

const getProductBySlug = (slug) => products.find((e) => e.slug === slug);

const getCartItemsInfo = (cartItems) => {
  let res = []
  if (cartItems.length > 0) {
      cartItems.forEach(e => {
          let product = getProductBySlug(e.slug)
          res.push({
              ...e,
              product: product
          })
      })
  }
  // console.log(res)
  // console.log('sorted')
  // console.log(res.sort((a, b) => a.slug > b.slug ? 1 : (a.slug < b.slug ? -1 : 0)))
  return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
  getAllProducts,
  getProducts,
  getProductBySlug,
  getCartItemsInfo
};

export default productData;
