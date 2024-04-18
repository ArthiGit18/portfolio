const Project = ({isVisible}) => {
    return(
        <div className={`projects-content ${isVisible ? 'slide-from-left' : ''}`}>
        <small>
            Projects
          </small>

          <h2 style={{ letterSpacing: "10px", margin: "30px 0" }}>PROJECTS</h2>
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
        </div>
    )
}

export default Project;