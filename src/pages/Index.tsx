import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [area, setArea] = useState('');
  const [workType, setWorkType] = useState('');
  const [price, setPrice] = useState<number | null>(null);

  const services = [
    {
      title: 'Черновые работы',
      description: 'Подготовка помещения к дальнейшей отделке',
      icon: 'Hammer',
      features: ['Демонтаж старых покрытий', 'Возведение перегородок', 'Электромонтаж', 'Сантехнические работы'],
      pricePerSqm: 3500
    },
    {
      title: 'Предчистовые работы',
      description: 'Выравнивание и подготовка поверхностей',
      icon: 'Paintbrush',
      features: ['Штукатурка стен', 'Стяжка пола', 'Установка окон', 'Монтаж дверей'],
      pricePerSqm: 2800
    },
    {
      title: 'Чистовые работы',
      description: 'Финальная отделка под ключ',
      icon: 'Sparkles',
      features: ['Покраска стен', 'Укладка напольных покрытий', 'Установка сантехники', 'Монтаж розеток'],
      pricePerSqm: 4200
    }
  ];

  const portfolioItems = [
    {
      title: 'Квартира 80 м² в ЖК "Новая Москва"',
      type: 'Полный ремонт под ключ',
      duration: '45 дней',
      image: '/placeholder.svg'
    },
    {
      title: 'Офис 120 м² в БЦ "Центральный"',
      type: 'Чистовая отделка',
      duration: '30 дней',
      image: '/placeholder.svg'
    },
    {
      title: 'Загородный дом 200 м²',
      type: 'Черновые + чистовые работы',
      duration: '90 дней',
      image: '/placeholder.svg'
    }
  ];

  const reviews = [
    {
      name: 'Александр Иванов',
      text: 'Отличная команда! Сделали ремонт квартиры за 6 недель. Качество на высоте, все сроки соблюдены.',
      rating: 5
    },
    {
      name: 'Мария Петрова',
      text: 'Профессиональный подход к работе. Помогли с выбором материалов, учли все наши пожелания.',
      rating: 5
    },
    {
      name: 'Дмитрий Сидоров',
      text: 'Делали ремонт офиса. Работали быстро и аккуратно, не мешали работе сотрудников.',
      rating: 5
    }
  ];

  const calculatePrice = () => {
    if (!area || !workType) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive'
      });
      return;
    }

    const service = services.find(s => s.title === workType);
    if (service) {
      const totalPrice = parseFloat(area) * service.pricePerSqm;
      setPrice(totalPrice);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-heading text-secondary">РемонтПро</h1>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#calculator" className="hover:text-primary transition-colors">Калькулятор</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button asChild>
            <a href="#contact">Оставить заявку</a>
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-secondary via-secondary/95 to-primary text-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6">
              Отделочные работы под ключ
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Качественный ремонт квартир, домов и коммерческих помещений. От черновой отделки до финальных штрихов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="#calculator">Рассчитать стоимость</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-secondary" asChild>
                <a href="#portfolio">Наши работы</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к ремонту на любом этапе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="font-heading">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon name="Check" className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-2xl font-bold font-heading text-primary">
                      от {service.pricePerSqm.toLocaleString()} ₽/м²
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Портфолио работ</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры наших выполненных проектов
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="aspect-video bg-muted">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="font-heading">{item.title}</CardTitle>
                  <CardDescription>{item.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Clock" className="w-4 h-4" />
                    <span>Срок выполнения: {item.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Калькулятор стоимости</h2>
              <p className="text-lg text-muted-foreground">
                Узнайте предварительную стоимость ремонта
              </p>
            </div>
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="work-type">Тип работ</Label>
                    <Select value={workType} onValueChange={setWorkType}>
                      <SelectTrigger id="work-type">
                        <SelectValue placeholder="Выберите тип работ" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="area">Площадь помещения (м²)</Label>
                    <Input
                      id="area"
                      type="number"
                      placeholder="Введите площадь"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                    />
                  </div>
                  <Button onClick={calculatePrice} className="w-full" size="lg">
                    <Icon name="Calculator" className="mr-2 w-5 h-5" />
                    Рассчитать стоимость
                  </Button>
                  {price !== null && (
                    <div className="p-6 bg-primary/10 rounded-lg text-center animate-fade-in">
                      <p className="text-sm text-muted-foreground mb-2">Предварительная стоимость:</p>
                      <p className="text-4xl font-bold font-heading text-primary">
                        {price.toLocaleString()} ₽
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Точная стоимость определяется после осмотра объекта
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="font-heading">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Оставить заявку</h2>
              <p className="text-lg text-white/80">
                Заполните форму, и мы свяжемся с вами в течение 30 минут
              </p>
            </div>
            <Card className="animate-fade-in">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="ivan@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="message">Комментарий</Label>
                    <Textarea id="message" placeholder="Расскажите о вашем проекте..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" className="mr-2 w-5 h-5" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold font-heading mb-4">РемонтПро</h3>
              <p className="text-white/70">Профессиональные отделочные работы под ключ</p>
            </div>
            <div>
              <h4 className="font-bold font-heading mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li>Черновые работы</li>
                <li>Предчистовые работы</li>
                <li>Чистовые работы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold font-heading mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="w-4 h-4" />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="w-4 h-4" />
                  <span>info@remontpro.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="w-4 h-4" />
                  <span>г. Москва</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold font-heading mb-4">Режим работы</h4>
              <ul className="space-y-2 text-white/70">
                <li>Пн-Пт: 9:00 - 19:00</li>
                <li>Сб-Вс: 10:00 - 17:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/70">
            <p>© 2024 РемонтПро. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
