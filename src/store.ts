import {EventEmitter} from "events";

/**
 * Events fired by the store.
 */
export enum StoreEvent {
    StateUpdated = "stateUpdated"
}

export default class Store<T extends {} = {}> extends EventEmitter {
    protected state: T;

    public constructor(initialState: T) {
        super();

        this.state = initialState;
    }

    /**
     * Retrieve the current state.
     */
    public get(): Readonly<T> {
        return this.state;
    }

    /**
     * Partially (or fully) update the store's state.
     */
    public update(changes: Partial<T>): this {
        // Patch the state.
        this.state = {
            ...this.state,
            ...changes
        };

        // Emit the updated event.
        this.emit(StoreEvent.StateUpdated);

        return this;
    }
}
