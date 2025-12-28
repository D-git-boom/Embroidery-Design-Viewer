// let a = document.getElementById("files");
// a.addEventListener("click",function(){
//     window.alert("This Format Currently Not Supported");
// });

document.getElementById("files").addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const fileName = file.name;
        const fileExtension = fileName.split('.').pop().toLowerCase();
        const unsupportedFormats = ['EMB', 'DGT', 'vf3'];

        if (unsupportedFormats.includes(fileExtension)) {
            // Show SweetAlert2 alert
            Swal.fire({
                icon: 'error',
                title: 'Unsupported Format',
                text: "The selected format ." + fileExtension.toUpperCase() + " is not supported!",
            });

            this.value = "";  // Clear the file input
        }
    }
});