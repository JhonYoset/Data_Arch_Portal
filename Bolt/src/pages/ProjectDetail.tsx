import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Calendar, Users, Download, ExternalLink, FileText, Image, Video } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  // Get project data based on ID and current language
  const getProjectData = (projectId: string) => {
    if (projectId === 'elevated-cycleway') {
      return {
        title: t('projects.elevatedCycleway.title'),
        description: t('projects.elevatedCycleway.description'),
        image: 'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=1200',
        status: t('projects.status.active'),
        startDate: '2024',
        team: ['Santiago', 'Dario', 'Fabiola'],
        tags: ['Rhino & Grasshopper', 'Generative AI', 'Urban Design'],
        overview: t('projects.elevatedCycleway.overview'),
        objectives: t('projects.elevatedCycleway.objectives', { returnObjects: true }) as string[],
        methodology: t('projects.elevatedCycleway.methodology'),
        resources: [
          {
            type: 'file',
            name: 'Cycleway_Design_v1.3dm',
            description: 'Main Rhino 3D model file',
            size: '45.2 MB'
          },
          {
            type: 'file',
            name: 'Parametric_Framework.gh',
            description: 'Grasshopper definition for parametric design',
            size: '2.8 MB'
          },
          {
            type: 'image',
            name: 'AI_Generated_Visualizations.zip',
            description: 'Collection of AI-generated project images',
            size: '128.5 MB'
          },
          {
            type: 'video',
            name: 'Cycleway_Animation.mp4',
            description: 'AI-generated animation of the cycleway in use',
            size: '256.7 MB'
          }
        ],
        gallery: [
          'https://images.pexels.com/photos/544966/pexels-photo-544966.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/2365457/pexels-photo-2365457.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=800'
        ]
      };
    } else if (projectId === 'biophilic-design-schools') {
      return {
        title: t('projects.biophilicSchools.title'),
        description: t('projects.biophilicSchools.description'),
        image: 'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1200',
        status: t('projects.status.active'),
        startDate: '2024',
        team: ['Naomi', 'Santiago', 'Fabiola'],
        tags: ['Biophilic Design', 'Educational Architecture', 'Sustainability'],
        overview: t('projects.biophilicSchools.overview'),
        objectives: t('projects.biophilicSchools.objectives', { returnObjects: true }) as string[],
        methodology: t('projects.biophilicSchools.methodology'),
        resources: [
          {
            type: 'document',
            name: 'Pre-Design_Research_Report.pdf',
            description: 'Comprehensive pre-design research findings',
            size: '12.4 MB'
          },
          {
            type: 'document',
            name: 'Design_Guidelines_v2.pdf',
            description: 'Biophilic design guidelines for schools',
            size: '8.7 MB'
          },
          {
            type: 'image',
            name: 'Case_Study_Images.zip',
            description: 'Photographic documentation of case studies',
            size: '95.3 MB'
          },
          {
            type: 'document',
            name: 'Development_Documentation.pdf',
            description: 'Project development process documentation',
            size: '15.2 MB'
          }
        ],
        gallery: [
          'https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/8199563/pexels-photo-8199563.jpeg?auto=compress&cs=tinysrgb&w=800',
          'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=800'
        ]
      };
    }
    return null;
  };

  const project = getProjectData(id || '');

  if (!project) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('projects.projectNotFound')}</h1>
          <Link
            to="/projects"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('projects.backToProjects')}
          </Link>
        </div>
      </div>
    );
  }

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'image':
        return Image;
      case 'video':
        return Video;
      case 'document':
        return FileText;
      default:
        return FileText;
    }
  };

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('projects.backToProjects')}
        </Link>

        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="relative h-64 md:h-96">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block bg-green-500/80 text-white">
                {project.status}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                {project.title}
              </h1>
              <p className="text-lg text-gray-200">
                {project.description}
              </p>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('projects.projectOverview')}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {project.overview}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Objectives */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('projects.objectives')}</h2>
              <ul className="space-y-3">
                {project.objectives.map((objective: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span className="text-gray-600">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodology */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('projects.methodology')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {project.methodology}
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('projects.projectDetails')}</h3>
              <div className="space-y-4">
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-3 text-gray-400" />
                  <span className="text-gray-600">{t('projects.startedIn')} {project.startDate}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-3 text-gray-400" />
                  <span className="text-gray-600">{project.team.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* Team Members */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('projects.teamMembers')}</h3>
              <div className="space-y-3">
                {project.team.map((member: string, index: number) => (
                  <Link
                    key={index}
                    to={`/team/${member.toLowerCase()}`}
                    className="block p-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900 group-hover:text-primary-700">
                        {member}
                      </span>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-primary-600" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('projects.projectResources')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.resources.map((resource: any, index: number) => {
              const Icon = getResourceIcon(resource.type);
              return (
                <div
                  key={index}
                  className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group cursor-pointer"
                >
                  <div className="p-3 bg-primary-100 rounded-lg mr-4 group-hover:bg-primary-200 transition-colors">
                    <Icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-medium text-gray-900 truncate">
                      {resource.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">
                      {resource.description}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {resource.size}
                    </p>
                  </div>
                  <Download className="h-5 w-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('projects.projectGallery')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {project.gallery.map((image: string, index: number) => (
              <div
                key={index}
                className="aspect-square rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <img
                  src={image}
                  alt={`${project.title} gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;