'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons';

function Nav() {
  const pathname = usePathname();
  return (
    <nav className="text-light-gray-blue flex px-20 pb-20 pt-12">
      <div className="flex-1 text-4xl text-white">
        <Link className="font-bold" href="/">
          Hank Chou
        </Link>
      </div>
      <ul className="align mr-7 flex items-center text-xl font-semibold">
        <li className="px-5">
          <Link
            className={`hover:text-white ${pathname === '/blog' ? 'text-white' : ''}`}
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li className="px-5">
          <Link
            className={`hover:text-white ${pathname === '/projects' ? 'text-white' : ''}`}
            href="/projects"
          >
            Projects
          </Link>
        </li>
        <li className="px-5">
          <Link
            className={`hover:text-white ${pathname === '/about' ? 'text-white' : ''}`}
            href="/about"
          >
            About
          </Link>
        </li>
      </ul>
      <div className="flex items-center justify-between gap-5">
        <div>
          <Link
            className="hover:text-white"
            href="https://github.com/hankdesu"
            target="_blank"
          >
            <GitHubLogoIcon height="24" width="24" />
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-white"
            href="https://www.linkedin.com/in/hankdesu"
            target="_blank"
          >
            <LinkedInLogoIcon height="24" width="24" />
          </Link>
        </div>
        <div>
          <Link
            className="hover:text-white"
            href="https://x.com/Hankdesu"
            target="_blank"
          >
            <TwitterLogoIcon height="24" width="24" />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
