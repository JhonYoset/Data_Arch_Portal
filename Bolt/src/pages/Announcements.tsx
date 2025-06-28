import React from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, ExternalLink, Clock, Users } from 'lucide-react';

const Announcements: React.FC = () => {
  const { t } = useTranslation();

  const announcements = [
    {
      id: 1,
      title: t('announcements.items.weeklyMeeting.title'),
      date: '2025-01-15',
      time: '10:00 AM',
      type: t('announcements.types.meeting'),
      content: t('announcements.items.weeklyMeeting.content'),
      meetingLink: 'https://meet.google.com/abc-defg-hij',
      attendees: t('announcements.items.weeklyMeeting.attendees'),
      priority: 'high'
    },
    {
      id: 2,
      title: t('announcements.items.newPublication.title'),
      date: '2025-01-10',
      type: t('announcements.types.publication'),
      content: t('announcements.items.newPublication.content'),
      link: 'https://journal.example.com/ai-sustainable-architecture',
      priority: 'medium'
    },
    {
      id: 3,
      title: t('announcements.items.conference.title'),
      date: '2025-01-05',
      type: t('announcements.types.conference'),
      content: t('announcements.items.conference.content'),
      link: 'https://digitalfutures.world',
      priority: 'medium'
    },
    {
      id: 4,
      title: t('announcements.items.newMember.title'),
      date: '2024-12-20',
      type: t('announcements.types.team'),
      content: t('announcements.items.newMember.content'),
      priority: 'low'
    },
    {
      id: 5,
      title: t('announcements.items.funding.title'),
      date: '2024-12-15',
      type: t('announcements.types.funding'),
      content: t('announcements.items.funding.content'),
      priority: 'high'
    }
  ];

  const getTypeColor = (type: string) => {
    const typeKey = Object.keys(t('announcements.types', { returnObjects: true })).find(
      key => t(`announcements.types.${key}`) === type
    );
    
    switch (typeKey) {
      case 'meeting':
        return 'bg-blue-100 text-blue-700';
      case 'publication':
        return 'bg-green-100 text-green-700';
      case 'conference':
        return 'bg-purple-100 text-purple-700';
      case 'team':
        return 'bg-orange-100 text-orange-700';
      case 'funding':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityBorder = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500';
      case 'medium':
        return 'border-l-yellow-500';
      case 'low':
        return 'border-l-green-500';
      default:
        return 'border-l-gray-300';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="py-20 animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('announcements.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('announcements.subtitle')}
          </p>
        </div>

        {/* Announcements List */}
        <div className="space-y-6">
          {announcements.map((announcement) => (
            <div
              key={announcement.id}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border-l-4 ${getPriorityBorder(announcement.priority)}`}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(announcement.type)}`}>
                        {announcement.type}
                      </span>
                      {announcement.priority === 'high' && (
                        <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                          {t('announcements.priority.high')}
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {announcement.title}
                    </h2>
                  </div>
                </div>

                {/* Date and Time */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {formatDate(announcement.date)}
                  </div>
                  {announcement.time && (
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {announcement.time}
                    </div>
                  )}
                  {announcement.attendees && (
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {announcement.attendees}
                    </div>
                  )}
                </div>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {announcement.content}
                </p>

                {/* Actions */}
                <div className="flex flex-wrap gap-3">
                  {announcement.meetingLink && (
                    <a
                      href={announcement.meetingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {t('announcements.joinMeeting')}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                  {announcement.link && !announcement.meetingLink && (
                    <a
                      href={announcement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      {t('announcements.learnMore')}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {t('announcements.stayUpdated.title')}
          </h2>
          <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
            {t('announcements.stayUpdated.subtitle')}
          </p>
          <a
            href="mailto:announcements@dataarchlabs.com"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t('announcements.stayUpdated.action')}
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Announcements;