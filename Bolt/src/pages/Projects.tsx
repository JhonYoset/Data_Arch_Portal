import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Calendar, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: 'elevated-cycleway',
      title: t('projects.elevatedCycleway.title'),
      description: t('projects.elevatedCycleway.description'),
      image: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: t('projects.status.active'),
      startDate: '2024',
      team: ['Santiago', 'Dario', 'Fabiola'],
      tags: ['Rhino & Grasshopper', 'Generative AI', 'Urban Design'],
      summary: t('projects.elevatedCycleway.summary'),
      highlights: t('projects.elevatedCycleway.highlights', { returnObjects: true }) as string[]
    },
    {
      id: 'biophilic-design-schools',
      title: t('projects.biophilicSchools.title'),
      description: t('projects.biophilicSchools.description'),
      image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: t('projects.status.active'),
      startDate: '2024',
      team: ['Naomi', 'Santiago', 'Fabiola'],
      tags: ['Biophilic Design', 'Educational Architecture', 'Sustainability'],
      summary: t('projects.biophilicSchools.summary'),
      highlights: t('projects.biophilicSchools.highlights', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Meta */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {t('projects.startedIn')} {project.startDate}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="h-4 w-4 mr-2" />
                    {project.team.join(', ')}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('projects.keyHighlights')}</h4>
                  <ul className="space-y-2">
                    {project.highlights.slice(0, 3).map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-start text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Project Link */}
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors group"
                >
                  {t('projects.viewDetails')}
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('projects.collaboration.title')}
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            {t('projects.collaboration.subtitle')}
          </p>
          <a
            href="mailto:contact@dataarchlabs.com"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t('projects.collaboration.action')}
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;