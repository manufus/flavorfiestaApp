import { Injectable } from '@angular/core';
import { LatLng, LatLngBounds } from 'leaflet';
import { BehaviorSubject } from 'rxjs';

interface Item {
  id: number;
  name: string;
  description?: string;  // Optional property
  img?: string;          // Optional property
  category?: string;
  menu?: string[];
  cat?: string;
}

export interface Comment {
  id: number;
  userId: number;
  username: string;
  userImg: string;
  content: string;
  timestamp: Date;
}

export interface Restaurant {
  id: number;
  name: string;
  description: string;
  img: string;
  category: string;
  menu: string[];
  rating: number;
}


export interface Ingredient {
  name: string;
  quantity: string; 
  img: string;
}

export interface IngredientDetail {
  id: number;
  name: string;
  description: string;
  img: string;
}

export interface Dish {
  id: number;
  name: string;
  description: string;
  img: string;
  category?: string;
  menu?: string[];
  steps?: Step[];
  ingredients?: Ingredient[];  // Add this line
}

export interface Step {
  title: string;
  description: string;
  img: string;
}

export interface Experience {
  id: number;
  name: string;
  img: string;
  description: string;
  cuisine: string;
  rating: number;
  distance: number;
}

interface DataServiceData {
  restaurants: Item[];
  plates: Item[];
  ingredients: Item[];
  categories: Item[];
}

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private activeTabSource = new BehaviorSubject<string>('food');
  activeTab = this.activeTabSource.asObservable();

  public data = {
    comments: [
      {
        id: 1,
        userId: 1,
        username: 'Alice Johnson',
        userImg: 'https://picsum.photos/200?random=1',
        content: 'Absolutely loved the paella here! Highly recommend trying it with their house sangria.',
        timestamp: new Date('2024-05-01T14:48:00')
      },
      {
        id: 2,
        userId: 2,
        username: 'Bob Smith',
        userImg: 'https://picsum.photos/200?random=2',
        content: 'The dish was okay, but could use more seasoning. The atmosphere, however, was fantastic!',
        timestamp: new Date('2024-04-30T10:20:00')
      },
      {
        id: 3,
        userId: 3,
        username: 'Carol Taylor',
        userImg: 'https://picsum.photos/200?random=3',
        content: 'Not my favorite. The seafood didn’t seem very fresh, which was disappointing.',
        timestamp: new Date('2024-04-29T12:34:00')
      }
    ],
    experiences: [
      {
        "id": 1,
        "name": "Paella and Sangria",
        "img": "https://via.placeholder.com/430x1024?text=Paella",
        "descriptionSh": "Paella cooking class - the best in town. Learn how to make authentic Paella and enjoy homemade Sangria.",
        "description": "Dive into the vibrant flavors of Valencia with our 'Paella and Sangria' cooking class. Led by renowned local chefs, this class not only teaches you how to perfect the art of making authentic Paella but also lets you create your own refreshing Sangria. It's an ideal blend of culinary skill building and fun, set in a lively atmosphere where each sip and stir is a celebration of Spanish culture.",
        "cuisine": "Spanish",
        "rating": 4.5,
        "distance": 1.3,
        "coordinates": [40.425622626890636, -3.701029570244581],
        "price": "€50 per person",
        "hours": "Thursdays and Fridays, 5 PM - 8 PM"
      },
      {
        "id": 2,
        "name": "Paella cooking class",
        "img": "https://www.barcelona-life.com/wp-content/uploads/2018/02/paella-cooking-class-barcelona.jpg",
        "descriptionSh": "Paella cooking class but not such a good one. Still, a great opportunity to learn the basics.",
        "description": "Join our beginner-friendly Paella cooking class for an informative introduction to the staples of Spanish cuisine. While this class might not make you a master chef, it offers a solid foundation in the techniques of Paella preparation, from selecting the right ingredients to achieving the perfect socarrat. Perfect for those looking to dabble in Spanish cooking without the pressure of perfection.",
        "cuisine": "Spanish",
        "rating": 3,
        "distance": 4.3,
        "coordinates": [40.42472421689552, -3.7038619827851846],
        "price": "€35 per person",
        "hours": "Weekdays, 3 PM - 6 PM"
      },
      {
        "id": 3,
        "name": "Cooking in Madrid",
        "img": "https://via.placeholder.com/430x1024?text=cooking+madrid",
        "descriptionSh": "Paella cooking class that is far away but worth the travel. Authentic experience in a rustic setting.",
        "description": "Experience the heart and soul of Spanish cooking with our 'Cooking in Madrid' class, located a bit further from the city center but well worth the journey. This class offers an intimate look at the traditional methods that have shaped Madrid's culinary landscape. You'll engage in hands-on preparation of classic dishes, gaining insights that go beyond the typical tourist experience, all within the rustic charm of a Madrid countryside kitchen.",
        "cuisine": "Spanish",
        "rating": 4,
        "distance": 5.3,
        "coordinates": [40.425099917080566, -3.7073810407901777],
        "price": "€60 per person",
        "hours": "Weekends, 11 AM - 2 PM"
      }
    ]
    ,    
    restaurants: [
      {
        "id": 1,
        "name": "Santa Canela",
        "description": "Cozy local with a Spanish flair, offering a range of traditional dishes.",
        "img": "https://www.srperro.com/media/negocio/fda7d38c-bde8-4fbd-a2de-dade3f55eb75.original.jpg",
        "category": "Spanish",
        "menu": [
          {
            "name": "Tortilla de Patatas",
            "description": "A classic Spanish dish made with eggs and potatoes, optionally including onion.",
            "price": "€10"
          },
          {
            "name": "Patatas Bravas",
            "description": "Fried potatoes topped with a spicy tomato sauce and aioli.",
            "price": "€8"
          },
          {
            "name": "Paella de Mariscos",
            "description": "A traditional Spanish rice dish from Valencia, filled with seafood and infused with saffron.",
            "price": "€20"
          }
        ],
        "rating": 4.5,
        "distance": 1,
        "coordinates": [40.428186983479854, -3.7062137502218473]
      },
      {
        "id": 2,
        "name": "Rincon de Augustino",
        "description": "An authentic market kitchen with a focus on fresh ingredients.",
        "img": "https://redaccion.camarazaragoza.com/wp-content/uploads/2021/09/el-rincon-grande.png",
        "category": "Market",
        "menu": [
          {
            "name": "Saffron Mushrooms",
            "description": "Fresh mushrooms sautéed with garlic and a hint of saffron.",
            "price": "€12"
          },
          {
            "name": "Jamon Serrano",
            "description": "Premium Spanish cured ham, known for its rich flavor and delicate texture, served with a side of melon.",
            "price": "€15"
          },
          {
            "name": "Bocadillo de Calamares",
            "description": "Crispy fried calamari rings served in a soft baguette, a Madrid street food classic.",
            "price": "€9"
          }
        ],
        "rating": 4.5,
        "distance": 2,
        "coordinates": [40.429500828730376, -3.7051745971252696]
      },
      {
        "id": 3,
        "name": "La Cueva",
        "description": "A hidden gem offering the best of local Spanish cuisine.",
        "img": "https://media.revistaad.es/photos/6564b1c0eac3ac56e8b13723/1:1/pass/undefined",
        "category": "Spanish",
        "menu": [
          {
            "name": "Cocido Madrileño",
            "description": "A traditional stew from Madrid, featuring a hearty mix of meats, chickpeas, and vegetables.",
            "price": "€18"
          },
          {
            "name": "Tortilla de Patatas",
            "description": "A classic Spanish dish made with eggs and potatoes, optionally including onion.",
            "price": "€10"
          },
          {
            "name": "Callos a la Madrileña",
            "description": "Traditional Madrid-style tripe, slow-cooked with Spanish paprika and chorizo.",
            "price": "€12"
          }
        ],
        "rating": 5,
        "distance": 3.4,
        "coordinates": [40.426501031028565, -3.707323066010175]
      }, 
      {
        "id": 4,
        "name": "El Jardin del Pan",
        "description": "A delightful retreat offering a fusion of traditional and contemporary Spanish cuisine.",
        "img": "https://via.placeholder.com/430x430?text=El+Jardin+del+Pan",
        "category": "Spanish",
        "menu": [
          {
            "name": "Paella de Mariscos",
            "description": "A traditional Spanish rice dish from Valencia, filled with seafood and infused with saffron.",
            "price": "€18"
          },
          {
            "name": "Tortilla de Patatas",
            "description": "A classic Spanish dish made with eggs and potatoes, optionally including onion.",
            "price": "€10"
          },
          {
            "name": "Gazpacho",
            "description": "A refreshing, cold tomato soup garnished with cucumber, peppers, and croutons.",
            "price": "€7"
          },
          {
            "name": "Churros con Chocolate",
            "description": "Crispy fried dough pastries served with a thick hot chocolate dip.",
            "price": "€5"
          }
        ],
        "rating": 4.7,
        "distance": 0.5,
        "coordinates": [40.427592917080566, -3.7073810407901777]
      },
      {
        "id": 5,
        "name": "Mariscos Castilla",
        "description": "Seafood heaven offering the freshest catches prepared with Spanish cooking traditions.",
        "img": "https://via.placeholder.com/430x430?text=Mariscos+Castilla",
        "category": "Seafood",
        "menu": [
          {
            "name": "Cocido Madrileño",
            "description": "A traditional stew from Madrid, featuring a hearty mix of meats, chickpeas, and vegetables.",
            "price": "€15"
          },
          {
            "name": "Rabo de Toro",
            "description": "Oxtail stew cooked slowly in a red wine sauce until tender.",
            "price": "€20"
          },
          {
            "name": "Patatas Bravas",
            "description": "Fried potatoes topped with a spicy tomato sauce and aioli.",
            "price": "€8"
          },
          {
            "name": "Jamon Iberico",
            "description": "Premium Spanish cured ham, known for its rich flavor and delicate texture.",
            "price": "€12"
          }
        ],        
        "rating": 4.8,
        "distance": 2,
        "coordinates": [40.428901031028349, -3.708923066010258]
      },
      {
        "id": 6,
        "name": "Bocadillos de la Rambla",
        "description": "Casual eatery famous for its sandwiches and tapas, right in the heart of the city.",
        "img": "https://via.placeholder.com/430x430?text=Bocadillos+de+la+Rambla",
        "category": "Casual",
        "menu": [
          {
            "name": "Bocadillo de Calamares",
            "description": "Crispy fried calamari rings served in a soft baguette, a Madrid street food classic.",
            "price": "€9"
          },
          {
            "name": "Croquetas de Jamon",
            "description": "Ham croquettes with a creamy béchamel filling and a crunchy breadcrumb coating.",
            "price": "€6"
          },
          {
            "name": "Pimientos de Padron",
            "description": "Small green peppers fried in olive oil and sprinkled with sea salt, some are hot, some are not.",
            "price": "€5"
          },
          {
            "name": "Tarta de Santiago",
            "description": "A traditional Galician almond tart, dusted with powdered sugar featuring the Cross of Saint James.",
            "price": "€7"
          }
        ],
        "rating": 4.3,
        "distance": 1.5,
        "coordinates": [40.425399917080566, -3.7063810407901777]
      }
    ],
    plates: [
      {
        id: 1,
        name: 'Paella de Marisco',
        description: 'A traditional Spanish rice dish from Valencia.',
        rating: 5,
        img: 'https://www.lafallera.es/wp-content/uploads/2023/11/Valor-nutricional-paella-mariscos--1080x675.jpeg',
        ingredients: [
          { name: 'Rice', quantity: '2 cups', img: 'https://www.gastroactitud.com/wp-content/uploads/2020/11/arroz-gastroactitud-7-scaled.jpeg', id: 10 },
          { name: 'Seafood mix', quantity: '200g', img: 'https://www.supermercadoseljamon.com/documents/10180/892067/10021004_G.jpg', id : 11 },
          { name: 'Saffron', quantity: '2 g', img: 'https://www.slofoodgroup.com/cdn/shop/articles/the-spice-of-life-everything-you-need-to-know-about-saffron-685756_1024x.jpg?v=1631068528', id: 3 },
        ],
        steps: [
          {
            title: 'Add olive oil',
            description: "Add 2 scops of olive oil",
            img: 'https://www.womansworld.com/wp-content/uploads/2021/02/oil.jpg?w=953'
          },
          {
            title: 'Cut red pepper',
            description: "Cut half of a red pepper into small dices",
            img: 'https://3.bp.blogspot.com/-UpX1sYFyFJk/VRWTfEm1JOI/AAAAAAAAj0A/5GKR3xgSl9E/s1600/cortar%2Bpimiento%2Bmorron.png'
          },
          {
            title: 'Cut the seafood',
            description: "Clean the calamari and slice it into small dices",
            img: 'https://recetassaboresypasiones.files.wordpress.com/2012/10/calamar-cortado.jpg'
          },
          {
            title: 'Add paprika',
            description: "Add the spices, don't be shy on this!",
            img: 'https://www.que.es/wp-content/uploads/2021/07/paella-sofrito-3.jpg'
          },
        ]
      },
      {
        id: 2,
        name: 'Tortilla de Patatas',
        rating: 4,
        description: 'A classic Spanish dish made with eggs and potatoes, optionally including onion.',
        img: 'https://www.lavanguardia.com/files/article_main_microformat/uploads/2020/02/04/5e998254e558a.jpeg',  // Updated placeholder,
        ingredients: [
          { name: "Eggs", quantity: "6", img: "https://via.placeholder.com/150?text=Eggs", id : 4 },
          { name: "Potatoes", quantity: "4 medium", img: "https://via.placeholder.com/150?text=Potatoes", id: 5 },
          { name: "Onion (optional)", quantity: "1 large", img: "https://via.placeholder.com/150?text=Onion" },
          { name: "Olive oil", quantity: "enough to cover the pan", img: "https://via.placeholder.com/150?text=Olive+Oil", id:13 },
          { name: "Salt", quantity: "to taste", img: "https://via.placeholder.com/150?text=Salt" }
        ],
        steps: [
          {
            title: "Slice the potatoes and onions",
            description: "Peel and thinly slice the potatoes and onions. Some prefer to chop the onions into small pieces to distribute more evenly.",
            img: "https://via.placeholder.com/150?text=Sliced+Potatoes+and+Onions"
          },
          {
            title: "Fry the potatoes and onions",
            description: "Heat the olive oil in a large pan, add the potatoes and onions (if using), and cook over medium heat. Occasionally stir until the potatoes are softened.",
            img: "https://via.placeholder.com/150?text=Frying+Potatoes+and+Onions"
          },
          {
            title: "Beat the eggs",
            description: "While the potatoes are cooking, beat the eggs in a large bowl with a pinch of salt.",
            img: "https://via.placeholder.com/150?text=Beaten+Eggs"
          },
          {
            title: "Combine eggs and potatoes",
            description: "Once the potatoes are soft and golden, drain them from the oil and add them to the beaten eggs. Mix gently and let it sit for a few minutes.",
            img: "https://via.placeholder.com/150?text=Eggs+and+Potatoes"
          },
          {
            title: "Cook the tortilla",
            description: "Heat a little of the olive oil in a smaller pan. Add the potato and egg mixture, spreading it evenly. Cook on a low heat, using a spatula to shape the edges. When almost set, invert the tortilla onto a plate, then slide back into the pan to cook the other side.",
            img: "https://via.placeholder.com/150?text=Cooking+Tortilla"
          }
        ]
        

      },
      {
        id: 3,
        name: 'Cocido Madrileno',
        rating: 3.5,
        description: "A hearty traditional stew perfect for winter days.",
        img: 'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/cocido-madrileno-1080x671.jpg',
        ingredients: [
          { name: "Chickpeas", quantity: "250g", img: "https://via.placeholder.com/150?text=Chickpeas" },
          { name: "Beef", quantity: "200g", img: "https://via.placeholder.com/150?text=Beef" },
          { name: "Chicken", quantity: "1 small", img: "https://via.placeholder.com/150?text=Chicken", id: 15 },
          { name: "Chorizo", quantity: "100g", img: "https://via.placeholder.com/150?text=Chorizo", id : 6 },
          { name: "Morcilla", quantity: "2 pieces", img: "https://via.placeholder.com/150?text=Morcilla", id: 16 },
          { name: "Potato", quantity: "2 large", img: "https://via.placeholder.com/150?text=Potato" },
          { name: "Cabbage", quantity: "1 small", img: "https://via.placeholder.com/150?text=Cabbage", id: 17 },
          { name: "Carrot", quantity: "2", img: "https://via.placeholder.com/150?text=Carrot", id:18 },
          { name: "Noodles", quantity: "100g", img: "https://via.placeholder.com/150?text=Noodles", id: 19 }
        ],
        steps: [
          {
            title: "Soak the chickpeas",
            description: "Soak the chickpeas overnight in water to soften them.",
            img: "https://via.placeholder.com/150?text=Soaked+Chickpeas"
          },
          {
            title: "Prepare the meats",
            description: "In a large pot, add the beef, chicken, chorizo, and morcilla. Cover with water and bring to a boil.",
            img: "https://via.placeholder.com/150?text=Meats+in+Pot"
          },
          {
            title: "Simmer the stew",
            description: "Reduce heat to a simmer and skim off any foam. Add the soaked chickpeas, and continue to simmer for about 2 hours.",
            img: "https://via.placeholder.com/150?text=Simmering+Stew"
          },
          {
            title: "Add vegetables",
            description: "Add diced potatoes, carrots, and cabbage to the pot. Continue to cook until the vegetables are tender, about 30 minutes.",
            img: "https://via.placeholder.com/150?text=Adding+Vegetables"
          },
          {
            title: "Prepare the soup",
            description: "Remove the meats and set aside. Strain the broth and return it to the pot. Add noodles and cook until tender.",
            img: "https://via.placeholder.com/150?text=Soup+Preparation"
          },
          {
            title: "Serve",
            description: "Serve the broth as a first course, followed by the meats and vegetables as the main course.",
            img: "https://via.placeholder.com/150?text=Serving+Cocido"
          }
        ]
      },
      {
        id: 4,
        name: 'Bocadillo de Calamares',
        rating: 4.5,
        description: "Madrid's famous calamari sandwich, a must-try street food.",
        img: 'https://imag.bonviveur.com/bocadillo-de-calamares.jpg',
        ingredients: [
          { name: "Fresh calamari rings", quantity: "200g", img: "https://via.placeholder.com/150?text=Calamari", id: 7 },
          { name: "Plain flour", quantity: "100g", img: "https://via.placeholder.com/150?text=Flour", id : 8 },
          { name: "Paprika", quantity: "1 tsp", img: "https://via.placeholder.com/150?text=Paprika", id: 9 },
          { name: "Salt", quantity: "to taste", img: "https://via.placeholder.com/150?text=Salt" },
          { name: "Lemon wedges", quantity: "for serving", img: "https://via.placeholder.com/150?text=Lemon+Wedges", id:14 },
          { name: "Baguette", quantity: "1", img: "https://via.placeholder.com/150?text=Baguette", id: 12 },
          { name: "Vegetable oil", quantity: "for frying", img: "https://via.placeholder.com/150?text=Oil", id: 13 }
        ],
        steps: [
          {
            title: "Prepare the calamari",
            description: "Clean the calamari and cut into rings. Pat dry with paper towels.",
            img: "https://via.placeholder.com/150?text=Prepare+Calamari"
          },
          {
            title: "Heat the oil",
            description: "Pour enough vegetable oil into a deep fryer or large pan and heat to 180°C (350°F).",
            img: "https://via.placeholder.com/150?text=Heating+Oil"
          },
          {
            title: "Dredge the calamari",
            description: "Combine flour, paprika, and salt in a mixing bowl. Dredge the calamari rings in the flour mixture until evenly coated.",
            img: "https://via.placeholder.com/150?text=Dredge+Calamari"
          },
          {
            title: "Fry the calamari",
            description: "Fry the calamari rings in batches until golden and crispy, about 2-3 minutes. Drain on paper towels.",
            img: "https://via.placeholder.com/150?text=Frying+Calamari"
          },
          {
            title: "Assemble the sandwich",
            description: "Slice the baguette open, and fill with the fried calamari. Optionally, squeeze lemon juice over the calamari.",
            img: "https://via.placeholder.com/150?text=Assemble+Sandwich"
          },
          {
            title: "Serve",
            description: "Serve immediately with lemon wedges on the side.",
            img: "https://via.placeholder.com/150?text=Serve+Sandwich"
          }
        ]
      },
    ],
    ingredients: [
      {
        id: 1,
        name: 'Jamon Iberico',
        description: "Premium Spanish cured ham, known for its rich flavor and delicate texture.",
        img: 'https://images.ecestaticos.com/eDvGaI2bcU7d6xAu6Nh_APrj6rA=/59x34:1911x1420/1200x899/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F9f2%2F152%2Ff25%2F9f2152f254a9850e554b721615da9ad4.jpg'
      },
      {
        id: 2,
        name: 'Jamon Serrano',
        description: "A traditional Spanish ham, saltier and with a deeper flavor than Iberico.",
        img: 'https://consorcioserrano.es/wp-content/uploads/2017/10/sabor-aroma-central.jpg'
      },
      {
        id: 3,
        name: 'Saffron',
        description: "Highly prized spice, known for its color, flavor, and being the most expensive spice by weight.",
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Saffron-IMG_6640-2.jpg/1920px-Saffron-IMG_6640-2.jpg'
      },
      {
        id: 4,
        name: 'Eggs',
        description: "Staple ingredient in many dishes, essential for baking and cooking.",
        img: 'https://ricette.giallozafferano.it/imgs/ricette/232/23271/sode1200x800.jpg'
      },
      {
        id: 5,
        name: 'Potatoes',
        description: "Versatile vegetable, a staple in various cuisines and essential for many classic dishes.",
        img: 'https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN440-Potatoes-732x549-thumb-732x549.jpg'
      },
      {
        id: 6,
        name: 'Chorizo',
        description: "Spicy Spanish sausage, used in many dishes for its distinctive paprika flavor.",
        img: 'https://enriquetomas.com/cdn/shop/articles/delicioso-chorizo-rodajas-arreglo-plato.jpg?v=1691666967&width=3000'
      },
      
      {
        id: 7,
        name: "Fresh calamari rings",
        description: "Tender rings of calamari, ready for frying or adding to seafood dishes.",
        img: "https://via.placeholder.com/150?text=Calamari"
      },
      {
        id: 8,
        name: "Plain flour",
        description: "All-purpose flour, used for breading or thickening sauces.",
        img: "https://via.placeholder.com/150?text=Flour"
      },
      {
        id: 9,
        name: "Paprika",
        description: "A spice made from dried red peppers, adds color and flavor to dishes.",
        img: "https://via.placeholder.com/150?text=Paprika"
      },
      {
        id: 10,
        name: "Rice",
        description: "Staple grain, commonly used in Spanish dishes like paella.",
        img: "https://www.gastroactitud.com/wp-content/uploads/2020/11/arroz-gastroactitud-7-scaled.jpeg"
      },
      {
        id: 11,
        name: "Seafood mix",
        description: "A mix of various seafoods, typically including shrimp, mussels, and calamari.",
        img: "https://www.supermercadoseljamon.com/documents/10180/892067/10021004_G.jpg"
      },
      
      {
        id: 12,
        name: "Baguette",
        description: "Long, thin loaf of French bread, crusty on the outside and soft on the inside.",
        img: "https://via.placeholder.com/150?text=Baguette"
      },
      {
        id: 13,
        name: "Vegetable oil",
        description: "Common cooking oil, used for frying or sautéing.",
        img: "https://via.placeholder.com/150?text=Oil"
      },
      {
        id: 14,
        name: "Lemon wedges",
        description: "Used to add a fresh, citrusy flavor to seafood dishes.",
        img: "https://via.placeholder.com/150?text=Lemon+Wedges"
      },
      
      {
        id: 15,
        name: "Chicken",
        description: "A common type of poultry, used in various cuisines around the world.",
        img: "https://via.placeholder.com/150?text=Chicken"
      },
      {
        id: 16,
        name: "Morcilla",
        description: "Spanish blood sausage, a common feature in regional cuisines.",
        img: "https://via.placeholder.com/150?text=Morcilla"
      },
      {
        id: 17,
        name: "Cabbage",
        description: "Leafy green, red, or white vegetable grown for its dense-leaved heads.",
        img: "https://via.placeholder.com/150?text=Cabbage"
      },
      {
        id: 18,
        name: "Carrot",
        description: "Root vegetable, usually orange in color, though purple, black, red, white, and yellow varieties exist.",
        img: "https://via.placeholder.com/150?text=Carrot"
      },
      {
        id: 19,
        name: "Noodles",
        description: "A type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings.",
        img: "https://via.placeholder.com/150?text=Noodles"
      }
    ],
    
    categories: [
      {
        name: 'Pizza',
        img: 'https://w6h5a5r4.rocketcdn.me/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg'
      },
      { 
        name: 'Brunch',
        img: 'https://hips.hearstapps.com/hmg-prod/images/mejores-brunch-1522782952.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*'
      },
      { 
        name: 'Veggie',
        img: 'https://encrypted-tbn0.gstatic.com/imgs?q=tbn:ANd9GcTdxuJCHKG1LhGW-xLCFXQQ7feUFVd8X6UTvueFfk3H3w&s'
      },
      { 
        name: 'Mexico',
        img: 'https://recipes.net/wp-content/uploads/2023/09/how-to-cook-mexican-food-1694756406.jpeg'
      },
      { 
        name: 'Sushi',
        img: 'https://www.escoffier.edu/wp-content/uploads/2019/10/Burger-with-a-rice-bun-sitting-on-a-plate-with-chop-sticks-1400.jpeg'
      },
      { 
        name: 'Fusion',
        img: 'https://www.popsci.com/uploads/2019/03/18/GHDDTIRYTR22T6DYZG6GGWUZCQ-scaled.jpg?auto=webp&width=1440&height=960.1875'
      },
      { 
        name: 'Sweet',
        img: 'https://miro.medium.com/v2/resize:fit:4000/1*yGK9jD35goWdn3XtRq9y4Q.jpeg' 
      },
      { 
        name: 'Market',
        img: 'https://agriculture.ny.gov/sites/g/files/oee1031/files/styles/wide_lead/public/media/2019/03/farmers-market-hero.jpg?h=736de8a2&itok=Rr9yISK7'
      },
    ],
    persons : [
    
      {
        id : 1,
        name: 'Alice Johnson',
        profilePhoto: 'https://picsum.photos/200?random=1',
        favouriteDish: 'Spaghetti Carbonara',
        description: 'Loves to explore classic recipes.',
        commonFriends: [1, 2]
      },
      {
        id : 2,
        name: 'Bob Smith',
        profilePhoto: 'https://picsum.photos/200?random=2',
        favouriteDish: 'Chicken Tikka Masala',
        description: 'Enjoys spicy food and playing guitar.',
        commonFriends: [0, 2, 3]
      },
      {
        id : 3,
        name: 'Carol Taylor',
        profilePhoto: 'https://picsum.photos/200?random=3',
        favouriteDish: 'Sushi',
        description: 'Sushi enthusiast and a tech geek.',
        commonFriends: [0, 1, 4, 5]
      },
      {
        id : 4,
        name: 'David Brown',
        profilePhoto: 'https://picsum.photos/200?random=4',
        favouriteDish: 'Beef Stew',
        description: 'Loves slow-cooked meals and autumn.',
        commonFriends: [1, 5],
        reviews: [
          {
            date: '2024-01-01',
            rating: 5,
            item: "Paella Class",
            text: 'wow learned a lot and met there my actual girlfriend',
            coordinates: [40.42869411472251, -3.7021852929225796],
          },
          {
            date: '2024-11-02',
            rating: 3,
            item: "Cocido Madrileno",
            text: 'I think i am in love with this recipe',
            coordinates: [40.43037071780266, -3.707085276456968],
          }
        ]
      },
      {
        id : 5,
        name: 'Eva Green',
        profilePhoto: 'https://picsum.photos/200?random=5',
        favouriteDish: 'Mango Salad',
        description: 'Health guru and freelance designer.',
        commonFriends: [2, 6, 7]
      },
      {
        id : 6,
        name: 'Frank Wright',
        profilePhoto: 'https://picsum.photos/200?random=6',
        favouriteDish: 'Pepperoni Pizza',
        description: 'Movie buff and pizza lover.',
        commonFriends: [2, 3, 8]
      },
      {
        id : 7,
        name: 'Grace Hall',
        profilePhoto: 'https://picsum.photos/200?random=7',
        favouriteDish: 'Pad Thai',
        description: 'Traveller and food blogger.',
        commonFriends: [4, 9],
        reviews: [
          {
            date: '2022-12-03',
            rating: 2,
            item: "Tortilla de Patatas",
            text: 'No me gusto esta receta q hasko!',
            coordinates: [40.43090988082089, -3.7054357771003734],
          },
          {
            date: '2022-05-31',
            rating: 5,
            item: "Santa Canela",
            text: 'The best restaurant in Arguelles!',
            coordinates: [40.43261502178399, -3.713332897675246],
          }
        ]
      },
      {
        id : 8,
        name: 'Henry Adams',
        profilePhoto: 'https://picsum.photos/200?random=8',
        favouriteDish: 'Roast Chicken',
        description: 'Enjoys Sunday family dinners and countryside walks.',
        commonFriends: [4, 6, 7]
      },
      {
        id : 9,
        name: 'Ivy Jones',
        profilePhoto: 'https://picsum.photos/200?random=9',
        favouriteDish: 'Vegetarian Lasagna',
        description: 'Vegetarian and advocate for sustainable living.',
        commonFriends: [5, 7, 8]
      },
      {
        id : 10,
        name: 'Jack Miller',
        profilePhoto: 'https://picsum.photos/200?random=10',
        favouriteDish: 'Pulled Pork Burger',
        description: 'Loves barbecue and blues music.',
        commonFriends: [6, 8]
      },
      {
        id : 11,
        name: 'Francesco Barbanti',
        profilePhoto: 'https://picsum.photos/200?random=11',
        favouriteDish: 'Polenta e Luganeghe',
        description: 'Spending a great time in Madrid',
        commonFriends: [6, 8],
        reviews: [
          {
            date: '2021-09-15',
            rating: 4,
            item: "Carbonara",
            text: 'Loved the authentic flavor of the carbonara!',
            coordinates: [40.42877022763103, -3.704389679822564],

          },
          {
            date: '2021-10-20',
            rating: 5,
            item: "Paella de Mariscos",
            text: 'Absolutely delicious, just like what I had in Madrid!',
            coordinates: [40.42682146351229, -3.702745744662306],
          }
        ]
      }
  ]
  }

  constructor() { }

  changeTab(tabId: string) {
    this.activeTabSource.next(tabId);
  }

  getData() {
    return this.data;
  }

  getTitle(): string {
    return this.data.plates[0].name; // Fetch title from the first plate
  }

  getItemById(category: keyof DataServiceData, id: number): Item | undefined {
    const itemList = this.data[category] as Item[]; // Assert that itemList is an array of Items
    if (!itemList) return undefined;
    
    return itemList.find(item => item.id === id);
}
  //Return all experiences
  getExperiences(filter : string = "") {
    if (!filter) {
      return this.data.experiences;
    }
    filter = filter.toLowerCase();
    return this.data.experiences.filter(e => {
      return Object.values(e).some(val => 
        String(val).toLowerCase().includes(filter)
      );
    }
    );
   
    
  }

  getRestaurants(filter : string = "") {
    if (!filter) {
      return this.data.restaurants;
    }
    filter = filter.toLowerCase();
    return this.data.restaurants.filter(r => {
      return Object.values(r).some(val => 
        String(val).toLowerCase().includes(filter)
      );
    }
    );
   
    
  }

  // Get all plates (dishes)
  getPlates(filter : string = "") {
    if (!filter) {
      return this.data.plates;
    }
    filter = filter.toLowerCase();
    return this.data.plates.filter(pl => {
      return Object.values(pl).some(val => 
        String(val).toLowerCase().includes(filter)
      );
    }
    );
    
  }

  // Get all ingredients
  getIngredients(filter : string = " ") {
    if (!filter) {
      return this.data.ingredients;
    }
    filter = filter.toLowerCase();
    return this.data.ingredients.filter(pl => {
      return Object.values(pl).some(val => 
        String(val).toLowerCase().includes(filter)
      );
    }
    );
    
  }

  public search(query: string, tab: string) {
    let results = {};
    switch(tab) {
      case 'food':
        results = {
          restaurants: this.getRestaurants(query),
          dishes: this.getPlates(query),
          ingredients: this.getIngredients( query)
        };
        break;
      case 'friends':
        results = {
          people: this.getPeople( query)
        };
        break;
      case 'experience':
        results = {
          experiences: this.getExperiences(query)
        };
        break;
    }
    return results;
  }

// New method: get a single ingredient by ID
getIngredientById(id: number): IngredientDetail | undefined {
  return this.data.ingredients.find(ingredient => ingredient.id === id);
}

getRestById(id: number) {
  return this.data.restaurants.find(rest => rest.id === id);
}
getPersonByid(id: number) {
   return this.data.persons.find(pers => pers.id === id)
}
getExperienceById(id:number) {
  return this.data.experiences.find(exp => exp.id === id)
}
getDishById(id:number) {
  return this.data.plates.find(dish => dish.id === id)
}


  // Get all categories
  getCategories() {
    return this.data.categories;
  }

  
  getPeople(filter : string = " ") {
    if (!filter) {
      return this.data.persons;
    }
    filter = filter.toLowerCase();
    return this.data.persons.filter(p =>
      p.name.toLowerCase().includes(filter) ||
      p.description.toLowerCase().includes(filter)
    );
  }


  getCommonFriends(personIndex : number) {
    const person = this.data.persons[personIndex];
    if (!person) {
      return []; // Return empty if no person found at index
    }
    // Map each index in the person's commonFriends array to the corresponding person object
    return person.commonFriends.map(friendIndex => this.data.persons[friendIndex]);
   }

   getReviewsByPersonName(name: string) {
  const person = this.data.persons.find(p => p.name === name);
  return person ? person.reviews : [];
}
getAllReviews() {
  let allReviews: any[] = [];
  for (let person of this.data.persons) {
    if (person.reviews) { // Check if reviews array is defined
      const reviewsWithPersonInfo = person.reviews.map(review => ({
        ...review,
        
        reviewerName: person.name,
        reviewerId: person.id,
        reviewerPhoto: person.profilePhoto
      }));
      allReviews = allReviews.concat(reviewsWithPersonInfo);
    }
  }
  return allReviews;
}
getAllCoordinates() {
  let allCordinates: any[] = [];
  this.data.restaurants.forEach(rest => {
    if (rest.coordinates) {
      allCordinates.push(rest.coordinates)
    }
  })
  return allCordinates;
}

getComments() {
  return this.data.comments;
}
  
}
