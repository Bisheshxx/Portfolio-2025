import Link from "next/link";
import Image from "next/image";
import GIF from "../../public/not-found/not-found.gif";
import { Button } from "@/components/Globals/Component/Button";
import { House } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-[80vh] flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-5xl font-semibold font-gothic">
          Uh oh. That page doesn't exist
        </h2>
        <Image src={GIF} alt="Not Found" width={300} height={300} />
        <Link href={"/"}>
          <Button className="mt-4 py-2 px-8">
            <div className="flex gap-2 justify-center items-center">
              Return Home{" "}
              <div className="p-1 border-1 border-white rounded-full">
                <House className="h-4 w-4 stroke-2" />
              </div>
            </div>
          </Button>
        </Link>
      </div>
    </div>
  );
}
