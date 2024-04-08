import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { api } from '..';

export type RepoInfo = {
  /**
   * The name of the repository to match.
   */
  name: string;

  /**
   * Whether if the repository should be ignored and not displayed.
   */
  ignore?: boolean;

  /**
   * Whether if the repository should be prioritized.
   */
  priority?: boolean;
};

export type ReposProps = {
  /**
   * The GitHub username to fetch the repositories from.
   */
  username: string;

  info?: RepoInfo[];
};

export async function Repos({ username, info }: ReposProps): Promise<JSX.Element> {
  const repos = (await api.repos({ username }))
    .sort((a, b) => {
      const aInfo = info?.find((r) => r.name.toLowerCase() === a.name.toLowerCase());
      const bInfo = info?.find((r) => r.name.toLowerCase() === b.name.toLowerCase());

      if (aInfo?.priority && !bInfo?.priority) {
        return -1;
      }

      if (aInfo && bInfo) {
        return b.stargazers_count - a.stargazers_count;
      }

      if (!aInfo?.priority && bInfo?.priority) {
        return 1;
      }

      if (aInfo && !bInfo) {
        return -1;
      }

      return b.stargazers_count - a.stargazers_count;
    })

    .filter((repo) => {
      if (info?.some((r) => r.name.toLowerCase() === repo.name.toLowerCase() && r.ignore)) {
        return false;
      }

      if (repo.name.toLowerCase() === username.toLowerCase()) {
        return false;
      }

      if (repo.fork) {
        return false;
      }

      if (repo.description === null) {
        return false;
      }

      return true;
    });

  return (
    <div className='grid grid-cols-2 gap-2'>
      {repos.map((repo) => (
        <Card key={repo.id} className='shadow-none hover:shadow-none hover:cursor-pointer'>
          <a href={`https://github.com/${repo.full_name}`}>
            <CardHeader>{repo.name.replace(/-/g, ' ')}</CardHeader>

            <CardContent>
              <p>{repo.description}</p>
            </CardContent>
          </a>
        </Card>
      ))}
    </div>
  );
}
