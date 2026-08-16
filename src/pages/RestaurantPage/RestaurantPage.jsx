import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RestaurantPage.css";

import ProductCard from "../../components/ProductCard/ProductCard";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import CategoryNav from "../../components/CategoryNav/CategoryNav";
import LocationModal from "../../components/LocationModal/LocationModal";

/* =========================================================
   FOODPANDA PRODUCT IMAGES
   Order is exactly the same as PRODUCTS array
========================================================= */

const PRODUCT_IMAGES = [
  // 1-8 Kunafa Cups
  "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008037/6e9b9951-b970-4d2d-bf63-a77fa81382ba.jpg?width=128&height=128",

  // PRODUCT 2 - CORRECT URL
  "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008038/5d867e81-1c13-43de-bc9a-1ddbe2abbff1.jpg?width=128&height=128",

  "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008040/be903b62-b03d-4b2f-aab6-a019238267a8.jpg?width=150&height=150",

  "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008041/c2e5ed6c-ca6b-47da-9fe1-3305a68903ef.jpg?width=150&height=150",

  "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008032/18a93868-eb55-4508-9e3f-03ba8e0c69c6.jpg?width=150&height=150",

  "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008033/2cee9708-e05f-4d51-9b0f-579e5c357ecc.jpg?width=150&height=150",

  "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008035/7f12163e-901a-465a-8c9f-a174e7686790.jpg?width=150&height=150",

  "https://images.deliveryhero.io/image/global-menu-service/FP_PK/vendor/w45o/product/103008036/4856b8c4-2ea2-4543-b0ae-9b3c86b5aaff.jpg?width=150&height=150",

  // 9 onwards
  "https://images.deliveryhero.io/image/fd-pk/Products/99807626.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807627.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807628.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807629.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807630.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807631.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807632.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807633.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807634.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807635.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807636.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807637.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807638.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807639.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807640.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807641.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807642.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807643.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807644.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807645.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807646.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807647.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807648.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807649.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807650.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807652.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807653.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807654.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807655.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807656.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807657.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807658.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807660.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807661.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807662.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807664.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807665.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99807666.jpg?width=150&height=150",
  "https://images.deliveryhero.io/image/fd-pk/Products/99822039.jpg?width=150&height=150",
];

/* =========================================================
   PRODUCTS
========================================================= */

const PRODUCTS = [
  // =======================================================
  // Kunafa Cups
  // =======================================================

  {
    id: 1,
    name: "Mango Kunafa Cup",
    price: 1399,
    desc: "Delicious mixture of mango fruit with drizzled pistachio paste, chocolate and kunafa",
    category: "Kunafa Cups",
  },
  {
    id: 2,
    name: "Banana Kunafa Cup",
    price: 1399,
    desc: "Delicious mixture of fresh banana fruit with drizzled pistachio paste, rich chocolate and crispy kunafa creating a perfect blend of textures and flavors",
    category: "Kunafa Cups",
    image: "/be903b62-b03d-4b2f-aab6-a019238267a8.webp",
  },
  {
    id: 3,
    name: "Peach Kunafa Cup",
    price: 1399,
    desc: "Delicious mixture of peach fruit with drizzled pistachio paste, chocolate and kunafa",
    category: "Kunafa Cups",
  },
  {
    id: 4,
    name: "Grapes Kunafa Cup",
    price: 1399,
    desc: "Delicious mixture of grapes fruit with drizzled pistachio paste, chocolate and kunafa",
    category: "Kunafa Cups",
  },

  // =======================================================
  // Chocolate Cups
  // =======================================================

  {
    id: 5,
    name: "Mango Chocolate Cup",
    price: 1199,
    desc: "Decadent chocolate cup filled with smooth mango cream and fresh mango pieces, a perfect blend of rich chocolate and tropical mango flavors in every bite",
    category: "Chocolate Cups",
  },
  {
    id: 6,
    name: "Banana Chocolate Cup",
    price: 1199,
    desc: "Delicious chocolate cups filled with creamy banana goodness, a perfect blend of rich dark chocolate shell and smooth banana filling that melts in your mouth",
    category: "Chocolate Cups",
  },
  {
    id: 7,
    name: "Peach Chocolate Cup",
    price: 1199,
    desc: "Delightful chocolate cups filled with smooth peach-flavored cream, a perfect blend of rich dark chocolate and sweet fruity peach notes",
    category: "Chocolate Cups",
  },
  {
    id: 8,
    name: "Grapes Chocolate Cups",
    price: 1199,
    desc: "Delightful chocolate cup filled with plump juicy grapes, offering a perfect blend of rich cocoa and fresh fruity sweetness in every bite",
    category: "Chocolate Cups",
  },

  // =======================================================
  // Frappuccino
  // =======================================================

  {
    id: 9,
    name: "Mocha",
    price: 950,
    desc: "A decadent hot latte combining rich espresso with sweet chocolate for a comforting drink",
    category: "Frappuccino",
  },
  {
    id: 10,
    name: "Vanilla",
    price: 950,
    desc: "A creamy, smooth vanilla frappuccino, offering a sweet & refreshing taste",
    category: "Frappuccino",
  },
  {
    id: 11,
    name: "Hazelnut",
    price: 950,
    desc: "Indulge in a delightful hazelnut frappuccino, blending nutty flavors with a cool & creamy texture",
    category: "Frappuccino",
  },
  {
    id: 12,
    name: "Double Chocolate",
    price: 950,
    desc: "A rich, decadent double chocolate frappuccino offering an intense chocolate experience in every sip",
    category: "Frappuccino",
  },
  {
    id: 13,
    name: "Caramel",
    price: 950,
    desc: "A smooth caramel frappuccino, blending sweet caramel notes with a cool & refreshing consistency",
    category: "Frappuccino",
  },
  {
    id: 14,
    name: "Biscoff",
    price: 950,
    desc: "Experience the unique taste of Biscoff in a creamy frappuccino, a blend of spiced biscuit flavors with a cool finish",
    category: "Frappuccino",
  },

  // =======================================================
  // Mojito
  // =======================================================

  {
    id: 15,
    name: "Lemonade",
    price: 530,
    desc: "A classic, zesty lemonade, offering a refreshing & tangy taste with every sip",
    category: "Mojito",
  },
  {
    id: 16,
    name: "Passion Fruit Mojito",
    price: 530,
    desc: "A vibrant mojito bursting with the exotic, tangy flavor of passion fruit, creating a refreshing drink",
    category: "Mojito",
  },
  {
    id: 17,
    name: "Strawberry Mojito",
    price: 530,
    desc: "A sweet, refreshing strawberry mojito, blending fresh strawberries with mint & lime for a cool taste",
    category: "Mojito",
  },
  {
    id: 18,
    name: "Pomegranate Mojito",
    price: 530,
    desc: "A delightful pomegranate mojito, combining the sweet, tart notes of pomegranate with refreshing mint & lime",
    category: "Mojito",
  },

  // =======================================================
  // Iced Tea
  // =======================================================

  {
    id: 19,
    name: "Peach Iced Tea",
    price: 550,
    desc: "A crisp, sweet peach iced tea, offering a fruity & cool refreshment on any occasion",
    category: "Iced Tea",
  },
  {
    id: 20,
    name: "Strawberry Iced Tea",
    price: 550,
    desc: "A delightful strawberry iced tea, blending the sweetness of fresh strawberries with a cool & invigorating tea base",
    category: "Iced Tea",
  },
  {
    id: 21,
    name: "Passion Fruit Iced Tea",
    price: 550,
    desc: "An exotic passion fruit iced tea, offering a tangy & sweet flavor profile for a refreshing experience",
    category: "Iced Tea",
  },
  {
    id: 22,
    name: "Pomegranate Iced Tea",
    price: 550,
    desc: "A refreshing pomegranate iced tea, combining the sweet & slightly tart notes of pomegranate with a cool tea",
    category: "Iced Tea",
  },

  // =======================================================
  // Slow Bar
  // =======================================================

  {
    id: 23,
    name: "V60",
    price: 800,
    desc: "A meticulously prepared V60 pour-over coffee, highlighting the delicate & nuanced flavors of our selected beans",
    category: "Slow Bar",
  },
  {
    id: 24,
    name: "Aeropress",
    price: 800,
    desc: "A smooth, clean Aeropress coffee, offering a rich flavor with a balanced acidity & body",
    category: "Slow Bar",
  },

  // =======================================================
  // Hot Latte
  // =======================================================

  {
    id: 25,
    name: "Espresso",
    price: 450,
    desc: "Rich & bold single shot coffee",
    category: "Hot Latte",
  },
  {
    id: 26,
    name: "Cortado",
    price: 650,
    desc: "Espresso softened with warm milk",
    category: "Hot Latte",
  },
  {
    id: 27,
    name: "Cappuccino",
    price: 700,
    desc: "Espresso with steamed milk foam",
    category: "Hot Latte",
  },
  {
    id: 28,
    name: "Latte",
    price: 700,
    desc: "Smooth espresso with creamy milk",
    category: "Hot Latte",
  },
  {
    id: 29,
    name: "Americano",
    price: 650,
    desc: "Espresso diluted with hot water",
    category: "Hot Latte",
  },
  {
    id: 30,
    name: "Flat White",
    price: 650,
    desc: "Velvety milk with strong espresso",
    category: "Hot Latte",
  },
  {
    id: 31,
    name: "Spanish Latte",
    price: 730,
    desc: "Sweet & creamy espresso milk blend",
    category: "Hot Latte",
  },
  {
    id: 32,
    name: "Mocha Hot Latte",
    price: 730,
    desc: "Espresso mixed with chocolate",
    category: "Hot Latte",
  },
  {
    id: 33,
    name: "Caramel Latte",
    price: 700,
    desc: "Creamy latte with caramel sweetness",
    category: "Hot Latte",
  },

  // =======================================================
  // Iced Latte
  // =======================================================

  {
    id: 34,
    name: "Cinnamon Latte",
    price: 750,
    desc: "Condensed milk with subtle cinnamon",
    category: "Iced Latte",
  },
  {
    id: 35,
    name: "Iced Spanish Latte",
    price: 750,
    desc: "Rich coffee with lavish taste",
    category: "Iced Latte",
  },
  {
    id: 36,
    name: "Iced Mocha",
    price: 800,
    desc: "Coffee blended with rich chocolate",
    category: "Iced Latte",
  },
  {
    id: 37,
    name: "Iced Americano",
    price: 700,
    desc: "Bold & clean brewed coffee",
    category: "Iced Latte",
  },
  {
    id: 38,
    name: "Iced Caramel Latte",
    price: 450,
    desc: "Coffee with smooth caramel notes",
    category: "Iced Latte",
  },
  {
    id: 39,
    name: "Honey Latte",
    price: 750,
    desc: "Sweet honey with bold coffee",
    category: "Iced Latte",
  },
  {
    id: 40,
    name: "Iced Vanilla Latte",
    price: 750,
    desc: "French vanilla & creamy latte",
    category: "Iced Latte",
  },
  {
    id: 41,
    name: "Iced Hazelnut Latte",
    price: 750,
    desc: "Bold hazelnut with creamy latte",
    category: "Iced Latte",
  },

  // =======================================================
  // Coffee
  // =======================================================

  {
    id: 42,
    name: "Hot Chocolate",
    price: 800,
    desc: "A comforting hot chocolate, rich, warm, offering a sweet & indulgent experience",
    category: "Coffee",
  },
  {
    id: 43,
    name: "Iced Chocolate Deluxe",
    price: 850,
    desc: "A cooling iced chocolate, offering a rich & sweet chocolate taste over ice",
    category: "Coffee",
  },

  // =======================================================
  // Matcha
  // =======================================================

  {
    id: 44,
    name: "Matcha Latte",
    price: 980,
    desc: "A creamy latte made with vibrant matcha tea, offering a smooth & earthy flavor profile",
    category: "Matcha",
  },
  {
    id: 45,
    name: "Spanish Matcha",
    price: 1050,
    desc: "A unique take on matcha, prepared with a distinct Spanish flair, combining traditional matcha with a rich & inviting twist",
    category: "Matcha",
  },
  {
    id: 46,
    name: "Strawberry Matcha",
    price: 1150,
    desc: "A refreshing blend of vibrant matcha tea infused with the sweet & slightly tart essence of fresh strawberries",
    category: "Matcha",
  },

  // =======================================================
  // Beverages
  // =======================================================

  {
    id: 47,
    name: "Nestle Water - 500ml",
    price: 100,
    desc: "Bottled water offering a refreshing taste",
    category: "Beverages",
  },
];

/* =========================================================
   AUTOMATICALLY ASSIGN FOODPANDA IMAGE TO EACH PRODUCT

   PRODUCT #1  -> PRODUCT_IMAGES[0]
   PRODUCT #2  -> PRODUCT_IMAGES[1]
   ...
   PRODUCT #47 -> PRODUCT_IMAGES[46]
========================================================= */

const PRODUCTS_WITH_IMAGES = PRODUCTS.map((product, index) => ({
  ...product,
  image: PRODUCT_IMAGES[index] || "",
}));

const MENU_CATEGORIES = Array.from(
  new Set(PRODUCTS_WITH_IMAGES.map((product) => product.category)),
);

/* =========================================================
   RESTAURANT PAGE
========================================================= */

export default function RestaurantPage() {
  const navigate = useNavigate();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedQty, setSelectedQty] = useState(1);

  /* =======================================================
     CART
  ======================================================= */

  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");

      if (!savedCart) {
        return [];
      }

      const parsedCart = JSON.parse(savedCart);

      return Array.isArray(parsedCart) ? parsedCart : [];
    } catch (error) {
      console.error("Unable to load cart:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Unable to save cart:", error);
    }
  }, [cart]);

  /* =======================================================
     STATES
  ======================================================= */

  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [showLocationModal, setShowLocationModal] = useState(true);

  /* =======================================================
     ADD TO CART
  ======================================================= */

  function addToCart(product) {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);

      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          qty: 1,
        },
      ];
    });
  }

  /* =======================================================
     ADD TO CART WITH QUANTITY
  ======================================================= */

  function addToCartWithQty(product, qty) {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);

      if (found) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + qty,
              }
            : item,
        );
      }

      return [
        ...prev,
        {
          ...product,
          qty,
        },
      ];
    });

    setSelectedProduct(null);
  }

  /* =======================================================
     QUICK ADD
  ======================================================= */

  function openQuickAdd(product) {
    setSelectedProduct(product);
    setSelectedQty(1);
  }

  /* =======================================================
     LOCATION
  ======================================================= */

  function handleLocationSelect(selection) {
    console.log("Selected location:", selection);
    setShowLocationModal(false);
  }

  /* =======================================================
     CATEGORY SELECT
  ======================================================= */

  function handleCategorySelect(cat) {
    setCategory(cat);

    const targetId = cat === "All" ? "menu-start" : `category-${cat}`;

    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  /* =======================================================
     CART CLICK
  ======================================================= */

  function handleCartClick() {
    navigate("/cart");
  }

  /* =======================================================
     SEARCH FILTER
  ======================================================= */

  const normalizedSearch = search.trim().toLowerCase();

  return (
    <div>
      {/* ===================================================
          LOCATION MODAL
      =================================================== */}

      {showLocationModal && <LocationModal onSelect={handleLocationSelect} />}

      {/* ===================================================
          NAVBAR
      =================================================== */}

      <Navbar
        cartCount={cart.reduce((sum, item) => sum + (item.qty || 0), 0)}
        onCartClick={handleCartClick}
      />

      <div className="container">
        {/* =================================================
            HERO
        ================================================= */}

        <div className="hero">
          <div className="hero-left">
            <h1>Fary Au Chocolat</h1>

            <p className="lead">
              Handcrafted chocolates & desserts. Fresh daily order for delivery
              or pickup.
            </p>

            <div className="hero-meta">
              <div className="rating">
                ⭐ <strong>4.8</strong>{" "}
                <span className="muted">• 41 reviews</span>
              </div>

              <div className="chips">
                <span className="chip open">Open</span>

                <span className="chip">Min PKR 500</span>

                <span className="chip">Delivery 30–45 min</span>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <img
              src="https://images.deliveryhero.io/image/fd-pk/LH/w45o-hero.jpg?width=200&height=200"
              alt="Fary Au Chocolat"
              onError={(e) => {
                e.currentTarget.onerror = null;

                e.currentTarget.src =
                  "https://images.deliveryhero.io/image/fd-pk/LH/w45o-listing.jpg?width=200&height=200";
              }}
            />
          </div>
        </div>

        {/* =================================================
            MENU
        ================================================= */}

        <main className="restaurant-root">
          <section className="menu">
            {/* Restaurant Header */}

            <div className="restaurant-header">
              <h1>Fary Au Chocolat</h1>

              <p>Gourmet chocolates & desserts</p>
            </div>

            {/* Category Navigation */}

            <CategoryNav
              categories={["All", ...MENU_CATEGORIES]}
              selected={category}
              onSelect={handleCategorySelect}
            />

            {/* Search */}

            <div
              style={{
                marginBottom: 12,
              }}
            >
              <input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  padding: 10,
                  width: "100%",
                  borderRadius: 8,
                  border: "1px solid #ddd",
                  boxSizing: "border-box",
                }}
              />
            </div>

            {/* =================================================
                MENU SECTIONS
            ================================================= */}

            <div id="menu-start" className="menu-sections">
              {MENU_CATEGORIES.map((cat) => {
                const items = PRODUCTS_WITH_IMAGES.filter(
                  (product) =>
                    product.category === cat &&
                    (product.name.toLowerCase().includes(normalizedSearch) ||
                      product.desc.toLowerCase().includes(normalizedSearch)),
                );

                if (items.length === 0) {
                  return null;
                }

                return (
                  <section
                    key={cat}
                    id={`category-${cat}`}
                    className="menu-section"
                  >
                    {/* Section Header */}

                    <div className="menu-section-header">
                      <h2 className="menu-section-title">{cat}</h2>

                      <span className="menu-section-count">{items.length}</span>
                    </div>

                    {/* Products */}

                    <div className="products">
                      {items.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAdd={() => addToCart(product)}
                          onQuickOpen={openQuickAdd}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </section>
        </main>
      </div>

      {/* ===================================================
          FOOTER
      =================================================== */}

      <Footer />

      {/* ===================================================
          PRODUCT QUICK ADD MODAL
      =================================================== */}

      {selectedProduct && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProduct(null)}
        >
          <div className="product-modal" onClick={(e) => e.stopPropagation()}>
            {/* Modal Image */}

            <div className="modal-left">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                onError={(e) => {
                  e.currentTarget.onerror = null;

                  e.currentTarget.src =
                    "https://images.deliveryhero.io/image/fd-pk/LH/w45o-listing.jpg?width=200&height=200";
                }}
              />
            </div>

            {/* Modal Details */}

            <div className="modal-right">
              <h3>{selectedProduct.name}</h3>

              <p className="desc">{selectedProduct.desc}</p>

              <div className="modal-price">PKR {selectedProduct.price}</div>

              {/* Quantity */}

              <div className="qty-control">
                <button
                  onClick={() => setSelectedQty(Math.max(1, selectedQty - 1))}
                >
                  -
                </button>

                <span>{selectedQty}</span>

                <button onClick={() => setSelectedQty(selectedQty + 1)}>
                  +
                </button>
              </div>

              {/* Buttons */}

              <div
                style={{
                  marginTop: 12,
                }}
              >
                <button
                  className="primary"
                  onClick={() => addToCartWithQty(selectedProduct, selectedQty)}
                >
                  Add {selectedQty} to cart
                </button>

                <button
                  style={{
                    marginLeft: 8,
                  }}
                  onClick={() => setSelectedProduct(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
