function toggleDropdown(element) {
    const content = element.nextElementSibling;
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        element.classList.remove('open');
    } else {
        content.classList.add('open');
        element.classList.add('open');
    }
}