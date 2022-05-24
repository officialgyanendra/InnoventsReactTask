import React, { useState } from "react";

const App = () => {
    const [hotelRooms, setHotelRooms] = useState(1);
    const [hotelAdult, setHotelAdult] = useState(1);
    const [hotelChildren, setHotelChildren] = useState(0);

    const handleAddRoomClick = () => {
        let room = hotelRooms
        let adult = hotelAdult
        let children = hotelChildren

        room += 1;
        if (room > 5) {
            return;
        }
        let totalPerson = adult + children;
        if (room > totalPerson) {
            adult = adult += 1;
        } else if (room < totalPerson && room > adult) {
            adult = adult += 1;
        }

        setHotelRooms(room);
        setHotelAdult(adult);
        setHotelChildren(children);
    }

    const handleRemoveRoomClick = () => {
        let room = hotelRooms
        let adult = hotelAdult
        let children = hotelChildren

        room -= 1;
        if (!room) {
            return;
        }
        let totalPerson = adult + children;
        if (totalPerson > room * 4) {
            let exceded = totalPerson - room * 4;
            for (let i = 1; i <= exceded; i++) {
                if (children) {
                    children -= 1;
                } else {
                    adult -= 1;
                }
            }
        }
        setHotelRooms(room);
        setHotelAdult(adult);
        setHotelChildren(children);
    }

    const handleAddAdultsClick = () => {
        let room = hotelRooms
        let adult = hotelAdult
        let children = hotelChildren

        adult += 1;
        let totalPerson = adult + children;
        if (totalPerson > room * 4) {
            room = Math.floor(totalPerson / 4 + (totalPerson % 4 ? 1 : 0));
        }
        if (room > 5) {
            return;
        }
        setHotelRooms(room);
        setHotelAdult(adult);
        setHotelChildren(children);
    }

    const handleRemoveAdultsClick = () => {
        let room = hotelRooms
        let adult = hotelAdult
        let children = hotelChildren

        adult -= 1;
        if (!adult) {
            return;
        }
        let totalPerson = adult + children;
        if (totalPerson < room) {
            let diff = room - totalPerson;
            room -= diff;
        }
        setHotelRooms(room);
        setHotelAdult(adult);
        setHotelChildren(children);
    }

    const handleAddChildrenClick = () => {
        let room = hotelRooms
        let adult = hotelAdult
        let children = hotelChildren

        children += 1;
        let totalPerson = adult + children;
        if (totalPerson > room * 4) {
            room = Math.floor(totalPerson / 4 + (totalPerson % 4 ? 1 : 0));
        }
        if (room > 5) {
            return;
        }
        setHotelRooms(room);
        setHotelAdult(adult);
        setHotelChildren(children);
    }

    const handleRemoveChildrenClick = () => {
        let room = hotelRooms
        let adult = hotelAdult
        let children = hotelChildren

        children -= 1;
        if (children === -1) {
            return;
        }
        let totalPerson = adult + children;
        if (totalPerson < room) {
            let diff = room - totalPerson;
            room -= diff;
        }
        setHotelRooms(room);
        setHotelAdult(adult);
        setHotelChildren(children);
    }
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-md-4" style={{ margin: '30px auto' }}>
                        <div className="card">
                            <div className="card-body">
                                <div className="list-group">
                                    <div className="list-group-item">
                                        <h3>Room</h3>
                                        <div className="list-group-input">
                                            <button
                                                className="action-btn minus"
                                                onClick={handleRemoveRoomClick}
                                                disabled={hotelRooms === 1}
                                            >
                                                <i className="fa fa-minus" />
                                            </button>
                                            <div className="list-value">{hotelRooms}</div>
                                            <button
                                                className="action-btn plus"
                                                onClick={handleAddRoomClick}
                                                disabled={hotelRooms === 5}
                                            >
                                                <i className="fa fa-add" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        <h3>Adults</h3>
                                        <div className="list-group-input">
                                            <button
                                                className="action-btn minus"
                                                onClick={handleRemoveAdultsClick}
                                                disabled={hotelAdult === 1 ||
                                                    (hotelRooms === hotelAdult)
                                                }
                                            >
                                                <i className="fa fa-minus" />
                                            </button>
                                            <div className="list-value">{hotelAdult}</div>
                                            <button
                                                className="action-btn plus"
                                                onClick={handleAddAdultsClick}
                                                disabled={hotelAdult >= hotelRooms * 4 || (hotelAdult + hotelChildren) >= hotelRooms * 4}
                                            >
                                                <i className="fa fa-add" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        <div>
                                            <i class="fa fa-child" aria-hidden="true"></i>
                                            <h3>Children</h3>
                                        </div>
                                        <div className="list-group-input">
                                            <button
                                                className="action-btn minus"
                                                onClick={handleRemoveChildrenClick}
                                                disabled={hotelChildren === 0}
                                            >
                                                <i className="fa fa-minus" />
                                            </button>
                                            <div className="list-value">{hotelChildren}</div>
                                            <button
                                                className="action-btn plus"
                                                onClick={handleAddChildrenClick}
                                                disabled={(hotelAdult + hotelChildren) >= hotelRooms * 4}
                                            >
                                                <i className="fa fa-add" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;