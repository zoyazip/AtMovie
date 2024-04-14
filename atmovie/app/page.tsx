import { MainPage } from '@/components/main-page';
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Navigation />
        <MainPage />
    </main>
  );
}
