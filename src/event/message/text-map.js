import { get } from '../../request.js';
// ユーザーのプロフィールを取得する関数
const getUserProfile = (event, client) => client.getProfile(event.source.userId);

// 受け取ったメッセージと返信するメッセージ(を返す関数)をマッピング
export const messageMap = {


  天気予報: async () => {
    const weatherApiRes = (await get('https://www.jma.go.jp/bosai/forecast/data/forecast/070000.json')).data;
    return {
      type: 'text',
      text: `[天気予報]
      ${weatherApiRes}[0].timeSeries[0].timeDefines[0]: ${weatherApiRes[0].timeSeries[0].areas[2].weathers[0]}
      ${weatherApiRes}[0].timeSeries[0].timeDefines[1]: ${weatherApiRes[0].timeSeries[0].areas[2].weathers[1]}
      ${weatherApiRes}[0].timeSeries[0].timeDefines[2]: ${weatherApiRes[0].timeSeries[0].areas[2].weathers[2]}
      `,
    };
  },

  こんにちは: () => ({
    type: 'text',
    text: 'こんにちは世界',
  }),
  おはよう: () => ({
    type: 'text',
    text: 'Good Morning',
  }),
  複数メッセージ: () => ([
    {
      type: 'text',
      text: 'Hello, user',
    },
    {
      type: 'text',
      text: 'May I help you?',
    },
  ]),
  予定: () => ({
    type: 'text',
    text: '何曜日?',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',
            text: '月曜',
            label: '月曜日',
          },
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '火曜',
            label: '火曜日',
          },
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '水曜',
            label: '水曜日',
          },
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '木曜',
            label: '木曜日',
          },
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '金曜',
            label: '金曜日',
          },
        },
      ]
    }
  }),
  月曜: () => ({
    type: 'text',
    text: '微積',
  }),//残りの曜日
  火曜: () => ({
    type: 'text',
    text: '経済学'
  }),
  水曜: () => ({
    type: 'text',
    text: '半日',
  }),
  木曜: () => ({
    type: 'text',
    text: '重い',
  }),
  金曜: () => ({
    type: 'text',
    text: '健康科学',
  }),

  クイックリプライ: () => ({
    type: 'text',
    text: 'クイックリプライ（以下のアクションはクイックリプライ専用で、他のメッセージタイプでは使用できません）',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'camera',
            label: 'カメラを開く',
          },
        },
        {
          type: 'action',
          action: {
            type: 'cameraRoll',
            label: 'カメラロールを開く',
          },
        },
        {
          type: 'action',
          action: {
            type: 'location',
            label: '位置情報画面を開く',
          },
        },
      ],
    },
  }),
  スタンプメッセージ: () => ({
    type: 'sticker',
    packageId: '446',
    stickerId: '1988',
  }),
  画像メッセージ: () => ({
    type: 'image',
    originalContentUrl: 'https://shinbunbun.info/images/photos/7.jpeg',
    previewImageUrl: 'https://shinbunbun.info/images/photos/7.jpeg',
  }),
  音声メッセージ: () => ({
    type: 'audio',
    originalContentUrl:
      'https://github.com/shinbunbun/Hands-on-LINEBOT/blob/master/media/demo.m4a?raw=true',
    duration: 6000,
  }),
  動画メッセージ: () => ({
    type: 'video',
    originalContentUrl: 'https://github.com/shinbunbun/Hands-on-LINEBOT/blob/master/media/demo.mp4?raw=true',
    previewImageUrl: 'https://raw.githubusercontent.com/shinbunbun/Hands-on-LINEBOT/master/media/thumbnail.jpg?raw=true',
  }),
  位置情報メッセージ: () => ({
    type: 'location',
    title: 'my location',
    address: '〒160-0004 東京都新宿区四谷一丁目6番1号',
    latitude: 35.687574,
    longitude: 139.72922,
  }),
  イメージマップメッセージ: () => ([
    {
      type: 'imagemap',
      baseUrl:
        'https://github.com/shiyo5/Hands-on-LINEBOT-impress/blob/master/media/imagemap.png?raw=true',
      altText: 'This is an imagemap',
      baseSize: {
        width: 1686,
        height: 948,
      },
      actions: [
        {
          type: 'uri',
          area: {
            x: 590,
            y: 179,
            width: 511,
            height: 585,
          },
          linkUri: 'https://x.com/ow_uruca?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor',
        },
        {
          type: 'message',
          area: {
            x: 0,
            y: 0,
            width: 458,
            height: 948,
          },
          text: 'しんぶんぶん！！！',
        },
        {
          type: 'message',
          area: {
            x: 1230,
            y: 0,
            width: 456,
            height: 948,
          },
          text: 'しんぶんぶん！！！',
        },
      ],
    },
    {
      type: 'text',
      text: '画像の色々なところをタップしてみよう！',
    },
  ]),
  ボタンテンプレート: () => ({
    type: 'template',
    altText: 'ボタンテンプレート',
    template: {
      type: 'buttons',
      thumbnailImageUrl: 'https://shinbunbun.info/images/photos/7.jpeg',
      imageAspectRatio: 'rectangle',
      imageSize: 'cover',
      imageBackgroundColor: '#FFFFFF',
      title: 'ボタンテンプレート',
      text: 'ボタンだお',
      defaultAction: {
        type: 'uri',
        label: 'View detail',
        uri: 'https://shinbunbun.info/images/photos/',
      },
      actions: [
        {
          type: 'postback',
          label: 'ポストバックアクション',
          data: 'button-postback',
        },
        {
          type: 'message',
          label: 'メッセージアクション',
          text: 'button-message',
        },
        {
          type: 'uri',
          label: 'URIアクション',
          uri: 'https://shinbunbun.info/',
        },
        {
          type: 'datetimepicker',
          label: '日時選択アクション',
          data: 'button-date',
          mode: 'datetime',
          initial: '2021-06-01t00:00',
          max: '2022-12-31t23:59',
          min: '2021-06-01t00:00',
        },
      ],
    },
  }),
  確認テンプレート: () => ({
    type: 'template',
    altText: '確認テンプレート',
    template: {
      type: 'confirm',
      text: '確認テンプレート',
      actions: [
        {
          type: 'message',
          label: 'はい',
          text: 'yes',
        },
        {
          type: 'message',
          label: 'いいえ',
          text: 'no',
        },
      ],
    },
  }),
  カルーセルテンプレート: () => ({
    type: 'template',
    altText: 'カルーセルテンプレート',
    template: {
      type: 'carousel',
      columns: [
        {
          thumbnailImageUrl: 'https://shinbunbun.info/images/photos/7.jpeg',
          imageBackgroundColor: '#FFFFFF',
          title: 'タイトル1',
          text: '説明1',
          defaultAction: {
            type: 'uri',
            label: 'View detail',
            uri: 'https://shinbunbun.info/',
          },
          actions: [
            {
              type: 'postback',
              label: 'ポストバック',
              data: 'postback-carousel-1',
            },
            {
              type: 'uri',
              label: 'URIアクション',
              uri: 'https://shinbunbun.info/',
            },
          ],
        },
        {
          thumbnailImageUrl:
            'https://shinbunbun.info/images/photos/10.jpeg',
          imageBackgroundColor: '#FFFFFF',
          title: 'タイトル2',
          text: '説明2',
          defaultAction: {
            type: 'uri',
            label: 'View detail',
            uri: 'https://shinbunbun.info/',
          },
          actions: [
            {
              type: 'postback',
              label: 'ポストバック',
              data: 'postback-carousel-2',
            },
            {
              type: 'uri',
              label: 'URIアクション',
              uri: 'https://shinbunbun.info/',
            },
          ],
        },
      ],
      imageAspectRatio: 'rectangle',
      imageSize: 'cover',
    },
  }),
  画像カルーセルテンプレート: () => ({
    type: 'template',
    altText: '画像カルーセルテンプレート',
    template: {
      type: 'image_carousel',
      columns: [
        {
          imageUrl: 'https://shinbunbun.info/images/photos/4.jpeg',
          action: {
            type: 'postback',
            label: 'ポストバック',
            data: 'image-carousel-1',
          },
        },
        {
          imageUrl: 'https://shinbunbun.info/images/photos/5.jpeg',
          action: {
            type: 'message',
            label: 'メッセージ',
            text: 'いえい',
          },
        },
        {
          imageUrl: 'https://shinbunbun.info/images/photos/7.jpeg',
          action: {
            type: 'uri',
            label: 'URIアクション',
            uri: 'https://shinbunbun.info/',
          },
        },
      ],
    },
  }),
  'Flex Message': () => ({
    type: 'flex',
    altText: 'Flex Message',
    contents: {
      "type": "bubble",
      "hero": {
        "type": "image",
        "size": "full",
        "aspectRatio": "20:13",
        "aspectMode": "cover",
        "action": {
          "type": "uri",
          "uri": "https://line.me/"
        },
        "url": "https://pbs.twimg.com/profile_images/446704053/_____400x400.jpg"
      },
      "body": {
        "type": "box",
        "layout": "vertical",
        "contents": [
          {
            "type": "text",
            "weight": "bold",
            "size": "xl",
            "text": "学祭実行委員会"
          },
          {
            "type": "box",
            "layout": "baseline",
            "margin": "md",
            "contents": [
              {
                "type": "icon",
                "size": "sm",
                "url": "https://soshosai.com/_astro/logo_img.125cd598.png"
              },
              {
                "type": "icon",
                "size": "sm",
                "url": "https://soshosai.com/_astro/logo_img.125cd598.png"
              },
              {
                "type": "icon",
                "size": "sm",
                "url": "https://soshosai.com/_astro/logo_img.125cd598.png"
              },
              {
                "type": "icon",
                "size": "sm",
                "url": "https://soshosai.com/_astro/logo_img.125cd598.png"
              },
              {
                "type": "icon",
                "size": "sm",
                "url": "https://soshosai.com/_astro/logo_img.125cd598.png"
              },
              {
                "type": "text",
                "size": "sm",
                "color": "#999999",
                "margin": "md",
                "flex": 0,
                "text": "学祭実行委員"
              }
            ]
          },
          {
            "type": "box",
            "layout": "vertical",
            "margin": "lg",
            "spacing": "sm",
            "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Place",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "〒965-8580 福島県会津若松市一箕町鶴賀,学生ホール3階左突き当たり",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 5
                  }
                ]
              },
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                  {
                    "type": "text",
                    "text": "Time",
                    "color": "#aaaaaa",
                    "size": "sm",
                    "flex": 1
                  },
                  {
                    "type": "text",
                    "text": "All",
                    "wrap": true,
                    "color": "#666666",
                    "size": "sm",
                    "flex": 5
                  }
                ]
              }
            ]
          }
        ],
        "position": "relative"
      },
      "footer": {
        "type": "box",
        "layout": "vertical",
        "spacing": "sm",
        "contents": [
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "label": "UoA",
              "uri": "https://u-aizu.ac.jp/"
            }
          },
          {
            "type": "button",
            "style": "link",
            "height": "sm",
            "action": {
              "type": "uri",
              "uri": "https://x.com/soshosai?lang=en",
              "label": "学祭実行委委員会"
            }
          },
          {
            "type": "box",
            "layout": "vertical",
            "contents": [],
            "margin": "sm"
          }
        ],
        "flex": 0
      }
    },
  }),
  プロフィール: async (event, appContext) => {
    // ユーザーのプロフィール情報を取得
    const profile = await getUserProfile(event, appContext.lineClient);
    // 返信するメッセージを作成
    return {
      type: 'text',
      text: `あなたの名前: ${profile.displayName}\nユーザーID: ${profile.userId}\nプロフィール画像のURL: ${profile.pictureUrl}\nステータスメッセージ: ${profile.statusMessage}`,
    };
  },
  ここはどこ: (event) => ({
    type: 'text',
    text: `ここは${event.source.type}だよ！`,
  }),
};
