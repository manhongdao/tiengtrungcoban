import { Tab } from "@headlessui/react";
import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PronounceDefine from "../../../assets/data/pronounce";
const ThanhMau = React.lazy(
  () => import("../../../components/pronounce/ThanhMau")
);
const VanMau = React.lazy(() => import("../../../components/pronounce/VanMau"));

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

function Pronounce() {
  // const DataTag =

  return (
    <div className="w-full px-2 sm:px-0 mx-auto">
      <Tab.Group>
        <Tab.List className="flex mx-auto p-1 space-x-1 bg-blue-100 max-w-xl rounded-xl shadow">
          {Object.entries(PronounceDefine).map((pronounce) => {
            return (
              <Tab
                key={pronounce[0]}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium rounded-lg focus:outline-none ring-opacity-60 hover:bg-sky-400 hover:text-white",
                    selected
                      ? "bg-sky-400 text-white shadow focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white"
                      : "text-gray-700 "
                  )
                }
              >
                {pronounce[1]}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels className="mt-4 max-w-[1200px] mx-auto">
          <Tab.Panel
            key={1}
            className="bg-white rounded-xl p-3 focus:outline-none shadow-2xl"
          >
            {/* <Skeleton count={5} /> */}
            <Suspense fallback={<Skeleton height={100} count={5} />}>
              <ThanhMau />
            </Suspense>
          </Tab.Panel>
          <Tab.Panel
            key={2}
            className="bg-white rounded-xl p-3 focus:outline-none  shadow-2xl"
          >
            <Suspense fallback={<Skeleton height={100} count={5} />}>
              <VanMau />
            </Suspense>
          </Tab.Panel>

          {/* <Tab.Panel
            key={3}
            className="bg-white rounded-xl p-3 focus:outline-none"
          >
            <ThanhMau />
          </Tab.Panel>
          <Tab.Panel
            key={4}
            className="bg-white rounded-xl p-3 focus:outline-none"
          >
            <ThanhMau />
          </Tab.Panel> */}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

export default Pronounce;
