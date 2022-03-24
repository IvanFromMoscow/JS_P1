const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);
    if (numInputs) {
        numInputs.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/, '');
            });
        });
    }
};
export default checkNumInputs;