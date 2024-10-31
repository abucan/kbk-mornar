import { Header } from '../_components/header';
import { getPostsFromDB } from '@/actions/posts.actions';
import { BlogExpandableCard } from '@/components/blog-expandable-card';

const BlogPage = async () => {
  const postsFromDB = await getPostsFromDB();

  return (
    <section className='pt-8 pb-16 relative bg-slate-100' id='novosti'>
      <Header
        title='Novosti iz kluba'
        description='Pogledajte najnovije informacije iz kluba i saznajte više o
            aktivnostima.'
      />
      <div className='max-w-screen-xl mx-auto px-4 md:px-8 mt-8 sm:mt-16'>
        <BlogExpandableCard cards={postsFromDB} />
      </div>
    </section>
  );
};

export default BlogPage;
