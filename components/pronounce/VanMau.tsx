import { VolumeUpIcon } from "@heroicons/react/outline";
import React from "react";
import VANMAU_DATA from "../../assets/data/pronounce/VanMau";
import { onClickVolume } from "../../common";
import Card from "./Card";

function VanMau(props: any) {
  return (
    <div>
      {VANMAU_DATA.map((vanmau) => {
        return (
          <div key={vanmau.header} className="p-2 mb-4">
            <h3 className="font-medium">{vanmau.header}</h3>
            <div className="card-container flex gap-2 flex-wrap">
              {vanmau.data.map((item) => {
                return (
                  <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    iconTitle={
                      <VolumeUpIcon className="w-6 h-6 text-gray-900 hover:text-gray-700 cursor-pointer" />
                    }
                    onClickTitle={onClickVolume}
                  >
                    <div>{item.value}</div>
                    <div>{item?.note}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VanMau;
