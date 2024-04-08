import { DynamicLink } from '@/components/DynamicLink';
import { Header } from '@/components/ui/typography/Header';
import { Repos } from '@/systems/github';

export default function Page(): JSX.Element {
  return (
    <div className='space-y-10'>
      <section className='space-y-5'>
        <Header type='h2'>hey, I&apos;m Norviah 👋</Header>
        <p>
          I&apos;m a full-stack developer who focuses on creating projects that others can use and
          build upon, with a strive for documentation. Outside of programming, I have a passion for
          both music and <DynamicLink href='https://photos.norviah.com'>photography</DynamicLink>.
        </p>
      </section>

      <section className='space-y-5'>
        <Header type='h2'>Projects</Header>

        <Repos
          username='norviah'
          info={[
            { name: 'media-hub', priority: true },
            { name: 'animal-crossing', priority: true },
            { name: 'logger', priority: true },
            { name: 'bump', priority: true },
            { name: 'bot', priority: true },

            { name: 'config', ignore: true },
            { name: 'lucid-ui', ignore: true },
            { name: 'portfolio', ignore: true },
            { name: 'acnh-images', ignore: true },
          ]}
        />
      </section>
    </div>
  );
}
