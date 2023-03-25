const progress = document.getElementById("progress");

document.forms.form.addEventListener("submit", e => {
    e.preventDefault();

    let xhr = new XMLHttpRequest();
    let formData = new FormData(document.forms.form);
    
    xhr.upload.addEventListener("progress", e => {
        progress.value = e.loaded / e.total;
    });

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    xhr.send(formData);
});