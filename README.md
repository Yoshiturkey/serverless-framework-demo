# Serverless Framework Workshop for AWS API Gateway & Lambda.

## Description

Serverless framework を利用して AWS API Gateway と Lambda を利用した Restful API の構築

- [serverless Framework](https://www.serverless.com/)
- [Amazon API Gateway](https://aws.amazon.com/jp/api-gateway/)
- [AWS Lambda](https://aws.amazon.com/jp/lambda/)

## Requerd

- [AWS コマンドラインインターフェイス](https://aws.amazon.com/jp/cli/)

AWS コマンドラインインターフェイスを予めインストールしておくと良いです。

また、IAM に関しては以下の権限をアカウントに付与することで、リポジトリのものをデプロイすることは可能です。

- AWSLambdaFullAccess
- AmazonAPIGatewayInvokeFullAccess
- AmazonAPIGatewayPushToCloudWatchLogs
- AmazonAPIGatewayAdministrator
- AWSCloudFormationFullAccess
- AmazonS3FullAccess

## Demo

- [GET https://api.cristallum.io/v1/]

```
curl -X GET https://api.cristallum.io/v1/ -s | jq
---
{
  "message": "Hello My API [GET /]",
  "access": "2020-10-28T15:37:40+00:00"
}
```

- [POST https://api.cristallum.io/v1/]

```
curl --location --request POST 'https://api.cristallum.io/v1/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "message": "aws"
}' -s | jq

---
{
  "created": true,
  "params": {
    "message": "aws"
  },
  "message": "Request data is not stored in any resource."
}

```

## Commands

- ローカル環境でアクセスします

```
npm run local
```

- デプロイ

```
npm run deploy
```

## Next

- JEST を追加してテストを用意する
