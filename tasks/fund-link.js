task("fund-link", "Funds with necessary LINK token", async (_, { ethers }) => {
    await ethers.provider.getBlockNumber().then((blockNumber) => {
        console.log("Current block number: " + blockNumber)
    })
})
