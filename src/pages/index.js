import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero className="bg-from-slate-700 to-slate-800 text-white" />
      <Projects className="bg-gray-100" />
       <About    className="bg-slate-800 text-white" />
      <Contact  className="bg-gray-100" />
    </>
  );
}
