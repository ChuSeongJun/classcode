import React from "react";

const styles = {
    wrapper: {
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
    },
    image: {
        width: "100vh",
        height: "60vh",
        borderRadius: 25,
    },

    Text:{
        color: "white",
        fontSize: 70,
    }


};

function Comment(props) {
    const color=props.color;
    return (
        <div style={ styles.wrapper } >
            <img src={props.image} alt=""  style={ styles.image }/>
            <div style={{backgroundColor:color ,height:"35vh" ,width: "100vh"}} >
                <div style={ styles.Text }>{props.title}</div>
                <div style={ styles.Text }>{props.distance}km거리</div>
            </div>
        </div>
    );
}
export default Comment;