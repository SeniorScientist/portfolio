import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DetailedProfile from '@/components/DetailedProfile'
import Skills from '@/components/Skills'
import CaseStudies from '@/components/CaseStudies'
import VideoShowcase from '@/components/VideoShowcase'
import WorkStyle from '@/components/WorkStyle'
import Summary from '@/components/Summary'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <DetailedProfile />
        <WorkStyle />
        <Skills />
        <CaseStudies />
        <VideoShowcase />
        <Summary />
      </main>
      <Footer />
    </div>
  )
}
