/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  BasePoolAuthorization,
  BasePoolAuthorizationInterface,
} from "../BasePoolAuthorization";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "getActionId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAuthorizer",
    outputs: [
      {
        internalType: "contract IAuthorizer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class BasePoolAuthorization__factory {
  static readonly abi = _abi;
  static createInterface(): BasePoolAuthorizationInterface {
    return new utils.Interface(_abi) as BasePoolAuthorizationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasePoolAuthorization {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BasePoolAuthorization;
  }
}
