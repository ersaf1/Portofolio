import React from 'react'
import { Heart, Coffee, Music, Gamepad2, Book, Camera, Plane, Code } from 'lucide-react'

const facts = [
  { icon: <Coffee className="w-5 h-5" />, title: 'Fleksibel', desc: 'Suka apa saja sesuai mood' },
  { icon: <Music className="w-5 h-5" />, title: 'Music Enthusiast', desc: 'Suka dengerin musik pas stress numpuk, apalagi lagunya kasih putih wak' },
  { icon: <Gamepad2 className="w-5 h-5" />, title: 'Gamer', desc: 'MOBILE LEGENDS sejati dan pemuja roblox' },
  { icon: <Book className="w-5 h-5" />, title: 'Bookworm', desc: 'Suka baca buku yang relate aja' },
  { icon: <Camera className="w-5 h-5" />, title: 'Travel', desc: 'Hobi keluar kesana kesini tapi nunggu duit dulu' },
  { icon: <Plane className="w-5 h-5" />, title: 'Food Fav', desc: 'MIE AYAM SAMPING SMEA JUARAA BOLO' },
  { icon: <Code className="w-5 h-5" />, title: 'Code at Night', desc: 'Lebih produktif coding di malam hari. nokturnal jier!' },
  { icon: <Heart className="w-5 h-5" />, title: 'Open Source', desc: 'Kontribusi ke open source saat ada waktu luang' },
]

const randoms = [
  { n: '1', title: 'Favorite Quote', text: 'bunga indah selalu dipetik oleh manusia' },
  { n: '2', title: 'Perfect Day', text: 'ngoding, dengerin musik, ngegame, dan makan uenak' },
  { n: '3', title: 'Dream Project', text: 'Membuat aplikasi yang bisa membantu banyak orang' },
  { n: '4', title: 'Goals', text: 'Selalu pengen menjadi kebanggaan ibu dan prioritas keluarga' },
]

const stats = [
  { num: '70+', label: 'Cups of Tea / month' },
  { num: '24/7', label: 'Music Playing' },
  { num: '∞', label: 'Pokoke Stecu' },
]

const FunFacts: React.FC = () => (
  <div className="max-w-5xl mx-auto py-16 px-4 space-y-20">

    {/* Header */}
    <div>
      <span className="speech-bubble inline-block px-3 py-1 text-xs font-bangers uppercase tracking-wider text-comic-black mb-3">
        Off-screen
      </span>
      <h1 className="font-bangers text-[clamp(2.5rem,5vw,4rem)] text-comic-black tracking-tight">
        Fun <span className="text-comic-red">Facts</span>
      </h1>
      <p className="text-comic-black font-comic mt-4 max-w-md text-sm leading-relaxed">
        Beberapa hal menarik tentang saya di luar dunia programming.
      </p>
    </div>

    {/* Facts grid */}
    <section>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
        {facts.map((f, i) => (
          <div
            key={i}
            className="comic-panel p-6 flex flex-col gap-4 group bg-comic-white"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-comic-yellow comic-border">
              <div className="text-comic-black">{f.icon}</div>
            </div>
            <div>
              <h3 className="font-bangers text-sm text-comic-black mb-1.5 tracking-tight">
                {f.title}
              </h3>
              <p className="text-xs text-comic-black font-comic leading-relaxed opacity-70">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Random facts */}
    <section>
      <span className="font-bangers text-sm uppercase tracking-wider text-comic-black block mb-8">Random facts</span>
      <div className="grid md:grid-cols-2 gap-3">
        {randoms.map((r, i) => (
          <div
            key={i}
            className="comic-panel p-7 flex items-start gap-5 bg-comic-white"
          >
            <span className="font-mono text-comic-black opacity-30 font-bold text-2xl shrink-0">
              {r.n}
            </span>
            <div>
              <h4 className="font-bangers text-sm text-comic-black mb-2 tracking-tight">
                {r.title}
              </h4>
              <p className="text-xs text-comic-black font-comic leading-relaxed opacity-70">{r.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Stats */}
    <section>
      <div className="grid grid-cols-3 gap-3">
        {stats.map((s, i) => (
          <div
            key={i}
            className="comic-panel px-6 py-8 text-center bg-comic-white"
          >
            <div className="font-bangers text-4xl text-comic-red mb-2">{s.num}</div>
            <div className="font-bangers text-xs uppercase tracking-wider text-comic-black">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

  </div>
)

export default FunFacts
