import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '../lib/getProjects';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className={styles.card}>
      <Image
        src={project.image}
        alt={project.title}
        width={400}
        height={250}
        priority
      />
      <h3>{project.title}</h3>
      <p>{project.excerpt}</p>
    </Link>
  );
}
