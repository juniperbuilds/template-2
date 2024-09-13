import Header from '@/components/Header'
import Hero from '@/components/Hero'
import RecentlyListedPermits from '@/components/RecentlyListedPermits'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <RecentlyListedPermits />
      </main>
      <Footer />
    </div>
  )
}
