curl -v -X POST https://api.line.me/v2/bot/message/push \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer 9SaBOch696DVl+XC+lP6uFL1xqi/zjJF+60ld5nM0Ao4qYafYcDA/nFtHQ3PfAgx5CyS2NRNysrJebWAeXOW9M7NzIBpz691SDiVkHnH7hqcJDj/hD2t/C35H1vXyk8KDZGh+UOmQKNr5jewl95PTwdB04t89/1O/w1cDnyilFU=' \
-d '{
    "to": "U137f9ce6e39b858268a106567466ad67",
    "messages":[
        {
            "type":"text",
            "text":"Hello, world"
        }
    ]
}'
