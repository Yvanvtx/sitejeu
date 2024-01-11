function checkKeyword() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var hiddenButton = document.getElementById('hiddenButton');

    if (searchInput.includes('bite')) {
        hiddenButton.style.display = 'block';
    } else {
        hiddenButton.style.display = 'none';
    }
}

function checkEnterKey(event) {
    if (event.key === 'Enter') {
        checkKeyword();
        if (document.getElementById('hiddenButton').style.display === 'block') {
            showHiddenContent();
        }
    }
}

function showHiddenContent() {
    var resultText = document.getElementById('resultText');
    var nextButton = document.getElementById('nextButton');

    resultText.innerText = "C'est la première fois que tu réussis un truc dans ta vie ?";
    resultText.style.display = 'block';
    nextButton.style.display = 'block';
}

function openNextPage() {
    window.open('nextPage.html', '_blank');
}
