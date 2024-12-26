import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const Tasklist = ({ data }) => {
  // console.log(data)
  return (
    <div
      id="tasklist"  className="h-[55%] overflow-x-auto flex items-center justify-start gap-5  flex-nowrap py-5 w-full mt-10 "
    >
      {data.tasks.map((elem , idk ) => {
        if (elem.active) {
          return <AcceptTask  key={idk} data={elem}/>;
        }
        if (elem.newTask) {
          return <NewTask  key={idk} data={elem}/>
        }
        if (elem.completed) {
          return <CompleteTask  key={idk} data={elem}/>;
        }
        if (elem.failed) {
          return <FailedTask  key={idk} data={elem} />;
        }
      })}
    </div>
  );
};

export default Tasklist;
