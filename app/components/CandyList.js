import React from "react";
import { connect } from "react-redux";
import { dummyData } from '../DummyData'

const DCCandyList = props => {
  return (
    <div className="all-the-candies">
      <h3> CANDY!!</h3>
      <ul>
        {dummyData.candies.map((Candy, index) => {
          return <li key={index}>Candy.name</li>;
        })}
      </ul>
    </div>
  );
};

const getCandiesFromState = state => ({
  candyList: state.candy
});

const CandyList = connect(
  getCandiesFromState,
  null
)(DCCandyList);

export { CandyList };
