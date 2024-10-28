import React from "react";
import backpacking from "./backpacking-three.jpg";
import music from "./music1.jpg";
import crime from "./crime.jpg";
import celebrity from "./celebrity.jpg";
import hollywood from "./hollywood.jpg";
import luxury from "./luxury.jpg";
import hair from "./hair.jpg";
import travel from "./travel.jpg";
import rap from "./rap.jpg";
import sport from "./sport.jpg";

import "./App.css";
export default function Scripts() {
  let scripts = [
    {
      title: (
        <a href="https://docs.google.com/document/d/1nzMyTvVHBQBJ_415dCQNx_DFy_GirdnROpBVEnAiv08/edit?usp=drivesdk">
          The Most Controversial Rap Song Ever
        </a>
      ),
      category: "Rap",
      info: "Music has the power to evoke different feelings in the listeners, ranging from pure joy to amusement to serenity and peace. And then there are songs like Dance with the Devil by Immortal Technique, an underground hip-hop that will leave you pumped up and questioning everything...",
      image: (
        <a href="https://docs.google.com/document/d/1nzMyTvVHBQBJ_415dCQNx_DFy_GirdnROpBVEnAiv08/edit?usp=drivesdk">
          {" "}
          <img src={music} className="rap-image" />
        </a>
      ),
    },
    {
      title: (
        <a href="https://docs.google.com/document/d/1Dh0voNPDtau5aXrGi3mpjD6Ehuv54wY03W3tCuSKhRw/edit?usp=drivesdk">
          Ultimate Backpacking Tips for Beginners
        </a>
      ),
      category: "Outdoor",
      info: "Is backpacking on your bucket list? Do you dream of sleeping under the stars and waking up to the mountain views? Backpacking is an incredible experience, but for a beginner, it can be daunting...",
      image: (
        <a href="https://docs.google.com/document/d/1Dh0voNPDtau5aXrGi3mpjD6Ehuv54wY03W3tCuSKhRw/edit?usp=drivesdk">
          <img src={backpacking} className="rap-image" />
        </a>
      ),
    },

    {
      title: (
        <a href="https://docs.google.com/document/d/12DplxlMpCuIi6jFcoUMHIOzJ27hjdU7i2RjNox1fmGM/edit?usp=drivesdk">
          {" "}
          5 Dirty Cops Get Brutal Karma In The Courtroom
        </a>
      ),
      category: "Crime",
      info: "We all know that cops are supposed to uphold the law, but these five cops decided to break it and faced some unexpected justice in the courtroom...",
      image: (
        <a href="https://docs.google.com/document/d/12DplxlMpCuIi6jFcoUMHIOzJ27hjdU7i2RjNox1fmGM/edit?usp=drivesdk">
          <img src={crime} className="rap-image" />,
        </a>
      ),
    },

    {
      title: (
        <a href="https://docs.google.com/document/d/1C7f2C89kv629uLrZAGkP-itwy3YY9k5EPzVXt3OpJdM/edit?usp=drivesdk">
          {" "}
          Song Kang Lifestyle and Net Worth and upbringing
        </a>
      ),
      category: "Celebrity",
      info: "Song Kang not only won the hearts of fans around the world as Jeong Guwon in “My Demon, but his net worth and lifestyle are just as captivating...",
      image: (
        <a href="https://docs.google.com/document/d/1C7f2C89kv629uLrZAGkP-itwy3YY9k5EPzVXt3OpJdM/edit?usp=drivesdk">
          <img src={celebrity} className="rap-image" />,
        </a>
      ),
    },

    {
      title: (
        <a href="https://docs.google.com/document/d/19ofvpektjZxowL9mPZu7GxH4vCKXxGx2SztJ3GK8HnM/edit?usp=drivesdk">
          {" "}
          The Biggest Hollywood's Scandal That History Never Forgot
        </a>
      ),
      category: "Hollywood",
      info: "No matter the demerits of social media, there are good things it's done, such as keeping up with the latest celebrity scandal just by the flick of a hand...",
      image: (
        <a href="https://docs.google.com/document/d/19ofvpektjZxowL9mPZu7GxH4vCKXxGx2SztJ3GK8HnM/edit?usp=drivesdk">
          <img src={hollywood} className="rap-image" />,
        </a>
      ),
    },

    {
      title: (
        <a href="https://docs.google.com/document/d/14jzyvORdGLTSVYkjWP1mfsfHkusRO4QJx7YrKECnFmc/edit?usp=drivesdk ">
          {" "}
          The Insanely Rise Of Dior Beauty
        </a>
      ),
      category: "Luxury",
      info: "From its humble beginnings as a small cosmetics line to its current position as one of the most popular luxury beauty brands in the world, Dior Beauty has come a long way...",
      image: (
        <a href="https://docs.google.com/document/d/14jzyvORdGLTSVYkjWP1mfsfHkusRO4QJx7YrKECnFmc/edit?usp=drivesdk">
          <img src={luxury} className="rap-image" />,
        </a>
      ),
    },

    {
      title: (
        <a href="https://docs.google.com/document/d/1D77B5nxj45hzuQFqueFcY0bjUsn4GsvAu3KQ1V_52_c/edit?usp=drivesdk">
          {" "}
          Incredible Benefits of Sea Moss for Natural Hair—Must Try!
        </a>
      ),
      category: "Health",
      info: "Are you tired of using harsh chemicals and products that leave your natural hair feeling dry and brittle instead of lush and full? You're not alone. Sea moss, a nutrient-rich seaweed...",
      image: (
        <a href="https://docs.google.com/document/d/1D77B5nxj45hzuQFqueFcY0bjUsn4GsvAu3KQ1V_52_c/edit?usp=drivesdk">
          <img src={hair} className="rap-image" />,
        </a>
      ),
    },

    {
      title: (
        <a
          href="
https://docs.google.com/document/d/19dqFPKoXggon6JuZO6entx-jmphn-HZH251z97qUuJg/edit?usp=drivesdk

"
        >
          {" "}
          Why 90% Of Alaska Is Empty. (It's Not Just The Cold)
        </a>
      ),
      category: "Travel",
      info: "Alaska is the largest state in the United States, with a landmass that is bigger than Texas, California, and Montana combined. But...",
      image: (
        <a
          href="
https://docs.google.com/document/d/19dqFPKoXggon6JuZO6entx-jmphn-HZH251z97qUuJg/edit?usp=drivesdk

"
        >
          <img src={travel} className="rap-image" />,
        </a>
      ),
    },

    {
      title: (
        <a href="https://docs.google.com/document/d/1Iip3TCdarlt2jcPY0_jcsqrVDtF88-1g6AZH6trMopo/edit">
          {" "}
          The Tragic Fate of Rappers Who Shared Their Location On Live.
        </a>
      ),
      category: "Rap",
      info: "No matter the demerits of social media, there are good things it's done, such as keeping up with the latest celebrity scandal just by the flick of a hand...",
      image: (
        <a href="https://docs.google.com/document/d/1Iip3TCdarlt2jcPY0_jcsqrVDtF88-1g6AZH6trMopo/edit">
          <img src={rap} className="rap-image" />,
        </a>
      ),
    },

    {
      title: (
        <a
          href="https://docs.google.com/document/d/1lYCRbn5jZepSbjLGECsmWPjVr41cq6bJFMcvEXv2t94/edit?usp=drivesdk


"
        >
          {" "}
          How an African Showboater Conquered the Premier League
        </a>
      ),
      category: "Sport",
      info: "It's rare to witness something new on a football field these days. While moments of brilliance are plentiful, we've grown accustomed to seeing Cristiano Ronaldo's dancing feet...",
      image: (
        <a
          href="https://docs.google.com/document/d/1Iip3TCdarlt2jcPY0_jcsqrVDtF88-1g6AZH6trMopo/edithttps://docs.google.com/document/d/1lYCRbn5jZepSbjLGECsmWPjVr41cq6bJFMcvEXv2t94/edit?usp=drivesdk


"
        >
          <img src={sport} className="rap-image" />,
        </a>
      ),
    },
  ];

  return scripts;
}
