function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    Client.checkForName(formText);

    console.log('::: Form Submitted :::');

    fetch('http://localhost:8081/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: 'Hello, world!',
    });
}

export { handleSubmit };
