export type Diet = "VEG" | "NON-VEG" | "SPICY";
export type Category = "Indian" | "European" | "African" | "Drinks";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  diet: Diet[];
  image: string;
  available?: boolean;
}

const img = (q: string) =>
  `https://images.unsplash.com/${q}?auto=format&fit=crop&w=800&q=80`;

export const MENU_ITEMS: MenuItem[] = [
  // Indian
  { id: "i1", name: "Chicken Tikka Masala", description: "Tender chicken in rich spiced tomato cream sauce", price: 4500, category: "Indian", diet: ["NON-VEG", "SPICY"], image: img("photo-1565557623262-b51c2513a641") },
  { id: "i2", name: "Vegetable Biryani", description: "Fragrant basmati rice with seasonal vegetables and whole spices", price: 3500, category: "Indian", diet: ["VEG"], image: img("photo-1563379091339-03b21ab4a4f8") },
  { id: "i3", name: "Paneer Butter Masala", description: "Cottage cheese cubes in silky tomato-butter gravy", price: 4000, category: "Indian", diet: ["VEG"], image: img("photo-1631452180519-c014fe946bc7") },
  { id: "i4", name: "Chicken Tandoori (Half)", description: "Marinated chicken slow-roasted in clay oven", price: 5000, category: "Indian", diet: ["NON-VEG"], image: img("photo-1599487488170-d11ec9c172f0") },
  { id: "i5", name: "Dal Tadka", description: "Yellow lentils tempered with cumin, garlic and ghee", price: 2800, category: "Indian", diet: ["VEG"], image: img("photo-1546833999-b9f581a1996d") },
  { id: "i6", name: "Garlic Naan", description: "Soft leavened flatbread with garlic and butter", price: 800, category: "Indian", diet: ["VEG"], image: img("photo-1610057099443-fde8c4d50f91") },
  { id: "i7", name: "Plain Rice", description: "Steamed basmati", price: 1000, category: "Indian", diet: ["VEG"], image: img("photo-1516684732162-798a0062be99") },
  { id: "i8", name: "Lamb Biryani", description: "Slow-cooked lamb with aromatic rice and saffron", price: 6000, category: "Indian", diet: ["NON-VEG", "SPICY"], image: img("photo-1633945274405-b6c8069047b0") },
  { id: "i9", name: "Palak Paneer", description: "Cottage cheese in spiced spinach puree", price: 3800, category: "Indian", diet: ["VEG"], image: img("photo-1601050690597-df0568f70950") },
  { id: "i10", name: "Mango Lassi", description: "Chilled yogurt drink with ripe mango", price: 1500, category: "Indian", diet: ["VEG"], image: img("photo-1571805341302-f857805e1f37") },

  // European
  { id: "e1", name: "Club Sandwich", description: "Triple-decker with chicken, egg, tomato, lettuce", price: 3500, category: "European", diet: ["NON-VEG"], image: img("photo-1567234669003-dce7a7a88821") },
  { id: "e2", name: "Grilled Chicken Fillet", description: "Herb-marinated breast with fries and salad", price: 4200, category: "European", diet: ["NON-VEG"], image: img("photo-1532550907401-a500c9a57435") },
  { id: "e3", name: "Spaghetti Bolognese", description: "Slow-cooked beef ragu on al dente pasta", price: 3800, category: "European", diet: ["NON-VEG"], image: img("photo-1551183053-bf91a1d81141") },
  { id: "e4", name: "Caesar Salad", description: "Romaine, croutons, parmesan, house dressing", price: 2500, category: "European", diet: ["VEG"], image: img("photo-1550304943-4f24f54ddde9") },

  // African
  { id: "a1", name: "Akumé", description: "Traditional Togolese corn porridge served with sauce", price: 2000, category: "African", diet: ["VEG"], image: img("photo-1574484284002-952d92456975") },
  { id: "a2", name: "Adémè", description: "Okra soup with smoked fish, served with fufu", price: 2500, category: "African", diet: ["NON-VEG"], image: img("photo-1547592180-85f173990554") },
  { id: "a3", name: "Djinkouné", description: "Togolese bean dish with fried plantains", price: 2200, category: "African", diet: ["VEG"], image: img("photo-1604908176997-125f25cc6f3d") },
  { id: "a4", name: "Grilled Tilapia", description: "Whole fish with spiced marinade, served with rice", price: 5500, category: "African", diet: ["NON-VEG"], image: img("photo-1535140728325-a4d3707eee94") },

  // Drinks
  { id: "d1", name: "Fresh Orange Juice", description: "Freshly squeezed", price: 1200, category: "Drinks", diet: ["VEG"], image: img("photo-1613478223719-2ab802602423") },
  { id: "d2", name: "Mango Juice", description: "Ripe local mango", price: 1200, category: "Drinks", diet: ["VEG"], image: img("photo-1546173159-315724a31696") },
  { id: "d3", name: "Soft Drink", description: "Coca-Cola, Fanta or Sprite", price: 800, category: "Drinks", diet: ["VEG"], image: img("photo-1622483767028-3f66f32aef97") },
  { id: "d4", name: "Water (50cl)", description: "Bottled mineral water", price: 500, category: "Drinks", diet: ["VEG"], image: img("photo-1548839140-29a749e1cf4d") },
  { id: "d5", name: "Local Beer", description: "Chilled local lager", price: 1500, category: "Drinks", diet: ["VEG"], image: img("photo-1608270586620-248524c67de9") },
  { id: "d6", name: "Tea / Coffee", description: "House blend", price: 600, category: "Drinks", diet: ["VEG"], image: img("photo-1509042239860-f550ce710b93") },
];

export const ROOM_TYPES = [
  { id: "studio", name: "Studio", desc: "Compact elegance. Double bed, private bathroom with shower, AC, HD TV, WiFi. Ideal for solo travelers.", price: "35 000 FCFA", image: img("photo-1631049307264-da0ec9d70304") },
  { id: "chambre-salon", name: "Chambre-Salon", desc: "Spacious suite with separate bedroom (king bed), full living room, fully equipped kitchen, private bathroom, some with balcony.", price: "65 000 FCFA", image: img("photo-1582719478250-c89cae4dc85b") },
  { id: "standard", name: "Standard Room", desc: "Comfortable room with private bathroom, AC, flat-screen TV. Perfect for short stays.", price: "45 000 FCFA", image: img("photo-1611892440504-42a792e24d32") },
  { id: "suite", name: "Suite", desc: "Premium accommodation with premium finishes, balcony, luxury bathroom. Ideal for business travelers.", price: "85 000 FCFA", image: img("photo-1590490360182-c33d57733427") },
];
