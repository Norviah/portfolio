import { DynamicLink } from '@/components/DynamicLink';
import { Header } from '@/components/ui/typography/Header';

export default function Page(): JSX.Element {
  return (
    <section>
      <Header type="h2" className="mb-8">
        hey, I&apos;m Norviah 👋
      </Header>
      <p>
        I&apos;m a full-stack developer who focuses on creating projects that others can use and build upon, with a strive
        for documentation. Outside of programming, I have a passion for both music and{' '}
        <DynamicLink href="https://photos.norviah.com">photography</DynamicLink>.
      </p>
    </section>
  );
}
