const productList = [
  // adidas products
  {
    productID: 1001,
    productName: "adidas UltraBoost 22",
    productCategory: "Footwear",
    productPrice: 180,
    brandName: "Nike",
    sizes: [38, 39, 40, 41, 42, 43, 44],
    imageUrl: [
      "https://imgs.search.brave.com/gJWt1ELSAMN-zVfOw4LnHgJoTaazHlfN1AF48y6ArUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMubmlrZS5jb20v/YS9pbWFnZXMvdF93/ZWJfcHdfNTkyX3Yy/L2ZfYXV0by9iNWJm/NzBlMi0yMzNkLTQ4/ZTgtYTJlNS01MjMz/ZmFjZTBjYmIvVklD/VE9SWStUT1VSKzQu/cG5n",
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/c071e79b-9b30-4872-9b8b-000d83b08f13/NIKE+P-6000+SE.png",
      "https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d5da9ab4-2a90-4a36-bfce-818831e7b2d0/AIR+JORDAN+1+LOW+SE.png",
    ],
    description:
      "adidas UltraBoost 22 running shoes designed for comfort with responsive cushioning and a stylish, breathable upper.",
  },

  // Nike products
  {
    productID: 2001,
    productName: "Nike Shox NZ",
    productCategory: "Footwear",
    productPrice: 90,
    brandName: "Nike",
    sizes: [38, 39, 40, 41, 42],
    imageUrl: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/864f59c0-69a7-476a-8262-252c5cd45cc4/NIKE+SHOX+NZ.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ab596c95-3ac4-42f7-8534-5da509f25eda/NIKE+SHOX+NZ.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/8435ae29-2443-47b2-8631-722ce0e0cc98/NIKE+SHOX+NZ.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/3bf1ea20-4278-417a-bf24-ed0c21f10282/NIKE+SHOX+NZ.png",
    ],
    description:
      "Iconic Nike Air Force 1 sneakers, combining classic style with all-day comfort and durability.",
  },

  // Puma products
  {
    productID: 5001,
    productName: "Nike Daybreak SP",
    productCategory: "Footwear",
    productPrice: 120,
    brandName: "Nike",
    sizes: [38, 39, 40, 41, 42],
    imageUrl: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/6e17c260-ecc7-49e5-8499-3ddc3041a3da/NIKE+DBREAK+SP.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/b6bddd02-5db5-459b-b896-e04166b8581e/NIKE+DBREAK+SP.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/da42afab-c893-4c4e-b87e-ceae4ba51224/NIKE+DBREAK+SP.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f6bb582b-23af-48ad-800d-fabf40b42744/NIKE+DBREAK+SP.png",
    ],
    description:
      "The Daybreak is back. Inspired by original design from the '70s running boom era, this version gives a nod to the sneaker's everlasting appeal by combining breathable mesh and shaggy suede. And the vintage Waffle outsole? The day would't break without it.",
  },

  // Vans products
  {
    productID: 6001,
    productName: "Air Jordan 1 Low SE",
    productCategory: "Footwear",
    productPrice: 60,
    brandName: "Nike",
    sizes: [38, 39, 40, 41, 42, 42, 43],
    imageUrl: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8381b143-d46d-4354-b2e2-78a5b5917934/AIR+JORDAN+1+LOW+SE.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/de9cd615-6925-4cc0-b9c2-f503d8c851c5/AIR+JORDAN+1+LOW+SE.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ae809406-1504-475a-9c81-a3e7e137af07/AIR+JORDAN+1+LOW+SE.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/fe10f365-33f7-48ed-b5e6-51c176c82e5e/AIR+JORDAN+1+LOW+SE.png",
    ],
    description:
      "Vans Old Skool sneakers with the signature side stripe and durable canvas construction.",
  },

  // Adidas Apparel
  {
    productID: 1101,
    productName: "adidas Tiro 21 Track Pants",
    productCategory: "Apparel",
    productPrice: 45,
    brandName: "Nike",
    sizes: [38, 39, 40, 41, 42],
    imageUrl: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/9baf6bd7-b1f3-43f9-abe5-daee9f2fc622/AIR+JORDAN+1+ELEMENT+LOW+A%2FT.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/323fb984-ee91-4415-a733-abfe84b83159/AIR+JORDAN+1+ELEMENT+LOW+A%2FT.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/12d65d25-39c1-41f6-b9a6-0ac74264bef3/AIR+JORDAN+1+ELEMENT+LOW+A%2FT.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/43cde277-4d86-4e90-9d1d-87f7c29bae2d/AIR+JORDAN+1+ELEMENT+LOW+A%2FT.png",
    ],
    description:
      "adidas Tiro 21 Track Pants, perfect for workouts or casual wear, with breathable fabric and a comfortable fit.",
  },

  // Adidas Shoes
  {
    productID: 2201,
    productName: "Speedcat OG",
    productCategory: "Apparel",
    productPrice: 270,
    brandName: "Puma",
    sizes: [38, 39, 40, 41, 42],
    imageUrl: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/398846/01/fnd/PNA/fmt/png/Speedcat-OG-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/398846/01/sv02/fnd/PNA/fmt/png/Speedcat-OG-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/398846/01/sv04/fnd/PNA/fmt/png/Speedcat-OG-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/398846/01/dt01/fnd/PNA/fmt/png/Speedcat-OG-Sneakers",
    ],
    description:
      "Nike Windrunner Jacket, designed to keep you comfortable in windy conditions with lightweight fabric and a classic silhouette.",
  },

  {
    productID: 3301,
    productName: "Club 5v5 Lux Wool",
    productCategory: "Footwear",
    productPrice: 85,
    brandName: "Puma",
    sizes: [38, 39, 40, 41, 42],
    imageUrl: [
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/405400/01/sv01/fnd/PNA/fmt/png/Club-5v5-Lux-Wool-Men's-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/405400/01/fnd/PNA/fmt/png/Club-5v5-Lux-Wool-Men's-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/405400/01/sv02/fnd/PNA/fmt/png/Club-5v5-Lux-Wool-Men's-Sneakers",
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_1050,h_1050/global/405400/01/sv04/fnd/PNA/fmt/png/Club-5v5-Lux-Wool-Men's-Sneakers",
    ],
    description:
      "Under Armour Charged Pursuit 2 sneakers, engineered for high-performance with a breathable upper and responsive cushioning.",
  },

  // Converse products
  {
    productID: 4401,
    productName: "1906R",
    productCategory: "Footwear",
    productPrice: 55,
    brandName: "New Balance",
    sizes: [38, 39, 40, 41, 42],
    imageUrl: [
      "https://nb.scene7.com/is/image/NB/u1906rnb_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/u1906rnb_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/u1906rnb_nb_03_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/u1906rnb_nb_07_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
    ],
    description:
      "Converse Chuck Taylor All Star sneakers, the classic canvas shoes that never go out of style with a comfortable fit.",
  },

  // Adidas Running Shorts
  {
    productID: 5501,
    productName: "9060",
    productCategory: "Apparel",
    productPrice: 35,
    brandName: "New balance",
    sizes: [38, 39, 40, 41, 42],
    imageUrl: [
      "https://nb.scene7.com/is/image/NB/u9060nvp_nb_02_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/u9060nvp_nb_04_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/u9060nvp_nb_05_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
      "https://nb.scene7.com/is/image/NB/u9060nvp_nb_06_i?$pdpflexf22x$&qlt=80&fmt=webp&wid=880&hei=880",
    ],
    description:
      "adidas Own The Run shorts designed for athletes with moisture-wicking fabric and a relaxed fit for maximum mobility.",
  },

  // Nike Sports Bra
  {
    productID: 6601,
    productName: "ANTHONY EDWARDS 2 Shoes",
    productCategory: "Apparel",
    productPrice: 30,
    brandName: "Adidas",
    sizes: [38, 39, 40, 41, 42],
    imageUrl: [
      "https://assets.adidas.com/images/e_trim:EAEEEF/c_lpad,w_iw,h_ih/b_rgb:EAEEEF/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4af96133d304e29a5e157d64fd01a04_9366/Anthony_Edwards_2_Shoes_Black_JS3508_00_plp_standard.jpg",
      "https://assets.adidas.com/images/e_trim:EAEEEF/c_lpad,w_iw,h_ih/b_rgb:EAEEEF/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/478a9bfb40184deda3ab01c16a16401f_9366/Anthony_Edwards_2_Shoes_Orange_JS3514_00_plp_standard.jpg",
      "https://assets.adidas.com/images/e_trim:EAEEEF/c_lpad,w_iw,h_ih/b_rgb:EAEEEF/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/c4af96133d304e29a5e157d64fd01a04_9366/Anthony_Edwards_2_Shoes_Black_JS3508_00_plp_standard.jpg",
      "https://assets.adidas.com/images/e_trim:EAEEEF/c_lpad,w_iw,h_ih/b_rgb:EAEEEF/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/31899d16494b45db93953b008ef23024_9366/ANTHONY_EDWARDS_2_Shoes_White_JQ9493_00_plp_standard.jpg",
    ],
    description:
      "Nike Pro Sports Bra offers medium support, moisture-wicking technology, and a sleek design for comfort during workouts.",
  },
  {
    productID: 7701,
    productName: "Samba OG Shoes",
    productCategory: "Apparel",
    productPrice: 100,
    brandName: "Adidas",
    sizes: [38, 39, 40, 41, 42],
    imageUrl: [
      "https://assets.adidas.com/images/e_trim:EAEEEF/c_lpad,w_iw,h_ih/b_rgb:EAEEEF/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b983d5bc09a4d4aba39a8bf011869ba_9366/Samba_OG_Shoes_White_B75806_00_plp_standard.jpg",
      "https://assets.adidas.com/images/e_trim:EAEEEF/c_lpad,w_iw,h_ih/b_rgb:EAEEEF/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/c220949681174ebabe5caa9c2e12537e_9366/Samba_OG_Shoes_White_HQ4950_00_plp_standard.jpg",
      "https://assets.adidas.com/images/e_trim:EAEEEF/c_lpad,w_iw,h_ih/b_rgb:EAEEEF/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/ad55ee55e5a3426b9b394e7362c43210_9366/Samba_OG_Shoes_Brown_ID1481_00_plp_standard.jpg",
      "https://assets.adidas.com/images/e_trim:EAEEEF/c_lpad,w_iw,h_ih/b_rgb:EAEEEF/w_180,f_auto,q_auto,fl_lossy,c_fill,g_auto/4ffff57552db4ba694fa17e6fc490242_9366/Samba_OG_Shoes_Blue_IH6827_00_plp_standard.jpg",
    ],
    description:
      "Nike Pro Sports Bra offers medium support, moisture-wicking technology, and a sleek design for comfort during workouts.",
  },
];

export default productList;
