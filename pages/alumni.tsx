import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import { alumni } from "../data/alumni";

const AlumniPage = () => {
  const [shownAlumni, setAlumni] = useState(alumni);

  const onSearchBarChange = () => {
    const input = document.getElementById("search") as HTMLInputElement;
    if (input.value != "") {
      setAlumni(
        alumni.map((alum, index) => {
          return {
            batch: alum.batch,
            people: alum.people.filter((a) =>
              a.name.toLowerCase().includes(input.value.toLowerCase())
            ),
          };
        })
      );
    } else setAlumni(alumni);
  };

  return (
    <Layout title="Alumni">
      <div className="container mx-auto md:px-24 px-5 py-12">
        <div className="flex flex-col w-full">
          <h1 className="sm:text-4xl text-3xl font-medium mb-1 text-gray-900 dark:text-white font-sanssm">
            Alumni
          </h1>
          <p className="lg:w-2/3 leading-relaxed text-base mb-8 dark:text-gray-400">
            Roboknights has an extensive, well connected alumni network which
            guides and mentors its members into the right path.
          </p>
          <div className="container">
            <div className="relative">
              <div className="absolute top-4 left-3">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>{" "}
              </div>{" "}
              <input
                id="search"
                type="text"
                className="h-14 w-60 pl-10 pr-20 z-0 focus:shadow focus:outline-none border-2 p-2 rounded-md border-black dark:border-white"
                placeholder="Search"
                onInput={onSearchBarChange}
              />
            </div>
          </div>
        </div>
        {shownAlumni
          .filter((a) => a.people.length > 0)
          .map((alum, index) => {
            return (
              <div key={index}>
                <h2 className={"text-dark dark:text-gray-300 text-3xl pb-6 font-medium pt-12"}>
                  {alum.batch}
                </h2>
                <div className="flex flex-wrap -m-2">
                  {alum.people.map((alum, index) => {
                    return (
                      <div className="p-2 lg:w-1/5 md:w-1/2 w-full" key={index}>
                        <div className="h-32 flex items-center border-black dark:border-white rounded-md border-2 p-4">
                          <div className="flex-grow p-5">
                            <h2 className="text-gray-900 dark:text-white font-sanssm font-medium text-xl">
                              {alum.name}
                            </h2>
                            <p className="text-gray-500 dark:text-gray-200">{alum.role}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </Layout>
  );
};

export default AlumniPage;
