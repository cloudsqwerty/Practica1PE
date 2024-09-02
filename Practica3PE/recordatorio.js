function establecerRecordatorio(fechaHoraRecordatorio, mensaje) {
    const ahora = new Date();
    const horaRecordatorio = new Date(fechaHoraRecordatorio);
    const diferenciaTiempo = horaRecordatorio.getTime() - ahora.getTime();
    if (diferenciaTiempo > 0 ) {
        setTimeout(() => {
            const year = horaRecordatorio.getFullYear();
            const month = horaRecordatorio.getMonth();
            const day = horaRecordatorio.getDay();
            const hours = horaRecordatorio.getHours();
            const minutes = horaRecordatorio.getMinutes();
            const seconds = horaRecordatorio.getSeconds();

            console.log(`Recordatorio para ${day}/${month}/${year} ${hours}:${minutes}:${seconds}; mensaje`);
            
        }, diferenciaTiempo);
    } else {
        console.log("La fecha y horas ya han pasado.");
        
    }
}
establecerRecordatorio("2024-08-29T18:30:50", "Es hora de la practica!")

