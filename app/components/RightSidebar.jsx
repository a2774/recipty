"use client";

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";

export default function RightSidebar() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch("https://dummyjson.com/recipes?limit=5");
        const data = await res.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error("Failed to fetch recipes", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const categories = [
    "Italian",
    "Vegan",
    "Baking",
    "Asian",
    "Mediterranean",
    "Desserts",
    "Healthy",
    "Quick Meals",
    "BBQ",
    "Seafood",
    "Breakfast",
    "Soups",
  ];

  return (
    <aside className="hidden md:block w-full">
      <div className="sticky top-12">
        <div className="overflow-y-auto max-h-[calc(100vh-120px)] pr-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-2 mb-3">
            <h3 className="text-xs font-semibold mb-3">Trending Recipes</h3>

            {loading && (
              <p className="text-xs text-gray-500">Loading recipes...</p>
            )}

            {recipes.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-2 p-2 mb-1 rounded-lg hover:bg-gray-50 cursor-pointer transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-md object-cover shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-xs font-medium truncate hover:text-[#f4514f]">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-gray-500 truncate">
                    ⭐ {item.rating} • {item.cuisine}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-2 mb-3">
            <h3 className="text-xs font-semibold mb-3">New Recipes</h3>

            {recipes.map((item) => (
              <div
                key={`new-${item.id}`}
                className="flex items-center gap-2 p-2 mb-1 rounded-lg hover:bg-gray-50 cursor-pointer transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-md object-cover shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-xs font-medium truncate hover:text-[#f4514f]">
                    {item.name}
                  </p>
                  <p className="text-[11px] text-gray-500 truncate">
                    ⭐ {item.rating} • {item.cuisine}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-4">
            <h3 className="text-xs font-semibold mb-3">Trending Categories</h3>

            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <span
                  key={item}
                  className="text-[11px] px-3 py-1 rounded-full bg-gray-100 text-gray-700 cursor-pointer hover:bg-gray-200 transition"
                >
                  #{item}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-2 mb-3 mt-3">
            <h3 className="text-xs font-semibold mb-3">Trending Products</h3>

            <div className="max-h-80">
              {[
                {
                  name: "Professional Chef Knife",
                  rating: "4.9",
                  price: "$89.99",
                },
                { name: "Cast Iron Pan", rating: "4.8", price: "$49.99" },
                { name: "Food Processor", rating: "4.7", price: "$129.99" },
                { name: "Digital Scale", rating: "4.6", price: "$29.99" },
                { name: "Immersion Blender", rating: "4.5", price: "$39.99" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 mb-2 rounded-lg hover:bg-gray-50 cursor-pointer transition"
                >
                  <img
                    src="/download.jfif"
                    alt={item.name}
                    className="w-10 h-10 rounded-md object-cover shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-medium truncate hover:text-[#f4514f]">
                      {item.name}
                    </p>
                    <div className="flex items-center gap-1 text-[11px] text-gray-500">
                      <span>{item.rating}</span>
                      <FaStar className="text-[#fdd663] text-xs" />
                      <span>• {item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-300 shadow-sm p-3 mb-3">
            <h3 className="text-xs font-semibold mb-3">Who to follow</h3>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/aa.avif"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-medium hover:text-[#f4514f] cursor-pointer">
                      Chef Maria Garcia
                    </p>
                    <p className="text-[11px] text-gray-500">@chefamaria</p>
                    <p className="text-[11px] text-gray-500">
                      Professional Chef
                    </p>
                  </div>
                </div>
                <button className="text-red-500 text-sm">
                  <FiUserPlus />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/aaaa.avif"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-medium hover:text-[#f4514f] cursor-pointer">
                      Foodie Frank
                    </p>
                    <p className="text-[11px] text-gray-500">@foodiefrank</p>
                    <p className="text-[11px] text-gray-500">Food Critic</p>
                  </div>
                </div>
                <button className="text-red-500 text-sm">
                  <FiUserPlus />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="/adda.avif"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-xs font-medium hover:text-[#f4514f] cursor-pointer">
                      Chef Sarah Chen
                    </p>
                    <p className="text-[11px] text-gray-500">@chefsarah</p>
                    <p className="text-[11px] text-gray-500">Asian Fusion</p>
                  </div>
                </div>
                <button className="text-red-500 text-sm">
                  <FiUserPlus />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
