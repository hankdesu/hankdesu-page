import Image from 'next/image';

import leftCurlyArrow from '../asset/left-curly-arrow-96.png';

function Introduce() {
  return (
    <div className="flex w-[600px] flex-col justify-between pb-6">
      <h2 className="text-light-gray-blue inline-block text-4xl font-bold leading-snug">
        Hi, there! I&apos;m{' '}
        <span className="inline-block text-accent-red">Hank</span>.
      </h2>
      <p className="text-lighter-gray pb-5 text-3xl font-medium leading-snug">
        I&apos;m a full-stack engineer because I love coding in every aspect.
        The process of pursuing knowledge fascinates me. Also, photography,
        music, and movies are integral parts of my life.
      </p>
      <div className="flex items-baseline gap-2">
        <Image
          className="h-12 w-12"
          alt="left curly arrow"
          src={leftCurlyArrow}
          priority
        />
        <p className="text-xl text-lighter-blue">
          She is <span className="inline-block text-accent-purple">Millie</span>
          , my Canadian house mom&apos;s cute dog!
        </p>
      </div>
    </div>
  );
}

export default Introduce;
