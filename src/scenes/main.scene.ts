import k from '../kaboom';


export default function Main() {
    const {
        add,
        pos,
        rect,
        color,
        origin
    } = k;

    add([
        pos(8, 8),
        rect(16, 16),
        color(0, 1, 0, 1),
        origin('center')
    ]);
}