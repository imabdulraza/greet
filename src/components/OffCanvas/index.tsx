import React from 'react';

interface CanvasProps {
    children?: JSX.Element;
}

const OffCanvas: React.FC<CanvasProps> = ({children, ...rest}) => {
    return (
        <>
            <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    {children}
                </div>
            </div>
        </>
    )
}

export default OffCanvas;