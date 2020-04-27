 
const SHOP_DATA = [
    {
      id: 1,
      title: 'Iphone',
      routeName: 'iphone',
      items: [
        {
          id: 1,
          name: 'Iphone 6',
          imageUrl: 'https://www.stickpng.com/assets/images/585fd18fcb11b227491c35d3.png',
          price: 499
        },
        {
          id: 2,
          name: 'Iphone 6S',
          imageUrl: 'https://pngimg.com/uploads/iphone/iphone_PNG5722.png',
          price: 549
        },
        {
          id: 3,
          name: 'Iphone 7',
          imageUrl: 'https://pngimg.com/uploads/iphone/iphone_PNG5723.png',
          price: 699
        },
        {
          id: 4,
          name: 'Iphone 7 Plus',
          imageUrl: 'https://pngimg.com/uploads/iphone/iphone_PNG5723.png',
          price: 749
        },
        {
          id: 5,
          name: 'Iphone 8',
          imageUrl: 'https://pngimg.com/uploads/iphone/iphone_PNG5723.png',
          price: 799
        },
        {
          id: 6,
          name: 'Iphone 8 Plus',
          imageUrl: 'https://pngimg.com/uploads/iphone/iphone_PNG5723.png',
          price: 849
        },
        {
          id: 7,
          name: 'Iphone SE',
          imageUrl: 'https://pngimg.com/uploads/iphone/iphone_PNG5723.png',
          price: 399
        },
        {
          id: 8,
          name: 'Iphone XR',
          imageUrl: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-iphonexsmaxgold-png-image_3627549.jpg',
          price: 799
        },
        {
          id: 9,
          name: 'Iphone 11',
          imageUrl: 'https://pngimg.com/uploads/iphone_11/iphone_11_PNG37.png',
          price: 969
        }
      ]
    },
    {
      id: 2,
      title: 'Samsung',
      routeName: 'samsung',
      items: [
        {
          id: 10,
          name: 'Galaxy S20',
          imageUrl: 'https://krispitech.com/wp-content/uploads/2020/02/s20-4-Copy-3.png',
          price: 220
        },
        {
          id: 11,
          name: 'Galaxy S20 5G',
          imageUrl: 'https://krispitech.com/wp-content/uploads/2020/02/s20-4-Copy-3.png',
          price: 280
        },
        {
          id: 12,
          name: 'Galaxy S20+ 5G',
          imageUrl: 'https://krispitech.com/wp-content/uploads/2020/02/s20-4-Copy-3.png',
          price: 110
        },
        {
          id: 13,
          name: 'Galaxy S20+ Pro 5G Pro',
          imageUrl: 'https://krispitech.com/wp-content/uploads/2020/02/s20-4-Copy-3.png',
          price: 160
        },
        {
          id: 14,
          name: 'Samsung Galaxy A90',
          imageUrl: 'https://www.pngitem.com/pimgs/m/274-2744015_samsung-galaxy-a70-coming-to-us-samsung-a70.png',
          price: 899
        },
        {
          id: 15,
          name: 'Samsung Galaxy A70',
          imageUrl: 'https://www.pngitem.com/pimgs/m/274-2744015_samsung-galaxy-a70-coming-to-us-samsung-a70.png',
          price: 699
        },
        {
          id: 16,
          name: 'Samsung Galaxy A50',
          imageUrl: 'https://www.pngitem.com/pimgs/m/274-2744015_samsung-galaxy-a70-coming-to-us-samsung-a70.png',
          price: 499
        },
        {
          id: 17,
          name: 'Samsung Galaxy A30',
          imageUrl: 'https://stg-images.samsung.com/is/image/samsung/pk-galaxy-a30-a305-sm-a305fzwfpak-frontwhite-thumb-152051809',
          price: 299
        }
      ]
    },
    {
      id: 3,
      title: 'Google Pixel',
      routeName: 'googlepixel',
      items: [
        {
          id: 18,
          name: 'Pixel 4',
          imageUrl: 'https://www.androidred.com/wp-content/uploads/2019/05/pixel-3a-revealed-entirely-before-google-says-it-exists-525923-2.png',
          price: 699
        },
        {
          id: 19,
          name: 'Pixel 3a XL',
          imageUrl: 'https://www.androidred.com/wp-content/uploads/2019/05/pixel-3a-revealed-entirely-before-google-says-it-exists-525923-2.png',
          price: 499
        },
        {
          id: 20,
          name: 'Pixel 3a',
          imageUrl: 'https://www.androidred.com/wp-content/uploads/2019/05/pixel-3a-revealed-entirely-before-google-says-it-exists-525923-2.png',
          price: 399
        },
        {
          id: 21,
          name: 'Pixel 3 XL',
          imageUrl: 'https://www.androidred.com/wp-content/uploads/2019/05/pixel-3a-revealed-entirely-before-google-says-it-exists-525923-2.png',
          price: 285
        },
        {
          id: 22,
          name: 'Pixel 3',
          imageUrl: 'https://www.androidred.com/wp-content/uploads/2019/05/pixel-3a-revealed-entirely-before-google-says-it-exists-525923-2.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Apple iOS',
      routeName: 'appleios',
      items: [
        {
          id: 23,
          name: 'Iphone 11 ',
          imageUrl: 'https://pngimg.com/uploads/iphone_11/iphone_11_PNG33.png',
          price: 25
        },
        {
          id: 24,
          name: 'Iphone 11 Pro',
          imageUrl: 'https://pngimg.com/uploads/iphone_11/iphone_11_PNG39.png',
          price: 20
        },
        {
          id: 25,
          name: 'Iphone SE ',
          imageUrl: 'https://pngimg.com/uploads/iphone_11/iphone_11_PNG33.png',
          price: 80
        },
        {
          id: 26,
          name: 'Iphone XR ',
          imageUrl: 'https://banner2.cleanpng.com/20180327/kge/kisspng-iphone-x-iphone-8-plus-iphone-7-samsung-galaxy-tel-iphone-x-5ab9ec6e4ea185.7182771215221341263221.jpg',
          price: 80
        },
        {
          id: 27,
          name: 'Iphone X',
          imageUrl: 'https://png.pngtree.com/png-clipart/20190516/original/pngtree-iphonexsmaxgold-png-image_3627549.jpg',
          price: 45
        },
        {
          id: 28,
          name: 'Iphone 8',
          imageUrl: 'https://pngimg.com/uploads/iphone/iphone_PNG5723.png',
          price: 135
        },
        {
          id: 29,
          name: 'Iphone 7',
          imageUrl: 'https://pngimg.com/uploads/iphone/iphone_PNG5723.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Android',
      routeName: 'android',
      items: [
        {
          id: 30,
          name: 'Pixel 4',
          imageUrl: 'https://www.androidred.com/wp-content/uploads/2019/05/pixel-3a-revealed-entirely-before-google-says-it-exists-525923-2.png',
          price: 325
        },
        {
          id: 31,
          name: 'Pixel 4a',
          imageUrl: 'https://www.androidred.com/wp-content/uploads/2019/05/pixel-3a-revealed-entirely-before-google-says-it-exists-525923-2.png',
          price: 20
        },
        {
          id: 32,
          name: 'Pixel 3a',
          imageUrl: 'https://www.androidred.com/wp-content/uploads/2019/05/pixel-3a-revealed-entirely-before-google-says-it-exists-525923-2.png',
          price: 25
        },
        {
          id: 33,
          name: 'Samsung S20 Pro 5G',
          imageUrl: 'https://krispitech.com/wp-content/uploads/2020/02/s20-4-Copy-3.png',
          price: 25
        },
        {
          id: 34,
          name: 'Samsung S20',
          imageUrl: 'https://krispitech.com/wp-content/uploads/2020/02/s20-4-Copy-3.png',
          price: 40
        },
        {
          id: 35,
          name: 'Samsung S10',
          imageUrl: 'https://krispitech.com/wp-content/uploads/2020/02/s20-4-Copy-3.png',
          price: 25
        }
      ]
    }
  ];
  
export default SHOP_DATA;
  