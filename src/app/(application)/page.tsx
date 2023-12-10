import { Header } from '@/components/ui/typography/Header';

export default function Page(): JSX.Element {
  return (
    <section>
      <Header type="h2" className="mb-8">
        my portfolio
      </Header>
      <p className="prose prose-neutral dark:prose-invert">This is your new portfolio.</p>
    </section>
  );
}
