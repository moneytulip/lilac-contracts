/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AmplificationUtils,
  AmplificationUtilsInterface,
} from "../AmplificationUtils";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "initialTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "futureTime",
        type: "uint256",
      },
    ],
    name: "RampA",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "currentA",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "time",
        type: "uint256",
      },
    ],
    name: "StopRampA",
    type: "event",
  },
  {
    inputs: [],
    name: "A_PRECISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_A",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61062861003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061007c5760003560e01c8063c9b64dcb1161005a578063c9b64dcb146100d2578063d011f918146100e5578063f14e211e146100ed57600080fd5b8063396984151461008157806358fdd79b1461009d578063b0a14cfc146100bf575b600080fd5b61008b620f424081565b60405190815260200160405180910390f35b8180156100a957600080fd5b506100bd6100b8366004610527565b61010d565b005b61008b6100cd366004610553565b610371565b61008b6100e0366004610553565b61038d565b61008b606481565b8180156100f957600080fd5b506100bd610108366004610553565b610398565b600283015461011f9062015180610455565b4210156101735760405162461bcd60e51b815260206004820152601f60248201527f57616974203120646179206265666f7265207374617274696e672072616d700060448201526064015b60405180910390fd5b6101804262127500610455565b8110156101cf5760405162461bcd60e51b815260206004820152601660248201527f496e73756666696369656e742072616d702074696d6500000000000000000000604482015260640161016a565b6000821180156101e15750620f424082105b61022d5760405162461bcd60e51b815260206004820181905260248201527f667574757265415f206d757374206265203e203020616e64203c204d41585f41604482015260640161016a565b600061023884610468565b9050600061024784606461050f565b9050818110156102b0578161025d82600261050f565b10156102ab5760405162461bcd60e51b815260206004820152601560248201527f667574757265415f20697320746f6f20736d616c6c0000000000000000000000604482015260640161016a565b61030a565b6102bb82600261050f565b81111561030a5760405162461bcd60e51b815260206004820152601560248201527f667574757265415f20697320746f6f206c617267650000000000000000000000604482015260640161016a565b8185556001850181905542600286018190556003860184905560408051848152602081018490528082019290925260608201859052517fa2b71ec6df949300b59aab36b55e189697b750119dd349fcfa8c0f779e83c2549181900360800190a15050505050565b6000610387606461038184610468565b9061051b565b92915050565b600061038782610468565b428160030154116103eb5760405162461bcd60e51b815260206004820152601760248201527f52616d7020697320616c72656164792073746f70706564000000000000000000604482015260640161016a565b60006103f682610468565b808355600183018190554260028401819055600384018190556040519192507f46e22fb3709ad289f62ce63d469248536dbc78d82b84a3d7e74ad606dc2019389161044991848252602082015260400190565b60405180910390a15050565b60006104618284610582565b9392505050565b6003810154600182015460009190428211156104615760028401548454808311156104d357610497828561059a565b6104a1834261059a565b6104ab838661059a565b6104b591906105b1565b6104bf91906105d0565b6104c99082610582565b9695505050505050565b6104dd828561059a565b6104e7834261059a565b6104f1858461059a565b6104fb91906105b1565b61050591906105d0565b6104c9908261059a565b600061046182846105b1565b600061046182846105d0565b60008060006060848603121561053c57600080fd5b505081359360208301359350604090920135919050565b60006020828403121561056557600080fd5b5035919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156105955761059561056c565b500190565b6000828210156105ac576105ac61056c565b500390565b60008160001904831182151516156105cb576105cb61056c565b500290565b6000826105ed57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220077f10cbcf2482929e27939305d61e2c7264612b64a59f9294b7e9d5c6de7a1664736f6c63430008090033";

type AmplificationUtilsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AmplificationUtilsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AmplificationUtils__factory extends ContractFactory {
  constructor(...args: AmplificationUtilsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AmplificationUtils";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AmplificationUtils> {
    return super.deploy(overrides || {}) as Promise<AmplificationUtils>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AmplificationUtils {
    return super.attach(address) as AmplificationUtils;
  }
  connect(signer: Signer): AmplificationUtils__factory {
    return super.connect(signer) as AmplificationUtils__factory;
  }
  static readonly contractName: "AmplificationUtils";
  public readonly contractName: "AmplificationUtils";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AmplificationUtilsInterface {
    return new utils.Interface(_abi) as AmplificationUtilsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AmplificationUtils {
    return new Contract(address, _abi, signerOrProvider) as AmplificationUtils;
  }
}
