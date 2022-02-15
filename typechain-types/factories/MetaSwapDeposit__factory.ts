/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MetaSwapDeposit,
  MetaSwapDepositInterface,
} from "../MetaSwapDeposit";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "minToMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "addLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "baseSwap",
    outputs: [
      {
        internalType: "contract ISwap",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "baseTokens",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
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
    name: "calculateRemoveLiquidity",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
    ],
    name: "calculateRemoveLiquidityOneToken",
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
        internalType: "uint8",
        name: "tokenIndexFrom",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "tokenIndexTo",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
    ],
    name: "calculateSwap",
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
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "bool",
        name: "deposit",
        type: "bool",
      },
    ],
    name: "calculateTokenAmount",
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
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "getToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISwap",
        name: "_baseSwap",
        type: "address",
      },
      {
        internalType: "contract IMetaSwap",
        name: "_metaSwap",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_metaLPToken",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "metaLPToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "metaSwap",
    outputs: [
      {
        internalType: "contract IMetaSwap",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "metaTokens",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
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
      {
        internalType: "uint256[]",
        name: "minAmounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidity",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "maxBurnAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidityImbalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "tokenIndex",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "removeLiquidityOneToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "tokenIndexFrom",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "tokenIndexTo",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minDy",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokens",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506135b2806100206000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c806391695586116100b2578063cb2ef5fe11610081578063e6ab280611610066578063e6ab280614610268578063f2fad2b61461027b578063fd0bd0991461028e57600080fd5b8063cb2ef5fe14610242578063d26504721461025557600080fd5b806391695586146101f45780639750a8ee14610207578063a95b089f1461021a578063c0c53b8b1461022d57600080fd5b80634d49e87d116100ee5780634d49e87d146101a85780634f64b2be146101bb57806382b86600146101ce57806384cdd9bc146101e157600080fd5b806331cd52b014610120578063328123a214610149578063342a87a1146101745780633e3a156014610195575b600080fd5b61013361012e366004612f87565b6102a1565b6040516101409190613015565b60405180910390f35b61015c610157366004613028565b610882565b6040516001600160a01b039091168152602001610140565b610187610182366004613057565b6108ac565b604051908152602001610140565b6101876101a3366004613083565b610a9c565b6101876101b63660046130be565b610e7e565b61015c6101c9366004613028565b6113ff565b61015c6101dc36600461310f565b61140f565b6101876101ef3660046130be565b611497565b61018761020236600461312a565b611d2b565b60335461015c906001600160a01b031681565b610187610228366004613177565b611ebf565b61024061023b3660046131cb565b611f70565b005b60345461015c906001600160a01b031681565b60385461015c906001600160a01b031681565b610187610276366004613224565b612499565b610133610289366004613028565b612737565b61015c61029c366004613028565b6129c0565b6060600260015414156102fb5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600260015560358054604080516020808402820181019092528281526000939092909183018282801561035757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610339575b50505050509050600060368054806020026020016040519081016040528092919081815260200182805480156103b657602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610398575b50505050509050606060006001835185516103d19190613286565b6103db919061329e565b905086811461041b5760405162461bcd60e51b815260206004820152600c60248201526b6f7574206f662072616e676560a01b60448201526064016102f2565b8067ffffffffffffffff811115610434576104346132b5565b60405190808252806020026020018201604052801561045d578160200160208202803683370190505b5060385490925061047a91506001600160a01b031633308b6129d0565b6000606060006001855161048e919061329e565b90506000855167ffffffffffffffff8111156104ac576104ac6132b5565b6040519080825280602002602001820160405280156104d5578160200160208202803683370190505b50905060005b828160ff161015610534578b8b8260ff168181106104fb576104fb6132cb565b90506020020135828260ff1681518110610517576105176132cb565b60209081029190910101528061052c816132e1565b9150506104db565b5060345460405163031cd52b60e41b81526001600160a01b03909116906331cd52b090610569908f9085908e90600401613301565b600060405180830381600087803b15801561058357600080fd5b505af1158015610597573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105bf919081019061332a565b92505060005b818160ff16101561067657828160ff16815181106105e5576105e56132cb565b6020026020010151858260ff1681518110610602576106026132cb565b60200260200101818152505061066433848360ff1681518110610627576106276132cb565b6020026020010151888460ff1681518110610644576106446132cb565b60200260200101516001600160a01b0316612a819092919063ffffffff16565b8061066e816132e1565b9150506105c5565b50818181518110610689576106896132cb565b602002602001015192506000865167ffffffffffffffff8111156106af576106af6132b5565b6040519080825280602002602001820160405280156106d8578160200160208202803683370190505b50905060005b828160ff161015610740578b8b6106f860ff841686613286565b818110610707576107076132cb565b90506020020135828260ff1681518110610723576107236132cb565b602090810291909101015280610738816132e1565b9150506106de565b5060335460405163031cd52b60e41b81526001600160a01b03909116906331cd52b09061077590879085908e90600401613301565b600060405180830381600087803b15801561078f57600080fd5b505af11580156107a3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526107cb919081019061332a565b92505060005b86518160ff16101561086e57828160ff16815181106107f2576107f26132cb565b6020026020010151858260ff168461080a9190613286565b8151811061081a5761081a6132cb565b60200260200101818152505061085c33848360ff168151811061083f5761083f6132cb565b6020026020010151898460ff1681518110610644576106446132cb565b80610866816132e1565b9150506107d1565b505060018055509098975050505050505050565b6035818154811061089257600080fd5b6000918252602090912001546001600160a01b0316905081565b60365460009081906108c09060019061329e565b90508060ff168360ff16101561095d5760345460405163342a87a160e01b81526004810186905260ff851660248201526001600160a01b039091169063342a87a19060440160206040518083038186803b15801561091d57600080fd5b505afa158015610931573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095591906133dc565b915050610a96565b60345460405163342a87a160e01b81526004810186905260ff831660248201526000916001600160a01b03169063342a87a19060440160206040518083038186803b1580156109ab57600080fd5b505afa1580156109bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e391906133dc565b6033549091506001600160a01b031663342a87a182610a0285886133f5565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152600481019290925260ff16602482015260440160206040518083038186803b158015610a5957600080fd5b505afa158015610a6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9191906133dc565b925050505b92915050565b600060026001541415610af15760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102f2565b60026001908155603654600091610b079161329e565b60355460385491925090610b26906001600160a01b031633308a6129d0565b60008260ff168760ff161015610bfe576034546040516301f1d0ab60e51b8152600481018a905260ff8916602482015260448101889052606481018790526001600160a01b0390911690633e3a156090608401602060405180830381600087803b158015610b9357600080fd5b505af1158015610ba7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcb91906133dc565b5060368760ff1681548110610be257610be26132cb565b6000918252602090912001546001600160a01b03169050610dde565b610c088284613418565b60ff168760ff161015610da7576034546040516301f1d0ab60e51b8152600481018a905260ff8516602482015260006044820181905260648201889052916001600160a01b031690633e3a156090608401602060405180830381600087803b158015610c7357600080fd5b505af1158015610c87573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cab91906133dc565b6033549091506001600160a01b0316633e3a156082610cca878c6133f5565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b168152600481019290925260ff166024820152604481018a905260648101899052608401602060405180830381600087803b158015610d3157600080fd5b505af1158015610d45573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d6991906133dc565b506035610d76858a6133f5565b60ff1681548110610d8957610d896132cb565b6000918252602090912001546001600160a01b03169150610dde9050565b60405162461bcd60e51b815260206004820152600c60248201526b6f7574206f662072616e676560a01b60448201526064016102f2565b6040516370a0823160e01b81523060048201526000906001600160a01b038316906370a082319060240160206040518083038186803b158015610e2057600080fd5b505afa158015610e34573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e5891906133dc565b9050610e6e6001600160a01b0383163383612a81565b6001805598975050505050505050565b600060026001541415610ed35760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102f2565b6002600155603580546040805160208084028201810190925282815260009390929091830182828015610f2f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610f11575b5050505050905060006036805480602002602001604051908101604052809291908181526020018280548015610f8e57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610f70575b50505050509050600060018251610fa5919061329e565b9050808351610fb49190613286565b8714610fbf57600080fd5b600080845167ffffffffffffffff811115610fdc57610fdc6132b5565b604051908082528060200260200182016040528015611005578160200160208202803683370190505b5090506000805b86518160ff161015611134576000878260ff168151811061102f5761102f6132cb565b6020026020010151905060008d8d8460ff168961104c9190613286565b81811061105b5761105b6132cb565b905060200201359050600081111561111f576110826001600160a01b0383163330846129d0565b6040516370a0823160e01b81523060048201526001600160a01b038316906370a082319060240160206040518083038186803b1580156110c157600080fd5b505afa1580156110d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110f991906133dc565b858460ff168151811061110e5761110e6132cb565b602002602001018181525050600193505b5050808061112c906132e1565b91505061100c565b5080156111c557603354604051634d49e87d60e01b81526001600160a01b0390911690634d49e87d906111709085906000908d9060040161343d565b602060405180830381600087803b15801561118a57600080fd5b505af115801561119e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111c291906133dc565b92505b5050603654600090819067ffffffffffffffff8111156111e7576111e76132b5565b604051908082528060200260200182016040528015611210578160200160208202803683370190505b50905060005b848160ff16101561132e576000868260ff1681518110611238576112386132cb565b6020026020010151905060008d8d8460ff16818110611259576112596132cb565b9050602002013590506000811115611319576112806001600160a01b0383163330846129d0565b6040516370a0823160e01b81523060048201526001600160a01b038316906370a082319060240160206040518083038186803b1580156112bf57600080fd5b505afa1580156112d3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112f791906133dc565b848460ff168151811061130c5761130c6132cb565b6020026020010181815250505b50508080611326906132e1565b915050611216565b5082818581518110611342576113426132cb565b6020908102919091010152603454604051634d49e87d60e01b81526001600160a01b0390911690634d49e87d906113819084908d908d9060040161343d565b602060405180830381600087803b15801561139b57600080fd5b505af11580156113af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113d391906133dc565b6038549092506113ee91506001600160a01b03163383612a81565b600180559998505050505050505050565b6037818154811061089257600080fd5b60375460009060ff8316106114665760405162461bcd60e51b815260206004820152601260248201527f696e646578206f7574206f662072616e6765000000000000000000000000000060448201526064016102f2565b60378260ff168154811061147c5761147c6132cb565b6000918252602090912001546001600160a01b031692915050565b6000600260015414156114ec5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102f2565b600260015560358054604080516020808402820181019092528281526000939092909183018282801561154857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161152a575b50505050509050600060368054806020026020016040519081016040528092919081815260200182805480156115a757602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611589575b505050505090506000815167ffffffffffffffff8111156115ca576115ca6132b5565b6040519080825280602002602001820160405280156115f3578160200160208202803683370190505b5090506000835167ffffffffffffffff811115611612576116126132b5565b60405190808252806020026020018201604052801561163b578160200160208202803683370190505b50905060018351855161164e9190613286565b611658919061329e565b88146116955760405162461bcd60e51b815260206004820152600c60248201526b6f7574206f662072616e676560a01b60448201526064016102f2565b6040805160c0810182526033546001600160a01b03908116825260345481166020830152603854169181019190915282516000919060608201906116db9060019061329e565b60ff1681526020016000151581526020016000815250905060005b816060015160ff168160ff161015611756578a8a8260ff1681811061171d5761171d6132cb565b90506020020135848260ff1681518110611739576117396132cb565b60209081029190910101528061174e816132e1565b9150506116f6565b5060005b82518160ff1610156117f1578a8a8284606001516117789190613418565b60ff1681811061178a5761178a6132cb565b90506020020135838260ff16815181106117a6576117a66132cb565b6020026020010181815250506000838260ff16815181106117c9576117c96132cb565b602002602001015111156117df57600160808301525b806117e9816132e1565b91505061175a565b508060800151156118bd5761189761271061189161271584600001516001600160a01b031663e6ab28068760006040518363ffffffff1660e01b815260040161183b929190613462565b60206040518083038186803b15801561185357600080fd5b505afa158015611867573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061188b91906133dc565b90612acf565b90612adb565b83826060015160ff16815181106118b0576118b06132cb565b6020026020010181815250505b60408101516118d7906001600160a01b031633308b6129d0565b60208101516040517f84cdd9bc0000000000000000000000000000000000000000000000000000000081526000916001600160a01b0316906384cdd9bc906119279087908d908d9060040161343d565b602060405180830381600087803b15801561194157600080fd5b505af1158015611955573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061197991906133dc565b90506119858982612ae7565b60a0830152608082015115611bf35781600001516001600160a01b03166384cdd9bc8486856060015160ff16815181106119c1576119c16132cb565b60200260200101518b6040518463ffffffff1660e01b81526004016119e89392919061343d565b602060405180830381600087803b158015611a0257600080fd5b505af1158015611a16573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a3a91906133dc565b506000845167ffffffffffffffff811115611a5757611a576132b5565b604051908082528060200260200182016040528015611a80578160200160208202803683370190505b509050600086846060015160ff1681518110611a9e57611a9e6132cb565b60209081029190910101516040516370a0823160e01b81523060048201529091506000906001600160a01b038316906370a082319060240160206040518083038186803b158015611aee57600080fd5b505afa158015611b02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b2691906133dc565b90508015611bef578083866060015160ff1681518110611b4857611b486132cb565b602002602001018181525050611be985602001516001600160a01b0316634d49e87d8560008f6040518463ffffffff1660e01b8152600401611b8c9392919061343d565b602060405180830381600087803b158015611ba657600080fd5b505af1158015611bba573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611bde91906133dc565b60a087015190612af3565b60a08601525b5050505b60005b60ff81168b1115611cd8576000836060015160ff168260ff161015611c3957868260ff1681518110611c2a57611c2a6132cb565b60200260200101519050611c68565b87846060015183611c4a91906133f5565b60ff1681518110611c5d57611c5d6132cb565b602002602001015190505b60008d8d8460ff16818110611c7f57611c7f6132cb565b905060200201351115611cc557611cc5338e8e8560ff16818110611ca557611ca56132cb565b90506020020135836001600160a01b0316612a819092919063ffffffff16565b5080611cd0816132e1565b915050611bf6565b5060a082015115611d0957611d09338360a0015184604001516001600160a01b0316612a819092919063ffffffff16565b60a0820151611d18908a61329e565b600180559b9a5050505050505050505050565b600060026001541415611d805760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016102f2565b6002600181905550611dc133308660378a60ff1681548110611da457611da46132cb565b6000918252602090912001546001600160a01b03169291906129d0565b6034546040517f78e0fae800000000000000000000000000000000000000000000000000000000815260ff8089166004830152871660248201526044810186905260648101859052608481018490526000916001600160a01b0316906378e0fae89060a401602060405180830381600087803b158015611e4057600080fd5b505af1158015611e54573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611e7891906133dc565b9050611eb1338260378960ff1681548110611e9557611e956132cb565b6000918252602090912001546001600160a01b03169190612a81565b600180559695505050505050565b6034546040517f75d8e3e400000000000000000000000000000000000000000000000000000000815260ff808616600483015284166024820152604481018390526000916001600160a01b0316906375d8e3e49060640160206040518083038186803b158015611f2e57600080fd5b505afa158015611f42573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611f6691906133dc565b90505b9392505050565b600054610100900460ff16611f8b5760005460ff1615611f8f565b303b155b6120015760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016102f2565b600054610100900460ff16158015612023576000805461ffff19166101011790555b61202b612aff565b60005b60208160ff1610156121385760405162415c3360e91b815260ff821660048201526001600160a01b038616906382b866009060240160206040518083038186803b15801561207b57600080fd5b505afa9250505080156120ab575060408051601f3d908101601f191682019092526120a891810190613486565b60015b6120b457612138565b603580546001810182556000919091527fcfa4bec1d3298408bb5afcfcd9c430549c5b31f8aa5c5848151c0a55f473c34d0180546001600160a01b0319166001600160a01b03831690811790915561210f9087600019612b74565b6121256001600160a01b03821686600019612b74565b5080612130816132e1565b91505061202e565b60018160ff16116121975760405162461bcd60e51b8152602060048201526024808201527f6261736553776170206d7573742068617665206174206c65617374203220746f6044820152636b656e7360e01b60648201526084016102f2565b506000805b60208160ff1610156122cc5760405162415c3360e91b815260ff821660048201526001600160a01b038616906382b866009060240160206040518083038186803b1580156121e957600080fd5b505afa925050508015612219575060408051601f3d908101601f1916820190925261221691810190613486565b60015b612222576122cc565b6036805460018181019092557f4a11f94e20a93c79f6ec743a1954ec4fc2c08429ae2122118bf234b2185c81b80180546001600160a01b0384166001600160a01b031991821681179092556037805493840181556000527f42a7b7dd785cd69714a189dffb3fd7d7174edc9ece837694ce50f7078f7c31ae9092018054909216811790915590925082906122b99087600019612b74565b50806122c4816132e1565b91505061219c565b60018160ff161161232b5760405162461bcd60e51b8152602060048201526024808201527f6d65746153776170206d7573742068617665206174206c65617374203220746f6044820152636b656e7360e01b60648201526084016102f2565b506035600081548110612340576123406132cb565b600091825260209091200154603780546001600160a01b03909216916123689060019061329e565b81548110612378576123786132cb565b600091825260209091200180546001600160a01b0319166001600160a01b039290921691909117905560015b60355460ff8216101561241657603760358260ff16815481106123c9576123c96132cb565b60009182526020808320909101548354600181018555938352912090910180546001600160a01b0319166001600160a01b039092169190911790558061240e816132e1565b9150506123a4565b5061242d6001600160a01b03821686600019612b74565b6124436001600160a01b03841685600019612b74565b50603380546001600160a01b038087166001600160a01b0319928316179092556034805486841690831617905560388054928516929091169190911790558015612493576000805461ff00191690555b50505050565b603654600090819067ffffffffffffffff8111156124b9576124b96132b5565b6040519080825280602002602001820160405280156124e2578160200160208202803683370190505b5060355490915060009067ffffffffffffffff811115612504576125046132b5565b60405190808252806020026020018201604052801561252d578160200160208202803683370190505b509050600060018351612540919061329e565b905060005b818160ff16101561259e5787878260ff16818110612565576125656132cb565b90506020020135848260ff1681518110612581576125816132cb565b602090810291909101015280612596816132e1565b915050612545565b5060005b82518160ff1610156126055787876125bd60ff841685613286565b8181106125cc576125cc6132cb565b90506020020135838260ff16815181106125e8576125e86132cb565b6020908102919091010152806125fd816132e1565b9150506125a2565b50603354604051637355940360e11b81526000916001600160a01b03169063e6ab2806906126399086908a90600401613462565b60206040518083038186803b15801561265157600080fd5b505afa158015612665573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061268991906133dc565b90508084838151811061269e5761269e6132cb565b6020908102919091010152603454604051637355940360e11b81526001600160a01b039091169063e6ab2806906126db9087908a90600401613462565b60206040518083038186803b1580156126f357600080fd5b505afa158015612707573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061272b91906133dc565b98975050505050505050565b6034546040517ff2fad2b6000000000000000000000000000000000000000000000000000000008152600481018390526060916000916001600160a01b039091169063f2fad2b69060240160006040518083038186803b15801561279a57600080fd5b505afa1580156127ae573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526127d6919081019061332a565b90506000600182516127e8919061329e565b60335483519192506000916001600160a01b039091169063f2fad2b690859060ff861690811061281a5761281a6132cb565b60200260200101516040518263ffffffff1660e01b815260040161284091815260200190565b60006040518083038186803b15801561285857600080fd5b505afa15801561286c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052612894919081019061332a565b9050600081518360ff166128a89190613286565b67ffffffffffffffff8111156128c0576128c06132b5565b6040519080825280602002602001820160405280156128e9578160200160208202803683370190505b50905060005b8360ff168160ff16101561294c57848160ff1681518110612912576129126132cb565b6020026020010151828260ff168151811061292f5761292f6132cb565b602090810291909101015280612944816132e1565b9150506128ef565b5060005b82518160ff1610156129b657828160ff1681518110612971576129716132cb565b60200260200101518282866129869190613418565b60ff1681518110612999576129996132cb565b6020908102919091010152806129ae816132e1565b915050612950565b5095945050505050565b6036818154811061089257600080fd5b6040516001600160a01b03808516602483015283166044820152606481018290526124939085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152612cd1565b6040516001600160a01b038316602482015260448101829052612aca9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401612a1d565b505050565b6000611f6982846134a3565b6000611f6982846134c2565b6000611f69828461329e565b6000611f698284613286565b600054610100900460ff16612b6a5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016102f2565b612b72612db6565b565b801580612c1657506040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015612bdc57600080fd5b505afa158015612bf0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190612c1491906133dc565b155b612c885760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016102f2565b6040516001600160a01b038316602482015260448101829052612aca9084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401612a1d565b6000612d26826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316612e279092919063ffffffff16565b805190915015612aca5780806020019051810190612d4491906134e4565b612aca5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016102f2565b600054610100900460ff16612e215760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016102f2565b60018055565b6060611f668484600085856001600160a01b0385163b612e895760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016102f2565b600080866001600160a01b03168587604051612ea5919061352d565b60006040518083038185875af1925050503d8060008114612ee2576040519150601f19603f3d011682016040523d82523d6000602084013e612ee7565b606091505b5091509150612ef7828286612f02565b979650505050505050565b60608315612f11575081611f69565b825115612f215782518084602001fd5b8160405162461bcd60e51b81526004016102f29190613549565b60008083601f840112612f4d57600080fd5b50813567ffffffffffffffff811115612f6557600080fd5b6020830191508360208260051b8501011115612f8057600080fd5b9250929050565b60008060008060608587031215612f9d57600080fd5b84359350602085013567ffffffffffffffff811115612fbb57600080fd5b612fc787828801612f3b565b9598909750949560400135949350505050565b600081518084526020808501945080840160005b8381101561300a57815187529582019590820190600101612fee565b509495945050505050565b602081526000611f696020830184612fda565b60006020828403121561303a57600080fd5b5035919050565b803560ff8116811461305257600080fd5b919050565b6000806040838503121561306a57600080fd5b8235915061307a60208401613041565b90509250929050565b6000806000806080858703121561309957600080fd5b843593506130a960208601613041565b93969395505050506040820135916060013590565b600080600080606085870312156130d457600080fd5b843567ffffffffffffffff8111156130eb57600080fd5b6130f787828801612f3b565b90989097506020870135966040013595509350505050565b60006020828403121561312157600080fd5b611f6982613041565b600080600080600060a0868803121561314257600080fd5b61314b86613041565b945061315960208701613041565b94979496505050506040830135926060810135926080909101359150565b60008060006060848603121561318c57600080fd5b61319584613041565b92506131a360208501613041565b9150604084013590509250925092565b6001600160a01b03811681146131c857600080fd5b50565b6000806000606084860312156131e057600080fd5b83356131eb816131b3565b925060208401356131fb816131b3565b9150604084013561320b816131b3565b809150509250925092565b80151581146131c857600080fd5b60008060006040848603121561323957600080fd5b833567ffffffffffffffff81111561325057600080fd5b61325c86828701612f3b565b909450925050602084013561320b81613216565b634e487b7160e01b600052601160045260246000fd5b6000821982111561329957613299613270565b500190565b6000828210156132b0576132b0613270565b500390565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600060ff821660ff8114156132f8576132f8613270565b60010192915050565b83815260606020820152600061331a6060830185612fda565b9050826040830152949350505050565b6000602080838503121561333d57600080fd5b825167ffffffffffffffff8082111561335557600080fd5b818501915085601f83011261336957600080fd5b81518181111561337b5761337b6132b5565b8060051b604051601f19603f830116810181811085821117156133a0576133a06132b5565b6040529182528482019250838101850191888311156133be57600080fd5b938501935b8285101561272b578451845293850193928501926133c3565b6000602082840312156133ee57600080fd5b5051919050565b600060ff821660ff84168082101561340f5761340f613270565b90039392505050565b600060ff821660ff84168060ff0382111561343557613435613270565b019392505050565b6060815260006134506060830186612fda565b60208301949094525060400152919050565b6040815260006134756040830185612fda565b905082151560208301529392505050565b60006020828403121561349857600080fd5b8151611f69816131b3565b60008160001904831182151516156134bd576134bd613270565b500290565b6000826134df57634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156134f657600080fd5b8151611f6981613216565b60005b8381101561351c578181015183820152602001613504565b838111156124935750506000910152565b6000825161353f818460208701613501565b9190910192915050565b6020815260008251806020840152613568816040850160208701613501565b601f01601f1916919091016040019291505056fea26469706673582212206a230d4320df37f42e5c12941dad718cb3836a2f1dc2382315d3c02440078ff164736f6c63430008090033";

type MetaSwapDepositConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MetaSwapDepositConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MetaSwapDeposit__factory extends ContractFactory {
  constructor(...args: MetaSwapDepositConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MetaSwapDeposit";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MetaSwapDeposit> {
    return super.deploy(overrides || {}) as Promise<MetaSwapDeposit>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MetaSwapDeposit {
    return super.attach(address) as MetaSwapDeposit;
  }
  connect(signer: Signer): MetaSwapDeposit__factory {
    return super.connect(signer) as MetaSwapDeposit__factory;
  }
  static readonly contractName: "MetaSwapDeposit";
  public readonly contractName: "MetaSwapDeposit";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MetaSwapDepositInterface {
    return new utils.Interface(_abi) as MetaSwapDepositInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MetaSwapDeposit {
    return new Contract(address, _abi, signerOrProvider) as MetaSwapDeposit;
  }
}
