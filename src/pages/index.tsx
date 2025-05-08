export default async function HomePage() {
  return (
    <div className="h-full grid grid-cols-1 grid-rows-1">
      <picture className="grid grid-cols-subgrid grid-rows-subgrid col-span-full row-span-full place-self-stretch">
        <source type="image/webp" srcSet="/images/hyperlink-drifter.webp" />
        <img
          className="col-span-full row-span-full place-self-stretch object-cover"
          src="/images/hyperlink-drifter-gif.gif"
          width="100%"
          height="100%"
          alt="80s smile GIF by eniac"
          style={{ background: 'unset' }}
        />
      </picture>
      <div className="grid grid-cols-[16px_1fr_1fr_16px] grid-rows-[16px_1fr_auto_16px] col-span-full row-span-full overflow-hidden">
        <h1 className="col-start-3 row-start-2 row-end-3 place-self-end-safe self-start w-max text-8xl font-black tracking-wider text-transparent wrap-anywhere bg-linear-[25deg,#fff103_30%,#e709f1] bg-clip-text writing-mode-v-rl">
          <div>hyperlink</div>
          <div>drifter</div>
        </h1>
        <small className="col-start-2 row-start-3 self-end text-sm text-[#fff103] font-normal">
          More to come
        </small>
      </div>
    </div>
  );
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
