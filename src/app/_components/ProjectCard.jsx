export default function ProjectCard({ title, description, tags, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-colors hover:border-black"
    >
      <h3 className="mb-2 text-xl font-bold text-slate-950 group-hover:underline">
        {title}
      </h3>

      <p className="mb-4 text-sm leading-6 text-slate-500">{description}</p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded bg-slate-100 px-2 py-1 text-xs text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
