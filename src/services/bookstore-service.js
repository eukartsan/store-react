export default class BookstoreService {

    getBooks() {
        return [
            {
                id: 1,
                title: '1984',
                author: 'George Orwell',
                price: 30,
                coverImage: 'https://imgc.allpostersimages.com/img/print/u-g-F5TYBR0.jpg'},
            {
                id: 2,
                title: 'Dracula',
                author: 'Bram Stoker',
                price: 45,
                coverImage: 'https://imgc.allpostersimages.com/img/print/u-g-F5TYBR0.jpg'}
        ];
    }

}