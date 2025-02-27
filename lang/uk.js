const unitTestingTask = {
    lang(language, config) {
        if (language === 'uk') {
            if (config) {
                this.ukConfig = config;
            }
            return this.ukConfig;
        }
    }
};

unitTestingTask.lang('uk', {
    _months: {
        nominative: 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень'.split('_'),
        accusative: 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня'.split('_')
    },
    months: function (date, format) {
        const nounCase = /dd?\s*MMMM?/.test(format) ? 'accusative' : 'nominative';
        return this._months[nounCase][date.getMonth()];
    },
    _monthsShort: 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд'.split('_'),
    monthsShort: function (date) {
        return this._monthsShort[date.getMonth()];
    },
    weekdays: 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота'.split('_'),
    weekdaysShort: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    weekdaysMin: 'нд_пн_вт_ср_чт_пт_сб'.split('_'),
    meridiem: function (hour) {
        if (hour < 4) {
            return 'ночі';
        } else if (hour < 12) {
            return 'ранку';
        } else if (hour < 17) {
            return 'дня';
        } else {
            return 'вечора';
        }
    }
});

export default unitTestingTask;
