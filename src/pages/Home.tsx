import {
  Hero
} from '../components/home/Hero'

export const Home = () => {
  
  return (
    <main className="relative h-[200svh]">
      <Hero/>
      <section className="w-full flex flex-col bg-red-400 py-24 px-8 gap-y-8 text-4xl font-bold">
        <h3>WHO I AM</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, eius, provident numquam ab temporibus assumenda reprehenderit dolorum est ea, unde fugit minus doloremque debitis! Facere, non doloremque quod sequi deleniti.</p>
      </section>
    </main>
    )
}