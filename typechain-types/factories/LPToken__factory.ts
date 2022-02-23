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
  "0x608060405234801561001057600080fd5b50611430806100206000396000f3fe608060405234801561001057600080fd5b50600436106101515760003560e01c80634cd88b76116100cd57806395d89b4111610081578063a9059cbb11610066578063a9059cbb146102a0578063dd62ed3e146102b3578063f2fde38b146102ec57600080fd5b806395d89b4114610285578063a457c2d71461028d57600080fd5b8063715018a6116100b2578063715018a61461024f57806379cc6790146102575780638da5cb5b1461026a57600080fd5b80634cd88b761461021357806370a082311461022657600080fd5b80633072cf6011610124578063395093511161010957806339509351146101d857806340c10f19146101eb57806342966c681461020057600080fd5b80633072cf60146101bc578063313ce567146101c957600080fd5b806306fdde0314610156578063095ea7b31461017457806318160ddd1461019757806323b872dd146101a9575b600080fd5b61015e6102ff565b60405161016b919061112e565b60405180910390f35b61018761018236600461119f565b610391565b604051901515815260200161016b565b6035545b60405190815260200161016b565b6101876101b73660046111c9565b6103a9565b6000546101879060ff1681565b6040516012815260200161016b565b6101876101e636600461119f565b6103cd565b6101fe6101f936600461119f565b61040c565b005b6101fe61020e366004611205565b6104c6565b6101876102213660046112c1565b6104d3565b61019b610234366004611325565b6001600160a01b031660009081526033602052604090205490565b6101fe6105be565b6101fe61026536600461119f565b610624565b6097546040516001600160a01b03909116815260200161016b565b61015e610639565b61018761029b36600461119f565b610648565b6101876102ae36600461119f565b6106f2565b61019b6102c1366004611347565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6101fe6102fa366004611325565b610700565b60606036805461030e9061137a565b80601f016020809104026020016040519081016040528092919081815260200182805461033a9061137a565b80156103875780601f1061035c57610100808354040283529160200191610387565b820191906000526020600020905b81548152906001019060200180831161036a57829003601f168201915b5050505050905090565b60003361039f8185856107df565b5060019392505050565b6000336103b7858285610938565b6103c28585856109ca565b506001949350505050565b3360008181526034602090815260408083206001600160a01b038716845290915281205490919061039f90829086906104079087906113cb565b6107df565b6097546001600160a01b0316331461046b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b806104b85760405162461bcd60e51b815260206004820152601660248201527f4c50546f6b656e3a2063616e6e6f74206d696e742030000000000000000000006044820152606401610462565b6104c28282610bec565b5050565b6104d03382610cd7565b50565b60008054610100900460ff166104ef5760005460ff16156104f3565b303b155b6105655760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152608401610462565b600054610100900460ff16158015610587576000805461ffff19166101011790555b61058f610e65565b6105998484610ed0565b6105a1610f62565b6001915080156105b7576000805461ff00191690555b5092915050565b6097546001600160a01b031633146106185760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610462565b6106226000610fd2565b565b61062f823383610938565b6104c28282610cd7565b60606037805461030e9061137a565b3360008181526034602090815260408083206001600160a01b0387168452909152812054909190838110156106e55760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610462565b6103c282868684036107df565b60003361039f8185856109ca565b6097546001600160a01b0316331461075a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610462565b6001600160a01b0381166107d65760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610462565b6104d081610fd2565b6001600160a01b03831661085a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610462565b6001600160a01b0382166108d65760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610462565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526034602090815260408083209386168352929052205460001981146109c457818110156109b75760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610462565b6109c484848484036107df565b50505050565b6001600160a01b038316610a465760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610462565b6001600160a01b038216610ac25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610462565b610acd83838361103c565b6001600160a01b03831660009081526033602052604090205481811015610b5c5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610462565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290610b939084906113cb565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bdf91815260200190565b60405180910390a36109c4565b6001600160a01b038216610c425760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610462565b610c4e6000838361103c565b8060356000828254610c6091906113cb565b90915550506001600160a01b03821660009081526033602052604081208054839290610c8d9084906113cb565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b038216610d535760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f73000000000000000000000000000000000000000000000000000000000000006064820152608401610462565b610d5f8260008361103c565b6001600160a01b03821660009081526033602052604090205481811015610dee5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f63650000000000000000000000000000000000000000000000000000000000006064820152608401610462565b6001600160a01b0383166000908152603360205260408120838303905560358054849290610e1d9084906113e3565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200161092b565b505050565b600054610100900460ff166106225760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610462565b600054610100900460ff16610f3b5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610462565b8151610f4e906036906020850190611095565b508051610e60906037906020840190611095565b600054610100900460ff16610fcd5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401610462565b610622335b609780546001600160a01b038381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038216301415610e605760405162461bcd60e51b815260206004820152601e60248201527f4c50546f6b656e3a2063616e6e6f742073656e6420746f20697473656c6600006044820152606401610462565b8280546110a19061137a565b90600052602060002090601f0160209004810192826110c35760008555611109565b82601f106110dc57805160ff1916838001178555611109565b82800160010185558215611109579182015b828111156111095782518255916020019190600101906110ee565b50611115929150611119565b5090565b5b80821115611115576000815560010161111a565b600060208083528351808285015260005b8181101561115b5785810183015185820160400152820161113f565b8181111561116d576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461119a57600080fd5b919050565b600080604083850312156111b257600080fd5b6111bb83611183565b946020939093013593505050565b6000806000606084860312156111de57600080fd5b6111e784611183565b92506111f560208501611183565b9150604084013590509250925092565b60006020828403121561121757600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261124557600080fd5b813567ffffffffffffffff808211156112605761126061121e565b604051601f8301601f19908116603f011681019082821181831017156112885761128861121e565b816040528381528660208588010111156112a157600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080604083850312156112d457600080fd5b823567ffffffffffffffff808211156112ec57600080fd5b6112f886838701611234565b9350602085013591508082111561130e57600080fd5b5061131b85828601611234565b9150509250929050565b60006020828403121561133757600080fd5b61134082611183565b9392505050565b6000806040838503121561135a57600080fd5b61136383611183565b915061137160208401611183565b90509250929050565b600181811c9082168061138e57607f821691505b602082108114156113af57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156113de576113de6113b5565b500190565b6000828210156113f5576113f56113b5565b50039056fea26469706673582212201a066c43dd2f08901ca6e067d698bc30dfc59e4d56337e13c3fc21bcb10b10ff64736f6c63430008090033";

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
