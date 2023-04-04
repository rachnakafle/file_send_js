// Create element with <a> tag
// const link = document.createElement("a");

// Create a blog object with the file content which you want to add to the file
// const file = new Blob([content], { type: "text/plain" });

// Add file content in the object URL
// link.href = URL.createObjectURL(file);

// Add file name
// link.download = "sample.txt";

// Add click event to <a> tag to save file.
// link.click();
// URL.revokeObjectURL(link.href);


const downloadFile = () => {
    const link = document.createElement("a");
    const content = document.querySelector("textarea").value;
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "sample.txt";
    link.click();
    URL.revokeObjectURL(link.href);
 };
