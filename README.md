# news-image-20261124 — The Daily Globe, Tuesday 24 November 2026

[![make.fun bounty](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/lolipo8988-bot/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/lolipo8988-bot/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

A one-page newspaper image summing up the world news of **Tuesday, 24 November 2026**, built for the make.fun `news-image-20261124` bounty.

## What's on the page

- **Key numbers band:** Nvidia +31%, Nasdaq +6.5%, Russia's war dead near 500,000 in leaked data, 222,000 EU pollution-linked early deaths, 7.3M more people whose food aid is at risk.
- **Main stories:** Jensen Huang reinstated at Nvidia amid a market eruption; leaked Rosstat files put Russia's Ukraine war dead near 500,000; ousted PM Sheikh Hasina vows to return to Bangladesh on December 16.
- **Nine more stories** from Ukraine, Korea, Indonesia, Denmark, cybersecurity, football, Ghana, Gaza and Sudan, plus a world map with pins and an "In Brief" column.

All stories were reported on 24 November 2026 (sources: Reuters, AP, AFP, The Japan Times, SCMP, EEA). Every illustration is hand-drawn for this entry.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024 PNG)
```

`main.ts` (Node 22, standard library only, no network) copies the bundled `entry.png` to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR`). Repeated runs produce byte-identical output.

## License

MIT — see [LICENSE](LICENSE).
