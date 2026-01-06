const getStoredBooks = () => {
    const storedBooksSTR = localStorage.getItem('readList');
    if(storedBooksSTR){
        return JSON.parse(storedBooksSTR);
    }
    return [];
}
const addToStoreDB = (id) => {
    const storedBooksSTR = getStoredBooks();
    //check if the book already exists
    if(storedBooksSTR.includes(id)){
        //book already exists, do not add again
        alert('Book already marked as read.');
        return;
    }
    //add the book ID to the array
    storedBooksSTR.push(id);
    //update local storage
    localStorage.setItem('readList', JSON.stringify(storedBooksSTR));
}

export { addToStoreDB, getStoredBooks };