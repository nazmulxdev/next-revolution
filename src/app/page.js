import FeatureProducts from "./Components/FeatureProducts";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* hero section */}
      <Hero></Hero>
      <section>
        <h1 className="font-bold text-4xl text-center my-4">
          Featured Products
        </h1>
        <FeatureProducts></FeatureProducts>
      </section>
    </div>
  );
}
