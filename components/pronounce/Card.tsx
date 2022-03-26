import React, { useEffect, useState } from "react";
import { classNames } from "../../common";
import { PRONOUCE_LEARNED_LOCAL_KEY } from "../../constants";

function Card(props: any) {
  const [learned, setLearned] = useState(false);

  useEffect(() => {
    const localData = window.localStorage.getItem(PRONOUCE_LEARNED_LOCAL_KEY);
    const existLocal = localData
      ? JSON.parse(localData).includes(props.id)
      : false;
    if (existLocal) setLearned(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className={classNames(
          "card-container flex flex-1 flex-col rounded-md shadow p-3 min-h-[100px] min-w-[250px]",
          learned ? "bg-green-200/80" : "bg-gray-400/20"
        )}
      >
        <div className="card-title flex gap-2">
          <span className="font-medium">{props.title}</span>
          <span
            onClick={() => {
              setLearned(true);
              props?.id && props?.onClickTitle(props.id);
            }}
          >
            {props?.iconTitle}
          </span>
        </div>
        {props.value && <div className="card-content">{props.value}</div>}
        {props.children}
      </div>
    </>
  );
}

export default Card;
