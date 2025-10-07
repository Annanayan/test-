'use client';

import Hero from '@components/Hero';
import SkillsCarousel from '@components/SkillsCarousel';
import ProjectCard from '@components/ProjectCard';
import { projects } from '@data/projects';

export default function Home() {
  const heroProjectA = projects.find((p) => p.id === 'diagnostic-game-design');
  const heroProjectB = projects.find((p) => p.id === 'math-village');

  const gridGroup1Ids = ['multimodal-geometry','ai-edtech-b2b','user-research-product-growth','ddpm-research'];
  const gridGroup2Ids = ['jobflow','spectrum-research-library'];

  const gridGroup1 = projects.filter((p) => gridGroup1Ids.includes(p.id));
  const gridGroup2 = projects.filter((p) => gridGroup2Ids.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top hero and skills sections */}
      <Hero />
      <SkillsCarousel />

      {/* Hero Project A */}
      {heroProjectA && (
        <section className="w-full min-h-screen flex items-center justify-center py-16 px-4 bg-gray-100 rounded-2xl my-8">
          <div className="w-full max-w-6xl">
            <ProjectCard
              title={heroProjectA.title}
              description={heroProjectA.description}
              tags={heroProjectA.tags}
              slug={heroProjectA.id}
              image={heroProjectA.image}
              featured={heroProjectA.featured}
              externalUrl={heroProjectA.links?.[0]?.url || ''}
            />
          </div>
        </section>
      )}

      {/* First Masonry Grid Section */}
      <section className="py-16 px-4">
        <div className="grid auto-rows-[300px] gap-6 md:grid-cols-12">
          {gridGroup1.map((project) => {
            const layout =
              project.id === 'multimodal-geometry'
                ? 'large'
                : project.id === 'ai-edtech-b2b' || project.id === 'user-research-product-growth'
                ? 'medium'
                : 'small';
            const colClasses =
              layout === 'large'
                ? 'md:col-span-6 md:row-span-2'
                : layout === 'medium'
                ? 'md:col-span-3 md:row-span-1'
                : 'md:col-span-3';
            return (
              <div
                key={project.id}
                className={`${colClasses} bg-white rounded-2xl shadow-md overflow-hidden`}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  slug={project.id}
                  image={project.image}
                  featured={project.featured}
                  externalUrl={project.links?.[0]?.url || ''}
                />
              </div>
            );
          })}
        </div>
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
            const layout = project.id === 'spectrum-research-library' ? 'large' : 'medium';
            const colClasses =
              layout === 'large'
                ? 'md:col-span-6 md:row-span-2'
                : 'md:col-span-6 md:row-span-1';
            return (
              <div
                key={project.id}
                className={`${colClasses} bg-white rounded-2xl shadow-md overflow-hidden`}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  slug={project.id}
                  image={project.image}
                  featured={project.featured}
                  externalUrl={project.links?.[0]?.url || ''}
                />
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
