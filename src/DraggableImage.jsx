import React, { useRef, useState, useEffect } from 'react';

function DraggableImage() {
  const imageRef = useRef(null);
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialY] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setInitialX(event.clientX);
    setInitialY(event.clientY);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const deltaX = event.clientX - initialX;
    const deltaY = event.clientY - initialY;

    let newX = imageRef.current.offsetLeft + deltaX;
    let newY = imageRef.current.offsetTop + deltaY;

    // Check for container boundaries
    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight;
    const imageWidth = imageRef.current.offsetWidth;
    const imageHeight = imageRef.current.offsetHeight;

    if (newX < 0) {
      newX = 0;
      containerRef.current.scrollLeft -= deltaX;
    } else if (newX + imageWidth > containerWidth) {
      newX = containerWidth - imageWidth;
      containerRef.current.scrollLeft += deltaX;
    }

    if (newY < 0) {
      newY = 0;
      containerRef.current.scrollTop -= deltaY;
    } else if (newY + imageHeight > containerHeight) {
      newY = containerHeight - imageHeight;
      containerRef.current.scrollTop += deltaY;
    }

    imageRef.current.style.left = `${newX}px`;
    imageRef.current.style.top = `${newY}px`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const document = window.document;
    const handleWindowMouseUp = () => handleMouseUp();

    document.addEventListener('mouseup', handleWindowMouseUp);

    return () => document.removeEventListener('mouseup', handleWindowMouseUp);
  }, []);

  return (
    <div ref={containerRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove}>
      <img ref={imageRef} src="https://images.unsplash.com/photo-1626278664285-f796b9ee7806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXJvbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="Draggable Image" />
    </div>
  );
}

export default DraggableImage;
