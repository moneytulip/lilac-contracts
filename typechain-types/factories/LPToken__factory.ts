/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LPToken, LPTokenInterface } from "../LPToken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611408806100206000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c806370a08231116100b257806395d89b4111610081578063a9059cbb11610066578063a9059cbb14610278578063dd62ed3e1461028b578063f2fde38b146102c457600080fd5b806395d89b411461025d578063a457c2d71461026557600080fd5b806370a08231146101fe578063715018a61461022757806379cc67901461022f5780638da5cb5b1461024257600080fd5b8063313ce5671161010957806340c10f19116100ee57806340c10f19146101c357806342966c68146101d85780634cd88b76146101eb57600080fd5b8063313ce567146101a157806339509351146101b057600080fd5b806306fdde031461013b578063095ea7b31461015957806318160ddd1461017c57806323b872dd1461018e575b600080fd5b6101436102d7565b6040516101509190611106565b60405180910390f35b61016c610167366004611177565b610369565b6040519015158152602001610150565b6035545b604051908152602001610150565b61016c61019c3660046111a1565b610381565b60405160128152602001610150565b61016c6101be366004611177565b6103a5565b6101d66101d1366004611177565b6103e4565b005b6101d66101e63660046111dd565b61049e565b61016c6101f9366004611299565b6104ab565b61018061020c3660046112fd565b6001600160a01b031660009081526033602052604090205490565b6101d6610596565b6101d661023d366004611177565b6105fc565b6097546040516001600160a01b039091168152602001610150565b610143610611565b61016c610273366004611177565b610620565b61016c610286366004611177565b6106ca565b61018061029936600461131f565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6101d66102d23660046112fd565b6106d8565b6060603680546102e690611352565b80601f016020809104026020016040519081016040528092919081815260200182805461031290611352565b801561035f5780601f106103345761010080835404028352916020019161035f565b820191906000526020600020905b81548152906001019060200180831161034257829003601f168201915b5050505050905090565b6000336103778185856107b7565b5060019392505050565b60003361038f858285610910565b61039a8585856109a2565b506001949350505050565b3360008181526034602090815260408083206001600160a01b038716845290915281205490919061037790829086906103df9087906113a3565b6107b7565b6097546001600160a01b031633146104435760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b806104905760405162461bcd60e51b815260206004820152601660248201527f4c50546f6b656e3a2063616e6e6f74206d696e74203000000000000000000000604482015260640161043a565b61049a8282610bc4565b5050565b6104a83382610caf565b50565b60008054610100900460ff166104c75760005460ff16156104cb565b303b155b61053d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840161043a565b600054610100900460ff1615801561055f576000805461ffff19166101011790555b610567610e3d565b6105718484610ea8565b610579610f3a565b60019150801561058f576000805461ff00191690555b5092915050565b6097546001600160a01b031633146105f05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161043a565b6105fa6000610faa565b565b610607823383610910565b61049a8282610caf565b6060603780546102e690611352565b3360008181526034602090815260408083206001600160a01b0387168452909152812054909190838110156106bd5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f000000000000000000000000000000000000000000000000000000606482015260840161043a565b61039a82868684036107b7565b6000336103778185856109a2565b6097546001600160a01b031633146107325760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161043a565b6001600160a01b0381166107ae5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161043a565b6104a881610faa565b6001600160a01b0383166108325760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161043a565b6001600160a01b0382166108ae5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f7373000000000000000000000000000000000000000000000000000000000000606482015260840161043a565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b03838116600090815260346020908152604080832093861683529290522054600019811461099c578181101561098f5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161043a565b61099c84848484036107b7565b50505050565b6001600160a01b038316610a1e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f6472657373000000000000000000000000000000000000000000000000000000606482015260840161043a565b6001600160a01b038216610a9a5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f6573730000000000000000000000000000000000000000000000000000000000606482015260840161043a565b610aa5838383611014565b6001600160a01b03831660009081526033602052604090205481811015610b345760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161043a565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290610b6b9084906113a3565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bb791815260200190565b60405180910390a361099c565b6001600160a01b038216610c1a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161043a565b610c2660008383611014565b8060356000828254610c3891906113a3565b90915550506001600160a01b03821660009081526033602052604081208054839290610c659084906113a3565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610d2b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f7300000000000000000000000000000000000000000000000000000000000000606482015260840161043a565b610d3782600083611014565b6001600160a01b03821660009081526033602052604090205481811015610dc65760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f6365000000000000000000000000000000000000000000000000000000000000606482015260840161043a565b6001600160a01b0383166000908152603360205260408120838303905560358054849290610df59084906113bb565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610903565b505050565b600054610100900460ff166105fa5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161043a565b600054610100900460ff16610f135760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161043a565b8151610f2690603690602085019061106d565b508051610e3890603790602084019061106d565b600054610100900460ff16610fa55760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b606482015260840161043a565b6105fa335b609780546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216301415610e385760405162461bcd60e51b815260206004820152601e60248201527f4c50546f6b656e3a2063616e6e6f742073656e6420746f20697473656c660000604482015260640161043a565b82805461107990611352565b90600052602060002090601f01602090048101928261109b57600085556110e1565b82601f106110b457805160ff19168380011785556110e1565b828001600101855582156110e1579182015b828111156110e15782518255916020019190600101906110c6565b506110ed9291506110f1565b5090565b5b808211156110ed57600081556001016110f2565b600060208083528351808285015260005b8181101561113357858101830151858201604001528201611117565b81811115611145576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461117257600080fd5b919050565b6000806040838503121561118a57600080fd5b6111938361115b565b946020939093013593505050565b6000806000606084860312156111b657600080fd5b6111bf8461115b565b92506111cd6020850161115b565b9150604084013590509250925092565b6000602082840312156111ef57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261121d57600080fd5b813567ffffffffffffffff80821115611238576112386111f6565b604051601f8301601f19908116603f01168101908282118183101715611260576112606111f6565b8160405283815286602085880101111561127957600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156112ac57600080fd5b823567ffffffffffffffff808211156112c457600080fd5b6112d08683870161120c565b935060208501359150808211156112e657600080fd5b506112f38582860161120c565b9150509250929050565b60006020828403121561130f57600080fd5b6113188261115b565b9392505050565b6000806040838503121561133257600080fd5b61133b8361115b565b91506113496020840161115b565b90509250929050565b600181811c9082168061136657607f821691505b6020821081141561138757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156113b6576113b661138d565b500190565b6000828210156113cd576113cd61138d565b50039056fea26469706673582212201ae636aefe54f5f11922b5de0a1b0360922d49fd34e039204a61716e2367eff364736f6c63430008090033";

type LPTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LPTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LPToken__factory extends ContractFactory {
  constructor(...args: LPTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "LPToken";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LPToken> {
    return super.deploy(overrides || {}) as Promise<LPToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LPToken {
    return super.attach(address) as LPToken;
  }
  connect(signer: Signer): LPToken__factory {
    return super.connect(signer) as LPToken__factory;
  }
  static readonly contractName: "LPToken";
  public readonly contractName: "LPToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LPTokenInterface {
    return new utils.Interface(_abi) as LPTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LPToken {
    return new Contract(address, _abi, signerOrProvider) as LPToken;
  }
}