/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ISwapInterface extends utils.Interface {
  contractName: "ISwap";
  functions: {
    "addLiquidity(uint256[],uint256,uint256)": FunctionFragment;
    "calculateRemoveLiquidity(uint256)": FunctionFragment;
    "calculateRemoveLiquidityOneToken(uint256,uint8)": FunctionFragment;
    "calculateSwap(uint8,uint8,uint256)": FunctionFragment;
    "calculateTokenAmount(uint256[],bool)": FunctionFragment;
    "getA()": FunctionFragment;
    "getAllowlist()": FunctionFragment;
    "getToken(uint8)": FunctionFragment;
    "getTokenBalance(uint8)": FunctionFragment;
    "getTokenIndex(address)": FunctionFragment;
    "getVirtualPrice()": FunctionFragment;
    "initialize(address[],uint8[],string,string,uint256,uint256,uint256,address)": FunctionFragment;
    "isGuarded()": FunctionFragment;
    "removeLiquidity(uint256,uint256[],uint256)": FunctionFragment;
    "removeLiquidityImbalance(uint256[],uint256,uint256)": FunctionFragment;
    "removeLiquidityOneToken(uint256,uint8,uint256,uint256)": FunctionFragment;
    "swap(uint8,uint8,uint256,uint256,uint256)": FunctionFragment;
    "swapStorage()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [BigNumberish[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRemoveLiquidity",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateRemoveLiquidityOneToken",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateSwap",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateTokenAmount",
    values: [BigNumberish[], boolean]
  ): string;
  encodeFunctionData(functionFragment: "getA", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAllowlist",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getToken",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenIndex",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getVirtualPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      string[],
      BigNumberish[],
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string
    ]
  ): string;
  encodeFunctionData(functionFragment: "isGuarded", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeLiquidity",
    values: [BigNumberish, BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityImbalance",
    values: [BigNumberish[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "removeLiquidityOneToken",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "swapStorage",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateRemoveLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateRemoveLiquidityOneToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateTokenAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getA", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAllowlist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVirtualPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isGuarded", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityImbalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeLiquidityOneToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapStorage",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ISwap extends BaseContract {
  contractName: "ISwap";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ISwapInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addLiquidity(
      amounts: BigNumberish[],
      minToMint: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    calculateRemoveLiquidity(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    calculateRemoveLiquidityOneToken(
      tokenAmount: BigNumberish,
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { availableTokenAmount: BigNumber }>;

    calculateSwap(
      tokenIndexFrom: BigNumberish,
      tokenIndexTo: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateTokenAmount(
      amounts: BigNumberish[],
      deposit: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getA(overrides?: CallOverrides): Promise<[BigNumber]>;

    getAllowlist(overrides?: CallOverrides): Promise<[string]>;

    getToken(index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    getTokenBalance(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenIndex(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getVirtualPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      pooledTokens: string[],
      decimals: BigNumberish[],
      lpTokenName: string,
      lpTokenSymbol: string,
      a: BigNumberish,
      fee: BigNumberish,
      adminFee: BigNumberish,
      lpTokenTargetAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isGuarded(overrides?: CallOverrides): Promise<[boolean]>;

    removeLiquidity(
      amount: BigNumberish,
      minAmounts: BigNumberish[],
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityImbalance(
      amounts: BigNumberish[],
      maxBurnAmount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeLiquidityOneToken(
      tokenAmount: BigNumberish,
      tokenIndex: BigNumberish,
      minAmount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swap(
      tokenIndexFrom: BigNumberish,
      tokenIndexTo: BigNumberish,
      dx: BigNumberish,
      minDy: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapStorage(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string]
    >;
  };

  addLiquidity(
    amounts: BigNumberish[],
    minToMint: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  calculateRemoveLiquidity(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  calculateRemoveLiquidityOneToken(
    tokenAmount: BigNumberish,
    tokenIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateSwap(
    tokenIndexFrom: BigNumberish,
    tokenIndexTo: BigNumberish,
    dx: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateTokenAmount(
    amounts: BigNumberish[],
    deposit: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getA(overrides?: CallOverrides): Promise<BigNumber>;

  getAllowlist(overrides?: CallOverrides): Promise<string>;

  getToken(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getTokenBalance(
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenIndex(
    tokenAddress: string,
    overrides?: CallOverrides
  ): Promise<number>;

  getVirtualPrice(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    pooledTokens: string[],
    decimals: BigNumberish[],
    lpTokenName: string,
    lpTokenSymbol: string,
    a: BigNumberish,
    fee: BigNumberish,
    adminFee: BigNumberish,
    lpTokenTargetAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isGuarded(overrides?: CallOverrides): Promise<boolean>;

  removeLiquidity(
    amount: BigNumberish,
    minAmounts: BigNumberish[],
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityImbalance(
    amounts: BigNumberish[],
    maxBurnAmount: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeLiquidityOneToken(
    tokenAmount: BigNumberish,
    tokenIndex: BigNumberish,
    minAmount: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swap(
    tokenIndexFrom: BigNumberish,
    tokenIndexTo: BigNumberish,
    dx: BigNumberish,
    minDy: BigNumberish,
    deadline: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapStorage(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string]
  >;

  callStatic: {
    addLiquidity(
      amounts: BigNumberish[],
      minToMint: BigNumberish,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateRemoveLiquidity(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    calculateRemoveLiquidityOneToken(
      tokenAmount: BigNumberish,
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSwap(
      tokenIndexFrom: BigNumberish,
      tokenIndexTo: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateTokenAmount(
      amounts: BigNumberish[],
      deposit: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getA(overrides?: CallOverrides): Promise<BigNumber>;

    getAllowlist(overrides?: CallOverrides): Promise<string>;

    getToken(index: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getTokenBalance(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenIndex(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<number>;

    getVirtualPrice(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      pooledTokens: string[],
      decimals: BigNumberish[],
      lpTokenName: string,
      lpTokenSymbol: string,
      a: BigNumberish,
      fee: BigNumberish,
      adminFee: BigNumberish,
      lpTokenTargetAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    isGuarded(overrides?: CallOverrides): Promise<boolean>;

    removeLiquidity(
      amount: BigNumberish,
      minAmounts: BigNumberish[],
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    removeLiquidityImbalance(
      amounts: BigNumberish[],
      maxBurnAmount: BigNumberish,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeLiquidityOneToken(
      tokenAmount: BigNumberish,
      tokenIndex: BigNumberish,
      minAmount: BigNumberish,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      tokenIndexFrom: BigNumberish,
      tokenIndexTo: BigNumberish,
      dx: BigNumberish,
      minDy: BigNumberish,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swapStorage(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber, string]
    >;
  };

  filters: {};

  estimateGas: {
    addLiquidity(
      amounts: BigNumberish[],
      minToMint: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    calculateRemoveLiquidity(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateRemoveLiquidityOneToken(
      tokenAmount: BigNumberish,
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateSwap(
      tokenIndexFrom: BigNumberish,
      tokenIndexTo: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateTokenAmount(
      amounts: BigNumberish[],
      deposit: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getA(overrides?: CallOverrides): Promise<BigNumber>;

    getAllowlist(overrides?: CallOverrides): Promise<BigNumber>;

    getToken(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenBalance(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenIndex(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVirtualPrice(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      pooledTokens: string[],
      decimals: BigNumberish[],
      lpTokenName: string,
      lpTokenSymbol: string,
      a: BigNumberish,
      fee: BigNumberish,
      adminFee: BigNumberish,
      lpTokenTargetAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isGuarded(overrides?: CallOverrides): Promise<BigNumber>;

    removeLiquidity(
      amount: BigNumberish,
      minAmounts: BigNumberish[],
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidityImbalance(
      amounts: BigNumberish[],
      maxBurnAmount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeLiquidityOneToken(
      tokenAmount: BigNumberish,
      tokenIndex: BigNumberish,
      minAmount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swap(
      tokenIndexFrom: BigNumberish,
      tokenIndexTo: BigNumberish,
      dx: BigNumberish,
      minDy: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapStorage(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      amounts: BigNumberish[],
      minToMint: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    calculateRemoveLiquidity(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateRemoveLiquidityOneToken(
      tokenAmount: BigNumberish,
      tokenIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateSwap(
      tokenIndexFrom: BigNumberish,
      tokenIndexTo: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateTokenAmount(
      amounts: BigNumberish[],
      deposit: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getA(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllowlist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getToken(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenBalance(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenIndex(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVirtualPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      pooledTokens: string[],
      decimals: BigNumberish[],
      lpTokenName: string,
      lpTokenSymbol: string,
      a: BigNumberish,
      fee: BigNumberish,
      adminFee: BigNumberish,
      lpTokenTargetAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isGuarded(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeLiquidity(
      amount: BigNumberish,
      minAmounts: BigNumberish[],
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityImbalance(
      amounts: BigNumberish[],
      maxBurnAmount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeLiquidityOneToken(
      tokenAmount: BigNumberish,
      tokenIndex: BigNumberish,
      minAmount: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swap(
      tokenIndexFrom: BigNumberish,
      tokenIndexTo: BigNumberish,
      dx: BigNumberish,
      minDy: BigNumberish,
      deadline: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapStorage(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
