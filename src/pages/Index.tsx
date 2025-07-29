import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-magical-midnight to-magical-forest">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/img/f26baeac-cefc-4571-82be-dc48eec7b69d.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-magical-midnight/50 to-magical-midnight" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
          <div className="mb-8">
            <Icon name="Sparkles" size={48} className="text-magical-gold mx-auto mb-4 animate-float" />
          </div>
          
          <h1 className="font-cinzel text-5xl md:text-7xl font-bold text-magical-gold mb-6 leading-tight">
            Изучаем английский,
            <br />
            читая Гарри Поттера
          </h1>
          
          <p className="text-xl md:text-2xl text-magical-parchment mb-4 font-crimson">
            Годовой курс английского языка
          </p>
          
          <p className="text-lg text-magical-parchment/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Книжный клуб + общение по интересам + погружение в магический мир
          </p>
          
          <Button 
            size="lg" 
            className="bg-magical-gold hover:bg-magical-bronze text-magical-midnight font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <Icon name="BookOpen" size={20} className="mr-2" />
            Начать магическое обучение
          </Button>
        </div>
        
        {/* Floating magical elements */}
        <div className="absolute top-20 left-10 text-magical-gold animate-float opacity-60">
          <Icon name="Star" size={24} />
        </div>
        <div className="absolute top-40 right-20 text-magical-gold animate-float opacity-40" style={{animationDelay: '1s'}}>
          <Icon name="Sparkles" size={20} />
        </div>
        <div className="absolute bottom-32 left-16 text-magical-gold animate-float opacity-50" style={{animationDelay: '2s'}}>
          <Icon name="Zap" size={28} />
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-magical-gold mb-6">
              Программа курса
            </h2>
            <p className="text-xl text-magical-parchment max-w-3xl mx-auto font-crimson">
              Изучение английского через захватывающий мир Хогвартса
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Module 1 */}
            <Card className="bg-magical-midnight/80 border-magical-gold/30 hover:border-magical-gold/60 transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-magical-gold/20 flex items-center justify-center">
                  <Icon name="BookOpen" size={32} className="text-magical-gold" />
                </div>
                <CardTitle className="text-magical-gold font-cinzel text-2xl">
                  Философский камень
                </CardTitle>
                <CardDescription className="text-magical-parchment/80 font-crimson">
                  Уровень: Beginner - Intermediate
                </CardDescription>
              </CardHeader>
              <CardContent className="text-magical-parchment/90">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-magical-gold mt-1 flex-shrink-0" />
                    Основы грамматики через диалоги персонажей
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-magical-gold mt-1 flex-shrink-0" />
                    Лексика магического мира (1000+ слов)
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-magical-gold mt-1 flex-shrink-0" />
                    Интерактивные упражнения и квизы
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 2 */}
            <Card className="bg-magical-midnight/80 border-magical-gold/30 hover:border-magical-gold/60 transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-magical-emerald/20 flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-magical-emerald" />
                </div>
                <CardTitle className="text-magical-emerald font-cinzel text-2xl">
                  Тайная комната
                </CardTitle>
                <CardDescription className="text-magical-parchment/80 font-crimson">
                  Уровень: Intermediate
                </CardDescription>
              </CardHeader>
              <CardContent className="text-magical-parchment/90">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-magical-emerald mt-1 flex-shrink-0" />
                    Групповые дискуссии о прочитанном
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-magical-emerald mt-1 flex-shrink-0" />
                    Развитие навыков говорения
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-magical-emerald mt-1 flex-shrink-0" />
                    Еженедельные встречи книжного клуба
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Module 3 */}
            <Card className="bg-magical-midnight/80 border-magical-gold/30 hover:border-magical-gold/60 transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-magical-crimson/20 flex items-center justify-center">
                  <Icon name="Award" size={32} className="text-magical-crimson" />
                </div>
                <CardTitle className="text-magical-crimson font-cinzel text-2xl">
                  Узник Азкабана
                </CardTitle>
                <CardDescription className="text-magical-parchment/80 font-crimson">
                  Уровень: Upper-Intermediate
                </CardDescription>
              </CardHeader>
              <CardContent className="text-magical-parchment/90">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-magical-crimson mt-1 flex-shrink-0" />
                    Углубленный анализ текста
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-magical-crimson mt-1 flex-shrink-0" />
                    Творческие письменные задания
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-magical-crimson mt-1 flex-shrink-0" />
                    Сертификат о прохождении курса
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-16">
            <div 
              className="inline-block w-64 h-40 bg-cover bg-center rounded-lg opacity-80 mb-6"
              style={{
                backgroundImage: "url('/img/a62fc3da-53c6-4145-a1ab-5f7702d8abc0.jpg')"
              }}
            />
            <p className="text-magical-parchment/90 text-lg max-w-2xl mx-auto font-crimson leading-relaxed">
              Каждый урок — это не просто изучение языка, а погружение в волшебный мир, 
              где английский становится ключом к пониманию магии слова.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-magical-forest to-magical-midnight">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-magical-gold mb-6">
            Стоимость обучения
          </h2>
          <p className="text-xl text-magical-parchment mb-12 font-crimson">
            Инвестиция в ваше магическое будущее
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-magical-midnight/90 border-magical-gold/40 hover:border-magical-gold transition-all duration-300 transform hover:scale-105">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-magical-gold/20 flex items-center justify-center">
                  <Icon name="BookOpen" size={28} className="text-magical-gold" />
                </div>
                <CardTitle className="font-cinzel text-2xl text-magical-gold mb-2">
                  Базовый курс
                </CardTitle>
                <CardDescription className="text-magical-parchment/80 font-crimson">
                  Самостоятельное изучение
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-magical-gold">₽12,900</span>
                  <span className="text-magical-parchment/70 text-lg">/год</span>
                </div>
                <ul className="text-magical-parchment/90 space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-magical-gold" />
                    Доступ ко всем материалам
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-magical-gold" />
                    Интерактивные упражнения
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-magical-gold" />
                    Мобильное приложение
                  </li>
                </ul>
                <Button className="w-full bg-magical-gold hover:bg-magical-bronze text-magical-midnight font-bold py-3">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-magical-midnight/90 border-magical-gold hover:border-magical-gold/80 transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-magical-gold text-magical-midnight px-3 py-1 text-sm font-bold rounded-bl-lg">
                ПОПУЛЯРНЫЙ
              </div>
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-magical-gold/30 flex items-center justify-center">
                  <Icon name="Crown" size={28} className="text-magical-gold" />
                </div>
                <CardTitle className="font-cinzel text-2xl text-magical-gold mb-2">
                  Премиум курс
                </CardTitle>
                <CardDescription className="text-magical-parchment/80 font-crimson">
                  С поддержкой преподавателя
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-magical-gold">₽24,900</span>
                  <span className="text-magical-parchment/70 text-lg">/год</span>
                </div>
                <ul className="text-magical-parchment/90 space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-magical-gold" />
                    Все возможности базового плана
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-magical-gold" />
                    Еженедельные групповые встречи
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-magical-gold" />
                    Персональные консультации
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" size={16} className="text-magical-gold" />
                    Сертификат о прохождении
                  </li>
                </ul>
                <Button className="w-full bg-magical-gold hover:bg-magical-bronze text-magical-midnight font-bold py-3">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16">
            <div 
              className="inline-block w-48 h-32 bg-cover bg-center rounded-lg opacity-70 mb-6"
              style={{
                backgroundImage: "url('/img/9271d97a-defd-425e-9cc7-99955013e0c0.jpg')"
              }}
            />
            <p className="text-magical-parchment/80 text-lg max-w-2xl mx-auto font-crimson">
              Гарантия возврата денег в течение 14 дней. 
              Начните своё магическое путешествие уже сегодня!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-magical-midnight py-12 px-6 border-t border-magical-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-cinzel text-2xl text-magical-gold mb-4">
            Магическое обучение ждёт вас
          </h3>
          <p className="text-magical-parchment/80 mb-8 font-crimson">
            Присоединяйтесь к тысячам студентов, которые уже открыли для себя мир английского языка
          </p>
          <div className="flex justify-center gap-6 text-magical-gold">
            <Icon name="Mail" size={24} className="hover:text-magical-bronze cursor-pointer transition-colors" />
            <Icon name="MessageCircle" size={24} className="hover:text-magical-bronze cursor-pointer transition-colors" />
            <Icon name="Phone" size={24} className="hover:text-magical-bronze cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;