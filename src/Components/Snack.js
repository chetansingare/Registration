import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import "./Snack.css"
function SnackBar(props) {
    const [Display, setDisplay] = useState(false)
    useEffect(() => {
        let timer;
        if (props.getData.snackReducer.length > 0) {
            setDisplay(true)
            timer = setTimeout(dontShow, 3000)
        }
        return () => {
            clearTimeout(timer)
            setTimeout(false)
        }
    })
    function dontShow() {
        props.clean()
        setDisplay(false)
    }
    console.log("app state ", props.getData.snackReducer);
    return (
        <>
            { Display &&
                <div className="snakbarcontainer">
                    <button className="closebutton">&#10008;</button>
                    <h4 className="h1class">{props.getData.snackReducer}</h4>
                </div>
            }
        </>
    )
}

const mapStatetoprops = (state) => ({
                getData: state
})

const mapdispatchtoprops = (dispatch) => ({
                clean: () => dispatch({ type: "clean" })
})

export default connect(mapStatetoprops, mapdispatchtoprops)(SnackBar);