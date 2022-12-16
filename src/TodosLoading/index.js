import React from 'react';
// import ContentLoader from "react-content-loader"

import "./TodosLoading.css";

// Skeleton built with https://skeletonreact.com/

function TodosLoading(){
    return(
        <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p className='LoadingTodo-text'>Cargando TODOs...</p>
            <span className='LoadingTodo-deleteIcon'></span>
        </div>
    );
}

export { TodosLoading };