import { DynamicLink } from '@/components/DynamicLink';
import { Header } from '@/components/ui/typography/Header';

export default function Page(): JSX.Element {
  return (
    <section>
      <Header type="h2" className="mb-8">
        hey, I&apos;m Norviah 👋
      </Header>
      <p>
        I&apos;m a full-stack developer who strives to create simple and useful tools for others to use. Other than
        programming, I also enjoy <DynamicLink href="https://photos.norviah.com">taking photos</DynamicLink>.
      </p>
    </section>
  );
}
