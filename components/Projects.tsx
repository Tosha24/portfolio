"use client";

import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="projects"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24"
    >
      <SectionTitle title="PROJECTS" titleNo="03" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <ProjectCard
            title="E-Kart"
            subTitle="E-commerce Website"
            desc={[
              "Website for buying and selling products having filters and search functionality.",
              "It also contains Admin panel for managing the users, orders, products, and categories.",
              "The dashboard in Admin panel makes it easy to keep track of products sell and purchase.",
            ]}
            listItem={[
              "MERN",
              "Redux",
              "Tailwind CSS",
              "Javascript",
              "MongoDB",
              "Cloudinary",
            ]}
            gitlink="https://github.com/Tosha24/MERN_E-Commerce"
            applink="https://mern-e-commerce-pi.vercel.app/"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <ProjectCard
            title="EZ-Invoice"
            subTitle="Invoice Generator and Manager"
            desc={[
              "A free and useful tool for small scale businesses to generate and track their invoices at one place.",
              "Used for processing invoices, tracking company's exports, managing invoices.",
              "Includes CRUD operations on invoices, download invoices in .pdf, .docx or .xlsx format.",
            ]}
            listItem={[
              "Next.js",
              "Tailwind CSS",
              "Mongoose",
              "MongoDB",
              "Typescript",
            ]}
            gitlink="https://github.com/Tosha24/EZ-Invoice"
            applink="#"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <ProjectCard
            title="Weather App"
            subTitle="Weather Forecasting website"
            desc={[
              "This weather app automatically fetches user's geolocation for accurate local weather updates for current location",
              "User can search for any location's weather and other additional details like temperature, wind, humidity, etc.",
              "Also you can get 5-day forecast for that particular location",
            ]}
            listItem={[
              "Vite+React.js",
              "Tailwind CSS",
              "OpenWeatherMapAPI",
              "Typescript",
            ]}
            gitlink="https://github.com/Tosha24/WeatherApp"
            applink="https://weather-app-panicletech.netlify.app/"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ProjectCard
            title="ImageGenie"
            subTitle="AI based Image Generation"
            desc={[
              "Generates images based on the search input using DALL-E API from OpenAI",
              "Integrated random prompts suggestions to users. Can also be connected to backend and random images are shown on dashboard",
            ]}
            listItem={["Next.js 13", "DALL-E API", "Tailwind CSS"]}
            gitlink="https://github.com/Tosha24/ImageGenie"
            applink="https://github.com/Tosha24/ImageGenie#readme"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <ProjectCard
            title="Threads"
            subTitle="A Social Media Website"
            desc={[
              "A social media website for sharing posts and images with friends and family.",
              "It contains features like following, liking, commenting, reposting, etc.",
              "Images are uploaded using Upload thing's API and stored in MongoDB.",
              "The complete authentication of this app is handled by Clerk Auth.",
            ]}
            listItem={[
              "Next.js 14",
              "Typescript",
              "Tailwind CSS",
              "MongoDB",
              "Clerk",
              "Upload thing",
            ]}
            gitlink="https://github.com/Tosha24/threads"
            applink="https://threads-tosha24.vercel.app/"
          />
        </motion.div>

        {isExpanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ProjectCard
                title="MovieMate"
                subTitle="Movie Recommendation System"
                desc={[
                  "A Machine Learning based Movie Recommendation System.",
                  "It recommends movies based on the user's input and the movie's genres, cast, director, etc.",
                ]}
                listItem={["ML", "Pandas", "Numpy", "Streamlit"]}
                gitlink="https://github.com/Tosha24/movie-recommendation"
                applink="https://tosha24-movie-recommendation-main-osz07d.streamlit.app/"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ProjectCard
                title="SpamShield"
                subTitle="Email or SMS Spam Classifier"
                desc={[
                  "A Machine Learning based Email or SMS spam classifier.",
                  "Users seeking information about received messages will utilize this functionality.",
                ]}
                listItem={["ML", "Pandas", "Numpy", "Streamlit"]}
                gitlink="https://github.com/Tosha24/movie-recommendation"
                applink="https://tosha24-movie-recommendation-main-osz07d.streamlit.app/"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ProjectCard
                title="Churn Prediciton"
                subTitle="Customer Churn Prediction"
                desc={[
                  "A ML based Customer Churn Prediction.",
                  "The stores can use this to predict which customers are likely to churn and take particular actions to retain them.",
                ]}
                listItem={["ML", "Pandas", "Numpy"]}
                gitlink="https://github.com/Tosha24/Customer-Churn-Prediction"
                applink="#"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ProjectCard
                title="RestroRush"
                subTitle="Restaurant Website"
                desc={[
                  "A basic web development website design for restuarants for online-ordering and food delivery.",
                  "No backend, only simple frontend design.",
                ]}
                listItem={["HTML", "CSS", "JS", "Bootstrap"]}
                gitlink="https://github.com/Tosha24/RestoRush"
                applink="https://github.com/Tosha24/RestoRush"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <ProjectCard
                title="Tic-Tac-Toe"
                subTitle="A classic game of X's and O's"
                desc={[
                  "A classic game of X's and O's, a battle of wits and rows, Three in a line, victory is divine.",
                  "A simple Tic Tac Toe game that brings joy that grows!",
                ]}
                listItem={["React.js", "Tailwind CSS", "Javascript"]}
                gitlink="https://github.com/Tosha24/tic-tac-toe"
                applink="https://tic-tac-toe33.netlify.app/"
              />
            </motion.div>
          </>
        )}
      </motion.div>
      <div className="mt-12 flex items-center justify-center">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
        >
          {isExpanded && "Show Less"}
          {!isExpanded && "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
