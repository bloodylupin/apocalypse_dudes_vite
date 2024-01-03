import { Link } from "react-router-dom";

export const utilitiesData = [
  {
    title: "Unique Freaky Nft",
    content: (
      <>
        Craft a unique exclusive piece of art, that can be sold on the top
        Cronos Marketplaces.
      </>
    ),
  },
  {
    title: "Long Term Vision",
    content: (
      <>
        Enter a long term project on the Cronos blockchain, this is the second
        chapter of a trilogy.
      </>
    ),
  },
  {
    title: "Return on Mint",
    content: (
      <>
        Enjoy the 5% return on every mint after yours, claimable on{" "}
        <Link to="/royalties">Royalties</Link>.
      </>
    ),
  },
  {
    title: "Market Royalties Share",
    content: (
      <>
        Earn the 50% of total market royalties (10%), accounting for 5% of total
        market volume, claimable on <Link to="/royalties">Royalties</Link>.
      </>
    ),
  },
  { title: "Feel the Robot Power", content: <>Feel the robot power!</> },
];

export const faqData = [
  {
    question: "What is Apocalypse Dudes?",
    answer: (
      <p>
        Apocalypse Dudes is a{" "}
        <span className="font-bold">Cronos NFT Collection</span> of 137 unique
        AI generated frames.
        <br />
        It's the second collection of the{" "}
        <span className="font-bold">Jack Yolo Odissey</span>.
      </p>
    ),
  },
  {
    question: "When the mint will go live?",
    answer: (
      <p>
        The mint is scheduled for{" "}
        <span className="font-bold">August, the 15th, at 21:00 UTC</span>.
        <br />
        You can check the updated countdown on <Link to="/mint">Mint</Link>.
      </p>
    ),
  },
  {
    question: "What's the mint price?",
    answer: (
      <div className="grid md:grid-cols-3 items-center pt-4 gap-8">
        <div className="grid grid-cols-2 items-center badge badge-outline not-prose w-full">
          <p>Whitelist</p>
          <p className="font-bold text-info">42 CRO</p>
        </div>
        <div className="grid grid-cols-2 items-center badge badge-outline not-prose w-full">
          <p>Airdrop</p>
          <p className="font-bold text-info">0 CRO</p>
        </div>
        <div className="grid grid-cols-2 items-center badge badge-outline not-prose w-full">
          <p>Public Sale</p>
          <p className="font-bold text-info">69 CRO</p>
        </div>
      </div>
    ),
  },
  {
    question: "How to get whitelist?",
    answer: (
      <>
        <div className="grid md:grid-cols-3 gap-2 items-center pt-4">
          <p>
            Own at least <span className="font-bold">1 JYO</span>
          </p>
          <a
            href="https://minted.network/collections/cronos/0x2a6f97546d50abcd188401ac08f4007be69d9807"
            target="_blank"
            className="btn btn-primary"
          >
            Buy on Minted
          </a>
          <a
            href="https://app.ebisusbay.com/collection/jack-yolo-odyssey"
            target="_blank"
            className="btn btn-primary"
          >
            Buy on Ebisus Bay
          </a>
        </div>
        <span>OR</span>
        <div className="grid md:grid-cols-3 gap-2 items-center">
          <p>
            Own at least <span className="font-bold">6 Crokachus</span>
          </p>
          <a
            href="https://crokachu.lol"
            target="_blank"
            className="btn btn-primary"
          >
            Mint
          </a>
          <a
            href="https://moonflow.club/collection/cronos/crokachu"
            target="_blank"
            className="btn btn-primary"
          >
            Buy on MoonFlow
          </a>
        </div>
        <span>OR</span>
        <div className="grid md:grid-cols-3 gap-2 items-center">
          <p>Win it with giveaways</p>
          <a
            href="https://discord.gg/NsbVaDq6dw"
            target="_blank"
            className="btn btn-primary"
          >
            Discord
          </a>
          <a
            href="https://twitter.com/4p0c4lyps3dud3s"
            target="_blank"
            className="btn btn-primary"
          >
            Twitter
          </a>
        </div>
        {/* @ts-expect-error */}
        <h3 style={{ textWrap: "balance" }}>
          <span className="text-info">N.B.</span> Rememeber to verify on{" "}
          <a href="https://discord.gg/NsbVaDq6dw" target="_blank">
            Discord
          </a>{" "}
          as <span className="text-info">holder</span> to get your{" "}
          <span className="text-info">WL</span>!
        </h3>
      </>
    ),
  },
  {
    question: "How to get airdrop?",
    answer: (
      <>
        <div className="grid md:grid-cols-3 gap-2 items-center pt-4">
          <p>
            Top 5 <span className="font-bold">JYO</span> holders get 1{" "}
            <span className="font-bold">APD</span>.
          </p>
          <a
            href="https://minted.network/collections/cronos/0x2a6f97546d50abcd188401ac08f4007be69d9807"
            target="_blank"
            className="btn btn-primary"
          >
            Buy on Minted
          </a>
          <a
            href="https://app.ebisusbay.com/collection/jack-yolo-odyssey"
            target="_blank"
            className="btn btn-primary"
          >
            Buy on Ebisus Bay
          </a>
        </div>
        {/* @ts-expect-error */}
        <h3 style={{ textWrap: "balance" }}>
          <span className="text-info">N.B.</span> Rememeber to verify on{" "}
          <a href="https://discord.gg/NsbVaDq6dw" target="_blank">
            Discord
          </a>{" "}
          as <span className="text-info">Yolo Mate</span> to get your{" "}
          <span className="text-info">airdrop</span>!
        </h3>
        <div className="grid gap-2 items-center pt-4">
          <p className="before:content-[''] before:absolute before:inset-0 before:rounded-lg before:animate-pulse before:border before:border-info relative w-fit p-4 mx-auto rounded-lg">
            Top <span className="font-bold">APD holder</span> at mint out will
            get the <span className="font-bold">#1 APD</span>.<br />
            In case of tie we'll roll the winner.
          </p>
        </div>
      </>
    ),
  },
  {
    question: "How to many NFTs will you give away?",
    answer: (
      <>
        <p>
          <span className="font-bold text-info">7 NFTs</span> will be{" "}
          <span className="font-bold">team minted</span> and{" "}
          <span className="font-bold">airdropped</span> at{" "}
          <span className="font-bold">mint out</span>
        </p>
        <p>
          <span className="font-bold text-info">5 NFTs</span> to{" "}
          <span className="font-bold">top #5 JYO holders</span>
        </p>
        <p>
          <span className="font-bold text-info">1 NFT</span> to{" "}
          <span className="font-bold">top #1 APD holder</span>
        </p>
        <p>
          <span className="font-bold text-info">1 NFT</span> to{" "}
          <span className="font-bold">random APD minter</span>
        </p>
        {/* <div className="grid grid-cols-2 items-center badge badge-outline not-prose w-full">
            <p className="font-bold text-info">4 NFTs</p>
            <p>top #4 JYO holders</p>
          </div>
          <div className="grid grid-cols-2 items-center badge badge-outline not-prose w-full">
            <p className="font-bold text-info">1 NFT</p>
            <p>top #1 APD holder</p>
          </div> */}
      </>
    ),
  },
];

export const teamData = [
  {
    name: "Jack Yolo",
    role: "founder",
    image: "./img/jack_yolo-pic.jpg",
    twitter: "JohnBloodyLupin",
    discord: "users/694148317822713857",
  },
  {
    name: "3b373llo",
    role: "graphic designer",
    image: "./img/ebete-pic.jpg",
    twitter: "3b373llo",
    discord: "users/1061369820442009681",
  },
  {
    name: "Maddocche",
    role: "backend magician",
    image: "./img/maddocche-pic.jpg",
    twitter: "_maddocche_",
    discord: "users/1053676775470809149",
  },
];
