"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("inside the useEffect");

    const handleEscapePress = (e: KeyboardEvent) => {
      console.log("the key is: ", e.key);

      if (e.key == "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keypress", handleEscapePress);

    return () => {
      document.addEventListener("keypress", handleEscapePress);
    };
  }, []);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div ref={navRef} className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((catagory, i) => {
        const handleopen = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        const isOpen = i === activeIndex;

        return (
          <NavItem
            key={catagory.value}
            category={catagory}
            handleOpen={handleopen}
            isAnyOpen={isAnyOpen}
            isOpen={isOpen}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
