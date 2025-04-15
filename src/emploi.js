// script.js

document.getElementById('searchInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const listItems = document.querySelectorAll('aside li');

    listItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Add tape en handlers on sidebar 
    const listItems = document.querySelectorAll('aside ul li');
    
    listItems.forEach(item => {
        item.addEventListener('click', function() {
            // Generate PDF filename basee a  liste "item text"
            const pdf = this.textContent
                .trim()
                .toLowerCase()
                .replace(/ /g, '_')
                .replace(/-/g, '_') + '.pdf';
            
            // Create temporary download link
            const link = document.createElement('a');
            link.href = `../pdf/${pdf}`;  // Path to your PDFs folder
            link.download = pdf;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });

    // Keep existing search functionality if any
    // ...
});