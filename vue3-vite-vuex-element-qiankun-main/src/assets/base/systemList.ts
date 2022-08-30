export const systemList = (obj: any) => {
    return {
        vue3: [
            {
                "name": "申报端(history+vuex+typescript)",
                "path": "/apply"
            },
            {
                "name": "管理端(history+vuex+typescript)",
                "path": "/am"
            },
            {
                "name": "申报端(hash+pinia+typescript)",
                "path": "/applyHash"
            },
            {
                "name": "管理端(hash+pinia+typescript)",
                "path": "/amHash"
            },
        ],
        vue2: [
            {
                "name": "申报端(history+vuex+typescript)",
                "path": "/vue2Apply"
            },
        ],
        other:[
            {
                "name": "本系统",
                "path": "/home"
            }
        ]
    }
}
