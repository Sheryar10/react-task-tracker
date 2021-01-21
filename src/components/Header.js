// import PropTypes from 'prop-types'
import Button from "./Button";
const Header = ({onAdd, showAdd}) => {
    
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
    </header>
  );
};

// Header.defaultProps = {
//     name: "There should be name here"
// }

// Header.propTypes = {
//     name: PropTypes.string
// }

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
