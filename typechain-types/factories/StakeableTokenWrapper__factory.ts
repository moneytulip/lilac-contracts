/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StakeableTokenWrapper,
  StakeableTokenWrapperInterface,
} from "../StakeableTokenWrapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_stakedToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
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
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakedToken",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161081338038061081383398101604081905261002f91610054565b600180546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610780806100936000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c806370a082311161005057806370a082311461009d578063a694fc3a146100c6578063cc7a262e146100d957600080fd5b806318160ddd1461006c5780632e1a7d4d14610088575b600080fd5b61007560005481565b6040519081526020015b60405180910390f35b61009b61009636600461060d565b610104565b005b6100756100ab366004610626565b6001600160a01b031660009081526002602052604090205490565b61009b6100d436600461060d565b610192565b6001546100ec906001600160a01b031681565b6040516001600160a01b03909116815260200161007f565b600054610111908261026c565b60009081553381526002602052604090205461012d908261026c565b33600081815260026020526040902091909155600154610159916001600160a01b03909116908361027f565b60405181815233907f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5906020015b60405180910390a250565b806101e45760405162461bcd60e51b815260206004820152600b60248201527f616d6f756e74203d3d203000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000546101f1908261032d565b60009081553381526002602052604090205461020d908261032d565b3360008181526002602052604090209190915560015461023a916001600160a01b03909116903084610339565b60405181815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d90602001610187565b6000610278828461067e565b9392505050565b6040516001600160a01b0383166024820152604481018290526103289084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152610390565b505050565b60006102788284610695565b6040516001600160a01b038085166024830152831660448201526064810182905261038a9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084016102c4565b50505050565b60006103e5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166104759092919063ffffffff16565b805190915015610328578080602001905181019061040391906106ad565b6103285760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016101db565b6060610484848460008561048c565b949350505050565b6060824710156105045760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016101db565b6001600160a01b0385163b61055b5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101db565b600080866001600160a01b0316858760405161057791906106fb565b60006040518083038185875af1925050503d80600081146105b4576040519150601f19603f3d011682016040523d82523d6000602084013e6105b9565b606091505b50915091506105c98282866105d4565b979650505050505050565b606083156105e3575081610278565b8251156105f35782518084602001fd5b8160405162461bcd60e51b81526004016101db9190610717565b60006020828403121561061f57600080fd5b5035919050565b60006020828403121561063857600080fd5b81356001600160a01b038116811461027857600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000828210156106905761069061064f565b500390565b600082198211156106a8576106a861064f565b500190565b6000602082840312156106bf57600080fd5b8151801515811461027857600080fd5b60005b838110156106ea5781810151838201526020016106d2565b8381111561038a5750506000910152565b6000825161070d8184602087016106cf565b9190910192915050565b60208152600082518060208401526107368160408501602087016106cf565b601f01601f1916919091016040019291505056fea264697066735822122044b793bb249956daa111a49d012bb132cdc2bb5f781eab62892f898269610c9364736f6c63430008090033";

type StakeableTokenWrapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakeableTokenWrapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakeableTokenWrapper__factory extends ContractFactory {
  constructor(...args: StakeableTokenWrapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "StakeableTokenWrapper";
  }

  deploy(
    _stakedToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StakeableTokenWrapper> {
    return super.deploy(
      _stakedToken,
      overrides || {}
    ) as Promise<StakeableTokenWrapper>;
  }
  getDeployTransaction(
    _stakedToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_stakedToken, overrides || {});
  }
  attach(address: string): StakeableTokenWrapper {
    return super.attach(address) as StakeableTokenWrapper;
  }
  connect(signer: Signer): StakeableTokenWrapper__factory {
    return super.connect(signer) as StakeableTokenWrapper__factory;
  }
  static readonly contractName: "StakeableTokenWrapper";
  public readonly contractName: "StakeableTokenWrapper";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakeableTokenWrapperInterface {
    return new utils.Interface(_abi) as StakeableTokenWrapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakeableTokenWrapper {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StakeableTokenWrapper;
  }
}
