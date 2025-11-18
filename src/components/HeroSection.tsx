import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <>
      <section id="hero" className="pt-32 pb-20 px-4 bg-gradient-to-br from-white via-orange-50/30 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Превращаем идеи в <span className="text-primary">реальность</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Профессиональная 3D-печать любой сложности. От прототипа до серийного производства.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('calculator')}>
                  Рассчитать стоимость
                  <Icon name="Calculator" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('portfolio')}>
                  Наши работы
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Проектов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-600">Технологий</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600">Поддержка</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-center justify-center">
                <Icon name="Box" size={200} className="text-primary/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">Полный цикл работ от моделирования до постобработки</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Printer',
                title: '3D-печать',
                description: 'FDM, SLA, SLS печать с точностью до 0.1мм',
              },
              {
                icon: 'Sparkles',
                title: '3D-моделирование',
                description: 'Создание моделей любой сложности под ваши задачи',
              },
              {
                icon: 'Scan',
                title: '3D-сканирование',
                description: 'Высокоточное сканирование объектов до 2 метров',
              },
              {
                icon: 'Paintbrush',
                title: 'Постобработка',
                description: 'Шлифовка, покраска, химическая обработка',
              },
              {
                icon: 'FlaskConical',
                title: 'Прототипирование',
                description: 'Быстрое создание прототипов для тестирования',
              },
              {
                icon: 'Factory',
                title: 'Мелкосерийное производство',
                description: 'Изготовление партий от 10 до 1000 единиц',
              },
            ].map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Портфолио</h2>
            <p className="text-xl text-gray-600">Реализованные проекты наших клиентов</p>
          </div>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="prototype">Прототипы</TabsTrigger>
              <TabsTrigger value="production">Серии</TabsTrigger>
              <TabsTrigger value="art">Арт-объекты</TabsTrigger>
            </TabsList>
            <TabsContent value="all">
              <div className="grid md:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item} className="overflow-hidden group cursor-pointer">
                    <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon name="Box" size={80} className="text-primary/40 group-hover:scale-110 transition-transform" />
                      </div>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
                        <Icon name="Eye" className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={40} />
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">Проект #{item}</CardTitle>
                      <CardDescription>Функциональный прототип корпуса</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="tech" className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Технологии и материалы</h2>
            <p className="text-xl text-gray-400">Современное оборудование для любых задач</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Технологии печати</h3>
              <div className="space-y-4">
                {[
                  { name: 'FDM (FFF)', desc: 'Послойное наплавление пластика' },
                  { name: 'SLA', desc: 'Фотополимерная печать' },
                  { name: 'SLS', desc: 'Селективное лазерное спекание' },
                  { name: 'MJF', desc: 'Многоструйная печать' },
                ].map((tech, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <Icon name="Zap" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold text-lg">{tech.name}</div>
                      <div className="text-gray-400">{tech.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Материалы</h3>
              <div className="space-y-4">
                {[
                  { name: 'PLA', desc: 'Биоразлагаемый пластик для прототипов' },
                  { name: 'ABS', desc: 'Прочный термопластик' },
                  { name: 'PETG', desc: 'Устойчив к влаге и ударам' },
                  { name: 'TPU', desc: 'Гибкий эластичный материал' },
                  { name: 'Nylon', desc: 'Высокая прочность и износостойкость' },
                  { name: 'Resin', desc: 'Фотополимерная смола высокой детализации' },
                ].map((material, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <Icon name="Package" className="text-primary mt-1" size={24} />
                    <div>
                      <div className="font-semibold text-lg">{material.name}</div>
                      <div className="text-gray-400">{material.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
