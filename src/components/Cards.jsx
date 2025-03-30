import React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import shoeImg from "../assets/image/shoes.jpg";
import shirt from "../assets/image/shirt.jpg";
import shoe2 from "../assets/image/shoes2.jpg";
import pants from "../assets/image/pants.jpg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const data = [
  {
    title: "Air Jordan 1",
    img: shoeImg,
    price: 200,
  },
  {
    title: "Nike Shirt",
    img: shirt,
    price: 50,
  },
  {
    title: "Straight Jeans",
    img: pants,
    price: 100,
  },
  {
    title: "Air max 90",
    img: shoe2,
    price: 150,
  },
];

function Cards() {
  return (
    <div className="grid grid-cols1 lg:grid-cols-4 gap-4 min-h-[100vh] rounded-xl  md:min-h-min p-4 justify-center items-center">
      {data.map((item, index) => (
        <div key={index} className="item space-y-2 ">
          <div className="relative flex justify-center overflow-hidden group cursor-pointer border rounded-xl">
            <img
              src={item.img}
              alt="shoe"
              className="w-full h-full object-cover"
            />
            <Popover>
              <PopoverTrigger>
                <button className="bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition-transform group-hover:translate-y-0 cursor-pointer">
                  Add to cart
                </button>
              </PopoverTrigger>
              <PopoverContent className="space-y-2">
                <Label>Put quantity:</Label>
                <Input placeholder="eg.2" />
                <Button className="w-full">Add to cart</Button>
              </PopoverContent>
            </Popover>
          </div>
          <p>{item.title}</p>
          <strong>${item.price}</strong>
        </div>
      ))}
      {data.map((item, index) => (
        <div key={index} className="item space-y-2 ">
          <div className="relative flex justify-center overflow-hidden group cursor-pointer border rounded-xl">
            <img
              src={item.img}
              alt="shoe"
              className="w-full h-full object-cover"
            />
            <button className="bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition-transform group-hover:translate-y-0 cursor-pointer">
              Add to cart
            </button>
          </div>
          <p>{item.title}</p>
          <strong>${item.price}</strong>
        </div>
      ))}
    </div>
  );
}

export default Cards;
