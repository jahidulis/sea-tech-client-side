import React from "react";
import { Wave } from "react-animated-text";
import myImage from "../img/275734624_2168528319968208_1773411271327317452_n.jpg";
import aghs from "../img/AGHS (1).jpg";
import bmarpc from "../img/bmarpc.jpg";
import uiu from "../img/uiu.jpg";
import travel from "../img/travel.png";
import baby from "../img/Baby.png";
import center from "../img/Center.png";
import { Link, useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen mx-auto container max-w-7xl ">
      <div className="w-full text-center">
        <div class="avatar p-10">
          <div class="max-w-xs rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={myImage} />
          </div>
        </div>
        <div className="pt-10 font-serif">
          <h1 className="text-2xl md:text-5xl">Name: Md. Omar Shahariar</h1>
          <h1 className=" text-2xl md:text-5xl py-4">(Web Developer)</h1>
          <h1 className=" text-base md:text-2xl ">
            Email: osafridi00@gmail.com
          </h1>
        </div>
      </div>
      <div className="min-h-screen text-center pt-20">
        <h1 className="text-2xl md:text-5xl font-serif text-center text-neutral-content pb-20 ">
          <Wave text="Educational Background"></Wave>
        </h1>
        <div className="min-h-screen flex   w-full   justify-center">
          <div className=" w-full flex flex-col justify-around items-center  ">
            <div>
              <h1 className="text-center text-xs sm:text-xl py-5 font-serif font-bold">
                -- UNIVERSITY --
              </h1>
              <div class="avatar">
                <div class="max-w-xs ring ring-primary-focus rounded">
                  <img src={uiu} />
                </div>
              </div>
              <div>
                <h1 className="text-center text-xs sm:text-lg pt-5 font-serif font-bold">
                  United International University
                </h1>
                <h1 className="font-serif">(2021)</h1>
                <h1 className="font-serif font-bold">BSc. in CSE</h1>
                <h1 className="font-serif font-bold">CGPA: 3.4</h1>
              </div>
            </div>
            <div>
              <h1 className="text-center text-xs sm:text-xl py-5 font-serif font-bold">
                -- SCHOOl --
              </h1>
              <div class="avatar">
                <div class="max-w-xs ring ring-primary-focus rounded">
                  <img src={aghs} />
                </div>
              </div>
              <div>
                <h1 className="text-center text-xs sm:text-lg pt-5 font-serif font-bold">
                  Armanitola Govt High School
                </h1>
                <h1 className="font-serif">(2014)</h1>
                <h1 className="font-serif font-bold">GPA: 5.00</h1>
              </div>
            </div>
          </div>
          <div className="border-2 border-primary  ">
            <div className=" "></div>
          </div>

          <div className=" flex items-center justify-center w-full">
            <div className="  ">
              <h1 className="text-center text-xs sm:text-xl py-5 font-serif font-bold">
                -- COLLEGE --
              </h1>
              <div class="avatar">
                <div class="max-w-xs ring ring-primary-focus rounded">
                  <img src={bmarpc} />
                </div>
              </div>
              <div>
                <h1 className="text-center text-xs sm:text-lg pt-5 font-serif font-bold">
                  BirShrestha Minshi Abdur Rouf
                </h1>
                <h1 className="font-serif">(2016)</h1>
                <h1 className="font-serif font-bold">GPA: 5.00</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center pt-20 container max-w-7xl ">
        <h1 className="text-2xl md:text-5xl font-serif text-center text-neutral-content pb-20 ">
          <Wave text="Skill Sets"></Wave>
        </h1>
        <div className="flex flex-col px-10">
          <div className="flex items-center">
            <span className="w-32 pr-2 font-serif font-bold">HTML5</span>
            <progress
              class="progress progress-primary"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="w-32 pr-2 font-serif font-bold">CSS</span>
            <progress
              class="progress progress-primary"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="w-32 pr-2 font-serif font-bold">JS(ES6)</span>
            <progress
              class="progress progress-primary"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="w-32 pr-2 font-serif font-bold">BootStrap</span>
            <progress
              class="progress progress-primary"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="w-32 pr-2 font-serif font-bold">ReactJS</span>
            <progress
              class="progress progress-primary"
              value="75"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="w-32 pr-2 font-serif font-bold">TailWind</span>
            <progress
              class="progress progress-primary"
              value="75"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="w-32 pr-2 font-serif font-bold">JWT</span>
            <progress
              class="progress progress-primary"
              value="50"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="w-32 pr-2 font-serif font-bold">FireBase</span>
            <progress
              class="progress progress-primary"
              value="60"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="w-32 pr-2 font-serif font-bold">NodeJS</span>
            <progress
              class="progress progress-primary"
              value="40"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="w-32 pr-2 font-serif font-bold">ExpressJS</span>
            <progress
              class="progress progress-primary"
              value="50"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="w-32 pr-2 font-serif font-bold">FireBase</span>
            <progress
              class="progress progress-primary"
              value="60"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center">
            <span className="w-32 pr-2 font-serif font-bold">MongoDB</span>
            <progress
              class="progress progress-primary"
              value="50"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
      <div className=" container max-w-7xl text-center pt-20">
        <h1 className="text-2xl md:text-5xl font-serif text-center text-neutral-content  ">
          <Wave text="Projects"></Wave>
        </h1>
        <div className="grid lg:grid-cols-3 gap-4 py-20 px-5 md:grid-cols-2">
          <div class="mx-auto card  bg-neutral-focus shadow-xl">
            <figure>
              <img src={travel} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title font-serif text-primary">Travel Baba</h2>
              <div className="font-serif">
                <h1>React</h1>
                <h1>BootStrap</h1>
                <h1>Firebase</h1>
                <h1>MongoDB</h1>
              </div>
              <div class="card-actions justify-end">
                <a
                  className="btn  btn-primary"
                  href="https://desi-dhaba-12e5d.web.app/"
                  target="_blank"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
          <div class="card mx-auto bg-neutral-focus shadow-xl">
            <figure>
              <img src={baby} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title font-serif text-primary">Baby Care</h2>
              <div className="font-serif">
                <h1>React</h1>
                <h1>BootStrap</h1>
                <h1>Netlify</h1>
                <h1>CustomLink</h1>
              </div>
              <div class="card-actions justify-end">
                <a
                  className="btn  btn-primary"
                  href="https://babycare-assignment8.netlify.app/"
                  target="_blank"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
          <div class="card mx-auto  bg-neutral-focus shadow-xl">
            <figure>
              <img src={center} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-primary font-serif">
                Jummon Community Center
              </h2>
              <div className="font-serif">
                <h1>HTML</h1>
                <h1>CSS</h1>
                <h1>BootStrap</h1>
              </div>
              <div class="card-actions justify-end">
                <a
                  className="btn  btn-primary"
                  href="https://assignment-3-md-omar-shahariar.netlify.app/"
                  target="_blank"
                >
                  Live Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
