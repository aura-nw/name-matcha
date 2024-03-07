import { decode } from 'bech32'
import {
  Addr,
  AllowedTopLevelDomains,
  MatchaError,
  MatchaErrorType,
  NameService,
  Network,
  RpcURLs
} from './name-service'

const rpcUrls = {
  mainnet: 'https://rpc.aura.network',
  testnet: 'https://rpc.euphoria.aura.network/'
}

export const serviceID = 'ans'

export class ANS extends NameService {
  serviceID = serviceID
  chain = 'aura'
  contractAddress = {
    mainnet: 'aura19ddyd5cxxknxt84pw0huaayrzg0gkf74s00xjq6l7jaem7975mmsg7ktc3',
    testnet: 'aura19ddyd5cxxknxt84pw0huaayrzg0gkf74s00xjq6l7jaem7975mmsg7ktc3'
  }

  async resolve(
    name: string,
    network: Network,
    options?: {
      allowedTopLevelDomains?: AllowedTopLevelDomains
      rpcUrls?: RpcURLs
    }
  ): Promise<string> {
    const client = await this.getCosmWasmClient(
      options?.rpcUrls?.[serviceID]?.[network] ?? rpcUrls[network]
    )

    const [username, prefix] = name.split('.')
    try {
      const res = await client?.queryContractSmart(
        this.contractAddress[network],
        {
          address_of: {
            primary_name: username,
            bech32_prefix: prefix
          }
        }
      )
      if (
        !res?.address ||
        options?.allowedTopLevelDomains?.ans?.indexOf(prefix) === -1
      ) {
        throw new MatchaError('', MatchaErrorType.NOT_FOUND)
      }
      return res.address
    } catch (e) {
      throw new MatchaError('', MatchaErrorType.NOT_FOUND)
    }
  }

  async lookup(
    address: string,
    network: Network,
    options?: {
      rpcUrls?: RpcURLs
    }
  ): Promise<string> {
    const client = await this.getCosmWasmClient(
      options?.rpcUrls?.[serviceID]?.[network] ?? rpcUrls[network]
    )

    const addr: Addr = {
      prefix: null,
      words: null
    }
    try {
      const { prefix, words } = decode(address)
      addr.prefix = prefix
      addr.words = words
    } catch (e) {
      throw new MatchaError('', MatchaErrorType.INVALID_ADDRESS)
    }
    try {
      const res = await client?.queryContractSmart(
        this.contractAddress[network],
        {
          names: {
            limit: null,
            owner: address,
            start_after: null
          }
        }
      )
      if (res.names.length === 0) {
        throw new MatchaError('', MatchaErrorType.NOT_FOUND)
      }
      return `${res.names.join(", ")}`
    } catch (e) {
      throw new MatchaError('', MatchaErrorType.NOT_FOUND)
    }
  }
}
