export const PAGE_EXPERIENCE = {
  home: {
    layout: "LayoutDefault",
    regions: {
      first: {
        components: [
          {
            name: "Welcome",
            params: {
              fullBleed: true,
            },
            apiEndpoint: "/api/getAboutEventHome",
          },
          {
            name: "Header",
            params: {
              variant: "",
              takeScreenHeight: true,
              fullBleed: true,
              registrationFormTitle: "registrationFormTitle",
              registrationFormDescription: "registrationFormDescription",
            },
            apiEndpoint: "/api/getHero",
            // visibility: true
          },
          {
            name: "Footer",
            params: {
              fullBleed: true,
              label: "web_theme_xtsummit",
            },
          },
        ],
      },
      second: {
        components: [],
      },
      third: {
        components: [],
      },
    },
  },
  speakers: {
    layout: "LayoutDefault",
    regions: {
      first: {
        components: [
          {
            name: "TopBanner",
            params: {
              variant: "",
              fullBleed: true,
              label: "banner_speakers",
              color: "yellow",
            },
          },
          {
            name: "SpeakersGrid",
            params: {
              variant: "",
              fullBleed: true,
            },
            apiEndpoint: "",
            //visibility: true
          },
        ],
      },
      second: {
        components: [],
      },
      third: {
        components: [],
      },
    },
  },
  aboutUs: {
    layout: "LayoutDefault",
    regions: {
      first: {
        components: [
          {
            name: "TopBanner",
            params: {
              variant: "",
              fullBleed: true,
              label: "banner_aboutUs",
              color: "gray",
            },
          },
          {
            name: "AboutUs",
            params: {
              fullBleed: true,
            },
            apiEndpoint: "/api/getAboutEvent",
          },
        ],
      },
    },
  },
  pastEvents: {
    layout: "LayoutDefault",
    regions: {
      first: {
        components: [
          {
            name: "TopBanner",
            params: {
              variant: "",
              fullBleed: true,
              label: "banner_pastEvents",
              color: "green",
            },
          },
          {
            name: "PastEvents",
            params: {
              variant: "",
              fullBleed: true,
            },
            apiEndpoint: "/api/getPastEvents",
          },
        ],
      },
      second: {
        components: [],
      },
      third: {
        components: [],
      },
    },
  },
  agenda: {
    layout: "LayoutDefault",
    regions: {
      first: {
        components: [
          {
            name: "TopBanner",
            params: {
              variant: "",
              fullBleed: true,
              label: "banner_agenda",
              color: "yellow",
            },
          },
        ],
      },
      second: {
        components: [
          {
            name: "TimeLine",
            params: {
              variant: "",
              fullBleed: true,
              label: "banner_agenda",
            },
            apiEndpoint: "/api/getSchedule",
          },
        ],
      },
      third: {
        components: [],
      },
    },
  },
  contactUs: {
    layout: "LayoutDefault",
    regions: {
      first: {
        components: [
          {
            name: "TopBanner",
            params: {
              variant: "",
              fullBleed: true,
              label: "banner_contactUs",
              color: "yellow",
            },
          },
          {
            name: "ContactUsForm",
            params: {
              variant: "",
              fullBleed: true,
              title: "contactUsFormTitle",
              description: "contactUsFormDescription",
            },
          },
        ],
      },
      second: {
        components: [],
      },
      third: {
        components: [],
      },
    },
  },
  FAQ: {
    layout: "LayoutDefault",
    regions: {
      first: {
        components: [
          {
            name: "TopBanner",
            params: {
              variant: "",
              fullBleed: true,
              label: "banner_faq",
              color: "yellow",
            },
          },
          {
            name: "FAQ",
            params: {
              variant: "",
              fullBleed: true,
              title: "FAQTitle",
              description: "FAQDescription",
            },
            apiEndpoint: "/api/getFaq",
          },
        ],
      },
      second: {
        components: [],
      },
      third: {
        components: [],
      },
    },
  },
  talk: {
    layout: "LayoutDefault",
    regions: {
      first: {
        components: [
          {
            name: "TopBanner",
            params: {
              variant: "",
              fullBleed: true,
              title: "Talks",
              color: "yellow",
            },
          },
          {
            name: "Talk",
            params: {
              variant: "",
              fullBleed: true,
            },
            apiEndpoint: "/api/getAllTalks",
          },
        ],
      },
      second: {
        components: [],
      },
      third: {
        components: [],
      },
    },
  },
  speaker: {
    layout: "LayoutDefault",
    regions: {
      first: {
        components: [
          {
            name: "TopBanner",
            params: {
              variant: "",
              fullBleed: true,
              label: "banner_speakers",
              color: "yellow",
            },
          },
          {
            name: "Speaker",
            params: {
              variant: "",
              fullBleed: true,
            },
            apiEndpoint: "/api/getSpeakersList",
          },
        ],
      },
      second: {
        components: [],
      },
      third: {
        components: [],
      },
    },
  },
  // recordings: {
  //   layout: 'LayoutDefault',
  //   regions: {
  //     first: {
  //       components: [
  //         {
  //           name: 'TopBanner',
  //           params: {
  //             variant: '',
  //             fullBleed: true,
  //             label: 'banner_videos',
  //             color: 'yellow',
  //           },
  //         },
  //       ],
  //     },
  //     second: {
  //       components: [
  //         {
  //           name: 'EventRecordings',
  //           params: {
  //             variant: '',
  //             fullBleed: true,
  //           },
  //           apiEndpoint: '/api/getSchedule',
  //         },
  //       ],
  //     },
  //   },
  // },
  recordings: {
    layout: "LayoutDefault",
    regions: {
      first: {
        components: [
          {
            name: "TopBanner",
            params: {
              variant: "",
              fullBleed: true,
              label: "banner_videos",
              color: "yellow",
              labelPlaceholdersParams: ["year"],
            },
          },
        ],
      },
      second: {
        components: [
          {
            name: "EventYearRecordings",
            params: {
              variant: "",
              fullBleed: true,
            },
            apiEndpoint: "",
          },
        ],
      },
    },
  },
};
