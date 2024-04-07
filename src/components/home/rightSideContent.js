// ContentArea.js
import React from 'react';

const ContentArea = () => {
  return (
    <main
      style={{
        flexGrow: 1,
        padding: '20px',
        overflowY: 'scroll',
      }}
    >
      <div style={{ height: '1000px' }}>
        {/* Add your content here */}
        <h2>Content Area</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        {/* Add more content as needed */}
      </div>
    </main>
  );
};

export default ContentArea;
