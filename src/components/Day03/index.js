import React from "react";
import { connect } from 'react-redux';


function Day03(props){
    return (
        <section style = {{margin : "5 rem"}}>
            <div>
                <button type = "button" className = "btn btn-primary m-1" onClick = {() => props.dispatch({ type : "UPDATE_BONUS"})}>Update bonus</button>
                <button type = "button" className = "btn btn-success m-1" onClick = {() => props.dispatch({ type : "LEVEL_COMPLETED"})}>Level completed</button>
                <button type = "button" className = "btn btn-danger m-1" onClick = {() => props.dispatch({ type : "LIFE_LOST"})}>Life lost</button>
            </div>
            
            <strong>Your score : <span>{props.currentScore}</span></strong>
        </section>
    )
}

const mapStateToProps = (state) => {
    return{
        currentScore : state.currentScore
    }
}

export default connect(mapStateToProps) (Day03);