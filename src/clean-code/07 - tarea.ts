(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
    
    type HtmlElementProps = {
        id: string;
        type: HtmlType;
    }
    class HtmlElement {
        public id: string;
        public type: HtmlType;
        constructor(
            {id, type}: HtmlElementProps
        ) {
            this.id = id;
            this.type = type;
        }
    }

    type InputAttributesProps = {
        value: string;
        placeholder: string;
    }
    class InputAttributes  {
        public value: string;
        public placeholder: string;
        constructor({
            placeholder, value
        }: InputAttributesProps) {
            this.value = value;
            this.placeholder = placeholder;
        }
    }

    class InputEvents {
        public value: string;
        constructor(
            value: string
        ){
            this.value = value;
        };

        setFocus() {};
        getValue() {
            return this.value;
        };
        isActive() {};
        removeValue() {
            return '';
        };
    }

    type InputElementProps = {
        id: string;
        type: HtmlType;
        value: string;
        placeholder: string;
    }
    class InputElement{
        public htmlElement: HtmlElement;
        public inputAtributtes: InputAttributes;
        public inputEvents: InputEvents;
        constructor({
            id, type,
            placeholder, value
        }: InputElementProps){
            this.htmlElement= new HtmlElement({id, type});
            this.inputAtributtes = new InputAttributes({placeholder, value});
            this.inputEvents = new InputEvents(value);
        }
    }

    const inputElement = new InputElement({
        id: '1',
        placeholder: 'Holardas',
        type: 'input',
        value: '25'
    });

    console.log({ inputElement });
    console.log(inputElement.inputEvents.getValue())
    console.log(inputElement.inputEvents.removeValue())
})()