import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faCalendar, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import "./headerSearch.css"

export const HeaderSearch = () => {
    const [destination, setDestination] = useState("");
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openDateRange, setOpenDateRange] = useState(false);

    const [openOptions, setOpenOptions] = useState(false);

    const [options, setOptions] = useState({
        adults: 2,
        children: 0,
        room: 1
    });

    const navigate = useNavigate();

    const handleClick = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } });
    };

    return (
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                    type="text"
                    name="place"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                />
            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendar} className="headerIcon" />
                <span className="headerSearchText" onClick={() => setOpenDateRange(!openDateRange)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                {openDateRange && <DateRange
                    editableDateInputs={true}
                    moveRangeOnFirstSelection={false}
                    onChange={item => setDate([item.selection])}
                    ranges={date}
                    className="dateRange" />
                }

            </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                    className="headerSearchText"
                    onClick={() => setOpenOptions(!openOptions)}
                >
                    {`${options.adults} adults - ${options.children} childrens - ${options.room} room`}
                </span>
                {openOptions && <div className="options">
                    <div className="optionItem">
                        <span className="optionText">Adults</span>
                        <div className="optionsCounter">
                            <button
                                disabled={options.adults <= 1}
                                className="optionCounterButton"
                                onClick={() => handleClick("adults", "d")}
                            >
                                -
                            </button>
                            <span className="optionCounterNum">{options.adults}</span>
                            <button className="optionCounterButton" onClick={() => handleClick("adults", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Childrens</span>
                        <div className="optionsCounter">
                            <button
                                disabled={options.children <= 0}
                                className="optionCounterButton"
                                onClick={() => handleClick("children", "d")}
                            >
                                -
                            </button>
                            <span className="optionCounterNum">{options.children}</span>
                            <button className="optionCounterButton" onClick={() => handleClick("children", "i")}>+</button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Rooms</span>
                        <div className="optionsCounter">
                            <button
                                disabled={options.room <= 1}
                                className="optionCounterButton"
                                onClick={() => handleClick("room", "d")}
                            >
                                -
                            </button>
                            <span className="optionCounterNum">{options.room}</span>
                            <button className="optionCounterButton" onClick={() => handleClick("room", "i")}>+</button>
                        </div>
                    </div>
                </div>}
            </div>
            <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
        </div>
    )
}
