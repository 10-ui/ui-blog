import { Card } from "@/components/ui/card";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-16 lg:p-20">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">10-ui Blog</h1>
        <div className="flex items-center gap-3 lg:gap-5">
          <Link href={"https://twitter.com/10_uis"} target="_blank">
            <TwitterLogoIcon width={35} height={35} />
          </Link>
          <Link href={"https://github.com/10-ui"} target="_blank">
            <GitHubLogoIcon width={35} height={35} />
          </Link>
          <ModeToggle />
        </div>
      </div>
      <div className="mt-4 grid w-full grid-rows-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card className="w-full p-3">
          <Image
            className="rounded-lg"
            src="/coffee.jpg"
            alt="coffee"
            width={1920}
            height={1080}
          ></Image>
          <h2 className="my-3 text-2xl font-bold">Hello, World!</h2>
          <p>This is a blog that Im building to learn about UI development.</p>
        </Card>
        <Card className="w-full p-3">
          <Image
            className="rounded-lg"
            src="/coffee.jpg"
            alt="coffee"
            width={1920}
            height={1080}
          ></Image>
          <h2 className="my-3 text-2xl font-bold">Hello, World!</h2>
          <p>This is a blog that Im building to learn about UI development.</p>
        </Card>
        <Card className="w-full p-3">
          <Image
            className="rounded-lg"
            src="/coffee.jpg"
            alt="coffee"
            width={1920}
            height={1080}
          ></Image>
          <h2 className="my-3 text-2xl font-bold">Hello, World!</h2>
          <p>This is a blog that Im building to learn about UI development.</p>
        </Card>
        <Card className="w-full p-3">
          <Image
            className="rounded-lg"
            src="/coffee.jpg"
            alt="coffee"
            width={1920}
            height={1080}
          ></Image>
          <h2 className="my-3 text-2xl font-bold">Hello, World!</h2>
          <p>This is a blog that Im building to learn about UI development.</p>
        </Card>
        <Card className="w-full p-3">
          <Image
            className="rounded-lg"
            src="/coffee.jpg"
            alt="coffee"
            width={1920}
            height={1080}
          ></Image>
          <h2 className="my-3 text-2xl font-bold">Hello, World!</h2>
          <p>This is a blog that Im building to learn about UI development.</p>
        </Card>
        <Card className="w-full p-3">
          <Image
            className="rounded-lg"
            src="/coffee.jpg"
            alt="coffee"
            width={1920}
            height={1080}
          ></Image>
          <h2 className="my-3 text-2xl font-bold">Hello, World!</h2>
          <p>This is a blog that Im building to learn about UI development.</p>
        </Card>
      </div>
    </main>
  );
}
