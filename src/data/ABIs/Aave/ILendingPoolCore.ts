export interface LendingPoolCore {
  anonymous?: boolean | null;
  inputs?: (InputsEntity | null)[] | null;
  name?: string | null;
  type: string;
  payable?: boolean | null;
  stateMutability?: string | null;
  constant?: boolean | null;
  outputs?: (OutputsEntityOrInputsEntity | null)[] | null;
}
export interface InputsEntity {
  indexed?: boolean | null;
  internalType: string;
  name: string;
  type: string;
}
export interface OutputsEntityOrInputsEntity {
  internalType: string;
  name: string;
  type: string;
}
