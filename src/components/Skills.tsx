export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "TailwindCSS",
    "PostgreSQL",
    "Docker",
    "Git",
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center">Tecnologias</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm 
            hover:shadow-md transition-all duration-300 ease-in-out
            hover:-translate-y-1 hover:bg-blue-50 dark:hover:bg-gray-700
            cursor-pointer transform"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
} 