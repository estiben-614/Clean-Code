type Size = ''| 'S'|'M'|'XL';

class Product{
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = '',
    ){}

    isProductReady(): boolean {
        for(const key in this){
            console.log(typeof this[key])
            switch (typeof this[key]) {
                case 'string':
                    if(`${this[key]}`.length <= 0) throw  Error(`${key} is Empty`);
                break;
                case 'number':
                    if(+(this[key]) === 0) throw  Error(`${key} is Zero`);
                break;
                default:
                    throw Error('Method not implemented');
            }
        }

        return true;
    }

    toString(){
        if(!this.isProductReady()) return;
        return `${ this.name } (${ this.price }), ${ this.size }`
    }
}
(() => {
    const bluePants = new Product('', 2, 'S');
    console.log(bluePants.toString())
})();