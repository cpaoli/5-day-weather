import React from 'react';
import { connect } from 'react-redux';
import {addCity} from "../actions"

const SearchCity = ({onClick}) => {
    return(
        <div>
            <form style={{margin: "1em auto"}}>
                <input placeholder="Enter a City" type="text" ref={(element) => { this.input = element }}/>
                <button type="submit" onClick = {e => {
                    e.preventDefault();
                    (this.input.value.trim()!=="") ? onClick() :this.input.value = ""}}>Go!</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: ()=>{dispatch(addCity(this.input.value)); this.input.value = "";}
    }
}
export default connect(null, mapDispatchToProps)(SearchCity);