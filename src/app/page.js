export default function Home() {
  return (
    <section className="min-h-screen w-full bg-background text-foreground flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold">Welcome to MyApp</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        This text changes color with dark & light theme 🚀
      </p>

      <div className="mt-8">
        <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/80">
          Get Started
        </button>
      </div>
    </section>
  );
}
