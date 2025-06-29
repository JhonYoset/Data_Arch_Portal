import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Team: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      id: 'santiago',
      name: t('team.members.santiago.name'),
      role: t('team.members.santiago.role'),
      bio: t('team.members.santiago.bio'),
      avatar: '/santiago.jpeg?auto=compress&cs=tinysrgb&w=400',
      areas: t('team.members.santiago.areas', { returnObjects: true }) as string[],
      social: {
        github: 'santiago-researcher',
        linkedin: 'santiago-pi',
        email: 'santiago@dataarchlabs.com'
      }
    },
    {
      id: 'dario',
      name: t('team.members.dario.name'),
      role: t('team.members.dario.role'),
      bio: t('team.members.dario.bio'),
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      areas: t('team.members.dario.areas', { returnObjects: true }) as string[],
      social: {
        github: 'dario-dev',
        linkedin: 'dario-cs',
        email: 'dario@dataarchlabs.com'
      }
    },
    {
      id: 'naomi',
      name: t('team.members.naomi.name'),
      role: t('team.members.naomi.role'),
      bio: t('team.members.naomi.bio'),
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      areas: t('team.members.naomi.areas', { returnObjects: true }) as string[],
      social: {
        linkedin: 'naomi-arch',
        email: 'naomi@dataarchlabs.com'
      }
    },
    {
      id: 'fabiola',
      name: t('team.members.fabiola.name'),
      role: t('team.members.fabiola.role'),
      bio: t('team.members.fabiola.bio'),
      avatar: '/fabiola.jpeg?auto=compress&cs=tinysrgb&w=400',
      areas: t('team.members.fabiola.areas', { returnObjects: true }) as string[],
      social: {
        github: 'fabiola-data',
        linkedin: 'fabiola-systems',
        email: 'fabiola@dataarchlabs.com'
      }
    }
  ];

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('team.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('team.subtitle')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-24 h-24 rounded-2xl object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    
                    {/* Research Areas */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {member.areas.map((area, areaIndex) => (
                          <span
                            key={areaIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                          >
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex items-center space-x-3">
                      {member.social.github && (
                        <a
                          href={`https://github.com/${member.social.github}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={`https://linkedin.com/in/${member.social.linkedin}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <Linkedin className="h-4 w-4" />
                        </a>
                      )}
                      <a
                        href={`mailto:${member.social.email}`}
                        className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* View Profile Link */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Link
                    to={`/team/${member.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors group"
                  >
                    {t('team.viewProfile')}
                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Section */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('team.joinUs.title')}
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            {t('team.joinUs.subtitle')}
          </p>
          <a
            href="mailto:contact@dataarchlabs.com"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t('team.joinUs.action')}
            <Mail className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;