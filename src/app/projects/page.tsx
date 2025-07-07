import ProjectCard from '../components/ProjectCard';
import { getProjects } from '../lib/getProjects';

export const metadata = { title: 'Projects – Houda SDK' };

export default async function ProjectsPage() {
  const projects = await getProjects();      // runs on the server
  return (
    <>
      <h1>Projects</h1>
      <section style={{ display: 'grid', gap: '2rem' }}>
        {projects.map(p => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </section>
    </>
  );
}
