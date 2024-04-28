const extractText= () => {
    const fileInput= document.getElementById('imgInput');
    const outputDiv= document.getElementById('output');

    const imagesFile= fileInput.files[0];
    if(!imagesFile){
        outputDiv.textContent='Please select an image file.'
        return;
}
Tesseract.recognize(
    imagesFile,
    'eng'
).then(({data}) =>{
    outputDiv.textContent= data.text;
}).catch((error) =>{
    console.error('Error',error);
    outputDiv.textContent= 'Error';
})
}