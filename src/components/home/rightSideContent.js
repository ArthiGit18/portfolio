// ContentArea.js
import React, { useRef, useEffect } from 'react';

const ContentArea = ({ selectedItem }) => {
  const itemRefs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
    // Add more refs for other items if needed
  };

  useEffect(() => {
    if (itemRefs[selectedItem].current) {
      itemRefs[selectedItem].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [selectedItem]);

  return (
    <main
      style={{
        flexGrow: 1,
        padding: '20px',
        overflowY: 'scroll',
       
      }}
    >
      <div style={{ height: '1000px' }}>
        <h2 ref={itemRefs[1]}>Content Area - Item 1</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <h2 ref={itemRefs[2]}>Content Area - Item 2</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          scelerisque commodo sem, vel iaculis diam vestibulum sit amet.
          Maecenas vestibulum justo vel mauris malesuada, vel lobortis ex
          rutrum. Donec ut ex et nulla pellentesque sodales vel vel justo.
          Nulla vitae suscipit ipsum. Cras eu velit lectus. Nullam nec purus
          non eros vestibulum pharetra. Proin vehicula arcu eget libero
          eleifend, quis sollicitudin lectus gravida. Cras ac ex est.
        </p>
        <h2 ref={itemRefs[3]}>Content Area - Item 3</h2>
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
