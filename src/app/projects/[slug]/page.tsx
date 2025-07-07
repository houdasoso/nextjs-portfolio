import { getProjects ,  getProject } from '../../lib/getProjects';
import Image from 'next/image';
import { notFound } from 'next/navigation';
type Params = { slug: string };

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(p => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Params }) {
  const project = await getProject(params.slug);
  if (!project) notFound();

  return (
    <>
      <h1>{project.title}</h1>
      <Image src={project.image} alt={project.title} width={600} height={350} />
      <p>{project.content}</p>
    </>
  );
}
