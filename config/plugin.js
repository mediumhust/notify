module.exports = ({ env }) => ({
    notifications: {
      enabled: true,
    },
    email: {
      enabled: true,
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'toanld@smartosc.com',
          defaultReplyTo: 'toanld@smartosc.com',
          testAddress: 'toanld@smartosc.com',
        },
      },
    },
    comments: {
      enabled: true,
      config: {
        enableUsers: true,
        badWords: false,
        moderatorRoles: ["Authenticated"]
      },
    },
    navigation: {
      enabled: true,
      additionalFields: ['audience'],
      allowedLevels: 2,
      contentTypesNameFields: {
        'article': ['content'],
        'pages': ['title'],
      },
    },
    'email-designer': {
      enabled: true,
      editor: {
        tools: {
          heading: {
            properties: {
              text: {
                value: 'This is the new default text!'
              }
            }
          }
        },
        options: {
          features: {
            colorPicker: {
              presets: ['#D9E3F0', '#F47373', '#697689', '#37D67A']
            }
          },
          fonts: {
            showDefaultFonts: false,
            customFonts: [
              {
                label: "Anton",
                value: "'Anton', sans-serif",
                url: "https://fonts.googleapis.com/css?family=Anton",
              },
              {
                label: "Lato",
                value: "'Lato', Tahoma, Verdana, sans-serif",
                url: "https://fonts.googleapis.com/css?family=Lato",
              },
              // ...
            ],
          },
          mergeTags: [
            {
              name: 'Email',
              value: '{{= USER.username }}',
              sample: 'john@doe.com',
            },
            // ...
          ]
        },
        appearance: {
          theme: "dark",
          panels: {
            tools: {
              dock: 'left'
            }
          }
        }
      }
    },
});