import { useState, useEffect, useCallback, useRef } from 'react';
import { apartments, Apartment } from './data/apartments';

type Screen = 'home' | 'game' | 'result';

interface RoundResult {
  apartment: Apartment;
  guess: number;
  difference: number;
  percentOff: number;
  score: number;
}

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function formatPrice(price: number): string {
  return price.toLocaleString('ru-RU') + ' ₽';
}

function calculateScore(guess: number, actual: number): number {
  const percentOff = Math.abs(guess - actual) / actual * 100;
  if (percentOff <= 3) return 10;
  if (percentOff <= 7) return 8;
  if (percentOff <= 15) return 6;
  if (percentOff <= 25) return 4;
  if (percentOff <= 40) return 2;
  return 1;
}

function getResultTitle(totalScore: number, avgGuess: number, avgActual: number): { title: string; subtitle: string; emoji: string } {
  if (totalScore >= 70) {
    return {
      title: 'Опытный инвестор',
      subtitle: 'Близок к результату! Вы отлично ориентируетесь в рынке недвижимости Коми.',
      emoji: '🏆'
    };
  }
  if (avgGuess > avgActual * 1.05) {
    return {
      title: 'Щедрый инвестор',
      subtitle: 'Вы переплачиваете за недвижимость. Попробуйте быть внимательнее к деталям!',
      emoji: '💰'
    };
  }
  return {
    title: 'Скряга',
    subtitle: 'Экономный инвестор. Вы недооцениваете недвижимость, но может быть это и хорошо?',
    emoji: '🤏'
  };
}

// Home Screen Component
function HomeScreen({ onStart }: { onStart: () => void }) {
  const galleryImages = [
    apartments[0].images[0],
    apartments[1].images[0],
    apartments[2].images[0],
    apartments[3].images[0],
    apartments[4].images[0],
    apartments[6].images[0],
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-[#89CFF0] px-4 py-6 text-center">
        <h1 className="text-3xl font-bold text-white drop-shadow-md">Медиакоми</h1>
        <p className="text-white/90 text-sm mt-1">Рынок недвижимости Республики Коми</p>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-6 flex flex-col gap-6 max-w-lg mx-auto w-full">
        {/* Description */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Угадай цену квартиры</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Проверьте, насколько хорошо вы знаете рынок недвижимости Коми! 
            Вам будут показаны 10 объявлений — попробуйте угадать цену каждой квартиры. 
            Чем точнее ваша оценка, тем больше баллов вы получите.
          </p>
        </div>

        {/* Photo Gallery */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">Примеры объявлений</h3>
          <div className="grid grid-cols-3 gap-2">
            {galleryImages.map((img, i) => (
              <div key={i} className="aspect-square rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={img} 
                  alt={`Квартира ${i + 1}`} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="w-full py-4 bg-[#89CFF0] hover:bg-[#6bb8e8] active:bg-[#5aa8d8] text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-200 active:scale-95"
        >
          🎮 Запустить игру
        </button>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-[#89CFF0]">10</div>
            <div className="text-xs text-gray-500">раундов</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-[#89CFF0]">100</div>
            <div className="text-xs text-gray-500">макс. баллов</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-[#89CFF0]">20</div>
            <div className="text-xs text-gray-500">объявлений</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 py-4 text-center border-t border-gray-100">
        <p className="text-xs text-gray-400">© 2024 Медиакоми • Данные о квартирах Республики Коми</p>
      </footer>
    </div>
  );
}

// Game Screen Component
function GameScreen({ 
  apartments: gameApartments, 
  onFinish,
  roundIndex,
  setRoundIndex,
  results,
  setResults
}: { 
  apartments: Apartment[];
  onFinish: (results: RoundResult[]) => void;
  roundIndex: number;
  setRoundIndex: (i: number) => void;
  results: RoundResult[];
  setResults: (r: RoundResult[]) => void;
}) {
  const currentApartment = gameApartments[roundIndex];
  const [guess, setGuess] = useState(3000000);
  const [answered, setAnswered] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [sliderAnimated, setSliderAnimated] = useState(false);
  const sliderRef = useRef<HTMLInputElement>(null);

  // Animate slider on first load
  useEffect(() => {
    if (!sliderAnimated && sliderRef.current) {
      setGuess(500000);
      const timer = setTimeout(() => {
        setGuess(3000000);
        setSliderAnimated(true);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [sliderAnimated]);

  // Reset state on new round
  useEffect(() => {
    setAnswered(false);
    setGuess(3000000);
    setCurrentImage(0);
  }, [roundIndex]);

  const handleAnswer = () => {
    if (answered) return;
    setAnswered(true);

    const difference = guess - currentApartment.price;
    const percentOff = Math.abs(difference) / currentApartment.price * 100;
    const score = calculateScore(guess, currentApartment.price);

    const newResult: RoundResult = {
      apartment: currentApartment,
      guess,
      difference,
      percentOff,
      score
    };

    const newResults = [...results, newResult];
    setResults(newResults);
  };

  const handleNext = () => {
    if (roundIndex < gameApartments.length - 1) {
      setRoundIndex(roundIndex + 1);
    } else {
      onFinish(results);
    }
  };

  const score = answered ? calculateScore(guess, currentApartment.price) : 0;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Progress Bar */}
      <div className="bg-gray-100 h-2 w-full">
        <div 
          className="bg-[#89CFF0] h-full transition-all duration-500 ease-out"
          style={{ width: `${((roundIndex + (answered ? 1 : 0)) / gameApartments.length) * 100}%` }}
        />
      </div>

      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between bg-white border-b border-gray-100">
        <span className="text-sm font-medium text-gray-500">
          Раунд {roundIndex + 1} / {gameApartments.length}
        </span>
        <span className="text-sm font-bold text-[#89CFF0]">
          {results.reduce((sum, r) => sum + r.score, 0)} баллов
        </span>
      </div>

      {/* Content */}
      <main className="flex-1 px-4 py-4 flex flex-col gap-4 max-w-lg mx-auto w-full overflow-y-auto">
        {/* Image Gallery */}
        <div className="relative rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-gray-100">
          <img 
            src={currentApartment.images[currentImage]} 
            alt={currentApartment.description}
            className="w-full h-full object-cover"
          />
          {currentApartment.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
              {currentApartment.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === currentImage ? 'bg-white scale-110' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Apartment Info */}
        <div className="bg-gray-50 rounded-xl p-4">
          <h3 className="font-semibold text-gray-800 text-base">{currentApartment.description}</h3>
          <p className="text-sm text-gray-500 mt-1">📍 {currentApartment.address}</p>
          <div className="flex gap-3 mt-2 text-xs text-gray-500">
            <span>🏠 {currentApartment.rooms} комн.</span>
            <span>📐 {currentApartment.area} м²</span>
            <span>🏢 {currentApartment.floor}/{currentApartment.totalFloors} эт.</span>
          </div>
        </div>

        {/* Slider */}
        <div className="bg-gray-50 rounded-xl p-4">
          <label className="text-sm font-medium text-gray-600 block mb-2">
            Ваша оценка стоимости:
          </label>
          <div className="text-2xl font-bold text-[#89CFF0] text-center mb-3">
            {formatPrice(guess)}
          </div>
          <input
            ref={sliderRef}
            type="range"
            min="500000"
            max="10000000"
            step="50000"
            value={guess}
            onChange={(e) => setGuess(Number(e.target.value))}
            disabled={answered}
            className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#89CFF0] disabled:opacity-60"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>500 тыс.</span>
            <span>10 млн</span>
          </div>
        </div>

        {/* Answer Section */}
        {answered && (
          <div className="bg-gray-50 rounded-xl p-4 animate-fade-in">
            <div className="text-center mb-3">
              <div className="text-sm text-gray-500">Правильная цена:</div>
              <div className="text-2xl font-bold text-green-600">
                {formatPrice(currentApartment.price)}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="bg-white rounded-lg p-2">
                <div className="text-xs text-gray-500">Разница</div>
                <div className={`font-bold text-sm ${guess >= currentApartment.price ? 'text-red-500' : 'text-blue-500'}`}>
                  {guess >= currentApartment.price ? '+' : ''}{formatPrice(guess - currentApartment.price)}
                </div>
                <div className="text-xs text-gray-400">
                  {guess >= currentApartment.price ? 'Переплата' : 'Недоплата'}
                </div>
              </div>
              <div className="bg-white rounded-lg p-2">
                <div className="text-xs text-gray-500">Баллы</div>
                <div className="font-bold text-lg text-[#89CFF0]">{score}/10</div>
                <div className="text-xs text-gray-400">
                  {guess >= currentApartment.price ? 'Выше цены' : 'Ниже цены'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        {!answered ? (
          <button
            onClick={handleAnswer}
            className="w-full py-4 bg-[#89CFF0] hover:bg-[#6bb8e8] active:bg-[#5aa8d8] text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-200 active:scale-95"
          >
            ✅ Оценить
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-full py-4 bg-[#89CFF0] hover:bg-[#6bb8e8] active:bg-[#5aa8d8] text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-200 active:scale-95"
          >
            {roundIndex < gameApartments.length - 1 ? 'Далее →' : 'Результат 🏁'}
          </button>
        )}
      </main>

      {/* Footer */}
      <footer className="px-4 py-3 text-center border-t border-gray-100">
        <p className="text-xs text-gray-400">© 2024 Медиакоми • Угадай цену квартиры</p>
      </footer>
    </div>
  );
}

// Result Screen Component
function ResultScreen({ results, onRestart }: { results: RoundResult[]; onRestart: () => void }) {
  const totalScore = results.reduce((sum, r) => sum + r.score, 0);
  const avgGuess = results.reduce((sum, r) => sum + r.guess, 0) / results.length;
  const avgActual = results.reduce((sum, r) => sum + r.apartment.price, 0) / results.length;
  const totalOverpay = results.reduce((sum, r) => sum + (r.guess > r.apartment.price ? r.guess - r.apartment.price : 0), 0);
  const totalUnderpay = results.reduce((sum, r) => sum + (r.guess < r.apartment.price ? r.apartment.price - r.guess : 0), 0);

  const result = getResultTitle(totalScore, avgGuess, avgActual);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-[#89CFF0] px-4 py-6 text-center">
        <div className="text-5xl mb-2">{result.emoji}</div>
        <h1 className="text-2xl font-bold text-white">{result.title}</h1>
      </header>

      {/* Content */}
      <main className="flex-1 px-4 py-6 flex flex-col gap-5 max-w-lg mx-auto w-full">
        {/* Score */}
        <div className="bg-gray-50 rounded-xl p-5 text-center">
          <div className="text-sm text-gray-500 mb-1">Ваш результат</div>
          <div className="text-4xl font-bold text-[#89CFF0]">{totalScore}<span className="text-lg text-gray-400">/100</span></div>
          <p className="text-sm text-gray-600 mt-2">{result.subtitle}</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-red-50 rounded-xl p-3 text-center">
            <div className="text-xs text-red-400 mb-1">Переплата</div>
            <div className="font-bold text-red-600 text-sm">{formatPrice(totalOverpay)}</div>
          </div>
          <div className="bg-blue-50 rounded-xl p-3 text-center">
            <div className="text-xs text-blue-400 mb-1">Недоплата</div>
            <div className="font-bold text-blue-600 text-sm">{formatPrice(totalUnderpay)}</div>
          </div>
        </div>

        {/* Round Details */}
        <div>
          <h3 className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wide">Детализация</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {results.map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-gray-500 truncate">{r.apartment.description}</div>
                  <div className="flex gap-2 text-xs mt-0.5">
                    <span className="text-gray-400">Ваша: {formatPrice(r.guess)}</span>
                  </div>
                </div>
                <div className="text-right ml-2">
                  <div className={`text-sm font-bold ${r.score >= 8 ? 'text-green-500' : r.score >= 5 ? 'text-yellow-500' : 'text-red-500'}`}>
                    {r.score}/10
                  </div>
                  <div className="text-xs text-gray-400">
                    {r.guess >= r.apartment.price ? '↑' : '↓'} {r.percentOff.toFixed(0)}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restart Button */}
        <button
          onClick={onRestart}
          className="w-full py-4 bg-[#89CFF0] hover:bg-[#6bb8e8] active:bg-[#5aa8d8] text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-200 active:scale-95"
        >
          🔄 Играть снова
        </button>
      </main>

      {/* Footer */}
      <footer className="px-4 py-4 text-center border-t border-gray-100">
        <p className="text-xs text-gray-400">© 2024 Медиакоми • Данные о квартирах Республики Коми</p>
      </footer>
    </div>
  );
}

// Main App
export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [gameApartments, setGameApartments] = useState<Apartment[]>([]);
  const [roundIndex, setRoundIndex] = useState(0);
  const [results, setResults] = useState<RoundResult[]>([]);

  const startGame = useCallback(() => {
    const shuffled = shuffleArray(apartments).slice(0, 10);
    setGameApartments(shuffled);
    setRoundIndex(0);
    setResults([]);
    setScreen('game');
  }, []);

  const handleFinish = useCallback((finalResults: RoundResult[]) => {
    setResults(finalResults);
    setScreen('result');
  }, []);

  const handleRestart = useCallback(() => {
    setScreen('home');
  }, []);

  return (
    <>
      {screen === 'home' && <HomeScreen onStart={startGame} />}
      {screen === 'game' && (
        <GameScreen
          apartments={gameApartments}
          onFinish={handleFinish}
          roundIndex={roundIndex}
          setRoundIndex={setRoundIndex}
          results={results}
          setResults={setResults}
        />
      )}
      {screen === 'result' && <ResultScreen results={results} onRestart={handleRestart} />}
    </>
  );
}
