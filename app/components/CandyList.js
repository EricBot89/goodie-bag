import React from "react";
import { connect } from "react-redux";
import { dummyData } from '../DummyData'


const DCCandyList = props => {
  return (
    <div className="all-the-candies">
      <h2> CANDY!!</h2>
      <ul>
        {props.candyList.map((Candy, index) => {
          return <li key={index}>
          <h3>{Candy.name}</h3>
          <img src={Candy.imageUrl} />
          </li>;
        })}
      </ul>
    </div>
  );
};

const getCandiesFromState = state => ({
  candyList: state.candyReducer.candy
});

const CandyList = connect(
  getCandiesFromState,
  null
)(DCCandyList);

export { CandyList };
