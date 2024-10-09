import { Audi } from './03-liskov-b';
import { Honda } from './03-liskov-b';
import { Toyota } from './03-liskov-b';
import { Tesla } from './03-liskov-b';
import { Vehicle } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( cars: (Vehicle)[] ) => {
        
        for (const car of cars) {
         
            console.log(car.getNumbersOfSeats(), car.constructor.name)

        }
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
    ];


    printCarSeats( cars );

})();