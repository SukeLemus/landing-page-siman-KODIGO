// Detalle de producto: llena la página según el parámetro ?producto=
// Ejemplo: pages/dt-producto.html?producto=laptop

(function () {
  // Producto que se muestra si el parámetro falta o no existe.
  const PRODUCTO_POR_DEFECTO = "televisor";

  // Datos de los productos (contenido de ejemplo para fines educativos).
  // En "imagenes" están las 3 rutas de cada producto:
  // cambia el valor de "src" cuando tengas tus propias imágenes.
  const productos = {
    televisor: {
      nombre: "Smart TV 55 pulgadas 4K UHD",
      nombreCorto: "Smart TV 55 pulgadas",
      categoria: "Tecnología",
      categoriaDetalle: "TECNOLOGÍA / TELEVISORES",
      modelo: "Modelo de ejemplo: STV-55UHD",
      precio: "$599.99",
      descripcion:
        "Disfruta tus películas, series y videojuegos favoritos con una imagen 4K Ultra HD, colores intensos y un diseño moderno que combina con cualquier espacio de tu hogar.",
      caracteristicas: [
        "Pantalla LED de 55 pulgadas.",
        "Resolución 4K Ultra HD.",
        "Funciones Smart TV con Wi-Fi integrado.",
        "Conectividad HDMI y USB.",
        "Sonido estéreo y control remoto incluido.",
      ],
      imagenes: [
        {
          src: "https://res.cloudinary.com/pejob7cw/image/upload/v1791491041/tv.jpg",
          alt: "Smart TV, vista frontal",
        },
        {
          src: "../img/tv-lateral.png",
          alt: "Smart TV, vista lateral",
        },
        {
          src: "../img/tv-atras.png",
          alt: "Smart TV, vista posterior",
        },
      ],
    },

    refrigeradora: {
      nombre: "Refrigeradora moderna de dos puertas",
      nombreCorto: "Refrigeradora moderna",
      categoria: "Electrodomésticos",
      categoriaDetalle: "ELECTRODOMÉSTICOS / REFRIGERACIÓN",
      modelo: "Modelo de ejemplo: RFG-420N",
      precio: "$899.99",
      descripcion:
        "Mantén tus alimentos frescos por más tiempo con una refrigeradora de diseño moderno, amplio espacio interior y un funcionamiento eficiente para el uso diario en el hogar.",
      caracteristicas: [
        "Capacidad aproximada de 420 litros.",
        "Sistema de enfriamiento No Frost.",
        "Compartimientos ajustables.",
        "Bajo consumo de energía.",
        "Acabado moderno y fácil de limpiar.",
      ],
      imagenes: [
        {
          src: "https://res.cloudinary.com/pejob7cw/image/upload/v1791491040/refrigeradora.jpg",
          alt: "Refrigeradora moderna, vista frontal",
        },
        {
          src: "../img/refrigeradora-abierta.png",
          alt: "Refrigeradora moderna, vista lateral",
        },
        {
          src: "../img/refrigeradora-rara.png",
          alt: "Refrigeradora moderna, vista interior",
        },
      ],
    },

    laptop: {
      nombre: "Laptop profesional de alto rendimiento",
      nombreCorto: "Laptop profesional",
      categoria: "Tecnología",
      categoriaDetalle: "TECNOLOGÍA / COMPUTADORAS",
      modelo: "Modelo de ejemplo: LTP-15PRO",
      precio: "$749.99",
      descripcion:
        "Trabaja, estudia y crea contenido con una laptop ligera y potente, pensada para ofrecerte rapidez, buena autonomía y comodidad en cualquier lugar.",
      caracteristicas: [
        "Pantalla Full HD de 15.6 pulgadas.",
        "Procesador de última generación.",
        "Memoria RAM de 16 GB.",
        "Almacenamiento SSD de 512 GB.",
        "Batería de larga duración.",
      ],
      imagenes: [
        {
          src: "https://res.cloudinary.com/pejob7cw/image/upload/v1791491039/laptop.jpg",
          alt: "Laptop profesional, vista frontal",
        },
        {
          src: "../img/laptop-lateral.png",
          alt: "Laptop profesional, vista lateral",
        },
        {
          src: "../img/laptop-atras.png",
          alt: "Laptop profesional, vista del teclado",
        },
      ],
    },

    sofa: {
      nombre: "Sofá moderno de tres plazas",
      nombreCorto: "Sofá moderno",
      categoria: "Hogar",
      categoriaDetalle: "HOGAR / SALA",
      modelo: "Modelo de ejemplo: SOF-3P",
      precio: "$499.99",
      descripcion:
        "Dale un toque moderno y cómodo a tu sala con un sofá de líneas limpias, asientos acolchados y un diseño que se adapta a distintos estilos de decoración.",
      caracteristicas: [
        "Capacidad para tres personas.",
        "Asientos y respaldo acolchados.",
        "Estructura resistente.",
        "Tapizado suave y fácil de limpiar.",
        "Diseño moderno para sala o área social.",
      ],
      imagenes: [
        {
          src: "https://res.cloudinary.com/pejob7cw/image/upload/v1791491041/sofa.jpg",
          alt: "Sofá moderno, vista frontal",
        },
        {
          src: "../img/sofa-frente.png",
          alt: "Sofá moderno, vista lateral",
        },
        {
          src: "../img/sofa-atras.png",
          alt: "Sofá moderno, detalle del tapizado",
        },
      ],
    },

    audifonos: {
      nombre: "Audífonos inalámbricos Bluetooth",
      nombreCorto: "Audífonos inalámbricos",
      categoria: "Audio",
      categoriaDetalle: "AUDIO / AUDÍFONOS",
      modelo: "Modelo de ejemplo: AUD-BT200",
      precio: "$129.99",
      descripcion:
        "Escucha tu música, tus llamadas y tus videos con libertad gracias a unos audífonos inalámbricos cómodos, con sonido claro y batería para todo el día.",
      caracteristicas: [
        "Conexión Bluetooth inalámbrica.",
        "Sonido estéreo de alta calidad.",
        "Micrófono integrado para llamadas.",
        "Hasta 30 horas de batería.",
        "Diseño ligero y cómodo.",
      ],
      imagenes: [
        {
          src: "https://res.cloudinary.com/pejob7cw/image/upload/v1791491039/audifonos.jpg",
          alt: "Audífonos inalámbricos, vista frontal",
        },
        {
          src: "../img/audifonos-acostados.png",
          alt: "Audífonos inalámbricos, vista lateral",
        },
        {
          src: "../img/audifonos-esponjas.png",
          alt: "Audífonos inalámbricos, vista plegados",
        },
      ],
    },

    cocina: {
      nombre: "Set de cocina de 12 piezas",
      nombreCorto: "Set de cocina",
      categoria: "Hogar",
      categoriaDetalle: "HOGAR / COCINA",
      modelo: "Modelo de ejemplo: SET-COC12",
      precio: "$159.99",
      descripcion:
        "Prepara tus recetas favoritas con un set de cocina práctico y resistente, ideal para equipar tu hogar o renovar los utensilios que usas todos los días.",
      caracteristicas: [
        "Set de 12 piezas para cocinar.",
        "Material resistente y duradero.",
        "Mangos ergonómicos.",
        "Fácil de limpiar y de guardar.",
        "Apto para el uso diario en el hogar.",
      ],
      imagenes: [
        {
          src: "https://res.cloudinary.com/pejob7cw/image/upload/v1791491040/set_de_cocina.jpg",
          alt: "Set de cocina, vista completa",
        },
        {
          src: "../img/olla.png",
          alt: "Set de cocina, vista lateral",
        },
        {
          src: "../img/cuchillos.png",
          alt: "Set de cocina, detalle de las piezas",
        },
      ],
    },
  };

  // Leer el producto desde la URL.
  const parametros = new URLSearchParams(window.location.search);
  const idProducto = parametros.get("producto");

  const producto = productos[idProducto] || productos[PRODUCTO_POR_DEFECTO];

  // Elementos de la página que se van a llenar.
  const migasCategoria = document.querySelector("#migas-categoria");
  const migasProducto = document.querySelector("#migas-producto");
  const categoriaDetalle = document.querySelector("#producto-categoria");
  const nombre = document.querySelector("#producto-nombre");
  const modelo = document.querySelector("#producto-modelo");
  const precio = document.querySelector("#producto-precio");
  const descripcion = document.querySelector("#producto-descripcion");
  const listaCaracteristicas = document.querySelector(
    "#producto-caracteristicas",
  );
  const imagenPrincipal = document.querySelector("#imagen-principal");
  const imagenesMiniaturas = document.querySelectorAll(".miniatura img");

  // Textos.
  document.title = producto.nombreCorto + " | SIMAN.SV";
  migasCategoria.textContent = producto.categoria;
  migasProducto.textContent = producto.nombreCorto;
  categoriaDetalle.textContent = producto.categoriaDetalle;
  nombre.textContent = producto.nombre;
  modelo.textContent = producto.modelo;
  precio.textContent = producto.precio;
  descripcion.textContent = producto.descripcion;

  // Características.
  listaCaracteristicas.innerHTML = "";

  producto.caracteristicas.forEach((texto) => {
    const item = document.createElement("li");
    const icono = document.createElement("i");

    icono.className = "fas fa-check";

    item.appendChild(icono);
    item.appendChild(document.createTextNode(" " + texto));

    listaCaracteristicas.appendChild(item);
  });

  // Imágenes: la principal y las miniaturas.
  imagenPrincipal.src = producto.imagenes[0].src;
  imagenPrincipal.alt = producto.imagenes[0].alt;

  imagenesMiniaturas.forEach((imagen, indice) => {
    const datos = producto.imagenes[indice];

    if (datos) {
      imagen.src = datos.src;
      imagen.alt = datos.alt;
    }
  });
})();