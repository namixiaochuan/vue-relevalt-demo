// export const microApps = [
//     {
//         name: 'apply',
//         // entry: '//' + window.location.host + ':9002',
//         entry: '//localhost:9002/apply',
//         container: '#subApp',
//         activeRule: '#/apply' // 不一定和上面的name一样
//     },
    // {
    //     name: 'vue3Vite',
    //     // entry: '//' + window.location.host + ':9002',
    //     entry: '//localhost:7316/vue3Vite',
    //     container: '#vue3Vite',
    //     activeRule: '#/vue3Vite' // 不一定和上面的name一样
    // },
    // {
    //     name: "vue3Vite",
    //     module: 'vue3Vite',
    //     devEntry:"//localhost:7316/vue3Vite",
    //     routerBase: "/vue3Vite",
    // },
    // {
    //   name: 'hashMicro2',
    //   entry: '//localhost:7072/',
    //   container: '#subApp',
    //   activeRule: '#/hashMicro2' // 不一定和上面的name一样
    // },
    // {
    //   name: 'mfavisaproject',
    //   entry: '//cova-ui.visa.local:20080',
    //   container: '#subApp',
    //   activeRule: '#/mfavisaproject' // 不一定和上面的name一样
    // }
    // {
    //     name: 'mfavisaproject',
    //     entry: '//cova-ui2.visa.local:20080',
    //     container: '#subApp',
    //     activeRule: '#/mfavisaproject' // 不一定和上面的name一样
    // }
    // {
    //   name: 'mfavisaproject',
    //   entry: '//localhost:7072',
    //   container: '#subApp',
    //   activeRule: '#/mfavisaproject' // 不一定和上面的name一样
    // }
// ]

const microApps:any = [
    // {
    //     name: "vue3Vite",
    //     entry: '//localhost:7316/vue3Vite',
    //     activeRule: "/vue3Vite",
    // },
    {
        name: "apply",
        entry: '//localhost:9002/apply',
        activeRule: "/apply",
    },
    {
        name: "am",
        entry: '//localhost:9003/am',
        activeRule: "/am",
    },
    // {
    //     name: "questionbank",
    //     entry: '//127.0.0.1:3002/questionbank',
    //     activeRule: "/questionbank",
    // },
];

const apps = microApps.map((item: any) => {
    return {
        ...item,
        container: "#container", // 子应用挂载的div
        props: {
            routerBase: item.activeRule, // 下发基础路由
            // getGlobalState: store.getGlobalState, // 下发getGlobalState方法
        },
    };
});

export default apps;
