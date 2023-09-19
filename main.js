// your code goes here

function book(Title,author,MSRP,Genre,NumbrOfPages,Description) {
return {
     Title: Title,
    author:author,
    MSRP:MSRP,
    Genre:Genre,
    NumbrOfPages:NumbrOfPages,
    Description:Description

}
var book1=book('HarHarry Potter and the Sorcerer s Stonery Potter','J.K. Rowling' ,'$24.99' ,'fantasy', 14 ,'fairy tail')
}

var book1=book()
function displayBook(book){
    return book.Title +' '+ book.author+ ' '+book.Genre+ ' ' + book.MSRP
}

var book2=book('Romeo and Juliet','William Shakespeare' ,'$26.99' ,'romance', 16 ,'adventure')
var book3=book('Structure and Interpretation of Computer Programs','Gerald Jay Sussman, Hal Abelson','40.99$','fantasy',21,'adventure')
var books=[book1,book2,book3]


function displayBooks(array) {
    var result=''
    for (var i = 0; i < array.length; i++) {
        result=' '+displayBook(array[i])
    console.log(result)
    
}
}
