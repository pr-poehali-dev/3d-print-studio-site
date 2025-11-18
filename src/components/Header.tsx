import { Button } from '@/components/ui/button';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <img 
              src="https://cdn.poehali.dev/files/e7ad20d9-f527-4fc5-90d0-8033d7faf411.png" 
              alt="ProType Logo" 
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Главная
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Услуги
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('tech')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Технологии
            </button>
            <button onClick={() => scrollToSection('calculator')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Калькулятор
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Прайс
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors font-medium">
              Контакты
            </button>
          </nav>
          <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
