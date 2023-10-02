import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const GoBack = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(-1);
    };

    return (
        <button className='bg-white border-0 fw-bold text-align-center p-0' onClick={handleNavigate}>
            <FontAwesomeIcon icon={faChevronLeft} /> Back
        </button>
    );
};