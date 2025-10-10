export function redErr(message) {
    const text = String(message);
    const supportsColor =
        typeof process !== 'undefined' &&
        process.stdout?.isTTY &&
        !process.env.NO_COLOR;

    if (!supportsColor) return `⛔ ${text}`;

    const RED   = '\x1b[31m';
    const BOLD  = '\x1b[1m';
    const RESET = '\x1b[0m';

    return `${BOLD}${RED}⛔ ${text}${RESET}`;
}