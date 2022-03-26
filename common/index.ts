import { PRONOUCE_LEARNED_LOCAL_KEY } from "../constants";

export function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

export function onClickVolume (key: string) {
    const storage = window.localStorage.getItem(PRONOUCE_LEARNED_LOCAL_KEY);
    const currentLearn = storage ? JSON.parse(storage) : [];
    if (!currentLearn.includes(key)) currentLearn.push(key);
    window.localStorage.setItem(
      PRONOUCE_LEARNED_LOCAL_KEY,
      JSON.stringify(currentLearn)
    );
  };