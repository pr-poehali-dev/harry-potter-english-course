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
          
          <p className="text-xl md:text-2xl text-magical-parchment mb-4 font-crimson">Годовой курс английского языка для начинающих </p>
          
          <p className="text-lg text-magical-parchment/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Книжный клуб + общение по интересам + погружение в магический мир
          </p>
          
          <Button 
            size="lg" 
            className="bg-magical-gold hover:bg-magical-bronze text-magical-midnight font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >Посмотреть пример чудесного урока</Button>
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
          
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-magical-parchment/90 text-lg font-crimson leading-relaxed">
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
          <p className="text-xl text-magical-parchment mb-12 font-crimson">Инвестиция в ваше волшебное будущее</p>

          <div className="text-center max-w-2xl mx-auto">
            <p className="text-magical-parchment/80 text-lg font-crimson">30 уроков (1 месяц занятий)  - 525 рублей (17.5 рублей за урок)</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-magical-midnight py-12 px-6 border-t border-magical-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-cinzel text-2xl text-magical-gold mb-4">
            Магическое обучение ждёт вас
          </h3>
          <p className="text-magical-parchment/80 mb-8 font-crimson">Присоединяйтесь к чуду познания  и общения</p>
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