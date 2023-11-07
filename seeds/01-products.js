/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    {
      "product_id": 1,
      "product_name": "Buzz Cola",
      "product_description": "The classic cola with an extra kick.",
      "product_price": 1.5,
      "product_sku": "BZC1",
      "active": true
    },
    {
      "product_id": 2,
      "product_name": "Squishee",
      "product_description": "A slushy beverage in various flavors.",
      "product_price": 2.0,
      "product_sku": "SQE2",
      "active": true
    },
    {
      "product_id": 3,
      "product_name": "Krusty-O's",
      "product_description": "The cereal with a clown twist.",
      "product_price": 3.99,
      "product_sku": "KRO3",
      "active": true
    },
    {
      "product_id": 4,
      "product_name": "Lard Lad Donuts",
      "product_description": "Delicious and iconic pink-frosted donuts.",
      "product_price": 1.25,
      "product_sku": "LLD4",
      "active": true
    },
    {
      "product_id": 5,
      "product_name": "Flaming Moe",
      "product_description": "A fiery, citrus-flavored cocktail.",
      "product_price": 8.5,
      "product_sku": "FLM5",
      "active": true
    },
    {
      "product_id": 6,
      "product_name": "Nuclear Waste Gum",
      "product_description": "Chewy gum with a radioactive twist.",
      "product_price": 0.99,
      "product_sku": "NWG6",
      "active": true
    },
    {
      "product_id": 7,
      "product_name": "Krusty Burger",
      "product_description": "The classic fast-food burger with a side of fries.",
      "product_price": 4.5,
      "product_sku": "KRB7",
      "active": true
    },
    {
      "product_id": 8,
      "product_name": "Lil' Lisa's Patented Vegetarian Organic Energy Bar",
      "product_description": "A healthy snack for those seeking a green diet.",
      "product_price": 3.49,
      "product_sku": "LVE8",
      "active": true
    },
    {
      "product_id": 9,
      "product_name": "Bort License Plate",
      "product_description": "A collectible license plate with the name Bort.",
      "product_price": 15.0,
      "product_sku": "BRT9",
      "active": true
    },
    {
      "product_id": 10,
      "product_name": "Radioactive Man Comic Book",
      "product_description": "The classic comic book featuring the adventures of Radioactive Man.",
      "product_price": 5.99,
      "product_sku": "RMC10",
      "active": true
    },
    {
      "product_id": 11,
      "product_name": "Duff Beer",
      "product_description": "The iconic beer of Springfield.",
      "product_price": 2.99,
      "product_sku": "DFB11",
      "active": true
    },
    {
      "product_id": 12,
      "product_name": "Kamp Krusty T-shirt",
      "product_description": "A T-shirt from Bart's infamous stay at Kamp Krusty.",
      "product_price": 12.5,
      "product_sku": "KKT12",
      "active": true
    },
    {
      "product_id": 13,
      "product_name": "Simpsons Pez Dispenser",
      "product_description": "Collectible Pez dispenser featuring various Simpsons characters.",
      "product_price": 3.0,
      "product_sku": "SPD13",
      "active": true
    },
    {
      "product_id": 14,
      "product_name": "Blinky the Three-Eyed Fish Plush Toy",
      "product_description": "A cuddly plush toy of Blinky, the iconic three-eyed fish.",
      "product_price": 9.99,
      "product_sku": "BTF14",
      "active": true
    },
    {
      "product_id": 15,
      "product_name": "Sideshow Bob Action Figure",
      "product_description": "An action figure of the diabolical Sideshow Bob.",
      "product_price": 8.0,
      "product_sku": "SBA15",
      "active": true
    },
    {
      "product_id": 16,
      "product_name": "Krusty Brand Imitation Gruel",
      "product_description": "An affordable imitation of gruel with a Krusty twist.",
      "product_price": 0.5,
      "product_sku": "KIG16",
      "active": true
    },
    {
      "product_id": 17,
      "product_name": "Bort Keychain",
      "product_description": "A keychain featuring the name Bort.",
      "product_price": 6.0,
      "product_sku": "BKC17",
      "active": true
    },
    {
      "product_id": 18,
      "product_name": "Mr. Sparkle Detergent",
      "product_description": "The popular Japanese detergent with a mysterious mascot.",
      "product_price": 4.5,
      "product_sku": "MSD18",
      "active": true
    },
    {
      "product_id": 19,
      "product_name": "Kwik-E-Mart Mug",
      "product_description": "A collectible mug featuring the iconic Kwik-E-Mart logo.",
      "product_price": 7.99,
      "product_sku": "KEM19",
      "active": true
    },
    {
      "product_id": 20,
      "product_name": "Bort Magnet",
      "product_description": "A refrigerator magnet featuring the name Bort.",
      "product_price": 3.0,
      "product_sku": "BMT20",
      "active": true
    },
    {
      "product_id": 21,
      "product_name": "Duff Energy Drink",
      "product_description": "An energy drink version of the famous Duff Beer.",
      "product_price": 2.5,
      "product_sku": "DED21",
      "active": true
    },
    {
      "product_id": 22,
      "product_name": "Krusty Brand Kruel",
      "product_description": "A prank version of Krusty's gruel.",
      "product_price": 1.0,
      "product_sku": "KBK22",
      "active": true
    },
    {
      "product_id": 23,
      "product_name": "Blinky the Three-Eyed Fish Hat",
      "product_description": "A quirky hat featuring Blinky, the three-eyed fish.",
      "product_price": 14.5,
      "product_sku": "BTH23",
      "active": true
    },
    {
      "product_id": 24,
      "product_name": "Simpsons Popsicle",
      "product_description": "A frozen treat featuring the faces of the Simpsons.",
      "product_price": 1.49,
      "product_sku": "SPO24",
      "active": true
    },
    {
      "product_id": 25,
      "product_name": "Itchy & Scratchy CD",
      "product_description": "A collection of music from the Itchy & Scratchy Show.",
      "product_price": 11.99,
      "product_sku": "ISC25",
      "active": true
    },
    {
      "product_id": 26,
      "product_name": "Krusty-O's Cereal Bowl",
      "product_description": "A bowl featuring the Krusty-O's cereal logo.",
      "product_price": 5.0,
      "product_sku": "KOB26",
      "active": true
    },
    {
      "product_id": 27,
      "product_name": "Bort Postcard",
      "product_description": "A postcard featuring the name Bort.",
      "product_price": 1.0,
      "product_sku": "BPC27",
      "active": true
    },
    {
      "product_id": 28,
      "product_name": "Krusty Brand Seal of Approval",
      "product_description": "A seal of approval with Krusty's likeness.",
      "product_price": 3.5,
      "product_sku": "KBS28",
      "active": true
    },
    {
      "product_id": 29,
      "product_name": "Duff Beer Mug",
      "product_description": "A collectible mug featuring the Duff Beer logo.",
      "product_price": 8.99,
      "product_sku": "DBM29",
      "active": true
    },
    {
      "product_id": 30,
      "product_name": "Simpsons Monopoly Board Game",
      "product_description": "The classic Monopoly game with a Simpsons twist.",
      "product_price": 29.99,
      "product_sku": "SMB30",
      "active": true
    },
    {
      "product_id": 31,
      "product_name": "Krusty Brand Butter Flavored Syrup",
      "product_description": "A unique syrup flavor from Krusty's brand.",
      "product_price": 4.0,
      "product_sku": "KBS31",
      "active": true
    },
    {
      "product_id": 32,
      "product_name": "Bart's Skateboard",
      "product_description": "A replica of Bart's iconic skateboard.",
      "product_price": 19.99,
      "product_sku": "BSB32",
      "active": true
    },
    {
      "product_id": 33,
      "product_name": "Krusty Brand Medicated Balm",
      "product_description": "A topical balm with Krusty's endorsement.",
      "product_price": 3.5,
      "product_sku": "KBM33",
      "active": true
    },
    {
      "product_id": 34,
      "product_name": "Bort Sticker",
      "product_description": "A sticker featuring the name Bort.",
      "product_price": 0.5,
      "product_sku": "BST34",
      "active": true
    },
    {
      "product_id": 35,
      "product_name": "Duff Beer Hat",
      "product_description": "A stylish hat featuring the Duff Beer logo.",
      "product_price": 12.99,
      "product_sku": "DBH35",
      "active": true
    },
    {
      "product_id": 36,
      "product_name": "Simpsons DVD Collection",
      "product_description": "A collection of classic Simpsons episodes on DVD.",
      "product_price": 39.99,
      "product_sku": "SDC36",
      "active": true
    },
    {
      "product_id": 37,
      "product_name": "Krusty Brand Imitation Gruel Can",
      "product_description": "A canned version of Krusty's imitation gruel.",
      "product_price": 1.99,
      "product_sku": "KIGC37",
      "active": true
    },
    {
      "product_id": 38,
      "product_name": "Bart Simpson Mask",
      "product_description": "A mask featuring Bart's mischievous face.",
      "product_price": 6.5,
      "product_sku": "BSM38",
      "active": true
    },
    {
      "product_id": 39,
      "product_name": "Krusty Brand Chew Goo Gum-Like Substance",
      "product_description": "A sticky and fun treat from Krusty's brand.",
      "product_price": 1.0,
      "product_sku": "KCG39",
      "active": true
    },
    {
      "product_id": 40,
      "product_name": "Homer's Donut Mug",
      "product_description": "A mug featuring Homer's favorite pink-frosted donut.",
      "product_price": 9.5,
      "product_sku": "HDM40",
      "active": true
    },
    {
      "product_id": 41,
      "product_name": "Radioactive Man Action Figure",
      "product_description": "An action figure of the heroic Radioactive Man.",
      "product_price": 7.0,
      "product_sku": "RMAF41",
      "active": true
    },
    {
      "product_id": 42,
      "product_name": "Duff Beer Coaster Set",
      "product_description": "A set of coasters featuring the Duff Beer logo.",
      "product_price": 14.99,
      "product_sku": "DBC42",
      "active": true
    },
    {
      "product_id": 43,
      "product_name": "Krusty Brand Non-Narkotik Kough Syrup",
      "product_description": "A cough syrup alternative with a Krusty twist.",
      "product_price": 6.0,
      "product_sku": "KBNK43",
      "active": true
    },
    {
      "product_id": 44,
      "product_name": "Squishee Machine",
      "product_description": "A machine for making your own Squishee at home.",
      "product_price": 49.99,
      "product_sku": "SQM44",
      "active": true
    },
    {
      "product_id": 45,
      "product_name": "Krusty Brand Brownie Mix",
      "product_description": "A baking mix for delicious Krusty-style brownies.",
      "product_price": 3.5,
      "product_sku": "KBBM45",
      "active": true
    }
  ]);
};
