import react from "react";
import { connect } from "react-redux";

const DCCandyList = props => {
  return (
    <div className="all-the-candies">
      <h3> CANDY!!</h3>
      <ul>
        {props.candyList.map((Candy, index) => {
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
