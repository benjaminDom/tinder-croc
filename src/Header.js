import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import "./Header.css"
import IconButton from "@material-ui/core/IconButton"
import { Link, useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Header( {backButton} ) {
    const history=useHistory();
    return (
        <div className='header'>
            {/* BEM something  to  use  */}
            {backButton ? (
                <IconButton onClick={()=> history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header__icon"></ArrowBackIosIcon>
                </IconButton>
            ) : (
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icon" />
                </IconButton>

            )}


            <Link to="/">
                <img className="header__logo" src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="tinder logo"></img>
            </Link>
            <Link to="/chat">
                <IconButton>
                    <ForumIcon className="header__icon" />
                </IconButton>
            </Link>

        </div>
    );
}

export default Header;
