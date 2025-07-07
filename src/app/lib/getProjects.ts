// src/lib/getProjects.ts

export type Project = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
};

export async function getProjects(): Promise<Project[]> {
  // Simulating fetch from a CMS or database
  return [
    {
      slug: 'project-one',
      title: 'Project One',
      excerpt: 'A cool thing I built with React.',
      image: '/project1.png',
      content: 'Full write‑up of Project One.'
    },
    {
      slug: 'project-two',
      title: 'Project Two',
      excerpt: 'Another awesome project using Next.js.',
      image: '/project2.png',
      content: 'Full write‑up of Project Two.'
    }
  ];
}

export async function getProject(slug: string): Promise<Project | undefined> {
  const projects = await getProjects();
  return projects.find(p => p.slug === slug);
}
