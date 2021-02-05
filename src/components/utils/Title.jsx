import React from 'react';

export default function Title({ bg, fg }) {
    return (
        <div className="title">
            <div className="title__fon">{bg}</div>
            <div className="title__name">{fg}</div>
        </div>
    )
};
