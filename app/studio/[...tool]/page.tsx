import Studio from '../Studio';

export function generateStaticParams() {
  return [{ tool: [] }];
}

export default function StudioToolPage() {
  return <Studio />;
}
