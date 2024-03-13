"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

const Cart = () => {
  const itemCount = 0;
  const fee = 0;

  return (
    <>
      <Sheet>
        <SheetTrigger className=" group -m-2 flex items-center p-2">
          <ShoppingCart
            aria-hidden="true"
            className=" h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          />
          <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
            {itemCount}
          </span>
        </SheetTrigger>
        <SheetContent className=" flex flex-col w-full pr-0 sm:max-w-lg">
          <SheetHeader className=" space-y-2.5 pr-6 ">
            <SheetTitle> cart ({itemCount})</SheetTitle>
          </SheetHeader>
          {itemCount > 0 ? (
            <>
              <div className=" flex flex-col w-full pr-6">
                {/*TODO: cart login  */}
                cart items
              </div>
              <div className=" space-y-4 pr-6">
                <Separator />
                <div className=" space-y-1.5 pr-6">
                  <div className=" flex">
                    <span className=" flex-1">shipping</span>
                    <span>free</span>
                  </div>
                  <div className=" flex">
                    <span className=" flex-1">transaction fee</span>
                    <span>{formatPrice(fee)}</span>
                  </div>
                  <div className=" flex">
                    <span className=" flex-1">total</span>
                    <span>{formatPrice(fee)}</span>
                  </div>
                </div>
                <SheetFooter>
                  <SheetTrigger asChild>
                    <Link
                      href="/cart"
                      className={buttonVariants({
                        className: "w-full",
                      })}
                    ></Link>
                  </SheetTrigger>
                </SheetFooter>
              </div>
            </>
          ) : (
            <div className=" flex flex-col h-full items-center justify-center space-y-1">
              <div
                className="relative h-60 w-60 mb-4 text-muted-foreground"
                aria-hidden="true"
              >
                <Image
                  src="/Digital-Hippo-Empty-Cart.png"
                  alt="empty cart image"
                  fill
                />
              </div>
              <div className=" text-xl font-semibold">your cart is empty</div>
              <SheetTrigger>
                <Link
                  href="/procucts"
                  className={buttonVariants({
                    variant: "link",
                    size: "sm",
                    className: "text-muted-foreground text-sm",
                  })}
                >
                  add itesm to your cart to checkout
                </Link>
              </SheetTrigger>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Cart;
