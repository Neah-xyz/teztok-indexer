# TezTok NFT Indexer

An indexer that aggregates and normalizes NFT-related data on the Tezos Blockchain and provides a GraphQL API for developers.

[Checkout the docs for further infos](https://teztok.com/docs)

- - -

## Deploy

Build and run the indexer through docker-compose

Create a `.env.prod` file by making a copy of `.env.sample` and modifying it to your needs:

```
cp .env.sample .env.prod
```

Now create a custom docker-compose file by copying `docker-compose.prod.yml` to `docker-compose.custom.yml` and modifying it to your needs.

```
cp docker-compose.prod.yml docker-compose.custom.yml

```

It would take a very long time to index everything from scratch, which is why we strongly recommend downloading and importing a recent database dump from https://backups.teztok.com/daily/. This dump also contains the Hasura configuration and data from tzprofiles.
Here is an example of how such an SQL dump can be imported into a docker container running Postgres.

```
# Start Postgres
docker compose -f docker-compose.custom.yml up -d teztok_database

# Import a recent dump (can take quite some time)
curl https://backups.teztok.com/daily/teztok-20230323-000000.sql.gz -o teztok-20230323-000000.sql.gz
gunzip < teztok-20230323-000000.sql.gz | docker exec -i teztok_database psql -U teztok -d teztok

# Stop Postgres
docker compose -f docker-compose.custom.yml down
```

Now build the docker image:

```
docker compose -f docker-compose.custom.yml build

```

And then start the indexer:

```
docker compose -f docker-compose.custom.yml up
```

It's recommended to download and import an SQL dump from our backup server every once in a while in order to get fixes. This way you also don't need to bother with re-indexing.

## License

Licensed under the MIT license.
