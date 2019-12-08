import React from "react";
import PropTypes from "prop-types";

export default function List(props) {
    console.log(typeof props.list);
    return (
        <ol>
            {props.list.map(item => {  //Transforming our data into list, and setting each element as JSX List Item
                return (
                    <li key={item._id}>
                        <img src={item.picture} alt="avatars"/>
                        {item.name.first}
                        {item.name.last}
                        <br />
                        {item.balance}
                    </li>
                );
            })}
        </ol>
    );
}

List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object),
}