import { useParams } from 'react-router-dom';
import BlogPost from '@/components/BlogPost';
import blogPosts from '@/data/blog-posts.json';
import { BlogPost as BlogPostType } from '@/types/blog';

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.posts.find((post: BlogPostType) => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">404</h1>
          <p className="mt-2 text-lg text-gray-600">Blog post not found</p>
        </div>
      </div>
    );
  }

  return <BlogPost post={post} />;
} 