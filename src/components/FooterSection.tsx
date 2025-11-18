import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface FooterSectionProps {
  scrollToSection: (id: string) => void;
}

const FooterSection = ({ scrollToSection }: FooterSectionProps) => {
  return (
    <>
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
    </>
  );
};

export default FooterSection;
