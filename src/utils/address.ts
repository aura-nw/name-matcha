export type SupportedChain =
  | 'cosmos'
  | 'osmosis'
  | 'secret'
  | 'juno'
  | 'akash'
  | 'axelar'
  | 'emoney'
  | 'irisnet'
  | 'persistenceNew'
  | 'persistence'
  | 'stargaze'
  | 'sifchain'
  | 'sommelier'
  | 'umee'
  | 'starname'
  | 'cryptoorg'
  | 'comdex'
  | 'assetmantle'
  | 'crescent'
  | 'kujira'
  | 'injective'
  | 'mars'
  | 'sei'
  | 'stride'
  | 'agoric'
  | 'cheqd'
  | 'likecoin'
  | 'chihuahua'
  | 'gravitybridge'
  | 'fetchhub'
  | 'desmos'
  | 'teritori'
  | 'jackal'
  | 'evmos'
  | 'bitsong'
  | 'bitcanna'
  | 'canto'
  | 'decentr'
  | 'carbon'
  | 'cudos'
  | 'kava'
  | 'omniflix'
  | 'passage'
  | 'archway'
  | 'terra'
  | 'migaloo'
  | 'quasar'
  | 'neutron'
  | 'coreum'
  | 'mainCoreum'
  | 'quicksilver'
  | 'kyve'
  | 'seiTestnet2'
  | 'onomy'
  | 'noble'
  | 'impacthub'
  | 'planq'
  | 'nomic'
  | 'nolus'
  | 'chain4energy'
  | 'gitopia'
  | 'nibiru'
  | 'mayachain'
  | 'empowerchain'
  | 'dydx'

/**
 * address prefixes object includes address prefix as key, and chain infos key as value
 * */
// eslint-disable-next-line @typescript-eslint/ban-types
export const addressPrefixes: Record<string, SupportedChain | (string & {})> = {
  agoric: 'agoric',
  akash: 'akash',
  arkh: 'arkh',
  axelar: 'axelar',
  band: 'bandchain',
  bcna: 'bitcanna',
  bitsong: 'bitsong',
  bostrom: 'bostrom',
  cerberus: 'cerberus',
  certik: 'shentu',
  cheqd: 'cheqd',
  chihuahua: 'chihuahua',
  chronic: 'chronicnetwork',
  comdex: 'comdex',
  cosmos: 'cosmos',
  crc: 'cronos',
  cre: 'crescent',
  cro: 'cryptoorgchain',
  cudos: 'cudos',
  darc: 'konstellation',
  decentr: 'decentr',
  desmos: 'desmos',
  dig: 'dig',
  echelon: 'echelon',
  emoney: 'emoney',
  evmos: 'evmos',
  fetch: 'fetchhub',
  firma: 'firmachain',
  galaxy: 'galaxy',
  genesis: 'genesisl1',
  gravity: 'gravitybridge',
  iaa: 'irisnet',
  inj: 'injective',
  ixo: 'impacthub',
  juno: 'juno',
  kava: 'kava',
  ki: 'kichain',
  like: 'likecoin',
  logos: 'logos',
  lum: 'lumnetwork',
  mantle: 'assetmantle',
  mars: 'mars',
  meme: 'meme',
  micro: 'microtick',
  mythos: 'mythos',
  nomic: 'nomic',
  octa: 'octa',
  odin: 'odin',
  orai: 'oraichain',
  osmo: 'osmosis',
  panacea: 'panacea',
  pb: 'provenance',
  persistence: 'persistenceNew',
  regen: 'regen',
  rizon: 'rizon',
  secret: 'secret',
  sent: 'sentinel',
  sif: 'sifchain',
  somm: 'sommelier',
  star: 'starname',
  stars: 'stargaze',
  swth: 'carbon',
  terra: 'terra',
  thor: 'thorchain',
  umee: 'umee',
  vdl: 'vidulum',
  kujira: 'kujira',
  sei: 'seiTestnet2',
  stride: 'stride',
  jkl: 'jackal',
  tori: 'teritori',
  omniflix: 'omniflix',
  canto: 'canto',
  pasg: 'passage',
  archway: 'archway',
  quasar: 'quasar',
  neutron: 'neutron',
  testcore: 'coreum',
  core: 'mainCoreum',
  quick: 'quicksilver',
  migaloo: 'migaloo',
  kyve: 'kyve',
  onomy: 'onomy',
  noble: 'noble',
  plq: 'planq',
  nolus: 'nolus',
  c4e: 'chain4energy',
  gitopia: 'gitopia',
  nibi: 'nibiru',
  maya: 'mayachain',
  empower: 'empowerchain',
  dydx: 'dydx'
}
