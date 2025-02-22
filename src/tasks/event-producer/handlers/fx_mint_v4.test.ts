import FxMintV4Handler from './fx_mint_v4';
import { transactionsToEvents } from '../event-producer';
import { Transactions } from '../../../types';

test('creates FX_MINT_V4 events', async () => {
  const transactions: Transactions = [
    {
      id: 491477618655232,
      level: 3240869,
      timestamp: '2023-03-19T23:29:59Z',
      block: 'BLSMgufo8ViNYuXMJfSLzZScvbfbdGPDkdWFacbe5LcjTQuh3mD',
      hash: 'opYJABcmSNqxfbJULtMRQogi1dsSYP7AfpTupJTyYkWU2zYeYwZ',
      counter: 22492634,
      sender: {
        alias: 'tamasantalart',
        address: 'tz1QXGY9z6RWC6Toy88ixFfsXFKwEN9q5khd',
      },
      target: {
        address: 'KT1Xpmp15KfqoePNW9HczFmqaGNHwadV2a3b',
      },
      amount: 2500000,
      parameter: {
        entrypoint: 'mint',
        value: {
          referrer: null,
          issuer_id: '26049',
          recipient: null,
          input_bytes: '',
          create_ticket: null,
          reserve_input: null,
        },
      },
      status: 'applied',
      hasInternals: true,
      initiator: null,
      storage: {
        fees: '50',
        admin: 'tz1fepn7jZsCYBqCDhpM63hzh9g2Ytqk4Tpv',
        ledger: 411393,
        paused: false,
        big_map: 411397,
        metadata: 411394,
        addresses: 411389,
        lock_time: '3600',
        all_tokens: '26054',
        locked_eps: false,
        user_actions: 411396,
        codex_entries: 411390,
        reserve_methods: 411395,
        all_gentk_tokens: '1',
        pricing_contracts: {
          '0': {
            address: 'KT1V24J6FVuKPU3xy6gVF6wJ3zdRXBheQhaV',
            enabled: true,
          },
          '1': {
            address: 'KT1MFgHKorMWXeVL6qrpgjZmemirafppSg9q',
            enabled: true,
          },
        },
        codex_entries_count: '6',
        entrypoints_enabled: 411391,
        gentk_void_metadata: '697066733a2f2f516d5a5a56424b617044673277587a77704478646d4c39416836363568395a7a654a3967596462545a3447427a66',
        referrer_fees_share: '200',
        issuer_codex_updates: 411392,
      },
      diffs: [
        {
          bigmap: 411396,
          path: 'user_actions',
          action: 'add_key',
          content: {
            hash: 'expruJPza3UFCe8DQX1Uom8VNAWESz7C8QpexS31GLsvYQn2LV9yoz',
            key: 'tz1QXGY9z6RWC6Toy88ixFfsXFKwEN9q5khd',
            value: {
              last_minted: ['1'],
              last_minted_time: '2023-03-19T23:29:59Z',
              last_issuer_minted: '0',
              last_issuer_minted_time: '1970-01-01T00:00:00Z',
            },
          },
        },
        {
          bigmap: 411393,
          path: 'ledger',
          action: 'update_key',
          content: {
            hash: 'expruboqdV9vUndibdWLNFQQDDgnCRo5t9SVTWX6sgWaM974Z28Jtt',
            key: '26049',
            value: {
              tags: ['100'],
              author: 'tz2JyW132finpXHFNCSrHtcBEHRmwp5ffYks',
              supply: '70',
              balance: '69',
              enabled: true,
              codex_id: '1',
              metadata: '697066733a2f2f516d61696d7669686a436275647a4b776557746976765066526454535163794779695379697a726b7a5039776961',
              reserves: [],
              royalties: '120',
              pricing_id: '0',
              has_tickets: false,
              open_editions: null,
              primary_split: [
                {
                  pct: '1000',
                  address: 'tz2JyW132finpXHFNCSrHtcBEHRmwp5ffYks',
                },
              ],
              locked_seconds: '0',
              royalties_split: [
                {
                  pct: '1000',
                  address: 'tz2JyW132finpXHFNCSrHtcBEHRmwp5ffYks',
                },
              ],
              input_bytes_size: '0',
              iterations_count: '1',
              timestamp_minted: '2023-03-19T23:15:59Z',
              lock_price_for_reserves: false,
            },
          },
        },
      ],
      nonce: null,
    },
    {
      id: 491477621800960,
      level: 3240869,
      timestamp: '2023-03-19T23:29:59Z',
      block: 'BLSMgufo8ViNYuXMJfSLzZScvbfbdGPDkdWFacbe5LcjTQuh3mD',
      hash: 'opYJABcmSNqxfbJULtMRQogi1dsSYP7AfpTupJTyYkWU2zYeYwZ',
      counter: 22492634,
      sender: {
        address: 'KT1Xpmp15KfqoePNW9HczFmqaGNHwadV2a3b',
      },
      target: {
        address: 'KT1EfsNuqwLAWDd3o4pvfUx1CAh5GMdTrRvr',
      },
      amount: 0,
      parameter: {
        entrypoint: 'mint',
        value: {
          address: 'tz1QXGY9z6RWC6Toy88ixFfsXFKwEN9q5khd',
          metadata: {
            '': '697066733a2f2f516d5a5a56424b617044673277587a77704478646d4c39416836363568395a7a654a3967596462545a3447427a66',
          },
          token_id: '0',
          issuer_id: '26049',
          iteration: '1',
          royalties: '120',
          input_bytes: '',
          royalties_split: [
            {
              pct: '1000',
              address: 'tz2JyW132finpXHFNCSrHtcBEHRmwp5ffYks',
            },
          ],
        },
      },
      status: 'applied',
      hasInternals: false,
      initiator: {
        alias: 'tamasantalart',
        address: 'tz1QXGY9z6RWC6Toy88ixFfsXFKwEN9q5khd',
      },
      storage: {
        issuer: 'KT1Xpmp15KfqoePNW9HczFmqaGNHwadV2a3b',
        ledger: 411398,
        paused: false,
        signer: 'tz1e8XGv6ngNoLt1ZNkEi6sG1A39yF48iwdS',
        metadata: 411399,
        operators: 411400,
        all_tokens: '1',
        token_data: 411401,
        administrator: 'tz1fepn7jZsCYBqCDhpM63hzh9g2Ytqk4Tpv',
        token_metadata: 411402,
        treasury_address: 'tz1dtzgLYUHMhP6sWeFtFsHkHqyPezBBPLsZ',
      },
      diffs: [
        {
          bigmap: 411402,
          path: 'token_metadata',
          action: 'add_key',
          content: {
            hash: 'exprtZBwZUeYYYfUs9B9Rg2ywHezVHnCCnmF9WsDQVrs582dSK63dC',
            key: '0',
            value: {
              token_id: '0',
              token_info: {
                '': '697066733a2f2f516d5a5a56424b617044673277587a77704478646d4c39416836363568395a7a654a3967596462545a3447427a66',
              },
            },
          },
        },
        {
          bigmap: 411401,
          path: 'token_data',
          action: 'add_key',
          content: {
            hash: 'exprtZBwZUeYYYfUs9B9Rg2ywHezVHnCCnmF9WsDQVrs582dSK63dC',
            key: '0',
            value: {
              minter: 'tz1QXGY9z6RWC6Toy88ixFfsXFKwEN9q5khd',
              assigned: false,
              issuer_id: '26049',
              iteration: '1',
              royalties: '120',
              input_bytes: '',
              royalties_split: [
                {
                  pct: '1000',
                  address: 'tz2JyW132finpXHFNCSrHtcBEHRmwp5ffYks',
                },
              ],
            },
          },
        },
        {
          bigmap: 411398,
          path: 'ledger',
          action: 'add_key',
          content: {
            hash: 'exprvTb42ZYSAPremhqPim6Rf4BM9s6iggtWBKG4t3qjUrQe4E2RzM',
            key: {
              nat: '0',
              address: 'tz1QXGY9z6RWC6Toy88ixFfsXFKwEN9q5khd',
            },
            value: '1',
          },
        },
      ],
      nonce: 18,
    },
    {
      id: 492558407958528,
      level: 3244497,
      timestamp: '2023-03-21T05:50:14Z',
      block: 'BMLfKhMk6YG4yjND2vwAeYNUm3VrFztCcqEhym2EFpsGuoi3Lvi',
      hash: 'oo6t3rVWawXzYExcZf9Fvri33k37UNTkXCuxmZtU3tfFPHFL51r',
      counter: 32395181,
      sender: {
        address: 'KT1Ryab5JZ4JrUJeHg1mFxZ86E4nYMyPb3NA',
      },
      target: {
        address: 'KT1Xpmp15KfqoePNW9HczFmqaGNHwadV2a3b',
      },
      amount: 0,
      parameter: {
        entrypoint: 'mint',
        value: {
          referrer: null,
          issuer_id: '26109',
          recipient: 'tz1eeATpjgjcoVcAL9dpjUed94tzmnHyiDHT',
          input_bytes: '4044800000000000',
          create_ticket: null,
          reserve_input: '05070703060000',
        },
      },
      status: 'applied',
      hasInternals: false,
      initiator: {
        alias: 'cryptoartmagazine',
        address: 'tz1eeATpjgjcoVcAL9dpjUed94tzmnHyiDHT',
      },
      storage: {
        fees: '50',
        admin: 'tz1fepn7jZsCYBqCDhpM63hzh9g2Ytqk4Tpv',
        ledger: 411393,
        paused: false,
        big_map: 411397,
        metadata: 411394,
        addresses: 411389,
        lock_time: '3600',
        all_tokens: '26120',
        locked_eps: false,
        user_actions: 411396,
        codex_entries: 411390,
        reserve_methods: 411395,
        all_gentk_tokens: '1566',
        pricing_contracts: {
          '0': {
            address: 'KT1V24J6FVuKPU3xy6gVF6wJ3zdRXBheQhaV',
            enabled: true,
          },
          '1': {
            address: 'KT1MFgHKorMWXeVL6qrpgjZmemirafppSg9q',
            enabled: true,
          },
        },
        codex_entries_count: '72',
        entrypoints_enabled: 411391,
        gentk_void_metadata: '697066733a2f2f516d5a5a56424b617044673277587a77704478646d4c39416836363568395a7a654a3967596462545a3447427a66',
        referrer_fees_share: '200',
        issuer_codex_updates: 411392,
      },
      diffs: [
        {
          bigmap: 411396,
          path: 'user_actions',
          action: 'update_key',
          content: {
            hash: 'exprv1wZFrAyvPyAzeu8FNS9zhhxZmTZ5mS1AK6hFKExA7LWqVsbDZ',
            key: 'KT1Ryab5JZ4JrUJeHg1mFxZ86E4nYMyPb3NA',
            value: {
              last_minted: ['1566'],
              last_minted_time: '2023-03-21T05:50:14Z',
              last_issuer_minted: '0',
              last_issuer_minted_time: '1970-01-01T00:00:00Z',
            },
          },
        },
        {
          bigmap: 411393,
          path: 'ledger',
          action: 'update_key',
          content: {
            hash: 'exprtadWsJfKBE3JSmMet84uVUU5hVzz5boNu8wmnEtP68up3QJxFy',
            key: '26109',
            value: {
              tags: ['101'],
              author: 'tz1RkYY3jr1ocuPdQqrRefr5FqoawKQsmBmD',
              supply: '1000',
              balance: '987',
              enabled: true,
              codex_id: '61',
              metadata: '697066733a2f2f516d5a465a48695447703152574e66315455715a68444a764135536275787932424d5a4c4b53616b6d597a706379',
              reserves: [
                {
                  data: '05020000002007040a0000001601beca8abda0585816a8ce56c384f596a57ce4b80000009b0f',
                  amount: '987',
                  method_id: '0',
                },
              ],
              royalties: '100',
              pricing_id: '0',
              has_tickets: true,
              open_editions: null,
              primary_split: [
                {
                  pct: '1000',
                  address: 'tz1RkYY3jr1ocuPdQqrRefr5FqoawKQsmBmD',
                },
              ],
              locked_seconds: '0',
              royalties_split: [
                {
                  pct: '1000',
                  address: 'tz1RkYY3jr1ocuPdQqrRefr5FqoawKQsmBmD',
                },
              ],
              input_bytes_size: '8',
              iterations_count: '13',
              timestamp_minted: '2023-03-20T22:19:44Z',
              lock_price_for_reserves: false,
            },
          },
        },
      ],
      nonce: 5,
    },
    {
      id: 492558409007104,
      level: 3244497,
      timestamp: '2023-03-21T05:50:14Z',
      block: 'BMLfKhMk6YG4yjND2vwAeYNUm3VrFztCcqEhym2EFpsGuoi3Lvi',
      hash: 'oo6t3rVWawXzYExcZf9Fvri33k37UNTkXCuxmZtU3tfFPHFL51r',
      counter: 32395181,
      sender: {
        address: 'KT1Xpmp15KfqoePNW9HczFmqaGNHwadV2a3b',
      },
      target: {
        address: 'KT1EfsNuqwLAWDd3o4pvfUx1CAh5GMdTrRvr',
      },
      amount: 0,
      parameter: {
        entrypoint: 'mint',
        value: {
          address: 'tz1eeATpjgjcoVcAL9dpjUed94tzmnHyiDHT',
          metadata: {
            '': '697066733a2f2f516d5a5a56424b617044673277587a77704478646d4c39416836363568395a7a654a3967596462545a3447427a66',
          },
          token_id: '1565',
          issuer_id: '26109',
          iteration: '13',
          royalties: '100',
          input_bytes: '4044800000000000',
          royalties_split: [
            {
              pct: '1000',
              address: 'tz1RkYY3jr1ocuPdQqrRefr5FqoawKQsmBmD',
            },
          ],
        },
      },
      status: 'applied',
      hasInternals: false,
      initiator: {
        alias: 'cryptoartmagazine',
        address: 'tz1eeATpjgjcoVcAL9dpjUed94tzmnHyiDHT',
      },
      storage: {
        issuer: 'KT1Xpmp15KfqoePNW9HczFmqaGNHwadV2a3b',
        ledger: 411398,
        paused: false,
        signer: 'tz1e8XGv6ngNoLt1ZNkEi6sG1A39yF48iwdS',
        metadata: 411399,
        operators: 411400,
        all_tokens: '1566',
        token_data: 411401,
        administrator: 'tz1fepn7jZsCYBqCDhpM63hzh9g2Ytqk4Tpv',
        token_metadata: 411402,
        treasury_address: 'tz1dtzgLYUHMhP6sWeFtFsHkHqyPezBBPLsZ',
      },
      diffs: [
        {
          bigmap: 411402,
          path: 'token_metadata',
          action: 'add_key',
          content: {
            hash: 'expru7xHkyBbKwRjNNc8RUsbVC8tVUvCwRAFyWfSmRZafjVp1kq2G4',
            key: '1565',
            value: {
              token_id: '1565',
              token_info: {
                '': '697066733a2f2f516d5a5a56424b617044673277587a77704478646d4c39416836363568395a7a654a3967596462545a3447427a66',
              },
            },
          },
        },
        {
          bigmap: 411401,
          path: 'token_data',
          action: 'add_key',
          content: {
            hash: 'expru7xHkyBbKwRjNNc8RUsbVC8tVUvCwRAFyWfSmRZafjVp1kq2G4',
            key: '1565',
            value: {
              minter: 'tz1eeATpjgjcoVcAL9dpjUed94tzmnHyiDHT',
              assigned: false,
              issuer_id: '26109',
              iteration: '13',
              royalties: '100',
              input_bytes: '4044800000000000',
              royalties_split: [
                {
                  pct: '1000',
                  address: 'tz1RkYY3jr1ocuPdQqrRefr5FqoawKQsmBmD',
                },
              ],
            },
          },
        },
        {
          bigmap: 411398,
          path: 'ledger',
          action: 'add_key',
          content: {
            hash: 'exprupY4B4Zynh1dAD9gC4XNfef27wT1RTP2WQFLeir9vCsesGEiko',
            key: {
              nat: '1565',
              address: 'tz1eeATpjgjcoVcAL9dpjUed94tzmnHyiDHT',
            },
            value: '1',
          },
        },
      ],
      nonce: 6,
    },
  ];

  const events = transactionsToEvents(transactions, [FxMintV4Handler]);

  expect(events).toStrictEqual([
    {
      id: 'dcaacc3302b4552b4dc7eebf3554144a',
      type: 'FX_MINT_V4',
      implements: 'SALE',
      opid: '491477618655232',
      ophash: 'opYJABcmSNqxfbJULtMRQogi1dsSYP7AfpTupJTyYkWU2zYeYwZ',
      timestamp: '2023-03-19T23:29:59Z',
      level: 3240869,
      fa2_address: 'KT1EfsNuqwLAWDd3o4pvfUx1CAh5GMdTrRvr',
      token_id: '0',
      editions: '1',
      seller_address: 'tz2JyW132finpXHFNCSrHtcBEHRmwp5ffYks',
      artist_address: 'tz2JyW132finpXHFNCSrHtcBEHRmwp5ffYks',
      buyer_address: 'tz1QXGY9z6RWC6Toy88ixFfsXFKwEN9q5khd',
      is_verified_artist: false,
      issuer_id: '26049',
      iteration: '1',
      royalties: '120',
      price: '2500000',
      metadata_uri: 'ipfs://QmZZVBKapDg2wXzwpDxdmL9Ah665h9ZzeJ9gYdbTZ4GBzf',
      royalty_shares: {
        decimals: 6,
        shares: {
          tz2JyW132finpXHFNCSrHtcBEHRmwp5ffYks: '120000',
        },
      },
    },
    {
      artist_address: 'tz1RkYY3jr1ocuPdQqrRefr5FqoawKQsmBmD',
      buyer_address: 'tz1eeATpjgjcoVcAL9dpjUed94tzmnHyiDHT',
      editions: '1',
      fa2_address: 'KT1EfsNuqwLAWDd3o4pvfUx1CAh5GMdTrRvr',
      id: '7392fee002b650443331d7400ae7c7d0',
      implements: 'SALE',
      is_verified_artist: false,
      issuer_id: '26109',
      iteration: '13',
      level: 3244497,
      metadata_uri: 'ipfs://QmZZVBKapDg2wXzwpDxdmL9Ah665h9ZzeJ9gYdbTZ4GBzf',
      ophash: 'oo6t3rVWawXzYExcZf9Fvri33k37UNTkXCuxmZtU3tfFPHFL51r',
      opid: '492558407958528',
      price: '0',
      royalties: '100',
      royalty_shares: {
        decimals: 6,
        shares: {
          tz1RkYY3jr1ocuPdQqrRefr5FqoawKQsmBmD: '100000',
        },
      },
      seller_address: 'tz1RkYY3jr1ocuPdQqrRefr5FqoawKQsmBmD',
      timestamp: '2023-03-21T05:50:14Z',
      token_id: '1565',
      type: 'FX_MINT_V4',
    },
  ]);
});
