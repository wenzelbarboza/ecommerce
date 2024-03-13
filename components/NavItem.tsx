import { PRODUCT_CATEGORIES } from "@/config";
import React from "react";
import { Button } from "./ui/button";
import { ChevronDown, Link } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface navItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ isAnyOpen, category, handleOpen, isOpen }: navItemProps) => {
  return (
    <div className="flex">
      <div className=" relative flex items-center">
        <Button
          className=" gap-1.5 "
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isAnyOpen,
            })}
          />
        </Button>
      </div>
      {isOpen ? (
        <div
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            {
              "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
            }
          )}
        >
          <div className="relative bg-white">
            <div className=" mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {category.featured.map((items) => {
                    return (
                      <div
                        className="group relative text-base sm:text-sm "
                        key={items.name}
                      >
                        <div className=" relative aspect-video overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                          <Image
                            src={items.imgSrc}
                            alt="product category img"
                            fill
                            className="object-cover object-center"
                          />
                        </div>
                        <Link
                          href={items.href}
                          className=" mt-6 font-medium text-gray-900"
                        >
                          {items.name}
                        </Link>
                        <p className="mt-1 " aria-hidden="true">
                          shop now
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
