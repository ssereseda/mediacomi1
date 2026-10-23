export interface Apartment {
  id: number;
  address: string;
  rooms: number;
  area: number;
  floor: number;
  totalFloors: number;
  price: number;
  description: string;
  images: string[];
}

export const apartments: Apartment[] = [
  {
    id: 1,
    address: "Сыктывкар, ул. Коммунистическая, 12",
    rooms: 1,
    area: 33,
    floor: 3,
    totalFloors: 5,
    price: 2800000,
    description: "1-комн. квартира, 33 м², 3/5 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/344e70b2-234c-48c3-baf6-0b42de002676/_result.png",
      "https://image.qwenlm.ai/generated-images/f79ed69e-d01e-4557-a7cd-de7e064b5ecc/_result.png"
    ]
  },
  {
    id: 2,
    address: "Сыктывкар, ул. Морозова, 45",
    rooms: 2,
    area: 54,
    floor: 7,
    totalFloors: 9,
    price: 4200000,
    description: "2-комн. квартира, 54 м², 7/9 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/c416ffe8-30e1-4aa6-bb22-21cec602752b/_result.png",
      "https://image.qwenlm.ai/generated-images/f79ed69e-d01e-4557-a7cd-de7e064b5ecc/_result.png"
    ]
  },
  {
    id: 3,
    address: "Сыктывкар, Октябрьский пр., 88",
    rooms: 3,
    area: 72,
    floor: 5,
    totalFloors: 10,
    price: 5900000,
    description: "3-комн. квартира, 72 м², 5/10 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/41423dd4-52ea-41a2-935e-43a856083e74/_result.png",
      "https://image.qwenlm.ai/generated-images/0fbdb514-4ec7-4a31-aa40-9a1699623316/_result.png"
    ]
  },
  {
    id: 4,
    address: "Ухта, ул. Мира, 23",
    rooms: 1,
    area: 28,
    floor: 2,
    totalFloors: 5,
    price: 1900000,
    description: "1-комн. квартира, 28 м², 2/5 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/344e70b2-234c-48c3-baf6-0b42de002676/_result.png",
      "https://image.qwenlm.ai/generated-images/f35391f4-1625-4f5c-a5af-394c78e6f328/_result.png"
    ]
  },
  {
    id: 5,
    address: "Сыктывкар, ул. Карла Маркса, 155",
    rooms: 2,
    area: 48,
    floor: 4,
    totalFloors: 9,
    price: 3700000,
    description: "2-комн. квартира, 48 м², 4/9 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/c416ffe8-30e1-4aa6-bb22-21cec602752b/_result.png",
      "https://image.qwenlm.ai/generated-images/41423dd4-52ea-41a2-935e-43a856083e74/_result.png"
    ]
  },
  {
    id: 6,
    address: "Воркута, ул. Ленина, 34",
    rooms: 1,
    area: 30,
    floor: 6,
    totalFloors: 9,
    price: 1500000,
    description: "1-комн. квартира, 30 м², 6/9 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/344e70b2-234c-48c3-baf6-0b42de002676/_result.png",
      "https://image.qwenlm.ai/generated-images/f35391f4-1625-4f5c-a5af-394c78e6f328/_result.png"
    ]
  },
  {
    id: 7,
    address: "Сыктывкар, ул. Интернациональная, 67",
    rooms: 3,
    area: 85,
    floor: 8,
    totalFloors: 12,
    price: 7200000,
    description: "3-комн. квартира, 85 м², 8/12 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/41423dd4-52ea-41a2-935e-43a856083e74/_result.png",
      "https://image.qwenlm.ai/generated-images/0fbdb514-4ec7-4a31-aa40-9a1699623316/_result.png"
    ]
  },
  {
    id: 8,
    address: "Усинск, ул. Нефтяников, 8",
    rooms: 2,
    area: 44,
    floor: 3,
    totalFloors: 5,
    price: 2600000,
    description: "2-комн. квартира, 44 м², 3/5 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/c416ffe8-30e1-4aa6-bb22-21cec602752b/_result.png",
      "https://image.qwenlm.ai/generated-images/f79ed69e-d01e-4557-a7cd-de7e064b5ecc/_result.png"
    ]
  },
  {
    id: 9,
    address: "Сыктывкар, ул. Пушкина, 22",
    rooms: 1,
    area: 38,
    floor: 5,
    totalFloors: 9,
    price: 3100000,
    description: "1-комн. квартира, 38 м², 5/9 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/344e70b2-234c-48c3-baf6-0b42de002676/_result.png",
      "https://image.qwenlm.ai/generated-images/0fbdb514-4ec7-4a31-aa40-9a1699623316/_result.png"
    ]
  },
  {
    id: 10,
    address: "Печора, ул. Ленина, 51",
    rooms: 2,
    area: 52,
    floor: 4,
    totalFloors: 9,
    price: 3200000,
    description: "2-комн. квартира, 52 м², 4/9 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/c416ffe8-30e1-4aa6-bb22-21cec602752b/_result.png",
      "https://image.qwenlm.ai/generated-images/f35391f4-1625-4f5c-a5af-394c78e6f328/_result.png"
    ]
  },
  {
    id: 11,
    address: "Сыктывкар, ул. Бумажников, 10",
    rooms: 1,
    area: 25,
    floor: 1,
    totalFloors: 5,
    price: 2100000,
    description: "1-комн. квартира, 25 м², 1/5 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/344e70b2-234c-48c3-baf6-0b42de002676/_result.png",
      "https://image.qwenlm.ai/generated-images/f79ed69e-d01e-4557-a7cd-de7e064b5ecc/_result.png"
    ]
  },
  {
    id: 12,
    address: "Сыктывкар, ул. Куратова, 78",
    rooms: 3,
    area: 68,
    floor: 9,
    totalFloors: 16,
    price: 6100000,
    description: "3-комн. квартира, 68 м², 9/16 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/41423dd4-52ea-41a2-935e-43a856083e74/_result.png",
      "https://image.qwenlm.ai/generated-images/0fbdb514-4ec7-4a31-aa40-9a1699623316/_result.png"
    ]
  },
  {
    id: 13,
    address: "Ухта, ул. Косматова, 14",
    rooms: 2,
    area: 46,
    floor: 5,
    totalFloors: 9,
    price: 2900000,
    description: "2-комн. квартира, 46 м², 5/9 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/c416ffe8-30e1-4aa6-bb22-21cec602752b/_result.png",
      "https://image.qwenlm.ai/generated-images/41423dd4-52ea-41a2-935e-43a856083e74/_result.png"
    ]
  },
  {
    id: 14,
    address: "Сыктывкар, ул. Орджоникидзе, 33",
    rooms: 1,
    area: 40,
    floor: 7,
    totalFloors: 10,
    price: 3400000,
    description: "1-комн. квартира, 40 м², 7/10 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/344e70b2-234c-48c3-baf6-0b42de002676/_result.png",
      "https://image.qwenlm.ai/generated-images/f35391f4-1625-4f5c-a5af-394c78e6f328/_result.png"
    ]
  },
  {
    id: 15,
    address: "Воркута, ул. Горького, 17",
    rooms: 2,
    area: 42,
    floor: 3,
    totalFloors: 5,
    price: 1800000,
    description: "2-комн. квартира, 42 м², 3/5 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/c416ffe8-30e1-4aa6-bb22-21cec602752b/_result.png",
      "https://image.qwenlm.ai/generated-images/f79ed69e-d01e-4557-a7cd-de7e064b5ecc/_result.png"
    ]
  },
  {
    id: 16,
    address: "Сыктывкар, ул. Юбилейная, 41",
    rooms: 3,
    area: 78,
    floor: 6,
    totalFloors: 10,
    price: 6500000,
    description: "3-комн. квартира, 78 м², 6/10 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/41423dd4-52ea-41a2-935e-43a856083e74/_result.png",
      "https://image.qwenlm.ai/generated-images/0fbdb514-4ec7-4a31-aa40-9a1699623316/_result.png"
    ]
  },
  {
    id: 17,
    address: "Печора, ул. Мира, 29",
    rooms: 1,
    area: 31,
    floor: 4,
    totalFloors: 5,
    price: 2000000,
    description: "1-комн. квартира, 31 м², 4/5 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/344e70b2-234c-48c3-baf6-0b42de002676/_result.png",
      "https://image.qwenlm.ai/generated-images/f35391f4-1625-4f5c-a5af-394c78e6f328/_result.png"
    ]
  },
  {
    id: 18,
    address: "Сыктывкар, ул. Ленина, 99",
    rooms: 2,
    area: 58,
    floor: 8,
    totalFloors: 12,
    price: 4800000,
    description: "2-комн. квартира, 58 м², 8/12 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/c416ffe8-30e1-4aa6-bb22-21cec602752b/_result.png",
      "https://image.qwenlm.ai/generated-images/0fbdb514-4ec7-4a31-aa40-9a1699623316/_result.png"
    ]
  },
  {
    id: 19,
    address: "Усинск, ул. Молодёжная, 5",
    rooms: 1,
    area: 35,
    floor: 2,
    totalFloors: 5,
    price: 2300000,
    description: "1-комн. квартира, 35 м², 2/5 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/344e70b2-234c-48c3-baf6-0b42de002676/_result.png",
      "https://image.qwenlm.ai/generated-images/f79ed69e-d01e-4557-a7cd-de7e064b5ecc/_result.png"
    ]
  },
  {
    id: 20,
    address: "Сыктывкар, ул. Катаева, 56",
    rooms: 3,
    area: 92,
    floor: 11,
    totalFloors: 16,
    price: 8100000,
    description: "3-комн. квартира, 92 м², 11/16 эт.",
    images: [
      "https://image.qwenlm.ai/generated-images/41423dd4-52ea-41a2-935e-43a856083e74/_result.png",
      "https://image.qwenlm.ai/generated-images/f35391f4-1625-4f5c-a5af-394c78e6f328/_result.png"
    ]
  }
];
