"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  tagId: string;
  material: string;
  fit: string;
}

export default function ProductCard({ id, name, price, image, tagId, material, fit }: ProductProps) {
  const { addToCart } = useCart();

  return (
    <div className="group flex flex-col tag-border bg-[#0a0a0a] transition-colors hover:border-gray-500">
      {/* Product Image Area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#111] p-4">
        {/* Decorative corner markers */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-gray-600"></div>
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-gray-600"></div>
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-gray-600"></div>
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-gray-600"></div>
        
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 filter grayscale group-hover:grayscale-0"
        />
        
        {/* Label Overlays */}
        <div className="absolute top-4 right-4 bg-white text-black px-2 py-1 tag-label font-bold">
          {tagId}
        </div>
      </div>

      {/* Product Info (Tag Style) */}
      <div className="p-4 flex flex-col flex-grow border-t tag-border">
        <h3 className="text-lg font-bold uppercase tracking-tight mb-2">{name}</h3>
        
        {/* Tech Specs Box */}
        <div className="flex-grow grid grid-cols-2 gap-2 mb-6">
          <div className="border border-[#333] p-2 flex flex-col justify-center">
            <span className="tag-label text-gray-500">Materiale</span>
            <span className="tag-label text-gray-300 truncate">{material}</span>
          </div>
          <div className="border border-[#333] p-2 flex flex-col justify-center">
            <span className="tag-label text-gray-500">Fit</span>
            <span className="tag-label text-gray-300">{fit}</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xl font-bold">€{price.toFixed(2)}</span>
          <button
            onClick={() => addToCart({ id, name, price, image, tagId, quantity: 1 })}
            className="px-4 py-2 border tag-border hover:bg-white hover:text-black transition-colors uppercase text-xs tracking-widest font-bold"
          >
            Aggiungi
          </button>
        </div>
      </div>
    </div>
  );
}

