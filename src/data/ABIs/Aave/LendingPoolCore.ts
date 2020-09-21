declare module LendingPoolCore {

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
        payable?: boolean;
        stateMutability: string;
        constant?: boolean;
        outputs: Output[];
    }

}

