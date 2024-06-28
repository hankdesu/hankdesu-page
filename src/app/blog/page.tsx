import fs from 'fs/promises';
import Image from 'next/image';
import Link from 'next/link';

interface PostMetadata {
  cover: string;
  title: string;
  author: string;
  date: Date;
}

interface Post {
  slug: string;
  metadata: PostMetadata;
}

async function getPosts(): Promise<Post[]> {
  try {
    const dir = await fs.readdir('./src/app/blog/(posts)', {
      withFileTypes: true,
    });
    const slugs = dir.filter((dirent) => dirent.isDirectory());
    const posts = await Promise.all(
      slugs.map(async ({ name }) => {
        const { metadata } = (await import(
          `@/app/blog/(posts)/${name}/page.mdx`
        )) as { metadata: PostMetadata };
        return { slug: name, metadata };
      }),
    );

    return posts;
  } catch (error) {
    return [];
  }
}

async function Blog() {
  const posts = await getPosts();
  return (
    <div className="items-cente flex flex-col px-60">
      {posts?.map((post) => {
        return (
          <Link href={`/blog/${post.slug}`} key={`${post.slug}`}>
            <div className="grid cursor-pointer grid-cols-[auto_1fr] gap-10 rounded-lg border border-grayish-blue bg-dark-blue-gray p-4 shadow-md transition-transform hover:scale-[1.02] hover:shadow-lg">
              <Image
                alt="cover photo"
                src={post.metadata.cover}
                sizes="100vw"
                className="h-56 w-96 rounded-lg"
                priority
              />
              <div className="grid grid-cols-2 justify-center">
                <div className="flex flex-col justify-center gap-2">
                  <h1 className="text-3xl font-medium text-accent-cyan">
                    {post.metadata.title}
                  </h1>
                  <span className="text-lighter-gray">
                    {post.metadata.author}
                  </span>
                </div>
                <span className="self-end text-end text-lighter-gray">
                  {post.metadata.date.toDateString()}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Blog;
