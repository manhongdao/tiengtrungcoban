import { VolumeUpIcon } from "@heroicons/react/outline";
import React from "react";
import THANHMAU_DATA from "../../assets/data/pronounce/ThanhMau";
import { onClickVolume } from "../../common";
import Card from "./Card";

function ThanhMau() {
  return (
    <div>
      {THANHMAU_DATA.map((thanhmau) => {
        return (
          <div key={thanhmau.header} className="p-2 mb-4">
            <h3 className="font-medium">{thanhmau.header}</h3>
            <div className="card-container flex gap-2 flex-wrap">
              {thanhmau.data.map((items) => {
                return (
                  <Card
                    key={items.id}
                    id={items.id}
                    title={items.title}
                    value={items.value}
                    iconTitle={
                      <VolumeUpIcon className="w-6 h-6 text-gray-900 hover:text-gray-700 cursor-pointer" />
                    }
                    onClickTitle={onClickVolume}
                  ></Card>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ThanhMau;
