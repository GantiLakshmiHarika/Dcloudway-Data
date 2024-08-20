function showContent(sectionId) {
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
    var body = document.body;
    switch (sectionId) {
        case 'dataCollection':
            body.style.backgroundImage = "url('https://example.com/path/to/dataCollection-bg.jpg')";
            break;
        case 'dataScraping':
            body.style.backgroundImage = "url('https://example.com/path/to/dataScraping-bg.jpg')";
            break;
        case 'dataAnalysis':
            body.style.backgroundImage = "url('https://example.com/path/to/dataAnalysis-bg.jpg')";
            break;
        case 'dataInterpretation':
            body.style.backgroundImage = "url('https://example.com/path/to/dataInterpretation-bg.jpg')";
            break;
        case 'dataRecommendation':
            body.style.backgroundImage = "url('https://example.com/path/to/dataRecommendation-bg.jpg')";
            break;
        default:
            body.style.backgroundImage = "url('https://example.com/path/to/default-bg.jpg')";
    }
}

window.onload = function() {
    var sections = document.getElementsByClassName('content-section');
    for (var i = 1; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    showContent('dataCollection');
};
