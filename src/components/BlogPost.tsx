import { CheckCircle, Info } from 'lucide-react';
import { BlogPost } from '@/types/blog';

interface BlogPostProps {
  post: BlogPost;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-gray-700">
        <p className="text-base/7 font-semibold text-indigo-600">{post.subtitle}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
          {post.title}
        </h1>
        
        {/* Author info */}
        <div className="mt-6 flex items-center gap-x-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="h-10 w-10 rounded-full bg-gray-50"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">{post.author.name}</p>
            <p className="text-gray-600">{post.author.role}</p>
          </div>
          <div className="text-sm leading-6 text-gray-600">
            <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}</time>
            <span className="mx-2">·</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <p className="mt-6 text-xl/8">{post.introduction}</p>

        <div className="mt-10 max-w-2xl">
          {/* Key Points */}
          <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
            {post.keyPoints.map((point, index) => (
              <li key={index} className="flex gap-x-3">
                <CheckCircle className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                <span>
                  <strong className="font-semibold text-gray-900">{point.title}.</strong> {point.description}
                </span>
              </li>
            ))}
          </ul>

          {/* Sections */}
          {post.sections.map((section, index) => (
            <div key={index} className="mt-16">
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900">
                {section.title}
              </h2>
              <p className="mt-6">{section.content}</p>
            </div>
          ))}

          {/* Quote */}
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>"{post.quote.text}"</p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                src={post.quote.author.avatar}
                alt=""
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
              />
              <div className="text-sm/6">
                <strong className="font-semibold text-gray-900">{post.quote.author.name}</strong>
                {' – '}{post.quote.author.role}
              </div>
            </figcaption>
          </figure>
        </div>

        {/* Main Image */}
        <figure className="mt-16">
          <img
            src={post.mainImage.url}
            alt=""
            className="aspect-video rounded-xl bg-gray-50 object-cover"
          />
          <figcaption className="mt-4 flex gap-x-2 text-sm/6 text-gray-500">
            <Info className="mt-0.5 h-5 w-5 flex-none text-gray-300" />
            {post.mainImage.caption}
          </figcaption>
        </figure>
      </div>
    </div>
  );
} 