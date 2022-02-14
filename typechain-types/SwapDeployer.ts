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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface SwapDeployerInterface extends utils.Interface {
  contractName: "SwapDeployer";
  functions: {
    "clone(address)": FunctionFragment;
    "deploy(address,address[],uint8[],string,string,uint256,uint256,uint256,address)": FunctionFragment;
    "deployMetaSwap(address,address[],uint8[],string,string,uint256,uint256,uint256,address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "clone", values: [string]): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [
      string,
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
  encodeFunctionData(
    functionFragment: "deployMetaSwap",
    values: [
      string,
      string[],
      BigNumberish[],
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      string
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "clone", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deployMetaSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "NewClone(address,address)": EventFragment;
    "NewSwapPool(address,address,address[])": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewClone"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewSwapPool"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export type NewCloneEvent = TypedEvent<
  [string, string],
  { target: string; cloneAddress: string }
>;

export type NewCloneEventFilter = TypedEventFilter<NewCloneEvent>;

export type NewSwapPoolEvent = TypedEvent<
  [string, string, string[]],
  { deployer: string; swapAddress: string; pooledTokens: string[] }
>;

export type NewSwapPoolEventFilter = TypedEventFilter<NewSwapPoolEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface SwapDeployer extends BaseContract {
  contractName: "SwapDeployer";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SwapDeployerInterface;

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
    clone(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deploy(
      swapAddress: string,
      _pooledTokens: string[],
      decimals: BigNumberish[],
      lpTokenName: string,
      lpTokenSymbol: string,
      _a: BigNumberish,
      _fee: BigNumberish,
      _adminFee: BigNumberish,
      lpTokenTargetAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deployMetaSwap(
      metaSwapAddress: string,
      _pooledTokens: string[],
      decimals: BigNumberish[],
      lpTokenName: string,
      lpTokenSymbol: string,
      _a: BigNumberish,
      _fee: BigNumberish,
      _adminFee: BigNumberish,
      lpTokenTargetAddress: string,
      baseSwap: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  clone(
    target: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deploy(
    swapAddress: string,
    _pooledTokens: string[],
    decimals: BigNumberish[],
    lpTokenName: string,
    lpTokenSymbol: string,
    _a: BigNumberish,
    _fee: BigNumberish,
    _adminFee: BigNumberish,
    lpTokenTargetAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deployMetaSwap(
    metaSwapAddress: string,
    _pooledTokens: string[],
    decimals: BigNumberish[],
    lpTokenName: string,
    lpTokenSymbol: string,
    _a: BigNumberish,
    _fee: BigNumberish,
    _adminFee: BigNumberish,
    lpTokenTargetAddress: string,
    baseSwap: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    clone(target: string, overrides?: CallOverrides): Promise<string>;

    deploy(
      swapAddress: string,
      _pooledTokens: string[],
      decimals: BigNumberish[],
      lpTokenName: string,
      lpTokenSymbol: string,
      _a: BigNumberish,
      _fee: BigNumberish,
      _adminFee: BigNumberish,
      lpTokenTargetAddress: string,
      overrides?: CallOverrides
    ): Promise<string>;

    deployMetaSwap(
      metaSwapAddress: string,
      _pooledTokens: string[],
      decimals: BigNumberish[],
      lpTokenName: string,
      lpTokenSymbol: string,
      _a: BigNumberish,
      _fee: BigNumberish,
      _adminFee: BigNumberish,
      lpTokenTargetAddress: string,
      baseSwap: string,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewClone(address,address)"(
      target?: string | null,
      cloneAddress?: null
    ): NewCloneEventFilter;
    NewClone(target?: string | null, cloneAddress?: null): NewCloneEventFilter;

    "NewSwapPool(address,address,address[])"(
      deployer?: string | null,
      swapAddress?: null,
      pooledTokens?: null
    ): NewSwapPoolEventFilter;
    NewSwapPool(
      deployer?: string | null,
      swapAddress?: null,
      pooledTokens?: null
    ): NewSwapPoolEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    clone(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deploy(
      swapAddress: string,
      _pooledTokens: string[],
      decimals: BigNumberish[],
      lpTokenName: string,
      lpTokenSymbol: string,
      _a: BigNumberish,
      _fee: BigNumberish,
      _adminFee: BigNumberish,
      lpTokenTargetAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deployMetaSwap(
      metaSwapAddress: string,
      _pooledTokens: string[],
      decimals: BigNumberish[],
      lpTokenName: string,
      lpTokenSymbol: string,
      _a: BigNumberish,
      _fee: BigNumberish,
      _adminFee: BigNumberish,
      lpTokenTargetAddress: string,
      baseSwap: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    clone(
      target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deploy(
      swapAddress: string,
      _pooledTokens: string[],
      decimals: BigNumberish[],
      lpTokenName: string,
      lpTokenSymbol: string,
      _a: BigNumberish,
      _fee: BigNumberish,
      _adminFee: BigNumberish,
      lpTokenTargetAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deployMetaSwap(
      metaSwapAddress: string,
      _pooledTokens: string[],
      decimals: BigNumberish[],
      lpTokenName: string,
      lpTokenSymbol: string,
      _a: BigNumberish,
      _fee: BigNumberish,
      _adminFee: BigNumberish,
      lpTokenTargetAddress: string,
      baseSwap: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}