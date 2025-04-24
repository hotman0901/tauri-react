import PropTypes from "prop-types";
import { memo } from "react";
import isEqual from "react-fast-compare";

function Child(props) {
  const { id } = props;
  return <div>Child: {id}</div>;
}

Child.propTypes = {
  id: PropTypes.number.isRequired,
};

export default memo(Child, isEqual);
