import { useState } from "react";

import { classNames } from "../../common";

interface TabsProps {
    labels: string[],
    components: JSX.Element[],
}

function Tabs({ labels, components }: TabsProps)
{
    const [currentTab, setCurrentTab] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);

    const handleTransform = () => {
        switch (currentTab) {
            case 1: return 'translate-x-full';
            case 2: return 'translate-x-200';
            case 3: return 'translate-x-300';
            case 4: return 'translate-x-400';
            default: return 'translate-x-0';
        }
    }
    
    const onChangeTab = (index: number) => {
        setHasAnimated(true);
        setCurrentTab(index);
    }

    return (
        <>
			<div className="relative rounded-md bg-blue-100 mx-auto" style={{ maxWidth: labels.length * 175}}>
				<div
					id="slider"
					className={classNames(
                        "absolute inset-y-0 h-full transition-transform transform duration-300 translate-x-full",
                        handleTransform(),
                    )}
                    style={{ width: `calc(100%/${labels.length})` }}
				>
					<div
						className="h-full bg-white rounded-md bg-sky-400"
					></div>
				</div>
				<div className="relative flex h-full">
                    {
                        labels.map((label: string, index: number) =>
                            <button
                                type="button"
                                key={`label ${index}`}
                                tabIndex={index}
                                className={classNames(
                                    "py-1 my-2 ml-2 text-sm font-medium leading-5 cursor-pointer select-none focus:outline-none transition-colors duration-300",
                                    currentTab === index ? 'active font-bold text-white' : 'text-gray-700',
                                )}
                                style={{ width: `calc(100%/${labels.length})` }}
                                onClick={() => onChangeTab(index)}
                            >
                                {label}
                            </button>
                        )
                    }
				</div>
			</div>
            <div className="mt-4 max-w-[1200px] mx-auto transition-all ease-in-out duration-300">
                <div className="bg-white rounded-xl p-3 focus:outline-none shadow-md">
                    <div key={labels[currentTab]} style={{ animation: hasAnimated ? 'fade-in 1s' : '' }}>
                        {components[currentTab]}
                    </div>
                </div>
            </div>
		</>
    )
}

export default Tabs;