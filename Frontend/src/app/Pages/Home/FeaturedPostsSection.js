import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';

const FeaturedPostsSection = () => {
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [randomPosts, setRandomPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://192.168.100.2:1337/api/artikels')
      .then((response) => response.json())
      .then((data) => {
        const fetchedPosts = data.data.map((item) => ({
          id: item.id,
          title: item.attributes.Judul_Artikel,
          content: item.attributes.Konten_Artikel,
          author: item.attributes.NamaPenulis_Artikel,
          authorImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
          category: item.attributes.Judul_AtasArtikel,
          date: parseISO(item.attributes.publishedAt),
          link: item.attributes.Link_Artikel // Assuming your API has a link attribute
        }));

        setFeaturedPosts(fetchedPosts.slice(0, 3)); // Limit to 3 featured posts

        const shuffledPosts = fetchedPosts.sort(() => 0.5 - Math.random());
        setRandomPosts(shuffledPosts.slice(0, 5)); // Get 5 random posts

        setLoading(false);
      });
  }, []);

  const formatDate = (date) => {
    const day = format(date, 'dd');
    const month = format(date, 'MMM');
    const year = format(date, 'yyyy');
    return { day, month, year };
  };

  return (
    <section className="bg-white dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-2/3 w-full">
            <h2 className="text-2xl font-extrabold text-pink-600 dark:text-pink-400">LATEST HIGHLIGHTS</h2>
            <div className="mt-6 grid grid-cols-1 gap-6">
              {loading
                ? <div>Loading...</div>
                : featuredPosts.map((post) => {
                    const { day, month, year } = formatDate(post.date);
                    return (
                      <div key={post.id} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700">
                        <div className="overflow-hidden w-3/4 pr-2">
                          <p className="text-sm text-purple-800 dark:text-purple-400">{post.category}</p>
                          <Link to={`/articles/${post.id}`} className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:underline">
                            {post.title}
                          </Link>
                          <p className="text-sm text-gray-500 dark:text-gray-300 truncate">{post.content}</p>
                        </div>
                        <a href={post.link} target="_blank" rel="noopener noreferrer" className="bg-orange-500 dark:bg-orange-600 text-white px-4 py-2 rounded-md whitespace-nowrap">
                          Click to read
                        </a>
                      </div>
                    );
                  })
              }
            </div>
          </div>
          <div className="lg:w-1/3 w-full mt-6 lg:mt-0 lg:ml-4">
            <div className="h-full p-6 border border-gray-200 dark:border-gray-700 rounded-lg bg-orange-100 dark:bg-orange-900">
              <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">Random News</h3>
              <div className="mt-4 space-y-4 overflow-y-auto max-h-96">
                {loading
                  ? <div>Loading...</div>
                  : randomPosts.map((post) => {
                      const { day, month, year } = formatDate(post.date);
                      return (
                        <div key={post.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-700">
                          <p className="text-sm text-purple-800 dark:text-purple-400">{post.category}</p>
                          <Link to={`/articles/${post.id}`} className="text-lg font-semibold text-gray-900 dark:text-gray-100 hover:underline">
                            {post.title}
                          </Link>
                          <p className="text-sm text-gray-500 dark:text-gray-300">{`${day} ${month}, ${year}`}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-300 truncate">{post.content}</p>
                        </div>
                      );
                    })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedPostsSection;
