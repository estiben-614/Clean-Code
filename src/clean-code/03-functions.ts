(() => {
    type MovieProps =  {
        title: string,
        description: string,
        rating: number,
        cast: string[],
    };

    type Actor = {
        fullName: string,
        birthdate: Date,
    };

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getCastByMovieId( id: string ) {
        console.log({ id });
    }

    function getActorById( id: string ) {
        console.log({ id });
    }
    
    function createMovie({
        title,
        description,
        rating,
        cast
    }: MovieProps) {
        console.log({ title, description, rating, cast });
    }

    function createActor({fullName, birthdate}: Actor ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    


})();





