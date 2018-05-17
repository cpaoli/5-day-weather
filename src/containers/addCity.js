import React from 'react';
import { connect } from 'react-redux';
import {addCity, loader} from '../actions';
import ActivityIndicator from 'react-activity-indicator';

const SearchCity = ({onClick, isLoading}) => {
    return(
        <div style={{ overflow:'hidden'}}>            
            <div style={{margin: "1em auto", float:'left'}}><form>
                <input placeholder="Enter a City" type="text" ref={(element) => { this.input = element }}/>
                <button type="submit" onClick = {e => {
                    e.preventDefault();
                    (this.input.value.trim()!=="") ? onClick() : this.input.value = ""}}>Go!</button>
            </form></div>
            {(isLoading)? <div style={{float:'left', margin:'1em'}}><ActivityIndicator 
            number={3} duration={300} activeColor="#0070bf" borderWidth={2} borderRadius="50%" diameter={15} 
          /></div> : null}
        </div>
    )
}

function mapStateToProps (state) {
    return {
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: ()=>{dispatch(loader()); dispatch(addCity(this.input.value)); this.input.value = "";}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchCity);