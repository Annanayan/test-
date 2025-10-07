import Hero from '@/components/Hero';
import SkillsCarousel from '@/components/SkillsCarousel';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import Link from 'next/link';


export default function Home() {
  const heroProjectA = projects.find((p) => p.id === 'diagnostic-game-design');
  const heroProjectB = projects.find((p) => p.id === 'math-village');

  const gridGroup1Ids = ['multimodal-geometry', 'ai-edtech-b2b', 'user-research-product-growth', 'ddpm-research'];
  const gridGroup2Ids = ['jobflow', 'spectrum-research-library'];

  const gridGroup1 = projects.filter((p) => gridGroup1Ids.includes(p.id));
  const gridGroup2 = projects.filter((p) => gridGroup2Ids.includes(p.id));

    const backgroundImages: Record<string, string> = {
      'diagnostic-game-design': '/diagnostic-bkgrd.png',
      'ai-edtech-b2b': '/aishangai1-bkgrd.png',
      'user-research-product-growth': '/aishangai2-bkgrd.png',
      'ddpm-research': '/ddpm-bkgrd.png',
      'jobflow': '/jobflow-bkgrd.png',
      'spectrum-research-library': '/spectrum-bkgrd.png',
      'math-village': '/math-village-bkgrd.png',
      'multimodal-geometry': '/mml-bkgrd.png',
    };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top hero and skills sections */}
      <Hero />
      <SkillsCarousel />

      {/* Hero Project A */}
      
      {heroProjectA && (
        <section className="w-full min-h-screen flex items-center justify-center py-16 px-4 relative">
          {/* 背景层，可选 */}
          <div
            className="absolute inset-0 -z-10 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${backgroundImages[heroProjectA.id]})` }}
          />
          <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* 左侧文字区 */}
            <div className="p-8 bg-white/80 rounded-2xl shadow-lg">
              <h2 className="text-4xl font-bold mb-4">{heroProjectA.title}</h2>
              <p className="text-lg mb-4">{heroProjectA.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {heroProjectA.tags.map((tag) => (
                  <span key={tag} className="bg-black/10 px-3 py-1 rounded-full text-xs">{tag}</span>
                ))}
              </div>
              <Link
                href={heroProjectA.links?.[0]?.url || `/projects/${heroProjectA.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>
        </section>
      )}


      {/* First Masonry Grid Section */}
      <section className="py-16 px-4">
      <section className="py-16 px-4">
        <div className="grid auto-rows-[300px] gap-6 md:grid-cols-12">
          {gridGroup1.map((project) => {
            const layout =
              project.id === 'multimodal-geometry'
                ? 'large'
                : ['ai-edtech-b2b', 'user-research-product-growth'].includes(project.id)
                ? 'medium'
                : 'small';

            const colClasses =
              layout === 'large'
                ? 'md:col-span-6 md:row-span-2'
                : layout === 'medium'
                ? 'md:col-span-6 md:row-span-1'
                : 'md:col-span-3';

            const bgImage = backgroundImages[project.id] || '';

            return (
              <div
                key={project.id}
                className={`${colClasses} bg-white rounded-2xl shadow-md overflow-hidden relative`}
                style={
                  bgImage
                    ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : {}
                }
              >
                <Link
                  href={project.links?.[0]?.url || `/projects/${project.id}`}
                  className="flex flex-col justify-between h-full w-full p-6 backdrop-blur-sm bg-white/70 hover:bg-white/80 transition-colors"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.description}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-black/10 px-3 py-1 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      </section>

      {/* Hero Project B */}
      {heroProjectB && (
        <section className="w-full min-h-screen flex items-center justify-center py-16 px-4 bg-gray-100 rounded-2xl my-8">
          <div className="w-full max-w-6xl">
            <ProjectCard
              title={heroProjectB.title}
              description={heroProjectB.description}
              tags={heroProjectB.tags}
              slug={heroProjectB.id}
              image={heroProjectB.image}
              featured={heroProjectB.featured}
              externalUrl={heroProjectB.links?.[0]?.url || ''}
            />
          </div>
        </section>
      )}

      {/* Second Masonry Grid Section */}
      
      <section className="py-16 px-4">
        <div className="grid auto-rows-[300px] gap-6 md:grid-cols-12">
          {gridGroup2.map((project) => {
            // 根据项目id设置版面大小
            const isSpectrum = project.id === 'spectrum-research-library';
            const colClasses = isSpectrum ? 'md:col-span-6 md:row-span-2' : 'md:col-span-6 md:row-span-1';
            const bgImage = backgroundImages[project.id] || '';

            return (
              <div
                key={project.id}
                className={`${colClasses} bg-white rounded-2xl shadow-md overflow-hidden relative`}
                style={
                  bgImage
                    ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
                    : {}
                }
              >
                <Link
                  href={project.links?.[0]?.url || `/projects/${project.id}`}
                  className="flex flex-col justify-between h-full w-full p-6 backdrop-blur-sm bg-white/70 hover:bg-white/80 transition-colors"
                >
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600">{project.description}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-black/10 px-3 py-1 rounded-full text-xs">{tag}</span>
                    ))}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
