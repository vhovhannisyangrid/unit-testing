import unitTestingTask from './uk';

describe('unitTestingTask.lang("uk")', () => {
    let lang;

    beforeAll(() => {
        lang = unitTestingTask.lang('uk');
    });

    test('should return the correct full month name in nominative case', () => {
        const date = new Date(2025, 0);
        expect(lang.months(date, 'MMMM')).toBe('січень');
    });

    test('should return the correct full month name in accusative case', () => {
        const date = new Date(2025, 0);
        expect(lang.months(date, 'dd MMMM')).toBe('січня');
    });

    test('should return the correct short month name', () => {
        const date = new Date(2025, 0);
        expect(lang.monthsShort(date)).toBe('січ');
    });

    test('should return the correct full weekday name', () => {
        const date = new Date(2025, 0, 5);
        expect(lang.weekdays[date.getDay()]).toBe('неділя');
    });

    test('should return the correct short weekday name', () => {
        const date = new Date(2025, 0, 5);
        expect(lang.weekdaysShort[date.getDay()]).toBe('нд');
    });

    test('should return the correct minimal weekday name', () => {
        const date = new Date(2025, 0, 5);
        expect(lang.weekdaysMin[date.getDay()]).toBe('нд');
    });

    test('should return "ночі" for hours less than 4', () => {
        expect(lang.meridiem(3)).toBe('ночі');
    });

    test('should return "ранку" for hours between 4 and 12', () => {
        expect(lang.meridiem(8)).toBe('ранку');
    });

    test('should return "дня" for hours between 12 and 17', () => {
        expect(lang.meridiem(14)).toBe('дня');
    });

    test('should return "вечора" for hours between 17 and 24', () => {
        expect(lang.meridiem(18)).toBe('вечора');
    });
});
