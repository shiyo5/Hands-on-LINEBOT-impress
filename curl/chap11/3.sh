curl -v -X POST https://api.line.me/v2/bot/richmenu \
-H 'Authorization: Bearer 9SaBOch696DVl+XC+lP6uFL1xqi/zjJF+60ld5nM0Ao4qYafYcDA/nFtHQ3PfAgx5CyS2NRNysrJebWAeXOW9M7NzIBpz691SDiVkHnH7hqcJDj/hD2t/C35H1vXyk8KDZGh+UOmQKNr5jewl95PTwdB04t89/1O/w1cDnyilFU=' \
-H 'Content-Type: application/json' \
-d \
'{
  "size": {
    "width": 2500,
    "height": 1686
  },
  "selected": true,
  "name": "richmenu-2",
  "chatBarText": "メニュー2",
  "areas": [
    {
      "bounds": {
        "x": 0,
        "y": 0,
        "width": 1250,
        "height": 200
      },
      "action": {
        "type": "richmenuswitch",
        "richMenuAliasId": "richmenu-alias-1",
        "data": "richmenu-changed-to-1"
      }
    },
    {
      "bounds": {
        "x": 0,
        "y": 200,
        "width": 833,
        "height": 1486
      },
      "action": {
        "type": "message",
        "text": "richmenu-2-message"
      }
    },
    {
      "bounds": {
        "x": 833,
        "y": 200,
        "width": 833,
        "height": 1486
      },
      "action": {
        "type": "postback",
        "data": "richmenu-2-postback"
      }
    },
    {
      "bounds": {
        "x": 1666,
        "y": 200,
        "width": 833,
        "height": 1486
      },
      "action": {
        "type": "uri",
        "uri": "https://shinbunbun.info/"
      }
    }
  ]
}'
