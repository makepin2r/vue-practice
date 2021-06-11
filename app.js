const app = Vue.createApp({
    // root component
    // data, functions, template...
    //template: '<h2>I am the template</h2>'

    // data
    data() {
        return {
            showBooks: true,
            books: [
                {
                    title: 'The Final Empire',
                    author: 'Brandon Sanderson'
                },
                {
                    title: 'Harry Potter',
                    author: 'J.K Rowling'
                },
                {
                    title: '1Q84',
                    author: 'Haruki Murakami'
                },
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data) {
            console.log(e, e.type);
            if(data) {
                console.log(data);
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})
 
app.mount('#app')
