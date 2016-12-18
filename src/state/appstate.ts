import { observable } from "mobx";

export interface IAppState {
    source: string;
}

class AppState implements IAppState {
    @observable
    public source: string = "lulz";

    public constructor() {
        setInterval(
            (): void => {
                this.source += " lulz";
            },
            1000);
    }
}

export class AppStateFactory {
    public createInitialState(): IAppState {
        return new AppState();
    }
}
