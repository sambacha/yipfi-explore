declare module namespace {

    export interface Input {
        indexed: boolean;
        internalType: string;
        name: string;
        type: string;
    }

    export interface Output {
        internalType: string;
        name: string;
        type: string;
    }

    export interface RootObject {
        anonymous: boolean;
        inputs: Input[];
        name: string;
        type: string;
        constant?: boolean;
        outputs: Output[];
        payable?: boolean;
        stateMutability: string;
    }

}

