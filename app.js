const app = Vue.createApp({
    // root component
    // data, functions, template...
    //template: '<h2>I am the template</h2>'

    // data
    data() {
        return {
            url: 'https://google.com',
            showBooks: true,
            books: [
                {
                    title: 'The Final Empire',
                    author: 'Brandon Sanderson',
                    img: 'assets/1.jpg',
                    isFav: false
                },
                {
                    title: 'Harry Potter',
                    author: 'J.K Rowling',
                    img: 'assets/2.jpg',
                    isFav: true
                },
                {
                    title: '1Q84',
                    author: 'Haruki Murakami',
                    img: 'assets/3.jpg',
                    isFav: true
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
