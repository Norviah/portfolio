'use client';

function formatDate(date: string): string {
  const currentDate: Date = new Date();
  const targetDate: Date = new Date(date);

  const yearsAgo: number = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo: number = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo: number = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate: string = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}

export function BlogDate({ date }: { date: string }): JSX.Element {
  return (
    <p className='text-muted-foreground' suppressHydrationWarning>
      {formatDate(date)}
    </p>
  );
}
