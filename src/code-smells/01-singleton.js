const Singleton = (function () {
    
    let instance;

    function createInstance() {
        return new Object('I am the instance');
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

function main() {

    //Es la misma instancia
    //Instancia1 crea la instancia, y la 2 la retorna 
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();

    console.log('Misma instancia? ', (instance1 === instance2));
}

main();