import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const CoffeeMenu = () => {
  const menu = [
    {
      id: 1,
      name: "Espresso",
      description: "Strong and concentrated coffee shot",
      price: 2.50,
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      id: 2,
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      price: 3.50,
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      id: 3,
      name: "Latte",
      description: "Espresso with lots of steamed milk and a light layer of foam",
      price: 3.75,
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      id: 4,
      name: "Mocha",
      description: "Espresso with chocolate and steamed milk",
      price: 4.00,
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      id: 5,
      name: "Americano",
      description: "Espresso diluted with hot water",
      price: 2.75,
      image: "/placeholder.svg?height=200&width=200"
    },
    {
      id: 6,
      name: "Macchiato",
      description: "Espresso with a small amount of steamed milk",
      price: 3.25,
      image: "/placeholder.svg?height=200&width=200"
    }
  ];

  return (
    <section className="py-12 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-brown-800">Our Coffee Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menu.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img
                src={item.image}
                alt={item.name}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-brown-700">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{item.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold text-brown-600">${item.price.toFixed(2)}</span>
                <button className="px-4 py-2 bg-brown-600 text-white rounded hover:bg-brown-700 transition-colors duration-300">
                  Add to Cart
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoffeeMenu;

// Tailwind CSS styles should include custom colors like 'brown-800', 'brown-700', etc., in your tailwind.config.js.
