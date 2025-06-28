import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Github, Linkedin, Mail, ExternalLink, FileText, Award } from 'lucide-react';

const TeamMember: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  // Get member data from translations
  const getMemberData = (memberId: string) => {
    const memberKey = `team.members.${memberId}`;
    
    try {
      return {
        name: t(`${memberKey}.name`),
        role: t(`${memberKey}.role`),
        bio: t(`${memberKey}.bio`),
        fullBio: t(`${memberKey}.fullBio`),
        areas: t(`${memberKey}.areas`, { returnObjects: true }) as string[],
        education: t(`${memberKey}.education`, { returnObjects: true }) as string[],
        publications: t(`${memberKey}.publications`, { returnObjects: true }) as string[],
        avatar: getAvatarUrl(memberId),
        projects: getProjects(memberId),
        social: getSocialLinks(memberId)
      };
    } catch {
      return null;
    }
  };

  const getAvatarUrl = (memberId: string) => {
    const avatars: { [key: string]: string } = {
      santiago: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
      dario: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
      naomi: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=800',
      fabiola: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    };
    return avatars[memberId] || '';
  };

  const getProjects = (memberId: string) => {
    const projectMap: { [key: string]: string[] } = {
      santiago: ['Elevated Cycleway', 'Biophilic Design - Schools'],
      dario: ['Elevated Cycleway'],
      naomi: ['Biophilic Design - Schools'],
      fabiola: ['Elevated Cycleway', 'Biophilic Design - Schools']
    };
    return projectMap[memberId] || [];
  };

  const getSocialLinks = (memberId: string) => {
    const socialMap: { [key: string]: any } = {
      santiago: {
        github: 'santiago-researcher',
        linkedin: 'santiago-pi',
        email: 'santiago@dataarchlabs.com'
      },
      dario: {
        github: 'dario-dev',
        linkedin: 'dario-cs',
        email: 'dario@dataarchlabs.com'
      },
      naomi: {
        linkedin: 'naomi-arch',
        email: 'naomi@dataarchlabs.com'
      },
      fabiola: {
        github: 'fabiola-data',
        linkedin: 'fabiola-systems',
        email: 'fabiola@dataarchlabs.com'
      }
    };
    return socialMap[memberId] || {};
  };

  const member = getMemberData(id || '');

  if (!member) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t('team.memberNotFound')}</h1>
          <Link
            to="/team"
            className="inline-flex items-center text-primary-600 hover:text-primary-700"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('team.backToTeam')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/team"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          {t('team.backToTeam')}
        </Link>

        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <img
                src={member.avatar}
                alt={member.name}
                className="w-32 h-32 rounded-2xl object-cover shadow-lg"
              />
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h1>
                <p className="text-xl text-primary-600 font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
                
                {/* Social Links */}
                <div className="flex items-center space-x-4">
                  {member.social.github && (
                    <a
                      href={`https://github.com/${member.social.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                    >
                      <Github className="h-5 w-5 text-gray-600" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={`https://linkedin.com/in/${member.social.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-blue-100 hover:bg-blue-200 rounded-xl transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </a>
                  )}
                  <a
                    href={`mailto:${member.social.email}`}
                    className="p-3 bg-primary-100 hover:bg-primary-200 rounded-xl transition-colors"
                  >
                    <Mail className="h-5 w-5 text-primary-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Full Bio */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('team.about')}</h2>
              <p className="text-gray-600 leading-relaxed">
                {member.fullBio}
              </p>
            </div>

            {/* Research Areas */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('team.researchAreas')}</h2>
              <div className="flex flex-wrap gap-3">
                {member.areas.map((area: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary-100 text-primary-700 font-medium rounded-xl"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Publications */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="mr-3 h-6 w-6 text-primary-600" />
                {t('team.publications')}
              </h2>
              <div className="space-y-4">
                {member.publications.map((publication: string, index: number) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700">{publication}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Award className="mr-3 h-5 w-5 text-primary-600" />
                {t('team.education')}
              </h3>
              <div className="space-y-3">
                {member.education.map((edu: string, index: number) => (
                  <div key={index} className="text-sm text-gray-600">
                    {edu}
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('team.currentProjects')}</h3>
              <div className="space-y-3">
                {member.projects.map((project: string, index: number) => (
                  <Link
                    key={index}
                    to={`/projects/${project.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '')}`}
                    className="block p-3 bg-gray-50 hover:bg-primary-50 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900 group-hover:text-primary-700">
                        {project}
                      </span>
                      <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-primary-600" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;