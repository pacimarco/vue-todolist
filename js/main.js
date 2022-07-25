var app = new Vue(
    {
        el: '#app',
        myClass: 'striked',
        data: {
            newToDo: '',
            toDos: [
                'andare al lago',
                'prendere la moto',
                'andare al cinema',
                'andare al parco',

            ]
        },
        methods: {
            eliminaToDo(indice) {
                this.toDos.splice(indice, 1);
            },

            addToDo(){
                this.toDos.push(this.newToDo);
                this.newToDo = '';
            },

            changeClass(){
                if (this.myClass == 'striked') {
                    this.myClass = 'unstriked';
                }
                else {
                    this.myClass = 'striked';
                }
            }


        }
    }
);