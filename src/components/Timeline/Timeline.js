import React from "react";

const Timeline = ({ events }) => {
  return (
    <div className="space-y-8 relative before:absolute before:z-1 before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
      {events?.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <div className="flex relative items-center text-center justify-center bg-neutral-300 m-auto w-fit pl-3 pr-3 pt-1 pb-1 rounded-md font-uppercase text-md1 font-semibold	uppercase z-10">
              {item.title}
            </div>
            {item?.children?.map((childItem, index) => {
              return (
                <div
                  key={index}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border bg-slate-300 group-[.is-active]:bg-blue-700 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    {childItem.icon}
                  </div>

                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                    <div className="flex items-center justify-between space-x-2 mb-1">
                      <div className="font-bold text-slate-900">
                        {childItem.role}
                      </div>
                      <time className="font-caveat font-medium text-blue-700">
                        {childItem.companyName} |{" "}
                        <span className="italic">
                          {childItem.from} - {childItem.to}
                        </span>
                      </time>
                    </div>
                    <span class="iconify mdi-light--home"></span>
                    <ul className="list-disc pl-4 grid gap-3">
                      {childItem?.description?.map((descItem, index) => {
                        return (
                          <li key={index} className="text-slate-500">
                            {descItem}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Timeline;
