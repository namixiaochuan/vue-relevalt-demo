import Mock from "mockjs";
Mock.mock("/admin/getprodlist", "get", {
    status: 0,
    "message|10-60": [
        { id: "@increment(1)", name: "@cword(3,8)", ctime: new Date() },
    ],
});
