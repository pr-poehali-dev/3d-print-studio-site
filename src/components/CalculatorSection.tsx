import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface CalculatorSectionProps {
  scrollToSection: (id: string) => void;
}

const CalculatorSection = ({ scrollToSection }: CalculatorSectionProps) => {
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

  return (
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
  );
};

export default CalculatorSection;
