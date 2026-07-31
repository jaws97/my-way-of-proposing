import { useEffect } from 'react'
import Lenis from 'lenis'
import Sky from './components/Sky'
import TitleCard from './components/TitleCard'
import Scene, { Reveal } from './components/Scene'
import FilmStrip from './components/FilmStrip'
import Quiz from './components/Quiz'
import Subtitles from './components/Subtitles'
import Bloopers from './components/Bloopers'
import NowShowing from './components/NowShowing'
import Finale from './components/Finale'
import PostCredits from './components/PostCredits'
import { OPENING_LINES } from './data'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.12, smoothWheel: true })
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Sky />
      <main>
        <TitleCard />

        <Scene slate="Scene 01 — the setup">
          {OPENING_LINES.map((line, i) => (
            <Reveal key={i} delay={0.05}>
              <p className="opening__line">{line}</p>
            </Reveal>
          ))}
        </Scene>

        <Quiz />
        <FilmStrip />
        <Subtitles />
        <Bloopers />
        <NowShowing />
        <Finale />
        <PostCredits />
      </main>
    </>
  )
}
