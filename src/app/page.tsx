import Hero from '@/components/Hero';
import SkillsCarousel from '@/components/SkillsCarousel';
import ProjectsSection from '@/components/ProjectsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Skills Carousel */}
      <SkillsCarousel />

      {/* Featured Projects Section */}
      <ProjectsSection
        title="Featured Projects"
        description="A selection of exploratory projects in education, gaming, and AI, showcasing hands-on design, prototyping, and development across multimodal reasoning, interactive learning, and full-stack systems."
        category="product"
        showFeatured={true}
      />

      {/* Other Projects Section */}
      <ProjectsSection
        title="Other Projects"
        description="Exploring diverse projects including research, experiments, and technical implementations across various domains."
        category="other"
        showFeatured={false}
      />
    </div>
  );
}
