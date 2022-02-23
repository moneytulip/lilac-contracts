/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ReentrancyGuardUpgradeable,
  ReentrancyGuardUpgradeableInterface,
} from "../ReentrancyGuardUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "_initialized",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ReentrancyGuardUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): ReentrancyGuardUpgradeableInterface {
    return new utils.Interface(_abi) as ReentrancyGuardUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ReentrancyGuardUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ReentrancyGuardUpgradeable;
  }
}
