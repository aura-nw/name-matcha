import { describe, expect, it } from 'vitest'
import { ICNS } from './icns'
import { MatchaErrorType } from './name-service'

describe('ICNS', () => {
  const resolver = new ICNS()

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  it.concurrent(
    'should resolve leapwallet.cosmos',
    async () => {
      const result = await resolver.resolve('leap_cosmos.cosmos', 'mainnet')
      expect(result).toBe('cosmos19vf5mfr40awvkefw69nl6p3mmlsnacmm28xyqh')
    },
    10000
  )

  it.concurrent(
    'should resolve leap_cosmos.juno',
    async () => {
      const result = await resolver.resolve('leap_cosmos.juno', 'mainnet')
      expect(result).toBe('juno19vf5mfr40awvkefw69nl6p3mmlsnacmmu49l8t')
    },
    10000
  )

  it.concurrent(
    'should resolve leap_cosmos.osmo',
    async () => {
      const result = await resolver.resolve('leap_cosmos.osmo', 'mainnet')
      expect(result).toBe('osmo19vf5mfr40awvkefw69nl6p3mmlsnacmmzu45k9')
    },
    10000
  )

  it.concurrent(
    'should resolve leap_cosmos.evmos',
    async () => {
      const result = await resolver.resolve('leap_cosmos.evmos', 'mainnet')
      expect(result).toBe('evmos1f8h7ud4ftaurzedzgrnjqhlsrk2h0au783fm34')
    },
    10000
  )

  it.concurrent(
    'should not resolve whatevery.cocoa',
    async () => {
      try {
        await resolver.resolve('whatevery.cocoa', 'mainnet')
      } catch (e) {
        expect(e.type).toBe(MatchaErrorType.NOT_FOUND)
      }
    },
    10000
  )
})
