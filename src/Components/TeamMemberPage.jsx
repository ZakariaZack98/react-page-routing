import React, { useEffect } from "react";
import { useParams } from "react-router";
import { TeamMembers } from "../lib/members";

const TeamMemberPage = () => {
  const { name: firstName } = useParams();
  const teamMembersData = TeamMembers();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const matchedMember = teamMembersData.find(
    (item) => item.name.split(" ")[0] === firstName
  );

  if (!matchedMember) {
    return <div>Member not found</div>;
  }

  return (
    <div class="bg-gradient-to-r from-indigo-800 to-blue-900 min-h-screen flex items-center justify-center p-4">
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-sm w-full overflow-hidden transition-all duration-300 hover:shadow-indigo-500/50 dark:hover:shadow-blue-900/50">
        <div class="relative h-32 bg-gradient-to-r from-indigo-600 to-blue-700">
          <img
            src={matchedMember.imgUrl}
            alt={matchedMember.name}
            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div class="pt-16 pb-6 px-6 text-center">
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white mb-1">
            {matchedMember.name}
          </h1>
          <p class="text-indigo-600 dark:text-indigo-400 font-semibold mb-4">
            {matchedMember.role}
          </p>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {matchedMember.summary}
          </p>
          <div class="flex justify-center space-x-4 mb-6">
            <a
              href="#"
              class="text-gray-600 hover:text-indigo-800 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-600 hover:text-indigo-800 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="text-gray-600 hover:text-indigo-800 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors duration-300"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="flex justify-center space-x-2">
            <span class="px-3 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full transition-colors duration-300 hover:bg-indigo-800 hover:text-white dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-700">
              JavaScript
            </span>
            <span class="px-3 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full transition-colors duration-300 hover:bg-indigo-800 hover:text-white dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-700">
              React
            </span>
            <span class="px-3 py-1 text-sm bg-indigo-100 text-indigo-800 rounded-full transition-colors duration-300 hover:bg-indigo-800 hover:text-white dark:bg-indigo-900 dark:text-indigo-200 dark:hover:bg-indigo-700">
              Node.js
            </span>
          </div>
        </div>
        <div class="bg-gray-50 dark:bg-gray-700 px-6 py-4">
          <button class="w-full bg-indigo-800 text-white py-2 rounded-lg font-semibold hover:bg-blue-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-800 focus:ring-offset-2 dark:focus:ring-offset-gray-800">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberPage;
