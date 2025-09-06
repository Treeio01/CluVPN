export const fetchUser = () => {
    return {
        id: 1,
        name: "TestUser",
        email:"test@test.test",
        isActiveSub: true,
        balance: 0,
        bonusBalance:0,
        subscription: {
            id: "testId",
            key: "testKey",
            expireTime: 160000,
            status: "active",
        }
    }
}