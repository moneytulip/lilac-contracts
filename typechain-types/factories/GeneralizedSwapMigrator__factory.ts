/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GeneralizedSwapMigrator,
  GeneralizedSwapMigratorInterface,
} from "../GeneralizedSwapMigrator";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "oldPoolAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "newPoolAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "oldPoolLPTokenAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "newPoolLPTokenAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20[]",
            name: "tokens",
            type: "address[]",
          },
        ],
        indexed: false,
        internalType: "struct GeneralizedSwapMigrator.MigrationData",
        name: "mData",
        type: "tuple",
      },
    ],
    name: "AddMigrationData",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "migrator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "oldPoolAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldLPTokenAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newLPTokenAmount",
        type: "uint256",
      },
    ],
    name: "Migrate",
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
    inputs: [
      {
        internalType: "address",
        name: "oldPoolAddress",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "newPoolAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "oldPoolLPTokenAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20",
            name: "newPoolLPTokenAddress",
            type: "address",
          },
          {
            internalType: "contract IERC20[]",
            name: "tokens",
            type: "address[]",
          },
        ],
        internalType: "struct GeneralizedSwapMigrator.MigrationData",
        name: "mData",
        type: "tuple",
      },
      {
        internalType: "bool",
        name: "overwrite",
        type: "bool",
      },
    ],
    name: "addMigrationData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "calls",
        type: "bytes[]",
      },
      {
        internalType: "bool",
        name: "revertOnFail",
        type: "bool",
      },
    ],
    name: "batch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oldPoolAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minAmount",
        type: "uint256",
      },
    ],
    name: "migrate",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "migrationMap",
    outputs: [
      {
        internalType: "address",
        name: "newPoolAddress",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "oldPoolLPTokenAddress",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "newPoolLPTokenAddress",
        type: "address",
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
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "rescue",
    outputs: [],
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
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611b628061007e6000396000f3fe60806040526004361061007b5760003560e01c8063d2423b511161004e578063d2423b5114610104578063e36ad77e14610117578063f2fde38b1461018d578063fc22d0e5146101ad57600080fd5b80634fdf5d1d146100805780636f731330146100a2578063715018a6146100c25780638da5cb5b146100d7575b600080fd5b34801561008c57600080fd5b506100a061009b366004611484565b6101db565b005b3480156100ae57600080fd5b506100a06100bd36600461156f565b6102e5565b3480156100ce57600080fd5b506100a0610963565b3480156100e357600080fd5b506000546040516001600160a01b0390911681526020015b60405180910390f35b6100a061011236600461169d565b6109c9565b34801561012357600080fd5b50610163610132366004611723565b60016020819052600091825260409091208054918101546002909101546001600160a01b0392831692918216911683565b604080516001600160a01b03948516815292841660208401529216918101919091526060016100fb565b34801561019957600080fd5b506100a06101a8366004611723565b610a9c565b3480156101b957600080fd5b506101cd6101c8366004611740565b610b7e565b6040519081526020016100fb565b6000546001600160a01b0316331461023a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526102e19082906001600160a01b038516906370a082319060240160206040518083038186803b15801561029857600080fd5b505afa1580156102ac573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102d09190611775565b6001600160a01b0385169190610e66565b5050565b6000546001600160a01b0316331461033f5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610231565b806103d6576001600160a01b038381166000908152600160208190526040909120015416156103d65760405162461bcd60e51b815260206004820152602860248201527f63616e6e6f74206f7665727772697465206578697374696e67206d696772617460448201527f696f6e20646174610000000000000000000000000000000000000000000000006064820152608401610231565b60208201516001600160a01b03166104305760405162461bcd60e51b815260206004820152601a60248201527f6f6c64506f6f6c4c50546f6b656e41646472657373203d3d20300000000000006044820152606401610231565b60408201516001600160a01b031661048a5760405162461bcd60e51b815260206004820152601a60248201527f6e6577506f6f6c4c50546f6b656e41646472657373203d3d20300000000000006044820152606401610231565b60005b60208160ff1610156107845760405162415c3360e91b815260ff821660048201526000906001600160a01b038616906382b866009060240160206040518083038186803b1580156104dd57600080fd5b505afa92505050801561050d575060408051601f3d908101601f1916820190925261050a9181019061178e565b60015b6105805760008260ff16116105785760405162461bcd60e51b815260206004820152602b60248201527f4661696c656420746f2067657420746f6b656e7320756e6465726c79696e672060448201526a2634b630b1903837b7b61760a91b6064820152608401610231565b506000610583565b90505b835160405162415c3360e91b815260ff841660048201526001600160a01b03909116906382b866009060240160206040518083038186803b1580156105c757600080fd5b505afa9250505080156105f7575060408051601f3d908101601f191682019092526105f49181019061178e565b60015b6106d25760008260ff16116106625760405162461bcd60e51b815260206004820152602b60248201527f4661696c656420746f2067657420746f6b656e7320756e6465726c79696e672060448201526a2634b630b1903837b7b61760a91b6064820152608401610231565b6001600160a01b03811615801561068057508360600151518260ff16145b6106cc5760405162461bcd60e51b815260206004820152601b60248201527f4661696c656420746f206d6174636820746f6b656e73206c69737400000000006044820152606401610231565b50610784565b806001600160a01b0316826001600160a01b0316148015610724575084606001518360ff1681518110610707576107076117ab565b60200260200101516001600160a01b0316826001600160a01b0316145b6107705760405162461bcd60e51b815260206004820152601b60248201527f4661696c656420746f206d6174636820746f6b656e73206c69737400000000006044820152606401610231565b50508061077c816117d7565b91505061048d565b506001600160a01b038084166000908152600160208181526040928390208651815490861673ffffffffffffffffffffffffffffffffffffffff1991821617825582880151938201805494871694821694909417909355928601516002840180549190951692169190911790925560608401518051859361080c9260038501929101906113e8565b505050602082015160405163095ea7b360e01b81526001600160a01b03858116600483015260001960248301529091169063095ea7b390604401602060405180830381600087803b15801561086057600080fd5b505af1158015610874573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089891906117f7565b5060005b82606001515181101561091c576108e983600001516000856060015184815181106108c9576108c96117ab565b60200260200101516001600160a01b0316610f149092919063ffffffff16565b61090a8360000151600019856060015184815181106108c9576108c96117ab565b8061091481611814565b91505061089c565b50826001600160a01b03167f3a4863f22c4536b6b3a7e8989396b0b2f9c10de870d877ec333df6cfec568d3083604051610956919061182f565b60405180910390a2505050565b6000546001600160a01b031633146109bd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610231565b6109c76000611058565b565b60005b82811015610a9657600080308686858181106109ea576109ea6117ab565b90506020028101906109fc91906118b0565b604051610a0a9291906118fe565b600060405180830381855af49150503d8060008114610a45576040519150601f19603f3d011682016040523d82523d6000602084013e610a4a565b606091505b509150915081158015610a5a5750835b15610a8157610a68816110b5565b60405162461bcd60e51b8152600401610231919061193a565b50508080610a8e90611814565b9150506109cc565b50505050565b6000546001600160a01b03163314610af65760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610231565b6001600160a01b038116610b725760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610231565b610b7b81611058565b50565b6001600160a01b0380841660009081526001602081815260408084208151608081018352815487168152938101548616848401526002810154909516838201526003850180548251818502810185019093528083529495869590936060860193929190830182828015610c1a57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610bfc575b5050509190925250505060208101519091506001600160a01b0316610c815760405162461bcd60e51b815260206004820152601a60248201527f6d6967726174696f6e206973206e6f7420617661696c61626c650000000000006044820152606401610231565b6020810151610c9b906001600160a01b031633308761111a565b6000856001600160a01b03166331cd52b08684606001515167ffffffffffffffff811115610ccb57610ccb6114bd565b604051908082528060200260200182016040528015610cf4578160200160208202803683370190505b506000196040518463ffffffff1660e01b8152600401610d16939291906119a8565b600060405180830381600087803b158015610d3057600080fd5b505af1158015610d44573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d6c91908101906119d1565b9050600082600001516001600160a01b0316634d49e87d83876000196040518463ffffffff1660e01b8152600401610da693929190611a57565b602060405180830381600087803b158015610dc057600080fd5b505af1158015610dd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610df89190611775565b6040840151909150610e14906001600160a01b03163383610e66565b60408051878152602081018390526001600160a01b0389169133917fd616b8856fa5febbdb06f07dd8d624380d02864619f3b796002f43bc36a4d1bc910160405180910390a3925050505b9392505050565b6040516001600160a01b038316602482015260448101829052610f0f9084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b60408051601f198184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261116b565b505050565b801580610fb657506040517fdd62ed3e0000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b158015610f7c57600080fd5b505afa158015610f90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fb49190611775565b155b6110285760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610231565b6040516001600160a01b038316602482015260448101829052610f0f90849063095ea7b360e01b90606401610eab565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60606044825110156110fa57505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b600482019150818060200190518101906111149190611a7c565b92915050565b6040516001600160a01b0380851660248301528316604482015260648101829052610a969085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401610eab565b60006111c0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112509092919063ffffffff16565b805190915015610f0f57808060200190518101906111de91906117f7565b610f0f5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610231565b606061125f8484600085611267565b949350505050565b6060824710156112df5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610231565b6001600160a01b0385163b6113365760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610231565b600080866001600160a01b031685876040516113529190611b10565b60006040518083038185875af1925050503d806000811461138f576040519150601f19603f3d011682016040523d82523d6000602084013e611394565b606091505b50915091506113a48282866113af565b979650505050505050565b606083156113be575081610e5f565b8251156113ce5782518084602001fd5b8160405162461bcd60e51b8152600401610231919061193a565b82805482825590600052602060002090810192821561144a579160200282015b8281111561144a578251825473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b03909116178255602090920191600190910190611408565b5061145692915061145a565b5090565b5b80821115611456576000815560010161145b565b6001600160a01b0381168114610b7b57600080fd5b6000806040838503121561149757600080fd5b82356114a28161146f565b915060208301356114b28161146f565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff811182821017156114f6576114f66114bd565b60405290565b604051601f8201601f1916810167ffffffffffffffff81118282101715611525576115256114bd565b604052919050565b600067ffffffffffffffff821115611547576115476114bd565b5060051b60200190565b8015158114610b7b57600080fd5b803561156a81611551565b919050565b60008060006060848603121561158457600080fd5b833561158f8161146f565b925060208481013567ffffffffffffffff808211156115ad57600080fd5b90860190608082890312156115c157600080fd5b6115c96114d3565b82356115d48161146f565b8152828401356115e38161146f565b8185015260408301356115f58161146f565b604082015260608301358281111561160c57600080fd5b80840193505088601f84011261162157600080fd5b823591506116366116318361152d565b6114fc565b82815260059290921b8301840191848101908a84111561165557600080fd5b938501935b8385101561167c57843561166d8161146f565b8252938501939085019061165a565b6060830152509450611694925050506040850161155f565b90509250925092565b6000806000604084860312156116b257600080fd5b833567ffffffffffffffff808211156116ca57600080fd5b818601915086601f8301126116de57600080fd5b8135818111156116ed57600080fd5b8760208260051b850101111561170257600080fd5b6020928301955093505084013561171881611551565b809150509250925092565b60006020828403121561173557600080fd5b8135610e5f8161146f565b60008060006060848603121561175557600080fd5b83356117608161146f565b95602085013595506040909401359392505050565b60006020828403121561178757600080fd5b5051919050565b6000602082840312156117a057600080fd5b8151610e5f8161146f565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff8114156117ee576117ee6117c1565b60010192915050565b60006020828403121561180957600080fd5b8151610e5f81611551565b6000600019821415611828576118286117c1565b5060010190565b6000602080835260a083016001600160a01b0380865116838601528083870151166040860152806040870151166060860152606086015160808087015282815180855260c0880191508583019450600092505b808310156118a457845184168252938501936001929092019190850190611882565b50979650505050505050565b6000808335601e198436030181126118c757600080fd5b83018035915067ffffffffffffffff8211156118e257600080fd5b6020019150368190038213156118f757600080fd5b9250929050565b8183823760009101908152919050565b60005b83811015611929578181015183820152602001611911565b83811115610a965750506000910152565b602081526000825180602084015261195981604085016020870161190e565b601f01601f19169190910160400192915050565b600081518084526020808501945080840160005b8381101561199d57815187529582019590820190600101611981565b509495945050505050565b8381526060602082015260006119c1606083018561196d565b9050826040830152949350505050565b600060208083850312156119e457600080fd5b825167ffffffffffffffff8111156119fb57600080fd5b8301601f81018513611a0c57600080fd5b8051611a1a6116318261152d565b81815260059190911b82018301908381019087831115611a3957600080fd5b928401925b828410156113a457835182529284019290840190611a3e565b606081526000611a6a606083018661196d565b60208301949094525060400152919050565b600060208284031215611a8e57600080fd5b815167ffffffffffffffff80821115611aa657600080fd5b818401915084601f830112611aba57600080fd5b815181811115611acc57611acc6114bd565b611adf601f8201601f19166020016114fc565b9150808252856020828501011115611af657600080fd5b611b0781602084016020860161190e565b50949350505050565b60008251611b2281846020870161190e565b919091019291505056fea264697066735822122075750b33d221ade51701bf1f0cb815e455f6923d903cd4fb2b3ec05516c3bb6664736f6c63430008090033";

type GeneralizedSwapMigratorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GeneralizedSwapMigratorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GeneralizedSwapMigrator__factory extends ContractFactory {
  constructor(...args: GeneralizedSwapMigratorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "GeneralizedSwapMigrator";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GeneralizedSwapMigrator> {
    return super.deploy(overrides || {}) as Promise<GeneralizedSwapMigrator>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GeneralizedSwapMigrator {
    return super.attach(address) as GeneralizedSwapMigrator;
  }
  connect(signer: Signer): GeneralizedSwapMigrator__factory {
    return super.connect(signer) as GeneralizedSwapMigrator__factory;
  }
  static readonly contractName: "GeneralizedSwapMigrator";
  public readonly contractName: "GeneralizedSwapMigrator";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GeneralizedSwapMigratorInterface {
    return new utils.Interface(_abi) as GeneralizedSwapMigratorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GeneralizedSwapMigrator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as GeneralizedSwapMigrator;
  }
}
