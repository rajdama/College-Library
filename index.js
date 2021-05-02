// constructor
function Book(name, author, type) {
    this.name = name
    this.author = author
    this.type = type
}

//display constructor
function Display() {

}
Display.prototype.add = function (book) {
    console.log('Adding to ui')
    tablebody = document.getElementById('tablebody')
    let addui = `<tr>
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
  </tr>`
    tablebody.innerHTML += addui
}
Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryForm')
    libraryform.reset()
}
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true
    }
}
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message')
    let boldtype
    if (type == 'success') {
        boldtype = 'Success'
    }
    else {
        boldtype = 'Error'
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldtype}</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 5000);
}
let libraryform = document.getElementById('libraryForm')
libraryform.addEventListener('submit', libraryformsubmit)
function libraryformsubmit(e) {
    e.preventDefault()
    console.log('submited form')
    let name = document.getElementById('bookName').value
    let author = document.getElementById('author').value
    let fiction = document.getElementById('fiction')
    let programming = document.getElementById('programming')
    let cooking = document.getElementById('cooking')
    if (fiction.checked) {
        type = fiction.value
    }
    else if (programming.checked) {
        type = programming.value
    }
    else if (cooking.checked) {
        type = cooking.value
    }
    let book = new Book(name, author, type)
    console.log(book)

    let display = new Display()
    if (display.validate(book)) {
        display.add(book)
        display.clear()
        display.show('success', 'your book has been added')
    }
    else {
        display.show('danger', 'sorry your book cannot be added')
    }
}