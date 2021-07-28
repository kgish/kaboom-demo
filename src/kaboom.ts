// NOTE: Using parcel, so added an alias to package.json
import kaboom from 'kaboom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const k:any = kaboom({
    width: 320,
    height: 240,
    scale: 1,
    clearColor: [0, 0, 0, 1]
});

export default k;
