import { Header } from '@/components/ui/typography/Header';

export default function WorkPage(): JSX.Element {
  return (
    <section>
      <Header type="h2" className="mb-8">
        my work
      </Header>
      <p className="prose prose-neutral dark:prose-invert">This is where your work experience goes.</p>
    </section>
  );
}
