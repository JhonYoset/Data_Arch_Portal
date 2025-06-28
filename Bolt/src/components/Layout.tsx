import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Home, Users, FolderOpen, Megaphone } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navigation = [
    { name: t('nav.home'), href: '/', icon: Home },
    { name: t('nav.team'), href: '/team', icon: Users },
    { name: t('nav.projects'), href: '/projects', icon: FolderOpen },
    { name: t('nav.announcements'), href: '/announcements', icon: Megaphone },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <img 
                src="/data_arch_code_logo.jpeg" 
                alt="Data Arch Labs" 
                className="h-10 w-auto transition-transform group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Data Arch Labs
                </h1>
                <p className="text-xs text-gray-600">{t('footer.description').split(' ').slice(0, 2).join(' ')}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-primary-100 text-primary-700 shadow-sm'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <LanguageSwitcher />
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <LanguageSwitcher />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-primary-600 hover:bg-gray-50 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-primary-100 text-primary-700'
                        : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/data_arch_code_logo.jpeg" 
                  alt="Data Arch Labs" 
                  className="h-8 w-auto"
                />
                <h3 className="text-lg font-bold">Data Arch Labs</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('footer.description')}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link 
                      to={item.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
                {t('footer.contact')}
              </h4>
              <p className="text-gray-400 text-sm">
                Research Group Portal<br />
                {t('footer.version')}
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;