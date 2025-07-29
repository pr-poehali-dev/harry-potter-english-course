import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import MagicalStars from '@/components/MagicalStars';

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
          
          <div className="px-6 w-full max-w-md mx-auto">
            <Button 
              size="lg" 
              className="w-full bg-magical-gold hover:bg-magical-bronze text-magical-midnight font-bold text-xl px-6 py-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              asChild
            >
              <a href="https://t.me/dobesee" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                <span className="text-center leading-tight">
                  Посмотреть пример<br />чудесного урока
                </span>
              </a>
            </Button>
          </div>
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

      {/* Club Benefits Section */}
      <section className="py-20 px-6 bg-magical-forest/20 relative overflow-hidden">
        <MagicalStars count={35} />
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/files/d42d2632-e461-40c1-b2a1-7518f05990fd.jpg" 
                alt="Снейп и Волдеморт делают сердечко руками" 
                className="w-full max-w-sm aspect-square object-cover rounded-lg mx-auto border-4 border-magical-gold/50 shadow-2xl"
              />
            </div>
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-magical-gold mb-6">
              Английский клуб поттероманов это:
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-magical-midnight/40 p-4 rounded-lg border border-magical-gold/20">
                <Icon name="BookOpen" size={20} className="text-magical-gold mt-1 flex-shrink-0" />
                <p className="text-magical-parchment/90 font-crimson">
                  понимание грамматики до уровня В2
                </p>
              </div>
              
              <div className="flex items-start gap-3 bg-magical-midnight/40 p-4 rounded-lg border border-magical-gold/20">
                <Icon name="Brain" size={20} className="text-magical-gold mt-1 flex-shrink-0" />
                <p className="text-magical-parchment/90 font-crimson">
                  систематизация знаний
                </p>
              </div>
              
              <div className="flex items-start gap-3 bg-magical-midnight/40 p-4 rounded-lg border border-magical-gold/20">
                <Icon name="MessageSquare" size={20} className="text-magical-gold mt-1 flex-shrink-0" />
                <p className="text-magical-parchment/90 font-crimson">
                  365 готовых шаблонов для того, чтобы начать говорить
                </p>
              </div>
              
              <div className="flex items-start gap-3 bg-magical-midnight/40 p-4 rounded-lg border border-magical-gold/20">
                <Icon name="Library" size={20} className="text-magical-gold mt-1 flex-shrink-0" />
                <p className="text-magical-parchment/90 font-crimson">
                  2555 выученных слов
                </p>
              </div>
              
              <div className="flex items-start gap-3 bg-magical-midnight/40 p-4 rounded-lg border border-magical-gold/20">
                <Icon name="Book" size={20} className="text-magical-gold mt-1 flex-shrink-0" />
                <p className="text-magical-parchment/90 font-crimson">
                  ваша первая прочитанная книга на английском (без словаря и других заминок)
                </p>
              </div>
              
              <div className="flex items-start gap-3 bg-magical-midnight/40 p-4 rounded-lg border border-magical-gold/20">
                <Icon name="Shield" size={20} className="text-magical-gold mt-1 flex-shrink-0" />
                <p className="text-magical-parchment/90 font-crimson">
                  преодоление языкового барьера
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 bg-magical-midnight/40 p-4 rounded-lg border border-magical-gold/20">
                <Icon name="Users" size={20} className="text-magical-gold mt-1 flex-shrink-0" />
                <p className="text-magical-parchment/90 font-crimson">
                  подходит как детям с 8 лет, так и взрослым, начинающим с нуля (либо с неразберихой в голове после 10 лет изучения английского)
                </p>
              </div>
              
              <div className="flex items-start gap-3 bg-magical-midnight/40 p-4 rounded-lg border border-magical-gold/20">
                <Icon name="Heart" size={20} className="text-magical-gold mt-1 flex-shrink-0" />
                <p className="text-magical-parchment/90 font-crimson">
                  обсуждение темы, которая вам действительно интересна, а не скучных тем из воркбуков
                </p>
              </div>
              
              <div className="flex items-start gap-3 bg-magical-midnight/40 p-4 rounded-lg border border-magical-gold/20">
                <Icon name="UserCheck" size={20} className="text-magical-gold mt-1 flex-shrink-0" />
                <p className="text-magical-parchment/90 font-crimson">
                  сопровождение куратором, который поправит и объяснит ошибки
                </p>
              </div>
              
              <div className="flex items-start gap-3 bg-magical-midnight/40 p-4 rounded-lg border border-magical-gold/20">
                <Icon name="PenTool" size={20} className="text-magical-gold mt-1 flex-shrink-0" />
                <p className="text-magical-parchment/90 font-crimson">
                  интересные творческие задания в виде эссе (от очень простых до серьезных по мере развития навыков)
                </p>
              </div>
              
              <div className="flex items-start gap-3 bg-magical-midnight/40 p-4 rounded-lg border border-magical-gold/20">
                <Icon name="UserPlus" size={20} className="text-magical-gold mt-1 flex-shrink-0" />
                <p className="text-magical-parchment/90 font-crimson">
                  новые знакомства и общение с людьми с общими интересами (как минимум два - Гарри Поттер и английский). Если вы не ищете общения - можно присутствовать в чате просто в режиме чтения для изучения дополнительной информации
                </p>
              </div>
              
              <div className="flex items-start gap-3 bg-magical-midnight/40 p-4 rounded-lg border border-magical-gold/20">
                <Icon name="DollarSign" size={20} className="text-magical-gold mt-1 flex-shrink-0" />
                <p className="text-magical-parchment/90 font-crimson">
                  год занятий по цене 4 уроков с репетитором, с гарантией четкого результата на выходе (не все репетиторы ее дают)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 px-6 relative overflow-hidden bg-gradient-to-b from-magical-midnight/30 to-magical-forest/30">
        <MagicalStars count={30} />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-magical-gold mb-6">Орден закрытого телеграм-канала</h2>
            <p className="text-xl text-magical-parchment max-w-3xl mx-auto font-crimson">удобно, если вы не хотите регистрироваться в сторонних приложениях</p>
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
      <section className="py-20 px-6 bg-gradient-to-b from-magical-forest to-magical-midnight relative overflow-hidden">
        <MagicalStars count={40} />
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
      <footer className="bg-magical-midnight py-12 px-6 border-t border-magical-gold/30 relative overflow-hidden">
        <MagicalStars count={25} />
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-cinzel text-2xl text-magical-gold mb-4">Трансфигурация языковых навыков ждёт вас</h3>
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