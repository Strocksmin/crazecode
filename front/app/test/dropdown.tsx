import React, { useEffect, useRef, useState } from 'react';

type dropdownProps = {
    text: string,
    filtersArray: string[],
    onSetFilterArray: (filtersArray: string[]) => void,
    categories: string[]
};

const dropdown: React.FC<dropdownProps> = (props) => {
    const {
        onSetFilterArray,
        filtersArray,
        text,
        categories
    } = props;

    let menuRef = useRef();

    const [isActive, setActive] = useState(false);

    const clickHandler = () => {
        setActive(isActive => { return !isActive });
    }

    const [header, setHeader] = useState(props.text);

    const clickDownHandler = (s: string) => {
        const temp = filtersArray.find((o2) =>
            categories.some((o1) => o1 === o2)
        )
        if (s !== "All") {
            //onSetFilterArray([s]);
            setHeader(s);
            if (temp != null) {
                filtersArray[filtersArray.indexOf(temp)] = s;
                onSetFilterArray([...filtersArray]);
            }
            else {
                onSetFilterArray([...filtersArray, s]);
            }
        }
        else {
            if (temp != null) {
                //filtersArray[filtersArray.indexOf(temp)] = "";
                onSetFilterArray(filtersArray.filter((obj) => obj !== temp))
            }
            setHeader(text)
            //onSetFilterArray([]);
        }
    }

    useEffect(() => {
        let handler = (e: { target: any; }) => {
            if (!menuRef.current.contains(e.target)) {
                setActive(false);
            }
        }

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })



    return (
        <>
            <div ref={menuRef} className='w-max'>
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-[0.5em]"
                    type="button"
                    onClick={() => clickHandler()}
                >
                    {header != "Category" ? header : "Category"}
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>
                <div id="dropdown" className={isActive ? "z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute mt-[0.5em]" : "hidden"}>
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                        {categories.map((category, index) => (
                            <li>
                                <a className="block px-4 py-2 hover:bg-gray-100 " onClick={() => clickDownHandler(category)}>{category}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
export default dropdown;