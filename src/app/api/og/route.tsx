import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest): Promise<Response> {
  const { searchParams } = req.nextUrl;

  let title = searchParams.get('title');
  title = title && title.length > 140 ? `${title.substring(0, 140)}...` : title;

  const font = fetch(new URL('../../../../public/fonts/BrandonGrotesque-Regular.otf', import.meta.url)).then((res) =>
    res.arrayBuffer()
  );
  const fontData = await font;

  return new ImageResponse(
    (
      <div
        tw="flex relative flex-col p-12 w-full h-full items-start"
        style={{
          color: '#fff',
          background: 'linear-gradient(90deg, #000 0%, #111 100%)',
        }}
      >
        <div tw="flex flex-col flex-1 py-10">
          <div
            tw="flex leading-[1.1] text-[80px] font-bold"
            style={{
              fontFamily: 'Cal Sans',
              fontWeight: 'bold',
              marginLeft: '-3px',
              fontSize: title && title.length > 100 ? '70px' : '100px',
            }}
          >
            {title}
          </div>
        </div>
        <div tw="flex items-center w-full justify-between">
          <div tw="flex text-xl" style={{ fontFamily: 'Inter', fontWeight: 'normal' }}>
            Norviah
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Brandon Grotesque',
          data: fontData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );
}
