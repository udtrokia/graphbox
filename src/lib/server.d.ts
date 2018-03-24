declare class Serve {
    fn: object;
    req: object;
    res: object;
    constructor(req: object, res: object, fn: object);
    run(): void;
}
export default Serve;
