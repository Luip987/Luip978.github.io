let currentSection = null;

function showSection(sectionId) {
    console.log(`Mostrando sección: ${sectionId}`);
    if (currentSection) {
        document.getElementById(currentSection).classList.remove('visible');
    }
    const newSection = document.getElementById(sectionId);
    newSection.classList.add('visible');
    currentSection = sectionId;
}
