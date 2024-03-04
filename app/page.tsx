import Image from "next/image";
import { MaxWidthWrapper } from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col max-w-3xl bg-red-700">
        <h1>
          Your market place for high quality{" "}
          <span className=" text-blue-700">digital assets</span>
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
