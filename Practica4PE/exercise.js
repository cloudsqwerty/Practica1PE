function procesoOrdenarComida(orden) {
    return new Promise((resolve, reject) => {
      // Simula el tiempo que toma procesar la orden (ej. 2 segundos)
      setTimeout(() => {
        // Revisa si la orden es valida (requiere de informacion)
        if (!orden.customerName && !orden.foodItem) {
          reject(new Error("Orden invalida: falta informacion"));

        } else {
          // Simula un proceso logico de la orden (ej. revisar el inventario, etc.)
          if (Math.random() < 0.8) {
            // La orden fue exitosa
            resolve(`La orden de ${orden.foodItem} para ${orden.customerName} se realizo con exito.`);
          } else {
            // La orden fallo (no disponible)
            reject(new Error("Orden fallida: no disponible."));
          }
        }
      }, 2000);
    });
  }

  const orden = {customerName: "Isaac", foodItem: "Pizza"};
  procesoOrdenarComida(orden)
    .then((message) => console.log(message))
    .catch((error) => console.error(error));