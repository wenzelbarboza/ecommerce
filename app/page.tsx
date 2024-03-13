import Image from "next/image";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

const perk = [
  {
    title: "instant delivery",
    icons: ArrowDownToLine,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, iure.",
  },
  {
    title: "instant delivery2",
    icons: ArrowDownToLine,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, iure2.adipisicing elit. Omnis, iure2.",
  },
  {
    title: "instant delivery3",
    icons: ArrowDownToLine,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, iure2.adipisicing elit. Omnis, iure2.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col max-w-3xl">
          <h1 className=" text-4xl font-bold text-gray-900 tracking-tighter sm:text-6xl">
            Your market place for high quality
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
            voluptate esse laborum similique provident dicta quaerat aliquam
            dignissimos voluptatibus odio.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-6">
            <Link href="/products" className={buttonVariants()}>
              Browse trending
            </Link>
          </div>
        </div>

        {/* TODO: list something */}
      </MaxWidthWrapper>

      <section>
        <MaxWidthWrapper className="py-20">
          <div className="grid col-span-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perk.map((perk) => (
              <div
                key={perk.title}
                className=" text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="flex md:flex-shrink-0 justify-center">
                  <div className="h-16 w-16 flex justify-center items-center rounded-full bg-blue-100 text-blue-900">
                    <perk.icons className="h-1/3 w-1/3" />
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className=" text-base font-medium text-grey-900 ">
                    {perk.title}
                  </h3>
                  <p className=" mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
