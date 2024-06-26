import React from 'react';
import './TodoLoading.css'
function TodosLoading() {
    return (
        <>
            <div className="container">
                <div className="box">
                    <div className="skeleton">
                        <div className="skeleton-left">
                            <div className="line"></div>
                            <div className="line h8 w50"></div>
                            <div className="line  w75"></div>
                        </div>
                        <div className="skeleton-right">
                            <div className="square"></div>
                        </div>
                    </div>
                    <div className="skeleton">
                        <div className="skeleton-left">
                            <div className="line"></div>
                            <div className="line h8 w50"></div>
                            <div className="line  w75"></div>
                        </div>
                        <div className="skeleton-right">
                            <div className="square"></div>
                        </div>
                    </div>
                    <div className="skeleton">
                        <div className="skeleton-left">
                            <div className="line"></div>
                            <div className="line h8 w50"></div>
                            <div className="line  w75"></div>
                        </div>
                        <div className="skeleton-right">
                            <div className="square"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { TodosLoading };