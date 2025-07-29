import React from "react";

const games = [
  { name: "Pinpoint", href: "#" },
  { name: "Queens", href: "#" },
  { name: "Crossclimb", href: "#" },
  { name: "Tango", href: "#" },
  { name: "Zip", href: "#" },
];

const GamesSection = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1128px] px-6 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="w-full lg:w-2/5 lg:pr-8 mb-6 lg:mb-0">
            <h2 className="font-light text-[32px] text-black/90 leading-tight">
              Keep your mind sharp with games
            </h2>
            <p className="mt-2 text-base text-black/60 font-normal">
              Take a break and reconnect with your network through quick daily
              games.
            </p>
          </div>

          <div className="w-full lg:w-3/5 flex flex-wrap items-center gap-2">
            {games.map((game) => (
              <a
                key={game.name}
                href={game.href}
                className="rounded-full border border-gray-500 px-4 py-1 text-base font-semibold text-gray-600 hover:bg-gray-200 hover:border-gray-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {game.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
