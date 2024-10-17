const items = [
  {
    id: '1',
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTklezuOoTOT20UcHVsTH9Cijv1i-cllqI6IxpQmNXr1GAxrVVO_7WWO8LYffQbjhbarZwUs0lxEa_-hwXpBc4zWsf8rAvErWDyJMf1liRadWzl5QnL2Y9GeA&usqp=CAE",
    rating: {
      stars: 4.5,
      noofreview: 1400,
    },
    companyname: 'RainDeer',
    itemname: 'Cotton Shirt',
    currentprice:  606,
    originalprice:  1045,
    returnperiod: '14 days',
    deliverydate: "10 oct 2024",
    discount: 42,
  },
  
    
      {
        id: '2',
        image:
          "https://thefoomer.in/cdn/shop/files/jpeg-optimizer_PATP5180.jpg?v=1685610639&width=1200",
        rating: {
          stars: 4.1,
          noofreview: 1100,
        },
        companyname: 'ELINTA',
        itemname: 'Selinta Men Solid Casual Light Blue Shirt',
        currentprice: 299 ,
        originalprice:1849,
        returnperiod:14 ,
        deliverydate: "10 oct 2024",
        discount: 83,
      
  },
  {
    id: '3',
    image:
      "https://www.tistabene.com/cdn/shop/products/MJS-0018A.jpg?v=1694077964&width=5000",
    rating: {
      stars: 3.8,
      noofreview: 1000,
    },
    companyname: 'DENIM',
    itemname: 'Denim Blue Denim Men Jeans',
    currentprice: 1599,
    originalprice:  1599,
    returnperiod: 14 ,
    deliverydate: "10 oct 2024",
    discount:0 ,
  },
  {
    id: '4',
    image:
      "https://nobero.com/cdn/shop/files/6_7e481a9e-141a-4dfd-b128-833e39576e47.jpg?v=1712051920&width=1066",
    rating: {
      stars: 4.0,
      noofreview: 300,
    },
    companyname: 'Classic Fit T-Shirt',
    itemname: ' Classic Fit T-Shirt',
    currentprice: 499 ,
    originalprice:999  ,
    returnperiod:14 ,
    deliverydate: "10 oct 2024",
    discount: 50,
  },
  {
    id: '5',
    image:
      "https://m.media-amazon.com/images/I/71cflgAolqL._SY695_.jpg",
    rating: {
      stars: 4.1,
      noofreview: 1000,
    },
    companyname: 'ASIAN',
    itemname: 'ASIAN Men TARZAN-11 Casual Sneaker Shoes with Synthetic Upper Lightweight Comfortable Mid Top Sneaker Shoes for Men & Boy',
    currentprice: 749 ,
    originalprice: 1299 ,
    returnperiod: 14,
    deliverydate: "10 oct 2024",
    discount: 42,
  },
  {
    id: '6',
    image:
      "https://m.media-amazon.com/images/I/610la93MXsL._SY695_.jpg",
    rating: {
      stars: 3.5,
      noofreview: 400,
    },
    companyname: 'REDTAPE',
    itemname: 'Red Tape Casual Sneaker Shoes for Men | Comfort, Style, and Performance',
    currentprice:  1768,
    originalprice: 5899 ,
    returnperiod: 14 ,
    deliverydate: "10 oct 2024",
    discount:70 ,
  },
  {
    id: '7',
    image:
      "https://www.shopolics.com/uploads/images/medium/Blue-Poly-Cotton-Blend-Regular-Fit-Men-Trousers-38397.jpg",
    rating: {
      stars: 4.1,
      noofreview: 900,
    },
    companyname: 'BLUE POLY',
    itemname: 'Blue Poly Cotton Blend Regular Fit Men Trousers',
    currentprice: 799 ,
    originalprice: 2498 ,
    returnperiod: 14 ,
    deliverydate: "10 oct 2024",
    discount:73,
  },
  {
    id: '8',
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyZTR8OXGPVDQlBRA_75Du2FOk7okD-jdlvQ&s",
    rating: {
      stars: 4.1,
      noofreview: 1200,
    },
    companyname: 'PUMA',
    itemname: 'Puma Men Radcliff Puma-Black Sports Running Shoe',
    currentprice:1498  ,
    originalprice:  4499,
    returnperiod: 14 ,
    deliverydate: "10 oct 2024",
    discount:66 ,
  },
  {
    id: '9',
    image:
      "https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/QCUH-HEADPHONEARN/product_silo_images/AEM_PDP_GALLERY_WHITE-1.png/jcr:content/renditions/cq5dam.web.600.600.png",
    rating: {
      stars: 4.1,
      noofreview: 400,
    },
    companyname: 'BOSE',
    itemname: 'Bose QuietComfort Ultra Headphones',
    currentprice:  999,
    originalprice: 1500 ,
    returnperiod: 14 ,
    deliverydate: "10 oct 2024",
    discount: 35,
  },
  {
    id: '10',
    image:
      "https://ptron.in/cdn/shop/products/51Bi92jvyDL._SL1100_544a234b-339e-44be-a2ae-b57b0ac66d86.jpg?v=1615793526",
    rating: {
      stars: 3.8,
      noofreview: 1000,
    },
    companyname: 'PTRON',
    itemname: 'pTron Tangent Lite Bluetooth 5.0 Wireless Headphones with Hi-Fi Stereo Sound Magnetic Earbuds, Voice Assistant & Mic - (Black)',
    currentprice:599  ,
    originalprice:  1200,
    returnperiod: 14,
    deliverydate: "10 oct 2024",
    discount: 50,
  },
  {
    id: '11',
    image:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1713370520/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/306335_f9yygt.png?tr=w-600",
    rating: {
      stars: 4.1,
      noofreview: 1120,
    },
    companyname: 'REALME',
    itemname: 'Buy Realme Buds Air 5 True Wireless Earbuds - Headphones for Unisex 26159842',
    currentprice: 2499 ,
    originalprice: 5999 ,
    returnperiod: 14,
    deliverydate: "10 oct 2024",
    discount: 35,
  },
  {
    id: '12',
    image:
      "https://rukminim2.flixcart.com/image/850/1000/kr2e3680/earring/u/b/n/fksf-white-tanlooms-original-imag4xpzfzzzytsg.jpeg?q=20&crop=false",
    rating: {
      stars: 2.8,
      noofreview: 1000,
    },
    companyname: 'TANLOOMS',
    itemname: 'Latest Collection Sunflower Gold Jhumka earrings for Girls and Woman.(White Color) Brass Jhumki Earring',
    currentprice:199 ,
    originalprice:599  ,
    returnperiod: 14,
    deliverydate: "10 oct 2024",
    discount:66 ,
  },
  {
    id: '13',
    image:
      "https://trinkwinkjewels.com/wp-content/uploads/2021/09/DSC_0027-1-scaled.jpg",
    rating: {
      stars:4.5 ,
      noofreview: 1200,
    },
    companyname: 'ZARNA',
    itemname: 'Zarna AD Chandelier Earrings',
    currentprice: 2899,
    originalprice: 7499 ,
    returnperiod: 14,
    deliverydate: "10 oct 2024",
    discount:60 ,
  },

  {
    id: '14',
    image:
      "https://m.media-amazon.com/images/I/514JrqLq3pL._SX300_SY300_QL70_FMwebp_.jpg",
    rating: {
      stars:4.1 ,
      noofreview: 1300,
    },
    companyname: 'ANEZUS',
    itemname: '12Pcs Velvet Matte Liquid Lipstick Set,Waterproof Long Lasting Non-Stick Cup Not Fade Nude Lip Gloss Set, UP TO 24 HOURS, Professional Lip Makeup Christmas Gift Kit for Women (12pc)',
    currentprice:499,
    originalprice:1190 ,
    returnperiod: 14,
    deliverydate: "10 oct 2024",
    discount:58 ,
  },

  {
    id: '15',
    image:
      "https://m.media-amazon.com/images/I/31TyymGTKgL._SX300_SY300_QL70_FMwebp_.jpg",
    rating: {
      stars:4.2 ,
      noofreview: 1300,
    },
    companyname: 'BELLA VITA',
    itemname: 'Bella Vita Luxury Date Woman Eau De Parfum Perfume with Pink Pepper, Jasmine & Vanilla|Premium, Long Lasting Floral & Fruity Fragrance for Women, 100ML',
    currentprice:499 ,
    originalprice: 999,
    returnperiod: 14,
    deliverydate: "10 oct 2024",
    discount:50 ,
  },


 
];