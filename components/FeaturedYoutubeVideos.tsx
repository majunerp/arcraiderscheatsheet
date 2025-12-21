const videos = [
  {
    href: 'https://www.youtube.com/watch?v=HUG884WEMqU',
    title: 'Arc Raiders: Season 2 Trials LEAKED  All Skins & Rewards',
    thumbnail: 'https://i.ytimg.com/vi/HUG884WEMqU/hqdefault.jpg',
    author: 'Epitomy',
  },
  {
    href: 'https://www.youtube.com/watch?v=GVufnqfb8Ps',
    title: 'We Started One of the Bands of All Time - ARC Raiders',
    thumbnail: 'https://i.ytimg.com/vi/GVufnqfb8Ps/hqdefault.jpg',
    author: 'Synystar',
  },
  {
    href: 'https://www.youtube.com/watch?v=tG8JSGYIpQo',
    title: 'Solo Cold Snap on Dam Battlegrounds - ARC Raiders',
    thumbnail: 'https://i.ytimg.com/vi/tG8JSGYIpQo/hqdefault.jpg',
    author: 'Synystar',
  },
  {
    href: 'https://www.youtube.com/watch?v=pyZfwKNfSbA',
    title: 'Arc Raiders Winter Event Gameplay (Cold Snap) | Cinematic Setting No HUD',
    thumbnail: 'https://i.ytimg.com/vi/pyZfwKNfSbA/hqdefault.jpg',
    author: 'Epitomy',
  },
];

export default function FeaturedYoutubeVideos() {
  return (
    <section className="py-10 md:py-12">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 @container">
        <div className="relative flex w-full flex-col rounded-2xl border border-cyan-500/25 bg-black/50 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
          <h2 className="mb-4 text-xl font-semibold text-cyan-50 md:text-2xl">Featured Youtube Videos</h2>
          <div className="grid gap-3 @sm:grid-cols-2 @lg:grid-cols-4">
            {videos.map((video) => (
              <div key={video.href} className="relative overflow-hidden rounded-lg border border-black">
                <a
                  target="_blank"
                  rel="nofollow noopener"
                  className="block opacity-90 transition hover:opacity-100"
                  style={{ lineHeight: '1rem' }}
                  href={video.href}
                  title={video.title}
                >
                  <img
                    className="h-full w-full object-cover -my-[10%]"
                    src={video.thumbnail}
                    alt={video.author}
                  />
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 h-12 w-16 -translate-x-1/2 -translate-y-1/2"
                  >
                    <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
                      <path
                        style={{
                          transition: 'fill .1s cubic-bezier(0.4,0,1,1), fill-opacity .1s cubic-bezier(0.4,0,1,1)',
                          fill: '#212121',
                          fillOpacity: 0.8,
                        }}
                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                        fill="#f00"
                      />
                      <path d="M 45,24 27,14 27,34" fill="#fff" />
                    </svg>
                  </span>
                </a>
                <span className="bg-card absolute right-1 bottom-1 rounded px-1 text-sm">
                  {video.author}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
