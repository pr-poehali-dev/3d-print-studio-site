import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [volume, setVolume] = useState(100);
  const [material, setMaterial] = useState('pla');
  const [infill, setInfill] = useState(20);
  const [quality, setQuality] = useState('standard');

  const calculatePrice = () => {
    const basePricePerCm3 = {
      pla: 2,
      abs: 2.5,
      petg: 3,
      tpu: 4,
      nylon: 5,
    };

    const qualityMultiplier = {
      draft: 0.8,
      standard: 1,
      high: 1.3,
      ultra: 1.6,
    };

    const basePrice = volume * basePricePerCm3[material as keyof typeof basePricePerCm3];
    const infillCost = (infill / 100) * basePrice * 0.3;
    const qualityPrice = basePrice * qualityMultiplier[quality as keyof typeof qualityMultiplier];

    return Math.round(qualityPrice + infillCost);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
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

      <section id="calculator" className="py-20 px-4 bg-gradient-to-br from-orange-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Калькулятор стоимости</h2>
            <p className="text-xl text-gray-600">Рассчитайте стоимость 3D-печати вашей модели</p>
          </div>
          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <Label htmlFor="volume" className="text-lg mb-3 block">
                    Объем модели (см³)
                  </Label>
                  <Input
                    id="volume"
                    type="number"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="text-lg"
                  />
                </div>
                <div>
                  <Label htmlFor="material" className="text-lg mb-3 block">
                    Материал
                  </Label>
                  <Select value={material} onValueChange={setMaterial}>
                    <SelectTrigger className="text-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pla">PLA - 2₽/см³</SelectItem>
                      <SelectItem value="abs">ABS - 2.5₽/см³</SelectItem>
                      <SelectItem value="petg">PETG - 3₽/см³</SelectItem>
                      <SelectItem value="tpu">TPU - 4₽/см³</SelectItem>
                      <SelectItem value="nylon">Nylon - 5₽/см³</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-8">
                <Label className="text-lg mb-3 block">Заполнение: {infill}%</Label>
                <Slider
                  value={[infill]}
                  onValueChange={(value) => setInfill(value[0])}
                  max={100}
                  step={5}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-gray-500">
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
              </div>

              <div className="mb-8">
                <Label className="text-lg mb-3 block">Качество печати</Label>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { value: 'draft', label: 'Черновое', desc: '0.3мм' },
                    { value: 'standard', label: 'Стандарт', desc: '0.2мм' },
                    { value: 'high', label: 'Высокое', desc: '0.1мм' },
                    { value: 'ultra', label: 'Ультра', desc: '0.05мм' },
                  ].map((q) => (
                    <button
                      key={q.value}
                      onClick={() => setQuality(q.value)}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        quality === q.value
                          ? 'border-primary bg-primary/10'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">{q.label}</div>
                      <div className="text-sm text-gray-600">{q.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-orange-600 rounded-xl p-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg mb-2">Примерная стоимость</div>
                    <div className="text-5xl font-bold">{calculatePrice()} ₽</div>
                    <div className="text-sm mt-2 opacity-90">Без учета постобработки</div>
                  </div>
                  <Icon name="Calculator" size={80} className="opacity-20" />
                </div>
              </div>

              <Button size="lg" className="w-full mt-6" onClick={() => scrollToSection('contacts')}>
                Заказать печать
                <Icon name="Send" className="ml-2" size={20} />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Прайс-лист</h2>
            <p className="text-xl text-gray-600">Базовые цены на наши услуги</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Стандарт',
                price: '200',
                desc: 'Для простых прототипов',
                features: ['FDM печать', 'PLA/ABS материал', 'Стандартное качество', 'Срок 3-5 дней'],
              },
              {
                name: 'Профи',
                price: '500',
                desc: 'Для функциональных изделий',
                features: ['SLA/SLS печать', 'Любой материал', 'Высокое качество', 'Срок 2-3 дня', 'Постобработка'],
                popular: true,
              },
              {
                name: 'Премиум',
                price: '1500',
                desc: 'Для серийного производства',
                features: [
                  'Все технологии',
                  'Премиум материалы',
                  'Ультра качество',
                  'Срок 1-2 дня',
                  'Полная постобработка',
                  'Индивидуальный менеджер',
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.desc}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-gray-900">от {plan.price}₽</span>
                    <span className="text-gray-600">/проект</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" className="text-primary" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? 'default' : 'outline'}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-gray-400">Готовы обсудить ваш проект</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Адрес</div>
                    <div className="text-gray-400">г. Москва, ул. Примерная, д. 123</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Телефон</div>
                    <div className="text-gray-400">+7 (999) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Email</div>
                    <div className="text-gray-400">info@protype.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">Режим работы</div>
                    <div className="text-gray-400">Пн-Пт: 9:00 - 18:00</div>
                    <div className="text-gray-400">Сб-Вс: По договоренности</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-white/5 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white">Отправить заявку</CardTitle>
                  <CardDescription className="text-gray-400">
                    Заполните форму и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input id="email" type="email" placeholder="ivan@example.com" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white">Телефон</Label>
                    <Input id="phone" placeholder="+7 (999) 123-45-67" className="bg-white/10 border-white/20 text-white" />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-white">Сообщение</Label>
                    <textarea
                      id="message"
                      placeholder="Расскажите о вашем проекте..."
                      rows={4}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-gray-500"
                    />
                  </div>
                  <Button className="w-full">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/e7ad20d9-f527-4fc5-90d0-8033d7faf411.png" 
                alt="ProType Logo" 
                className="h-10"
              />
            </div>
            <div className="text-gray-400 text-center">
              © 2024 ProType. Все права защищены.
            </div>
            <div className="flex gap-4">
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Icon name="Instagram" size={20} />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Icon name="Mail" size={20} />
              </button>
              <button className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                <Icon name="Phone" size={20} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
