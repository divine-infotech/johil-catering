// Remove image imports since files don't exist yet
// Instead, use a temporary image URL for development

const tempBiryaniImg = "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1887&auto=format&fit=crop"
const tempWineImg = "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1740&auto=format&fit=crop"
import chicken from '../assets/chicken.png'
import miniMutton from '../assets/mini mutton.png'
import miniChicken from '../assets/mini chicken.png'
import mutton from '../assets/mutton.jpg'

const FoodData = [
   {
      id: 1,
      name: "Jumbo Mutton Bucket",
      img: tempBiryaniImg,  // Using temporary image
      price: 2200,
      desc: "Serves 8 Pax: Mutton Biryani (1kg/4400g), Pepper Chicken (1/2kg), Bread Halwa (1/4kg), 8 Boiled Eggs, Raitha & Dalcha",
      category: "Bucket Biryani",
      rating: 4.8,
      serves: 8,
      items: [
         "Mutton Biryani - 1kg (4400 Grams)",
         "Pepper Chicken - 1/2kg",
         "Bread Halwa - 1/4kg",
         "Boiled Egg - 8nos",
         "Raitha, Dalcha"
      ]
   },
   {
      id: 2,
      name: "Jumbo Chicken Bucket",
      img: chicken,
      price: 1200,
      desc: "Serves 8 Pax: Chicken Biryani (1kg/4400g), Pepper Chicken (1/2kg), Bread Halwa (1/4kg), 8 Boiled Eggs, Raitha & Dalcha",
      category: "Bucket Biryani",
      rating: 4.7,
      serves: 8,
      recommended: true,
      items: [
         "Chicken Biryani - 1kg (4400 Grams)",
         "Pepper Chicken - 1/2kg",
         "Bread Halwa - 1/4kg",
         "Boiled Egg - 8nos",
         "Raitha, Dalcha"
      ]
   },
   {
      id: 3,
      name: "Mini Mutton Bucket",
      img: miniMutton,
      price: 1200,
      desc: "Serves 4 Pax: Mutton Biryani (1/2kg/2200g), Perfect for small gatherings",
      category: "Bucket Biryani",
      rating: 4.6,
      serves: 4,
      recommended: true,
      items: [
         "Mutton Biryani - 1/2kg (2200 Grams)",
         "Pepper chicken - 1/4kg",
        "Bread Halwa4- 1/4kg",
         "Boiled Egg - 4nos",
         "Raitha, Dalcha"
      ]
   },
   {
      id: 4,
      name: "Mini Chicken Bucket",
      img: miniChicken,
      price: 700,
      desc: "Serves 4 Pax: Chicken Biryani (1/2kg/2200g), Perfect for small gatherings",
      category: "Bucket Biryani",
      rating: 4.5,
      serves: 4,
      items: [
         "Chicken Biryani - 1/2kg (2200 Grams)",
         "Pepper chicken - 1/4kg",
        "Bread Halwa4- 1/4kg",
         "Boiled Egg - 4nos",
         "Raitha, Dalcha"
      ]
   },
   {
      id: 5,
      name: "Mutton - 1kg",
      img: mutton,
      price: 1200,
      desc: "Savor our tender, juicy mutton prepared in authentic South Indian style. Choose from rich gravy, spicy chukka, flavorful thalakari or traditional kola. A meat lover's delight!",
      category: "Bucket Biryani",
      rating: 4.5,
      items: [
         "Gravy",
         "Chukka", 
         "Thalakari - ₹700",
         "Kola - ₹40 (1 pcs)"
      ]
   },
   {
      id: 6,
      name: "Chicken - 1kg",
      img: miniChicken,
      price: 600,
      desc: "Experience our signature chicken delicacies - from aromatic garlic chicken to spicy Pallipalayam style. Crispy kebabs, Indo-Chinese manchurian and homestyle cutlets that'll keep you coming back for more!",
      category: "Bucket Biryani",
      rating: 4.5,
      items: [
        "Garlic Chicken",
        "Pallipalayam",
        "Kebab",
        "Manchurian",
        "Cutlet -₹30 (1 pcs)"
      ]
   },
   {
      id: 7,
      name: "Homemade Grape Wine",
      img: tempWineImg,  // Using temporary wine image
      price: 300,
      desc: "1 Litre of premium homemade grape wine",
      category: "Beverages",
      rating: 4.4,
   },
   {
      id: 8,
      name: "Homemade Pineapple Wine",
      img: tempWineImg,  // Using temporary wine image
      price: 300,
      desc: "1 Litre of refreshing homemade pineapple wine",
      category: "Beverages",
      rating: 4.4,
   }
];

export default FoodData;
