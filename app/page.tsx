import { Card } from '@/components/ui/card';
import { ModeToggle } from '@/components/ui/mode-toggle';
import {
  TwitterLogoIcon,
  GitHubLogoIcon,
} from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen p-14 md:p-20 lg:p-24">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl">10-ui Blog</h1>
        <div className="flex gap-2 items-center">
          <Link
            href={'https://twitter.com/10_uis'}
            target="_blank">
            <TwitterLogoIcon width={25} height={25} />
          </Link>
          <Link
            href={'https://github.com/10-ui'}
            target="_blank">
            <GitHubLogoIcon width={25} height={25} />
          </Link>
          <ModeToggle />
        </div>
      </div>
      <div className="mt-5 w-full grid grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-4">
        <Card className="w-full p-3">
          <Image
            className="rounded-lg"
            src="/coffee.jpg"
            alt="coffee"
            width={1920}
            height={1080}></Image>
          <h2 className="font-bold text-2xl my-3">
            Hello, World!
          </h2>
          <p>
            This is a blog that Im building to learn about
            UI development.
          </p>
        </Card>
        <Card className="w-full p-3">
          <Image
            className="rounded-lg"
            src="/coffee.jpg"
            alt="coffee"
            width={1920}
            height={1080}></Image>
          <h2 className="font-bold text-2xl my-3">
            Hello, World!
          </h2>
          <p>
            This is a blog that Im building to learn about
            UI development.
          </p>
        </Card>
        <Card className="w-full p-3">
          <Image
            className="rounded-lg"
            src="/coffee.jpg"
            alt="coffee"
            width={1920}
            height={1080}></Image>
          <h2 className="font-bold text-2xl my-3">
            Hello, World!
          </h2>
          <p>
            This is a blog that Im building to learn about
            UI development.
          </p>
        </Card>
        <Card className="w-full p-3">
          <Image
            className="rounded-lg"
            src="/coffee.jpg"
            alt="coffee"
            width={1920}
            height={1080}></Image>
          <h2 className="font-bold text-2xl my-3">
            Hello, World!
          </h2>
          <p>
            This is a blog that Im building to learn about
            UI development.
          </p>
        </Card>
        <Card className="w-full p-3">
          <Image
            className="rounded-lg"
            src="/coffee.jpg"
            alt="coffee"
            width={1920}
            height={1080}></Image>
          <h2 className="font-bold text-2xl my-3">
            Hello, World!
          </h2>
          <p>
            This is a blog that Im building to learn about
            UI development.
          </p>
        </Card>
        <Card className="w-full p-3">
          <Image
            className="rounded-lg"
            src="/coffee.jpg"
            alt="coffee"
            width={1920}
            height={1080}></Image>
          <h2 className="font-bold text-2xl my-3">
            Hello, World!
          </h2>
          <p>
            This is a blog that Im building to learn about
            UI development.
          </p>
        </Card>
      </div>
    </main>
  );
}
