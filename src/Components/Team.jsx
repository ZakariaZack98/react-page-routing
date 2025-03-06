import React from "react";
import { NavLink } from "react-router";
import { TeamMembers } from "../lib/members";


const Team = () => {
  const teamMembers = TeamMembers();

  const MemberCard = ({ name, role, summary, imgUrl }) => {
    let firstName = name.split(" ")[0];
    return (
      <NavLink to={`/team/${firstName}`} class="group">
        <div class="relative overflow-hidden rounded-xl mb-4">
          <img
            src={imgUrl}
            alt="Team member"
            class="w-full aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
          ></img>
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
            <div class="flex space-x-4">
              <a
                href="#"
                class="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                class="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                class="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
              >
                <i class="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="text-center">
          <h3 class="text-xl font-bold text-gray-800">{name}</h3>
          <p class="text-indigo-600 font-medium">{role}</p>
          <p class="text-gray-600 mt-2">{summary}</p>
        </div>
      </NavLink>
    );
  };

  return (
    <div>
      <section class="py-20 px-4">
        <div class="container mx-auto max-w-7xl">
          <div class="text-center max-w-3xl mx-auto mb-16">
            <h2 class="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Talented Team
            </h2>
            <div class="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <p class="text-gray-600 text-lg">
              We're a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers?.map( item => {
              return (
                <MemberCard key={item.name.split(" ")[0]} name={item.name} role={item.role} summary={item.summary} imgUrl={item.imgUrl}/>
              );
            })}
          </div>

          <div class="mt-20 text-center">
            <div class="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 p-px rounded-lg">
              <a
                href="#"
                class="block bg-white hover:bg-gray-50 transition-colors duration-200 rounded-lg px-8 py-4 font-medium text-indigo-600"
              >
                Join Our Team <span class="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
