(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const arhivos = filesToEvaluate.map( (file) => file.flagged );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy
    const dateToday = new Date();
    
    // días transcurridos 
    const elapsedDays: number = dateToday.getDay();
    
    // número de archivos en un directorio 
    const filesNumber = 33;
    
    // primer nombre 
    const firstName = 'Fernando';
    
    // primer apellido 
    const firstLastName = 'Herrera';

    // días desde la última modificación 
    const daysLastModification = 12;
    
    // cantidad máxima de clases por estudiante 
    const maxStundentsPerClass = 6;


})();




