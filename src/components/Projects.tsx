type Project = {
  id: number;
  title: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  imageUrl: string;
};

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Projeto 1",
      description: "Descrição do projeto 1 e tecnologias utilizadas.",
      demoUrl: "#",
      githubUrl: "#",
      imageUrl: "/next.svg",
    },
    {
      id: 2,
      title: "Projeto 2",
      description: "Descrição do projeto 2 e tecnologias utilizadas.",
      demoUrl: "#",
      githubUrl: "#",
      imageUrl: "/next.svg",
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Projetos em Destaque
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden
            transform transition-all duration-300 ease-in-out
            hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="h-48 bg-gray-200 dark:bg-gray-700 
            transform transition-all duration-300 group-hover:scale-105" />
            <div className="p-6">
              <h3 className="font-bold mb-2 group-hover:text-blue-600 
              transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex gap-4">
                <a href={project.demoUrl} 
                  className="text-blue-600 hover:text-blue-800 
                  transition-colors duration-300 hover:underline">
                  Demo
                </a>
                <a href={project.githubUrl} 
                  className="text-blue-600 hover:text-blue-800 
                  transition-colors duration-300 hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 