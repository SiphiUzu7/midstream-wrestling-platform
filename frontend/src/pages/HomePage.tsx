import { TokenPlayground } from "../components/TokenPlayground";

export function HomePage() {
  return (
    <main className="min-h-screen bg-surface-page px-6 py-8">
      <h1 className="text-[40px] font-bold text-text-default">Midstream Wrestling</h1>
      <p className="mt-2 text-text-muted">Version One build.</p>

      <TokenPlayground />
    </main>
  );
}
