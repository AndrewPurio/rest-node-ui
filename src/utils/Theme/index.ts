const DARK = "dark"

export const toggleDarkMode = (document: Document, isDark?: boolean) => {
    document.body.classList.toggle(DARK, isDark);
};

export const isDarkMode = (document: Document) => {
    return document.body.classList.contains(DARK)
}

export default toggleDarkMode;
