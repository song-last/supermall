module.exports = {
    configureWebpack: {
        resolve: {
            //别名配置
            alias: {
                "assets": "@/assets",
                "components": "@/components",
                "network": "@/network",
                "common": "@/common",
                "views": "@/views",
            }
        }
    }
}