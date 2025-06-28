import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Users, FolderOpen, Megaphone, Brain, Leaf, BarChart3 } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Brain,
      title: t('home.researchAreas.ai.title'),
      description: t('home.researchAreas.ai.description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Leaf,
      title: t('home.researchAreas.sustainable.title'),
      description: t('home.researchAreas.sustainable.description'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: t('home.researchAreas.dataScience.title'),
      description: t('home.researchAreas.dataScience.description'),
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const stats = [
    { label: t('home.stats.activeProjects'), value: '2+' },
    { label: t('home.stats.teamMembers'), value: '4+' },
    { label: t('home.stats.researchAreas'), value: '3' },
    { label: t('home.stats.publications'), value: '10+' }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
              {t('home.title').split('Data Arch Labs')[0]}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Data Arch Labs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              {t('home.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('home.exploreProjects')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/team"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-700 transition-all duration-200"
              >
                {t('home.meetTeam')}
                <Users className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-yellow-400/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-20 w-12 h-12 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.researchAreas.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.researchAreas.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Access */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.quickAccess.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.quickAccess.subtitle')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/team"
              className="group bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 hover:from-primary-100 hover:to-primary-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Users className="h-12 w-12 text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('home.quickAccess.team.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('home.quickAccess.team.description')}
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                {t('home.quickAccess.team.action')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
            
            <Link
              to="/projects"
              className="group bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-8 hover:from-secondary-100 hover:to-secondary-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <FolderOpen className="h-12 w-12 text-secondary-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('home.quickAccess.projects.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('home.quickAccess.projects.description')}
              </p>
              <div className="flex items-center text-secondary-600 font-medium">
                {t('home.quickAccess.projects.action')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
            
            <Link
              to="/announcements"
              className="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 hover:from-green-100 hover:to-green-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Megaphone className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t('home.quickAccess.announcements.title')}</h3>
              <p className="text-gray-600 mb-4">
                {t('home.quickAccess.announcements.description')}
              </p>
              <div className="flex items-center text-green-600 font-medium">
                {t('home.quickAccess.announcements.action')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;