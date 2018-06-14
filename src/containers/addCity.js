import React from 'react';
import { connect } from 'react-redux';
import {addCity, loader} from '../actions';

const SearchCity = ({onClick, isLoading, errorMessage}) => {
    return(
        <div style={{ overflow:'hidden'}}>            
            <div style={{margin: "1em auto", float:'left'}}>
            <form style={{marginLeft: "1em"}}>
                <input className="enter-city" placeholder="Enter a City" type="text"
                ref={(element) => { this.input = element }}
                style={{boxShadow: (errorMessage)? "0 0 5px red": null}}/>
                <button className="btn" type="submit" onClick = {e => {
                    e.preventDefault();
                    (this.input.value.trim()!=="") ? onClick() : this.input.value = ""}}>Go!</button>
                             
                {(errorMessage)?<div style={{fontSize:"12px", color:"red", marginTop: "4px"}}>La città inserita non esiste negli USA</div>: null }
            </form>
            </div>
            {(isLoading)? <div className="loader"></div>: null} 
        </div>
    )
}

function mapStateToProps (state) {
    return {
        isLoading: state.isLoading,
        errorMessage: state.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: ()=>{dispatch(loader()); dispatch(addCity(this.input.value)); this.input.value = "";}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);