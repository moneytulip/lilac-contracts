/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
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

export interface IAllowlistInterface extends utils.Interface {
  contractName: "IAllowlist";
  functions: {
    "getPoolAccountLimit(address)": FunctionFragment;
    "getPoolCap(address)": FunctionFragment;
    "verifyAddress(address,bytes32[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPoolAccountLimit",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "getPoolCap", values: [string]): string;
  encodeFunctionData(
    functionFragment: "verifyAddress",
    values: [string, BytesLike[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getPoolAccountLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPoolCap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyAddress",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IAllowlist extends BaseContract {
  contractName: "IAllowlist";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAllowlistInterface;

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
    getPoolAccountLimit(
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPoolCap(
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    verifyAddress(
      account: string,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getPoolAccountLimit(
    poolAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPoolCap(
    poolAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  verifyAddress(
    account: string,
    merkleProof: BytesLike[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getPoolAccountLimit(
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolCap(
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyAddress(
      account: string,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getPoolAccountLimit(
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPoolCap(
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyAddress(
      account: string,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPoolAccountLimit(
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPoolCap(
      poolAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyAddress(
      account: string,
      merkleProof: BytesLike[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
