export type StateListener<T extends {} = {}> = (state: T) => void;

export default interface IStateTracker {
    // TODO
    onUpdated: StateListener;
}
