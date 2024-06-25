import Image from 'next/image';

import Introduce from './introduce';
import meAndMillie from '../asset/me_and_millie.jpg';
import Bio from './bio';
import ExplosionBox from './explosionBox';

export default function Home() {
  return (
    <main className="grid-rows-2-auto grid h-[calc(100dvh-200px)] grid-cols-2 px-20">
      <div className="">
        <Bio />
      </div>
      <div>
        <ExplosionBox />
      </div>
      <div className="col-span-2 row-start-2">
        <div className="flex gap-10">
          <Image
            alt="Me and millie"
            className="h-[420px] w-[320px] rounded-lg object-cover"
            sizes="100vw"
            priority
            src={meAndMillie}
          />
          <Introduce />
        </div>
      </div>
    </main>
  );
}
