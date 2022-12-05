import React from "react";
import {useDispatch} from "react-redux";
import {bandRemoved} from "./bandsSlice"

function Band({band}){
    const dispatch = useDispatch();

    function handleDeleteClick(){
        dispatch(bandRemoved(band.id));
    }
    return (
        <div>
            <span>{band.name}</span>
            <button onClick={handleDeleteClick}>Delete Band</button>
        </div>
    );
}

export default Band;