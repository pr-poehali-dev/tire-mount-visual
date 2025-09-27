import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const services = [
  {
    title: 'Шиномонтаж',
    description: 'Установка и снятие шин любой сложности',
    price: 'от 500 ₽',
    icon: 'Wrench'
  },
  {
    title: 'Балансировка',
    description: 'Точная балансировка колес на современном оборудовании',
    price: 'от 300 ₽',
    icon: 'Settings'
  },
  {
    title: 'Ремонт проколов',
    description: 'Быстрый и качественный ремонт проколов',
    price: 'от 200 ₽',
    icon: 'Shield'
  },
  {
    title: 'Хранение шин',
    description: 'Сезонное хранение в отапливаемом помещении',
    price: 'от 2000 ₽/сезон',
    icon: 'Archive'
  }
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
];

const reviews = [
  {
    name: 'Алексей М.',
    rating: 5,
    text: 'Отличный сервис! Быстро переобули машину, цены адекватные.',
    date: '15 сентября 2024'
  },
  {
    name: 'Мария К.',
    rating: 5,
    text: 'Профессиональная работа, вежливый персонал. Рекомендую!',
    date: '10 сентября 2024'
  },
  {
    name: 'Дмитрий С.',
    rating: 5,
    text: 'Удобная онлайн запись, работают четко по времени.',
    date: '5 сентября 2024'
  }
];

function Index() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientComment, setClientComment] = useState('');
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleBooking = () => {
    if (selectedService && selectedDate && selectedTime && clientName && clientPhone) {
      alert(`Запись успешно создана!\nУслуга: ${selectedService}\nДата: ${selectedDate}\nВремя: ${selectedTime}\nИмя: ${clientName}\nТелефон: ${clientPhone}`);
      setIsBookingOpen(false);
      // Reset form
      setSelectedService('');
      setSelectedDate('');
      setSelectedTime('');
      setClientName('');
      setClientPhone('');
      setClientComment('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">ТираМастер</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-primary transition-colors">Услуги</a>
              <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
              <DialogTrigger asChild>
                <Button className="bg-secondary hover:bg-secondary/90">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Записаться
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Профессиональный шиномонтаж
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Быстрая и качественная услуга установки шин. Современное оборудование, опытные мастера и удобная онлайн запись.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6">
                      <Icon name="Calendar" size={20} className="mr-2" />
                      Записаться на услугу
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (495) 123-45-67
                </Button>
              </div>
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <Icon name="Clock" size={20} className="text-primary" />
                  <span className="text-gray-600">Время работы: 9:00 - 20:00</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={20} className="text-primary" />
                  <span className="text-gray-600">м. Автозаводская</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                <img 
                  src="/img/0d0eb4a5-f84d-4adb-a1bf-bd6062a50a61.jpg" 
                  alt="Современный шиномонтаж" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг по обслуживанию шин и дисков с использованием современного оборудования
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0 bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="text-lg font-semibold px-4 py-2">
                    {service.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="animate-fade-in border-0 shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="text-sm text-gray-500">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Контакты</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-gray-600">ул. Автозаводская, 15к2, Москва</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-gray-600">Пн-Вс: 9:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Обратная связь</CardTitle>
                <CardDescription>Оставьте заявку и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input placeholder="Номер телефона" />
                <Textarea placeholder="Сообщение" rows={4} />
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Dialog */}
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Онлайн запись</DialogTitle>
          <DialogDescription>
            Выберите услугу, дату и время для записи
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="service" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="service">Услуга</TabsTrigger>
            <TabsTrigger value="datetime">Дата и время</TabsTrigger>
            <TabsTrigger value="contact">Контакты</TabsTrigger>
          </TabsList>
          
          <TabsContent value="service" className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {services.map((service, index) => (
                <Button
                  key={index}
                  variant={selectedService === service.title ? "default" : "outline"}
                  className="h-auto p-4 text-left"
                  onClick={() => setSelectedService(service.title)}
                >
                  <div>
                    <div className="font-semibold">{service.title}</div>
                    <div className="text-sm text-gray-500">{service.price}</div>
                  </div>
                </Button>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="datetime" className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Дата</label>
              <Input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Время</label>
              <div className="grid grid-cols-5 gap-2">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="contact" className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Имя *</label>
              <Input 
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Ваше имя"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Телефон *</label>
              <Input 
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="+7 (999) 123-45-67"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Комментарий</label>
              <Textarea 
                value={clientComment}
                onChange={(e) => setClientComment(e.target.value)}
                placeholder="Дополнительная информация"
                rows={3}
              />
            </div>
            <Button 
              onClick={handleBooking}
              className="w-full bg-secondary hover:bg-secondary/90"
              disabled={!selectedService || !selectedDate || !selectedTime || !clientName || !clientPhone}
            >
              Подтвердить запись
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" size={32} className="text-primary" />
                <span className="text-2xl font-bold">ТираМастер</span>
              </div>
              <p className="text-gray-400">
                Профессиональный шиномонтаж с 2010 года. Качество и скорость - наши приоритеты.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Шиномонтаж</li>
                <li>Балансировка</li>
                <li>Ремонт проколов</li>
                <li>Хранение шин</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>ул. Автозаводская, 15к2</p>
                <p>Ежедневно: 9:00 - 20:00</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ТираМастер. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;