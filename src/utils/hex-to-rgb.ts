export function hexToRgba(hex: string, alpha = 1): string {
    if (hex?.length !== 7) {
        throw new Error(`hex 코드는 '#'포함 7자리 형식만 지원됩니다.`);
    }
    if (alpha > 1 || alpha < 0) {
        throw new Error('alpha 값이 올바르지 않습니다. 1 ~ 0 사이.');
    }

    const red = parseInt(hex.slice(1, 3), 16);
    const green = parseInt(hex.slice(3, 5), 16);
    const blue = parseInt(hex.slice(5, 7), 16);

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
