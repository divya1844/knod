import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = ["All", "Featured", "Industry Insights"];

const BLOG_POSTS = [
  {
    id: 1,
    title: "Why the Future of Networking Is B2B2C, Not Another App",
    excerpt: "We are paying to put people in rooms while they feel more disconnected inside those rooms. The solution is not another social network—it's an infrastructure layer.",
    author: "Knod AI",
    date: "December 2025",
    readTime: "5 min read",
    categories: ["Featured", "Industry Insights"],
    image: "https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "Reimagining the Power of Networking",
    excerpt: "UIC Business features Knod AI founder presenting the platform to students, showcasing how technology can enhance real-world interactions.",
    author: "UIC Business",
    date: "November 6, 2025",
    readTime: "3 min read",
    categories: ["Featured"],
    image: "https://images.pexels.com/photos/1181438/pexels-photo-1181438.jpeg?auto=compress&cs=tinysrgb&w=800",
  }
];

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? BLOG_POSTS 
    : BLOG_POSTS.filter(post => post.categories.includes(activeCategory));

  return (
    <main className="flex-1 w-full pt-32 pb-12 relative bg-[#f5f5f7]">
      {/* Hero Section */}
      <section className="px-6 max-w-[900px] mx-auto text-center mb-16 md:mb-24">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <span className="font-semibold text-brand-blue tracking-widest uppercase text-xs sm:text-sm mb-4 block">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.1] mb-6 text-brand-black">
            Insights & Ideas
          </h1>
          <p className="text-xl md:text-2xl text-brand-black/60 font-light max-w-2xl mx-auto">
            Thoughts on networking, community building, and the future of meaningful professional connections.
          </p>
        </motion.div>
      </section>

      {/* Filter Categories */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-brand-black text-white"
                  : "bg-white text-brand-black/60 hover:bg-brand-black/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white rounded-[2rem] overflow-hidden border border-brand-black/5 flex flex-col group hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {post.categories.map(cat => (
                      <span key={cat} className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-black">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs font-semibold text-brand-black/50 uppercase tracking-wider mb-4">
                    <span>{post.author}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-black/20" />
                    <span>{post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-black/20" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-medium tracking-tight mb-4 group-hover:text-brand-blue transition-colors">
                    {post.id === 1 ? (
                      <Link to="/blog/why-the-future-of-networking-is-b2b2c">{post.title}</Link>
                    ) : (
                      post.title
                    )}
                  </h3>
                  
                  <p className="text-brand-black/60 leading-relaxed font-light mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto">
                    {post.id === 1 ? (
                      <Link to="/blog/why-the-future-of-networking-is-b2b2c" className="flex items-center gap-2 text-sm font-semibold text-brand-black group-hover:text-brand-blue transition-colors">
                        Read Article <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ) : (
                      <button className="flex items-center gap-2 text-sm font-semibold text-brand-black group-hover:text-brand-blue transition-colors">
                        Read Article <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Newsletter Block */}
      <section className="px-4 lg:px-8 max-w-[1200px] mx-auto mb-16">
        <div className="bg-[#111112] text-white rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
           <div>
             <h2 className="text-3xl font-medium tracking-tight mb-3">
               Stay connected
             </h2>
             <p className="text-white/60 font-light">
               Get the latest insights on community building delivered to your inbox.
             </p>
           </div>
           
           <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
             <input type="email" placeholder="Email address..." className="px-6 py-4 outline-none rounded-full bg-white/10 border border-white/10 text-white placeholder:text-white/40 focus:border-brand-blue transition-colors min-w-[280px]" />
             <button className="bg-brand-blue text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-blue/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
               Subscribe <ArrowRight className="w-4 h-4" />
             </button>
           </div>
        </div>
      </section>

    </main>
  );
}
