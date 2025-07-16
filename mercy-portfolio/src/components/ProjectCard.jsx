// src/components/ProjectCard.jsx
export default function ProjectCard({ title, description, tech, githubUrl, liveUrl, imageUrl }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
      )}

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-blue-600">{title}</h3>
        <p className="text-sm mb-4 flex-1">{description}</p>

        {tech && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-4 mt-auto text-sm">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline"
            >
              Live
            </a>
          ) : (
            <span className="text-gray-400">Live (coming soon)</span>
          )}

          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-300 underline"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}
