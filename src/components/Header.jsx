import PropTypes from 'prop-types';

function Header(props) {
    const headerStyles = {
        backgroundColor: props.bgColor,
        color: props.textColor
    };
    
  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{props.text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
    textColor: '#ff6a95',
    bgColor: 'rgba(0,0,0,0.4)'
}

Header.propTypes = {
    text: PropTypes.string,
}

export default Header