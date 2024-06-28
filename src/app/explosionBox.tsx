'use client';

import Image, { StaticImageData } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import awsIcon from '../asset/tech-icons/aws-icon.svg';
import css3Icon from '../asset/tech-icons/css3-icon.svg';
import dockerIcon from '../asset/tech-icons/docker-icon.svg';
import expressIcon from '../asset/tech-icons/express-icon.svg';
import firebaseIcon from '../asset/tech-icons/firebase-icon.svg';
import gitIcon from '../asset/tech-icons/git-icon.svg';
import html5Icon from '../asset/tech-icons/html5-icon.svg';
import javascriptIcon from '../asset/tech-icons/javascript-icon.svg';
import linuxIcon from '../asset/tech-icons/linux-icon.svg';
import mysqlIcon from '../asset/tech-icons/mysql-icon.svg';
import nestjsIcon from '../asset/tech-icons/nestjs-icon.svg';
import nextjsIcon from '../asset/tech-icons/nextjs-icon.svg';
import nginxIcon from '../asset/tech-icons/nginx-icon.svg';
import nodejsIcon from '../asset/tech-icons/nodejs-icon.svg';
import postgresIcon from '../asset/tech-icons/postgres-icon.svg';
import reactIcon from '../asset/tech-icons/react-icon.svg';
import redisIcon from '../asset/tech-icons/redis-icon.svg';
import reduxIcon from '../asset/tech-icons/redux-icon.svg';
import rustIcon from '../asset/tech-icons/rust-icon.svg';
import socketioIcon from '../asset/tech-icons/socketio-icon.svg';
import tailwindcssIcon from '../asset/tech-icons/tailwindcss-icon.svg';
import typescriptIcon from '../asset/tech-icons/typescript-icon.svg';
import { useState } from 'react';

const icons = [
  { name: 'html5Icon', icon: html5Icon as StaticImageData },
  { name: 'css3Icon', icon: css3Icon as StaticImageData },
  { name: 'javascriptIcon', icon: javascriptIcon as StaticImageData },
  { name: 'typescriptIcon', icon: typescriptIcon as StaticImageData },
  { name: 'nodejsIcon', icon: nodejsIcon as StaticImageData },
  { name: 'reactIcon', icon: reactIcon as StaticImageData },
  { name: 'nextjsIcon', icon: nextjsIcon as StaticImageData },
  { name: 'reduxIcon', icon: reduxIcon as StaticImageData },
  { name: 'tailwindcssIcon', icon: tailwindcssIcon as StaticImageData },
  { name: 'expressIcon', icon: expressIcon as StaticImageData },
  { name: 'nestjsIcon', icon: nestjsIcon as StaticImageData },
  { name: 'socketioIcon', icon: socketioIcon as StaticImageData },
  { name: 'mysqlIcon', icon: mysqlIcon as StaticImageData },
  { name: 'redisIcon', icon: redisIcon as StaticImageData },
  { name: 'gitIcon', icon: gitIcon as StaticImageData },
  { name: 'awsIcon', icon: awsIcon as StaticImageData },
  { name: 'nginxIcon', icon: nginxIcon as StaticImageData },
  { name: 'linuxIcon', icon: linuxIcon as StaticImageData },
  { name: 'dockerIcon', icon: dockerIcon as StaticImageData },
  { name: 'firebaseIcon', icon: firebaseIcon as StaticImageData },
  { name: 'postgresIcon', icon: postgresIcon as StaticImageData },
  { name: 'rustIcon', icon: rustIcon as StaticImageData },
];

function ExplosionBox() {
  const [explode, setExplode] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [arrange, setArrange] = useState(false);

  function handleClick() {
    setExplode(true);
    setButtonVisible(false);

    setTimeout(() => {
      setExplode(false);
      setArrange(true);
    }, 1000);
  }

  function getRandomPosition(dimension: number) {
    const maxOffset = dimension / 2;
    return Math.random() * maxOffset * (Math.random() < 0.5 ? 1 : -1);
  }

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <AnimatePresence>
        {buttonVisible && (
          <motion.button
            className="h-20 w-20 cursor-pointer rounded-full border-none bg-accent-cyan bg-gradient-pop-button text-lg font-bold text-dark-navy outline-none hover:bg-gradient-pop-button-reverse"
            onClick={handleClick}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            whileHover={{ scale: [null, 1.4, 1.3] }}
            transition={{ duration: 0.5 }}
          >
            POP!
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {explode &&
          icons.map((data) => {
            return (
              <motion.div
                key={`key-${data.name}`}
                className="absolute z-10"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: getRandomPosition(400),
                  y: getRandomPosition(400),
                  rotate: Math.random() * 360,
                }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  alt={`${data.name}`}
                  className="h-10 w-10"
                  src={data.icon}
                />
              </motion.div>
            );
          })}
      </AnimatePresence>
      <AnimatePresence>
        {arrange && (
          <div className="flex h-full w-full flex-wrap content-start gap-[15px]">
            {icons.map((data, index) => {
              return (
                <motion.div
                  key={`key-${data.name}`}
                  className="h-10"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    alt={`${data.name}`}
                    className="h-10 w-10"
                    src={data.icon}
                  />
                </motion.div>
              );
            })}
            <motion.div
              className="text-lg font-bold text-lighter-blue"
              initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }}
              whileInView={{
                clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              }}
              viewport={{ once: true }}
              transition={{ duration: 2.6 }}
            >
              Developer | Photographer | Mandarin | English | Japanese
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ExplosionBox;
