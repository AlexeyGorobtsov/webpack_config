class Helpers {
    constructor() {
        this.helpers = {}
    }

    /**
     * краткая запись выбора элементов dom
     * @param selector {string}
     * @param all при указании параметра all использует querySelectorAll();
     * @returns {*} {*} (пример query('myClass', 'all') вернет document.querySelectorAll('myClass');
     */
    query(selector, all = '') {
        if (all !== '') {
            return document.querySelectorAll(selector);
        } else {
            return document.querySelectorAll(selector)[0];
        }
    };

}