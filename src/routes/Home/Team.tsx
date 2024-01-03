import clsx from "clsx";
import { motion } from "framer-motion";

import { teamData } from "./data/data";
import { variants } from "./data/variants";

export default function Team({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="grid place-content-center gap-4 min-h-[90vh] prose mx-auto max-md:mt-16">
      <h2>Team</h2>
      <div className="grid lg:grid-cols-3 gap-8">
        {teamData.map((member) => (
          <motion.div
            initial="hidden"
            whileInView={clsx(isOpen ? "visible" : "hidden")}
            variants={variants}
            className="w-64 h-64 bg-cover grid place-content-center rounded-lg relative border border-info before:content-[''] before:absolute before:inset-0 before:bg-base-300 before:bg-opacity-75 before:-z-10"
            key={member.name}
            style={{ backgroundImage: `url(${member.image})` }}
          >
            <h3>{member.name}</h3>
            <h4 className="text-secondary badge badge-secondary badge-outline w-full">
              {member.role}
            </h4>
            <ul className="flex items-center justify-center gap-4 pl-0 list-none">
              <li>
                <a
                  href={`https://twitter.com/${member.twitter}`}
                  target="_blank"
                  className="rounded-full grid place-content-center w-8 h-8"
                >
                  <img
                    src="logos/twitter-logo.svg"
                    alt="Twitter Logo"
                    className="w-12 h-12"
                  />
                </a>
              </li>
              <li>
                <a
                  href={`https://discord.com/${member.discord}`}
                  target="_blank"
                  className="bg-white rounded-full grid place-content-center w-8 h-8"
                >
                  <img
                    src="logos/discord-logo.svg"
                    alt="Discord Logo"
                    width={24}
                    height={24}
                  />
                </a>
              </li>
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
