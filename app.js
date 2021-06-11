const app = Vue.createApp({
    // root component
    // data, functions, template...
    //template: '<h2>I am the template</h2>'

    // data
    data() {
        return {
            url: 'https://google.com',
            showFavBooks: true,
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
        toggleshowFavBooks() {
            this.showFavBooks = !this.showFavBooks;
        },
        toggleFav(book) {
            book.isFav = !book.isFav;
        }
    },
    computed: {
        filteredBooks() {
            if(this.showFavBooks) {
                // Show only favorite books
                return this.books.filter((book) => book.isFav);
            } else {
                // Show all books
                return this.books;
            }
        }
    }
})
 
app.mount('#app')
