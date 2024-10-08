import { useState, useEffect } from "react"
import "./style.css"
import BackgroundLines from "../BackgroundLines"
import WorkCard from "../WorkCard"
import ScrambleText from "../ScrambleText"
import ParaWriting from "../ParaWriting"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"


import summar from "../../assets/Images/adv-internship.png";
import anime from "../../assets/Images/anime-screenshot.png";
import book from  "../../assets/Images/banned-books.png";
import twitter from "../../assets/Images/twitter.png";
import berserk from "../../assets/Images/memory-game.png";
import pokemon from "../../assets/Images/rayquaza.png";

export default function Projects() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const works = [
    {
      client: "Internship Project",
      year: "2024",
      img: summar,
      title: "Summarist",
      detail: "A full stack audio book application. This site lets you sign in, sign up, and sign out and make psuedo payments thru stripe and firebase.",
      
    },
    {
      client: "Anime Search Website",
      year: "2023",
      img: anime,
      title: "AniList",
      detail: "A vanilla crunchyroll clone that fetched anime series/movies by a single API.",
    },
    {
      client: "E-commerence",
      year: "2023",
      img: book,
      title: "Library",
      detail: "A fun little personal project. A website containing banned/mature rated books with a working cart feature.",
    },
    {
      client: "Social Media Clone",
      year: "2023",
      img: twitter,
      title: "Twitter",
      detail: "Twitter clone, now known as X, in a video game/Zelda style format.",
    },
    {
      client: "Game Project",
      year: "2023",
      img: berserk,
      title: "Memory Card",
      detail: "Memory card game inspired by the berserk anime series.",
    },
    {
      client: "Full Stack Pokedex",
      year: "2024",
      img: pokemon,
      title: "Pokedex",
      detail: "A full stack pokedex application. This site lets you sign in, sign out, and create a personal list and compare stats and locations. All while fetching data from a single API with evolution data.",
    },
  ]

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="projects--grid--title">
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              04
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Projects
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Works"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              )
            })}
          </div>
        </div>

        <motion.div initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 1 }} onAnimationComplete={() => handleComplete()} className="projects--grid--detail">
          <p className="theme--detail">
            {/*<ScrambleText delay={1}>A curated portfolio of projects where each line of code tells a story of problem-solving, creativity, and technical finesse.</ScrambleText>*/}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
