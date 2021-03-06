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

export interface IAssetManagerInterface extends utils.Interface {
  contractName: "IAssetManager";
  functions: {
    "capitalOut(bytes32,uint256)": FunctionFragment;
    "getAUM(bytes32)": FunctionFragment;
    "getPoolBalances(bytes32)": FunctionFragment;
    "getToken()": FunctionFragment;
    "maxInvestableBalance(bytes32)": FunctionFragment;
    "rebalance(bytes32,bool)": FunctionFragment;
    "setConfig(bytes32,bytes)": FunctionFragment;
    "shouldRebalance(uint256,uint256)": FunctionFragment;
    "updateBalanceOfPool(bytes32)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "capitalOut",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getAUM", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getPoolBalances",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maxInvestableBalance",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rebalance",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "shouldRebalance",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateBalanceOfPool",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "capitalOut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAUM", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxInvestableBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "shouldRebalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateBalanceOfPool",
    data: BytesLike
  ): Result;

  events: {
    "Rebalance(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Rebalance"): EventFragment;
}

export type RebalanceEvent = TypedEvent<[string], { poolId: string }>;

export type RebalanceEventFilter = TypedEventFilter<RebalanceEvent>;

export interface IAssetManager extends BaseContract {
  contractName: "IAssetManager";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAssetManagerInterface;

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
    capitalOut(
      poolId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAUM(poolId: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    getPoolBalances(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { poolCash: BigNumber; poolManaged: BigNumber }
    >;

    getToken(overrides?: CallOverrides): Promise<[string]>;

    maxInvestableBalance(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rebalance(
      poolId: BytesLike,
      force: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setConfig(
      poolId: BytesLike,
      config: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    shouldRebalance(
      cash: BigNumberish,
      managed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateBalanceOfPool(
      poolId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  capitalOut(
    poolId: BytesLike,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAUM(poolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  getPoolBalances(
    poolId: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { poolCash: BigNumber; poolManaged: BigNumber }
  >;

  getToken(overrides?: CallOverrides): Promise<string>;

  maxInvestableBalance(
    poolId: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rebalance(
    poolId: BytesLike,
    force: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setConfig(
    poolId: BytesLike,
    config: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  shouldRebalance(
    cash: BigNumberish,
    managed: BigNumberish,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updateBalanceOfPool(
    poolId: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    capitalOut(
      poolId: BytesLike,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getAUM(poolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getPoolBalances(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { poolCash: BigNumber; poolManaged: BigNumber }
    >;

    getToken(overrides?: CallOverrides): Promise<string>;

    maxInvestableBalance(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rebalance(
      poolId: BytesLike,
      force: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setConfig(
      poolId: BytesLike,
      config: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    shouldRebalance(
      cash: BigNumberish,
      managed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateBalanceOfPool(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Rebalance(bytes32)"(poolId?: null): RebalanceEventFilter;
    Rebalance(poolId?: null): RebalanceEventFilter;
  };

  estimateGas: {
    capitalOut(
      poolId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAUM(poolId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getPoolBalances(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getToken(overrides?: CallOverrides): Promise<BigNumber>;

    maxInvestableBalance(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rebalance(
      poolId: BytesLike,
      force: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setConfig(
      poolId: BytesLike,
      config: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    shouldRebalance(
      cash: BigNumberish,
      managed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateBalanceOfPool(
      poolId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    capitalOut(
      poolId: BytesLike,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAUM(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolBalances(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maxInvestableBalance(
      poolId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rebalance(
      poolId: BytesLike,
      force: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setConfig(
      poolId: BytesLike,
      config: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    shouldRebalance(
      cash: BigNumberish,
      managed: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateBalanceOfPool(
      poolId: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
