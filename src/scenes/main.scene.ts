import k from '../kaboom';

export const mainScene = () => {
    k.add([
        k.text('DEMO!', 32),
        k.pos(k.width()/2, k.height()/2),
        k.origin('center')
    ]);
};
