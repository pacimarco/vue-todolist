var app = new Vue(
    {
        el: '#app',
        myClass: 'striked',
        data: {
            newToDo: '',
            toDos: [
                {
                    text: 'andare a pesca',
                    'done': true,
                },
                {
                    text: 'prendere moto',
                    'done': false,
                },
                {
                    text: 'prendere biglietto treno',
                    'done': false,
                },

            ]
        },
        methods: {
            eliminaToDo(indice) {
                this.toDos.splice(indice, 1);
            },

            addToDo(){

                const todo = {
                    text: this.newToDo,
                    'done': false,
                };

                this.toDos.push(todo);
                this.newToDo = '';
            },

            


        }
    }
);