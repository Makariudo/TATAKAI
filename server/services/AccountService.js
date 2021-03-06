const Service = require('./Service');

class AccountService extends Service {
    constructor() {
        super();
    }
    
    async getBalance(address) {
        try {
            const balance = await this.TakTokenContract.balanceOf(address);
            return balance.toString();
        }
        catch (error) {
            return error;
        }
    }
}

module.exports = (async () => {
    return await new AccountService();
})();